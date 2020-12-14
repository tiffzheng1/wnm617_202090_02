const checkSignupForm = () => {
   let username = $("#signup-username").val();
   let email = $("#signup-email").val();
   let password = $("#signup-password").val();
   let passwordconfirm = $("#signup-password-confirm").val();

   if(password!=passwordconfirm) {
      throw "Passwords don't match";
   } else {
      query({type:'insert_user',params:[username,email,password]})
      .then(d=>{
         if(d.error) {
            throw d.error;
         }
         console.log(d.id)
         $.mobile.navigate("#signin-page");
      })
   }
}


const checkUserEditForm = () => {
   let username = $("#user-edit-username").val();
   let name = $("#user-edit-name").val();
   let email = $("#user-edit-email").val();

   query({
      type:'update_user',
      params:[username,name,email,sessionStorage.userId]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      console.log(d.id)
         $.mobile.navigate("#user-profile-page");
   })
}


const checkUnyunAddForm = () => {
   let category = $("#unyun-add-category").val();
   let type = $("#unyun-add-type").val();
   let img = $("#unyun-add-image").val();

   query({
      type:'insert_unyun',
      params:[sessionStorage.userId,category,type,img]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      console.log(category,type,d)

      $("#unyun-add-form")[0].reset();

      sessionStorage.unyunId = d.id;
      $.mobile.navigate($("#unyun-add-destination").val());
   })
}



const checkUnyunEditForm = () => {
   let category = $("#unyun-edit-category").val();
   let type = $("#unyun-edit-type").val();
   let img = $("#unyun-edit-image").val();

   query({
      type:'update_unyun',
      params:[category,type,img,sessionStorage.unyunId]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.back();
   })
}



const checkUnyunDelete = id => {
   query({
      type:'delete_unyun',
      params:[id]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.go(-2);
   });
}




const checkLocationAddForm = () => {
   let lat = $("#location-add-lat").val();
   let lng = $("#location-add-lng").val();
   let price = $("#location-add-price").val();
   let quantity = $("#location-add-quantity").val();
   let location_name = $("#location-add-name").val();
   let description = $("#location-add-description").val();

   query({
      type:'insert_location',
      params:[sessionStorage.unyunId,lat,lng,price,quantity,location_name,description]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }

      console.log(d.id)

      $("#location-add-form")[0].reset();
      $.mobile.navigate("#map-page");
   })
}


// const checkLocationEditForm = () => {
//    let lat = $("#location-add-lat").val();
//    let lng = $("#location-add-lng").val();
//    let price = $("#location-add-price").val();
//    let quantity = $("#location-add-quantity").val();
//    let unit_price = $("#location-add-unit-price").val();
//    let location_name = $("#location-add-name").val();
//    let description = $("#location-add-description").val();

//    query({
//       type:'update_location',
//       params:[sessionStorage.unyunId,lat,lng,price,quantity,unit_price,location_name,description]})
//    .then(d=>{
//       if(d.error) {
//          throw d.error;
//       }
//       window.history.back();
//    })
// }

const checkLocationDelete = id => {
   query({
      type:'delete_location',
      params:[id]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      $.mobile.navigate("#map-page");
   });
}



const checkSearchForm = async () => {
   let s = $("#list-search-input").val();
   console.log(s)

   let r = await query({type:"search_unyuns",params:[s,sessionStorage.userId]});

   drawUnyunList(r.result,`
      <div class="list-empty-phrase padding-top">
         Oops, there is no Unyun by that name yet.
      </div>
      `);

   console.log(r);
}


const checkFilterRow = async (d) => {
   let r = d.value=='all' ?
      await query({
         type:'unyuns_by_user_id',
         params:[sessionStorage.userId]
      }) :
      await query({
         type:'unyun_filter',
         params:[d.field,d.value,sessionStorage.userId]
      });

   console.log(r)
   drawUnyunList(r.result,`
      <div class="list-empty-phrase padding-top">
         Oops, there are no Unyuns in that category yet.
      </div>
      `);
}





const checkUpload = file => {
   let fd = new FormData();
   fd.append("image",file);

   return fetch('data/api.php',{
      method:'POST',
      body:fd
   }).then(d=>d.json())
}


const checkUserUpload = () => {
   let upload = $("#user-upload-image").val()
   if(upload=="") return;

   query({
      type:'update_user_image',
      params:[upload,sessionStorage.userId]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.back();
   })
}


const checkUnyunUpload = () => {
   let upload = $("#unyun-add-image").val()
   if(upload=="") return;

   query({
      type:'update_unyun_image',
      params:[upload,sessionStorage.userId]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }      
      console.log("done")
      window.history.back();
   })
}

















