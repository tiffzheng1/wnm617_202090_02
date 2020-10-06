

const checkSigninForm = () => {
	let user = $("#signin-username").val();
	let pass = $("#signin-password").val();

	console.log(user,pass)

	if(user == 'user' && pass=='pass') {
		// Log in
		console.log('success');
		// Data is kept as long as browser stays open
		sessionStorage.userId = 3;
	} else { 
		// Don't log in
		console.log('failure');
		sessionStorage.removeItem('userId');
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
		$.mobile.navigate("#recent-page");
	}

}