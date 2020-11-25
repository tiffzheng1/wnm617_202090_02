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
            (' ', ?, ?, md5(?), 'https://via.placeholder.com/400/?text=USER', ' ', ' ', NOW())
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

   // UNYUNS

      // CREATE UNYUN

      // UPDATE UNYUN

      // DELETE UNYUN

      case "delete_unyun":
         return makeQuery($c,"DELETE FROM `track_unyuns` WHERE `id` = ?",$p,false);

   // LOCATIONS

      // CREATE LOCATION

      // UPDATE LOCATION

      // DELETE LOCATION

      case "delete_location":
         return makeQuery($c,"DELETE FROM `track_locations` WHERE `id` = ?",$p,false);

      default: return ["error"=>"No Matched type"];
   }
}



$data = json_decode(file_get_contents("php://input"));


echo json_encode(
   makeStatement($data),
   JSON_NUMERIC_CHECK
);















