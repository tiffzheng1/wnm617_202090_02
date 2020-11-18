
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

	console.log(d)

	$("#list-page .unyunlist")
		.html(makeUnyunList(d.result));
}

const UserProfilePage = async() => {
	let d = await query({
		type:'user_by_id',
		params:[sessionStorage.userId]
	});

	console.log(d)

	$("#user-profile-page .profile")
		.html(makeUserProfile(d.result));
}

const UnyunProfilePage = async() => {
	let d = await query({
		type:'unyun_by_id',
		params:[sessionStorage.unyunId]
	});

	console.log(d)

	$("#unyun-profile-page .profile")
		.html(makeUnyunProfile(d.result));
}