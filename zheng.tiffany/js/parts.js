
const drawUnyunList = (a,empty_phrase=`
   <div class="list-empty-graphic">
      <img src="./images/icons/list-page-empty-state.svg" alt="No Unyuns yet!">
   </div>
   <div class="list-empty-phrase">
      <span class="list-empty-phrase-title">You have no Unyuns to track yet!</span>
      <br>
      Start your Unyun list by tapping on the + icon!
   </div>
   `) => {
   $("#list-page .unyunlist")
      .html(a.length?makeUnyunList(a):empty_phrase);
}






const makeUnyunList = templater(o=>`
<li class="js-unyun-jump" data-id=${o.id}>
	<div class="unyun-thumbnail">
		<img src="${o.img}" alt="${o.type}">
	</div>
	<div class="unyun-info flex-stretch">
		<div class="unyun-type">${o.type}</div>
		<div class="unyun-category">${o.category}</div>
	</div>
	<div class="entry-date flex-none">${o.date_create}</div>
</li>
`);


const makeUserProfile = templater(o=>`
<div class="profile-info">
   <div class="user-profile-image relative">
      <img src="${o.img}" alt="User profile photo">
      <div class="floater right-bottom">
         <a href="#user-upload-page" class="button-circle small-circle">
            <img src="./images/icons/edit-white.svg" alt="Edit profile photo">
         </a>
      </div>
   </div>
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
<div class="unyun-profile-info">
   <div class="unyun-profile-photo">
      <img src="${o.img}" alt="">
   </div>
   <div class="unyun-type">${o.type}</div>
   <div class="unyun-category">${o.category}</div>
</div>
`);

const makeUnyunPopup = o=>`
<a href="#" class="js-unyun-jump" data-id="${o.unyun_id}">
   <div class="display-flex">
   	<div class="unyun-thumbnail">
   	   <img src="${o.img}" alt="${o.type}">
   	</div>
   	<div>
   	   <div class="unyun-type">${o.type}</div>
   	   <div class="unyun-category">${o.category}</div>
   	</div>
   </div>
</a>
`;





const FormControl = ({namespace,name,displayname,type,placeholder,value}) => {
   return `<div class="form-control">
      <label for="${namespace}-${name}" class="form-label">${displayname}</label>
      <input id="${namespace}-${name}" type="${type}" class="form-input" data-role="none" placeholder="${placeholder}" value="${value}">
   </div>`;
}


const makeUnyunEditForm = o => `
<div class="modal" id="unyun-delete-modal" style="top: 0; z-index: 6; left: 0;">
   <div class="modal-back" data-deactivate="#unyun-delete-modal"></div>
   <div class="modal-popup">
      <div class="modal-question">Are you sure you want to delete ${o.type}? It will be permanently removed from your Unyun list.</div>
      <div class="padding" style="background: var(--color-white);">
         <div class="modal-select delete flex-none" data-deactivate="#unyun-delete-modal"><a href="#" class="js-unyun-delete" data-id="${o.id}">Yes, delete it.</a></div>
         <div class="modal-select flex-none" data-deactivate="#unyun-delete-modal"><a href="#">No, keep ${o.type}.</a></div>
      </div>
   </div>
</div>

<div>
   <input type="hidden" id="unyun-edit-image" value="${o.img}">
   <label class="image-uploader thumbnail picked" style="background-image:url('${o.img}')">
      <input type="file" data-role="none" id="unyun-edit-upload">
   </label>
</div>
<div class="padding-top">
   <a href="#" class="form-button" data-activate="#unyun-delete-modal">Delete Unyun Profile</a>
</div>
${FormControl({
   namespace:"unyun-edit",
   name:"type",
   displayname:"Unyun Name",
   type:"text",
   placeholder:"i.e. Green Onions",
   value:o.type
})}
${FormControl({
   namespace:"unyun-edit",
   name:"category",
   displayname:"Food Category",
   type:"text",
   placeholder:"i.e. Fruits, Vegetables, or Pantry",
   value:o.category
})}
`;


const makeUserEditForm = o => `
${FormControl({
   namespace:"user-edit",
   name:"name",
   displayname:"Name",
   type:"text",
   placeholder:"What's your name?",
   value:o.name
})}
${FormControl({
   namespace:"user-edit",
   name:"username",
   displayname:"Username",
   type:"text",
   placeholder:"Create a username",
   value:o.username
})}
${FormControl({
   namespace:"user-edit",
   name:"email",
   displayname:"Email",
   type:"text",
   placeholder:"unyunappuser@unyun.com",
   value:o.email
})}
`;






const filterRow = (unyuns,category) => {
	let a = [...(new Set(unyuns.map(o=>o[category])))];
	return templater(o=>`<div class="filter" data-field="${category}" data-value="${o}">${o[0]+o.substr(1)}</div>`)(a);
}

const makeFilterRow = (unyuns) => {
   return `
   <div class="filter" data-field="category" data-value="all">All</div>
   ${filterRow(unyuns,'category')}
   `;
}



const makeUploaderImage = (el,name,folder='') => {
   $(el).parent().css({'background-image':`url('${folder+name}')`}).addClass("picked")
      .prev().val(folder+name)
}




















