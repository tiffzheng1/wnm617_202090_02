<?php


function makeConn() {
   include_once "auth.php";
   try {
      $conn = new PDO(...Auth());
      $conn->setAttribute(
         PDO::ATTR_ERRMODE,
         PDO::ERRMODE_EXCEPTION
      );
   } catch(PDOException $e) {
      die($e->getMessage());
   }
   return $conn;
}


function fetchAll($r) {
   $a = [];
   while($row = $r->fetch(PDO::FETCH_OBJ))
      $a[] = $row;
   return $a;
}


// $c = connection, $ps = prepared statement, $p = parameters
function makeQuery($c,$ps,$p,$makeResults=true) {
   try {
      if(count($p)) {
         $stmt = $c->prepare($ps);
         $stmt->execute($p);
      } else {
         $stmt = $c->query($ps);
      }

      $r = $makeResults ? fetchAll($stmt) : [];

      return [
         "result"=>$r
      ];

   } catch(PDOException $e) {
      return [
         "error"=>"Query Failed: ".$e->getMessage()
      ];
   }
}






function makeUpload($file,$folder) {
   $filename = microtime(true) . "_" . $_FILES[$file]['name'];

   if(@move_uploaded_file(
      $_FILES[$file]['tmp_name'],
      $folder.$filename
   )) return ['result'=>$filename];
   else return [
      "error"=>"File Upload Failed",
      "_FILES"=>$_FILES,
      "filename"=>$filename
   ];
}








