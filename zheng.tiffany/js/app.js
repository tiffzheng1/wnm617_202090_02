
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

	// Anchor Clicks

	.on("click",".js-logout",function(e){
		sessionStorage.removeItem('userId');
		checkUserId();
	})

	.on("click",".js-unyun-jump",function(e){
      sessionStorage.unyunId = $(this).data("id");
      $.mobile.navigate("#unyun-profile-page");
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