
// Document Ready
$(()=>{

	console.dir($("#user-edit-form")[0])

	checkUserId();

	$(document)

	// Routes

	.on("pagecontainerbeforeshow",function(e,ui){
		console.log(ui.toPage[0].id)

		// Routing
		switch(ui.toPage[0].id) {
			case 'map-page': MapPage(); break;
			case 'list-page': ListPage(); break;

			case 'user-profile-page': UserProfilePage(); break;
			case 'user-edit-page': UserEditPage(); break;
			case 'user-upload-page': UserUploadPage(); break;

			case 'unyun-profile-page': UnyunProfilePage(); break;
			case 'unyun-edit-page': UnyunEditPage(); break;

			case 'location-add-page': LocationAddPage(); break;

		}
	})




	// Form Submissions

	// event delegation: useful if page gets refreshed and for things that might not exist yet

	.on("submit","#signin-form",function(e){
		e.preventDefault();
		checkSigninForm();
	})
	.on("submit","#signup-form",function(e){
      e.preventDefault();
      checkSignupForm();
   })
	.on("submit","#list-search-form",function(e){
      e.preventDefault();
      checkSearchForm();
   })

	// Form Submit by Button

	.on("click",".js-unyun-add",function(e){
      checkUnyunAddForm();
    })
    .on("click",".js-unyun-edit",function(e){
      checkUnyunEditForm();
    })
    .on("click",".js-user-edit",function(e){
      checkUserEditForm();
    })
    .on("click",".js-location-add",function(e){
      checkLocationAddForm();
    })


	// Anchor Clicks

	.on("click",".js-logout",function(e){
		sessionStorage.removeItem('userId');
		checkUserId();
	})

	.on("click",".js-unyun-jump",function(e){
      	sessionStorage.unyunId = $(this).data("id");
      	$.mobile.navigate("#unyun-profile-page");
    })
    .on("click",".js-unyun-delete",function(e){
      	checkUnyunDelete($(this).data("id"));
    })

    .on("click",".js-location-jump",function(e){
    	sessionStorage.locationId = $(this).data("id");
      	$.mobile.navigate("#location-profile-page");
    })

    .on("click",".js-unyun-upload",function(e){
    	checkUnyunUpload();
    })
   
    .on("click",".js-user-upload",function(e){
    	checkUserUpload();
    })

    .on("click",".js-location-add", function(e){
		// e.preventDefault();

		checkLocationAddForm();
	})




	.on("click",".filter",function(e){
    	checkFilterRow($(this).data());
    })


	.on("change",".image-uploader input",function(e){
    	checkUpload(this.files[0])
      	.then(d=>{
      		console.log(d)
        	makeUploaderImage(this,d.result,'uploads/')
      	})
    })







	.on("click","[data-activate]",function(){
		let target = $(this).data('activate');
		$(target).addClass("active");
	})
	.on("click","[data-deactivate]",function(){
		let target = $(this).data('deactivate');
		$(target).removeClass("active");
	})
	.on("click","[data-toggle]",function(){
		let target = $(this).data('toggle');
		$(target).toggleClass("active");
	})


	$("[data-template]").each(function(){
      	let target = $(this).data("template");
      	let template = $(target).html();
      	$(this).html(template);
    })




})