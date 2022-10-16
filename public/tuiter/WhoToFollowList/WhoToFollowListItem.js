
const WhoToFollowListItem = who => {
 return(`
   <div class="list-group-item d-flex justify-content-between align-items-center pb-0 pt-0">
     <div class="d-flex justify-content-between align-items-center">
       <img src=${'../../images/' + who.avatarIcon} class="pr-3 img-fluid rounded-circle follow-img">
       <div class="ml-3 pt-1">
         <small>
           <p class="d-inline">${who.userName}</p>
           <i class="d-inline fa fa-check-circle"></i>
           <p class="text-secondary">${who.handle}</p>
         </small>
       </div>
     </div>
     <button class="btn btn-primary btn-sm rounded-pill">Follow</button>
   </div>
 `);
}
export default WhoToFollowListItem;
