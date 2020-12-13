const MapPage = async() => {

   let d = await query({
      type:'recent_locations',
      params:[sessionStorage.userId]
   });

   console.log(d)

   let valid_unyuns = d.result.reduce((r,o)=>{
         o.icon = o.img;
         if(o.lat && o.lng) r.push(o);
         return r;
   },[])


   let map_el = await makeMap("#map-page .map");

   //console.log(map_el.data('map'))

   makeMarkers(map_el,valid_unyuns);

   map_el.data("markers").forEach((o,i)=>{
      o.addListener("click",function(){
         // Go to Unyun Profile Page
         // sessionStorage.unyunId = valid_unyuns[i].unyun_id;
         // $.mobile.navigate("#unyun-profile-page");

         // InfoWindow
         map_el.data("infoWindow")
            .open(map_el.data("map"),o);
         map_el.data("infoWindow")
            .setContent(makeUnyunPopup(valid_unyuns[i]));
      })
   })
}

//async and await

const ListPage = async() => {
   let d = await query({
      type:'unyuns_by_user_id',
      params:[sessionStorage.userId]
   });

   $("#list-page .filter-row").html(makeFilterRow(d.result))

   console.log(d)

   drawUnyunList(d.result);
}



const UserProfilePage = async() => {
   let d = await 

   query({type:'user_by_id',params:[sessionStorage.userId]}).then(d=>{

      console.log(d)

      $("#user-profile-page .profile")
         .html(makeUserProfile(d.result));
   });

   query({type:'unyuns_by_user_id',params:[sessionStorage.userId]}).then(d=>{

      // console.log(d)
      $('.unyuns-added').html(d.result.length);
   })

   query({type:'locations_by_user_id',params:[sessionStorage.userId]}).then(d=>{

      console.log(d)
      $('.locations-added').html(d.result.length);
   })
}

const UserEditPage = async() => {
   query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   }).then(d=>{
      console.log(d)

      $("#user-edit-form")
         .html(makeUserEditForm(d.result[0]));
   });
}

const UserUploadPage = async() => {
   query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   }).then(d=>{
      console.log(d)

      makeUploaderImage($("#user-upload-input"),d.result[0].img)
   });
}


const UnyunProfilePage = async() => {
   query({
      type:'unyun_by_id',
      params:[sessionStorage.unyunId]
   }).then(d=>{
      console.log(d)

      $("#unyun-profile-page .unyun-top")
         .html(makeUnyunProfile(d.result));
   })

   query({
      type:'locations_by_unyun_id',
      params:[sessionStorage.unyunId]
   }).then(d=>{
      makeMap("#unyun-profile-page .map").then(map_el=>{
         makeMarkers(map_el,d.result);
      })
   }) 

}

const UnyunAddPage = async() => {
   query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   }).then(d=>{
      console.log(d)
   });
}

const UnyunEditPage = async() => {
   query({
      type:'unyun_by_id',
      params:[sessionStorage.unyunId]
   }).then(d=>{
      console.log(d)

      $("#unyun-edit-form")
         .html(makeUnyunEditForm(d.result[0]));
   });
}



const LocationAddPage = async() => {
   let map_el = await makeMap("#location-add-page .map");
   makeMarkers(map_el,[]);

   let map = map_el.data("map");

   map.addListener("click",function(e){
      console.log(e, map.getCenter())

      let posFromClick = {
         lat:e.latLng.lat(),
         lng:e.latLng.lng(),
         icon:"images/icons/map-pin-green.svg"
      };
      let posFromCenter = {
         lat:map.getCenter().lat(),
         lng:map.getCenter().lng(),
         icon:"images/icons/map-pin-green.svg"
      };

      $("#location-add-lat").val(posFromClick.lat)
      $("#location-add-lng").val(posFromClick.lng)

      makeMarkers(map_el,[posFromClick])
   })
}



















