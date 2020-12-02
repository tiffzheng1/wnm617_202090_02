
// Document Ready
$(()=>{

	checkUserId();

	$(document)



	.on("pagecontainerbeforeshow",function(e,ui){
		console.log(ui.toPage[0].id)

		// Routing
		switch(ui.toPage[0].id) {
			case 'map-page': MapPage(); break;
			case 'list-page': ListPage(); break;
			case 'user-profile-page': UserProfilePage(); break;
			case 'unyun-profile-page': UnyunProfilePage(); break;
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

	// Anchor Clicks

	.on("click",".js-logout",function(e){
		sessionStorage.removeItem('userId');
		checkUserId();
	})

	.on("click",".js-unyun-jump",function(e){
      sessionStorage.unyunId = $(this).data("id");
      $.mobile.navigate("#unyun-profile-page");
    })


    .on("click",".js-user-upload",function(e){
      checkUserUpload();
    })




	.on("click",".filter",function(e){
      checkFilterRow($(this).data());
    })
	.on("change",".image-uploader input",function(e){
      checkUpload(this.files[0])
      .then(d=>{
         console.log(d)
         $("#user-upload-image").val('uploads/'+d.result);
         $("#user-upload-page .image-uploader")
            .css({'background-image':`url('uploads/${d.result}')`})
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