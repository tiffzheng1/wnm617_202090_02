

const makeUnyunList = templater(o=>`
<a href="#unyun-profile-page">
	<div id="unyun-1" class="unyun-thumbnail">
		<img src="${$o.img}" alt="">
	</div>
	<div class="unyun-info flex-stretch">
		<div class="unyun-name">${o.name}</div>
		<div class="unyun-location">${o.location}</div>
	</div>
	<div class="entry-date flex-none">${o.date}</div>
</a>
`);


const makeUserProfile = templater(o=>`
<div class="profile-info">
	<img src="${$o.img}" alt="User profile photo">
	<div class="user-name">${$o.name}</div>
	<div class="user-location">${$o.location}</div>
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
	<img src="${$o.img}" alt="">
</div>
<div class="unyun-profile-info">
	<div class="form-control">
		<label for="unyun-profile-location" class="form-label">Location</label>
		<input id="unyun-profile-location" type="" class="unyun-input-default" data-role="none" value="${$o.img}">
	</div>
	<div class="form-control">
		<label for="unyun-profile-price" class="form-label">Price</label>
		<input id="unyun-profile-price" type="" class="unyun-input-default" data-role="none" value="${$o.price}">
	</div>
	<div class="form-control">
		<label for="unyun-profile-quantity" class="form-label">Quantity</label>
		<input id="unyun-profile-quantity" type="" class="unyun-input-default" data-role="none" value="${$o.quantity}">
	</div>
	<div class="form-control">
		<label for="unyun-profile-unit-price" class="form-label">Units</label>
		<input id="unyun-profile-unit-price" type="" class="unyun-input-default" data-role="none" value="${$o.units}">
	</div>
</div>
`);