function makeStatement ($data) {
	$c = makeConn();
	$t = @$data->type;
	$p = @$data->params;

	switch($t) {

		case "users_all":
			return makeQuery($c,"SELECT * FROM `track_users`",[]);
		case "unyuns_all":
			return makeQuery($c,"SELECT * FROM `track_unyuns`",[]);
		case "locations_all":
			return makeQuery($c,"SELECT * FROM `track_locations`",[]);

		case "user_by_id":
			return makeQuery($c,"SELECT * FROM `track_users` WHERE `id` = ?",$p);
		case "unyun_by_id":
			return makeQuery($c,"SELECT * FROM `track_unyuns` WHERE `id` = ?",$p);
		case "location_by_id":
			return makeQuery($c,"SELECT * FROM `track_locations` WHERE `id` = ?",$p);

		case "unyuns_by_user_id":
			return makeQuery($c,"SELECT * FROM `track_unyuns` WHERE `user_id` = ?",$p);

		case "locations_by_unyun_id":
			return makeQuery($c,"SELECT * FROM `track_locations` WHERE `unyun_id` = ?",$p);

		case"check_signin":
			return makeQuery($c,"SELECT * FROM `track_users` WHERE `username` = ? AND `password` = md5(?)",$p);

      case "recent_locations":
         return makeQuery($c,"SELECT * FROM 
            `track_unyuns` u 
            LEFT JOIN (
               SELECT * FROM `track_locations`
               ORDER BY `date_create` DESC 
            ) l 
            ON u.id = l.unyun_id
            WHERE `user_id` = ?
            GROUP BY l.unyun_id
            ",$p);

      case "locations_by_user_id":
         return makeQuery($c,"SELECT * FROM `track_unyuns` un 
            LEFT JOIN `track_locations` l 
            ON un.id = l.unyun_id
            left join `track_users` u on u.id = un.user_id
            WHERE `user_id` = ?
            ",$p);


      // case "locations_by_user_id":
      //    return makeQuery($c,"SELECT * FROM 
      //       `track_users` a 
      //       LEFT JOIN (
      //          SELECT * FROM `track_unyuns`
      //       ) u 
      //       LEFT JOIN (
      //          SELECT * FROM `track_locations`
      //          ORDER BY `date_create` DESC 
      //       ) l 
      //       ON u.id = l.unyun_id
      //       WHERE `user_id` = ?
      //       GROUP BY l.unyun_id
      //       ",$p);


      case "search_unyuns":
         $p = ["%$p[0]%",$p[1]];
         return makeQuery($c,"SELECT * FROM
            `track_unyuns`
            WHERE
               `type` LIKE ?
               AND user_id = ?
            ",$p);

      case "unyun_search_recent":
         $p = ["%$p[0]%",$p[1]];
         return makeQuery($c,"SELECT * FROM
            `track_unyuns` u
            LEFT JOIN (
               SELECT * FROM `track_locations`
               ORDER BY `date_create` DESC
            ) l
            ON u.id = l.unyun_id
            WHERE 
               u.type LIKE ?
               AND u.user_id = ?
            GROUP BY l.unyun_id
            ",$p);


      // Filters

      case "unyun_filter":
         return makeQuery($c,"SELECT * FROM
            `track_unyuns`
            WHERE
               `$p[0]` = ?
               AND user_id = ?
            ",[$p[1],$p[2]]);
   


// CRUD

   // USERS

      // CREATE USER

      case "insert_user":
         $r = makeQuery($c,"SELECT * FROM `track_users` WHERE `username` = ? OR `email` = ?",[$p[0],$p[1]]);
         if(count($r['result'])) return ['error'=>"Username or Email already exists"];

         $r = makeQuery($c,"INSERT INTO
            `track_users`
            (`name`,`username`,`email`,`password`,`img`,`phone`,`gender`,`date_create`)
            VALUES
            (' ', ?, ?, md5(?), './images/icons/user-profile-empty.svg', ' ', ' ', NOW())
            ",$p,false);
         return ["id"=>$c->lastInsertId()];

      // UPDATE USER

      case "update_user":
         $r = makeQuery($c,"UPDATE
            `track_users`
            SET
               `username` = ?,
               `name` = ?,
               `email` = ?
            WHERE `id` = ?
            ",$p,false);
         return ["result"=>"success"];

      // UPDATE USER IMAGE

      case "update_user_image":
         $r = makeQuery($c,"UPDATE
            `track_users`
            SET
               `img` = ?
            WHERE `id` = ?
            ",$p,false);
         return ["result"=>"success"];

         

   // UNYUNS

      // CREATE UNYUN

      // case "insert_unyun":
      //    $r = makeQuery($c,"INSERT INTO
      //       `track_unyuns`
      //       (`user_id`,`category`,`type`,`img`,`date_create`)
      //       VALUES
      //       (?, ?, ?, './images/icons/unyun-image-empty.svg', NOW())
      //       ",$p,false);
      //    return ["id"=>$c->lastInsertId()];

      case "insert_unyun":
         $r = makeQuery($c,"INSERT INTO
            `track_unyuns`
            (`user_id`,`category`,`type`,`img`,`date_create`)
            VALUES
            (?, ?, ?, ?, NOW())
            ",$p,false);
         return ["id"=>$c->lastInsertId()];


      // UPDATE UNYUN IMAGE

      // case "update_unyun_image":
      //    $r = makeQuery($c,"UPDATE
      //       `track_unyuns`
      //       SET
      //          `img` = ?
      //       WHERE `id` = ?
      //       ",$p,false);
      //    return ["result"=>"success"];

      // UPDATE UNYUN

      case "update_unyun":
         $r = makeQuery($c,"UPDATE
            `track_unyuns`
            SET
               `category` = ?,
               `type` = ?,
               `img` = ?
            WHERE `id` = ?
            ",$p,false);
         return ["result"=>"success"];

      // DELETE UNYUN

      case "delete_unyun":
         return makeQuery($c,"DELETE FROM `track_unyuns` WHERE `id` = ?",$p,false);

   // LOCATIONS

      // CREATE LOCATION

      case "insert_location":
         $r = makeQuery($c,"INSERT INTO
            `track_locations`
            (`unyun_id`,`lat`,`lng`,`price`,`quantity`,`unit_price`,`location_name`,`description`,`icon`,`date_create`)
            VALUES
            (?, ?, ?, ?, ?, ?, ?, ?, './images/icons/map-pin-green.svg', NOW())
            ",$p,false);
         return ["id"=>$c->lastInsertId()];

      // DELETE LOCATION

      case "delete_location":
         return makeQuery($c,"DELETE FROM `track_locations` WHERE `id` = ?",$p,false);

      default: return ["error"=>"No Matched type"];
   }
}




if(!empty($_FILES)) {
   $r = makeUpload("image","../uploads/");
   die(json_encode($r));
}


$data = json_decode(file_get_contents("php://input"));


echo json_encode(
   makeStatement($data),
   JSON_NUMERIC_CHECK
);















