

const makeWarning = (target,message) => {
	$(target).addClass("active")
		.find(".message").html(message);
	setTimeout(()=>{
		$(target).removeClass("active")
	},4000);
}



const checkSigninForm = async () => {
	let user = $("#signin-username").val();
	let pass = $("#signin-password").val();

	console.log(user,pass)

	if(user=='' || pass=='') {
		makeWarning("#signin-warning-modal","Enter a username and password");
		return;
	}

	let found_user = await query({
		type:'check_signin',
		params:[user,pass]
	});

	if(found_user.result.length) {
		// Log in
		console.log('success');
		// Data is kept as long as browser stays open
		sessionStorage.userId = found_user.result[0].id;
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
	let p = ['#signin-page','#signup-page','']

	if(sessionStorage.userId === undefined) {
		// not logged in
		if(!p.some(o=>window.location.hash===o))
			// function(o) { return window.location.hash === o; }
			$.mobile.navigate("#signin-page");
	} else {
		// logged in
	      if(p.some(o=>window.location.hash===o)) {
	         query({type:'unyuns_by_user_id',params:[sessionStorage.userId]})
	         .then(d=>{
	            if(d.result.length) $.mobile.navigate("#map-page");
	             else $.mobile.navigate("#list-page");
         })
      }
   }
}





















