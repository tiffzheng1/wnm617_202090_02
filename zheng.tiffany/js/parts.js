
const drawUnyunList = (a,empty_phrase='Start your Unyun list by tapping on the + icon!') => {
   $("#list-page .unyunlist")
   		.html(a.length?makeUnyunList(a):empty_phrase);
}






const makeUnyunList = templater(o=>`
<li>
	<a href="#unyun-profile-page">
		<div class="unyun-thumbnail">
			<img src="${o.img}" alt="${o.type}">
		</div>
		<div class="unyun-info flex-stretch">
			<div class="unyun-type">${o.type}</div>
			<div class="unyun-category">${o.category}</div>
		</div>
		<div class="entry-date flex-none">${o.date_create}</div>
	</a>
</li>
`);


const makeUserProfile = templater(o=>`
<div class="profile-info">
	<img src="${o.img}" alt="User profile photo">
	<div class="user-name">${o.name}</div>
	<div class="user-email">${o.email}</div>
</div>
<hr>
<div class="profile-stats">
	<div class="display-flex">
		<div class="flex-stretch profile-stat">
			<div class="stat-label">Unyun Types</div>
			<div class="big-number">6</div>
		</div>
		<div class="flex-stretch profile-stat">
			<div class="stat-label">Locations Added</div>
			<div class="big-number">10</div>
		</div>
	</div>
</div>
`);


const makeUnyunProfile = templater(o=>`
<div class="unyun-profile-photo">
	<img src="${o.img}" alt="">
</div>
<div class="unyun-profile-info">
	<div class="form-control">
		<label for="unyun-profile-location" class="form-label">Location</label>
		<input id="unyun-profile-location" type="" class="unyun-input-default" data-role="none" value="${o.img}">
	</div>
	<div class="form-control">
		<label for="unyun-profile-price" class="form-label">Price</label>
		<input id="unyun-profile-price" type="" class="unyun-input-default" data-role="none" value="${o.price}">
	</div>
	<div class="form-control">
		<label for="unyun-profile-quantity" class="form-label">Quantity</label>
		<input id="unyun-profile-quantity" type="" class="unyun-input-default" data-role="none" value="${o.quantity}">
	</div>
	<div class="form-control">
		<label for="unyun-profile-unit-price" class="form-label">Units</label>
		<input id="unyun-profile-unit-price" type="" class="unyun-input-default" data-role="none" value="${o.units}">
	</div>
</div>
`);

const makeUnyunPopup = o=>`
<div class="display-flex">
	<div class="unyun-thumbnail">
	   <img src="${o.img}" alt="${o.type}">
	</div>
	<div>
	   <div class="unyun-type">${o.type}</div>
	   <div class="unyun-category">${o.category}</div>
	</div>
</div>
`;



const filterRow = (unyuns,category) => {
	let a = [...(new Set(unyuns.map(o=>o[category])))];
	return templater(o=>`<div class="filter" data-field="${category}" data-value="${o}">${o[0].toUpperCase()+o.substr(1)}</div>`)(a);
}

const makeFilterRow = (unyuns) => {
   return `
   <div class="filter" data-field="category" data-value="all">All</div> | 
   ${filterRow(unyuns,'category')}
   `;
}





















