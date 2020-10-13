

const makeWarning = (target,message) => {
	$(target).addClass("active")
		.find(".message").html(message);
	setTimeout(()=>{
		$(target).removeClass("active")
	},4000);
}



const checkSigninForm = () => {
	let user = $("#signin-username").val();
	let pass = $("#signin-password").val();

	console.log(user,pass)

	if(user=='' || pass=='') {
		makeWarning("#signin-warning-modal","Enter a username and password");
		return;
	}

	if(user == 'user' && pass=='pass') {
		// Log in
		console.log('success');
		// Data is kept as long as browser stays open
		sessionStorage.userId = 3;
		$("#signin-form")[0].reset();
	} else { 
		// Don't log in
		console.log('failure');
		sessionStorage.removeItem('userId');

		// Error login message
		makeWarning("#signin-warning-modal","Incorrect username and/or password")
	}

	// Separation of concerns: allow to do one thing without doing another

	checkUserId();


}


const checkUserId = () => {
	let p = ['#onboarding-page-1','#onboarding-page-2','#signin-page','#signup-page','']

	if(sessionStorage.userId === undefined) {
		// not logged in
		if(!p.some(o=>window.location.hash===o))
			// function(o) { return window.location.hash === o; }
			$.mobile.navigate("#signin-page");
	} else {
		// logged in
		$.mobile.navigate("#map-page");
	}

}