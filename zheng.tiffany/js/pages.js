
const MapPage = async() => {}

//async and await
const ListPage = async() => {
	let d = await query({
		type:'unyuns_by_user_id',
		params:[sessionStorage.userID]
	});

	console.log(d)

	$("#list-page .unyunlist")
		.html(makeUnyunList(d.result));
}

const UserProfilePage = async() => {
	let d = await query({
		type:'user_by_id',
		params:[sessionStorage.userID]
	});

	console.log(d)

	$("#user-profile-page .profile")
		.html(makeUserProfile(d.result));
}

const UnyunProfilePage = async() => {
	let d = await query({
		type:'unyun_by_id',
		params:[sessionStorage.unyunID]
	});

	console.log(d)

	$("#unyun-profile-page .profile")
		.html(makeUnyunProfile(d.result));
}