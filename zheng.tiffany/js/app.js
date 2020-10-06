
// Document Ready
$(()=>{

	checkUserId();

	$(document)

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



})