
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






const checkSearchForm = async () => {
   let s = $("#list-search-input").val();
   console.log(s)

   let r = await query({type:"search_unyuns",params:[s,sessionStorage.userId]});

   drawUnyunList(r.result,'No results found')

   console.log(r)
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
   drawUnyunList(r.result,'No results found');
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








