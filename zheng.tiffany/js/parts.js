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
   <div class="user-email">@${o.username}</div>
</div>
<hr>
<div class="profile-stats">
   <div class="display-flex">
      <div class="flex-stretch profile-stat">
         <a href="#list-page">
            <div class="stat-label">Unyun Types</div>
            <div class="big-number unyuns-added">${o.length}</div>
         </a>
      </div>
      <div class="flex-stretch profile-stat">
         <a href="#map-page">
            <div class="stat-label">Locations Added</div>
            <div class="big-number locations-added">${o.length}</div>
         </a>
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

const makeUnyunLocations = o=>`
<div class="unyun-locations-added">${o.length} Locations Added</div>
`;

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

const makeLocationPopup = o=>`
<a href="#" class="js-location-jump" data-id="${o.id}">
   <div class="unyun-type">${o.location_name}</div>
   <div class="unyun-category">$${o.price}</div>
</a>
`;

const makeLocationProfile = templater(o=>`
<div class="modal" id="location-delete-modal" style="top: 0; z-index: 6; left: 0;">
   <div class="modal-back" data-deactivate="#location-delete-modal"></div>
   <div class="modal-popup">
      <div class="modal-question">Are you sure you want to delete this location? It will be permanently removed.</div>
      <div class="padding" style="background: var(--color-white);">
         <div class="modal-select delete flex-none" data-deactivate="#location-delete-modal"><a href="#" class="js-location-delete" data-id="${o.id}">Yes, delete it.</a></div>
         <div class="modal-select flex-none" data-deactivate="#location-delete-modal"><a href="#">No, keep this location.</a></div>
      </div>
   </div>
</div>
<div class="location-profile-info padding center">
   <div class="location-price">$${o.price} for ${o.quantity}</div>
   <div class="location-date-create">Logged at ${o.date_create}</div>
   <hr>
   <div class="location-profile-table">
      <div class="display-flex padding-bottom">
         <div class="table-label">Location</div>
         <div class="location-name">${o.location_name}</div>
      </div>
      <div class="display-flex">
         <div class="table-label">Notes</div>
         <div class="location-notes">${o.description}</div>
      </div>
   </div>
</div>
`);





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


// const makeLocationEditForm = o => `
// <div class="modal" id="unyun-delete-modal" style="top: 0; z-index: 6; left: 0;">
//    <div class="modal-back" data-deactivate="#unyun-delete-modal"></div>
//    <div class="modal-popup">
//       <div class="modal-question">Are you sure you want to delete this location? It will be permanently removed.</div>
//       <div class="padding" style="background: var(--color-white);">
//          <div class="modal-select delete flex-none" data-deactivate="#unyun-delete-modal"><a href="#" class="js-unyun-delete" data-id="${o.id}">Yes, delete it.</a></div>
//          <div class="modal-select flex-none" data-deactivate="#unyun-delete-modal"><a href="#">No, keep this location.</a></div>
//       </div>
//    </div>
// </div>
// <div class="padding-top">
//    <a href="#" class="form-button" data-activate="#unyun-delete-modal">Delete Unyun Profile</a>
// </div>
// ${FormControl({
//    namespace:"location-edit",
//    name:"price",
//    displayname:"Price",
//    type:"number",
//    placeholder:"1.00",
//    value:o.price
// })}
// ${FormControl({
//    namespace:"location-edit",
//    name:"quantity",
//    displayname:"Quantity",
//    type:"number",
//    placeholder:"10",
//    value:o.quantity
// })}
// ${FormControl({
//    namespace:"location-edit",
//    name:"unit_price",
//    displayname:"Unit Price",
//    type:"number",
//    placeholder:"0.10",
//    value:o.unit_price
// })}
// ${FormControl({
//    namespace:"location-edit",
//    name:"location_name",
//    displayname:"Location Name",
//    type:"text",
//    placeholder:"i.e. Trader Joe's",
//    value:o.location_name
// })}
// ${FormControl({
//    namespace:"location-edit",
//    name:"description",
//    displayname:"Notes",
//    type:"text",
//    placeholder:"Anything noteworthy about this Unyun at this location?",
//    value:o.description
// })}

// `;






const filterRow = (unyuns,category) => {
   let a = [...(new Set(unyuns.map(o=>o[category])))];
   return templater(o=>`<div class="filter" data-field="${category}" data-value="${o}">${o[0]+o.substr(1)}</div>`)(a);
}

const makeFilterRow = (unyuns) => {
   return `
   <div class="filter active" data-field="category" data-value="all">All</div>
   ${filterRow(unyuns,'category')}
   `;
}



const makeUploaderImage = (el,name,folder='') => {
   $(el).parent().css({'background-image':`url('${folder+name}')`}).addClass("picked")
      .prev().val(folder+name)
}












