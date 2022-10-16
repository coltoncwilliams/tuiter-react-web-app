
const NavigationSidebar = () => {
 return(`
   <div class="list-group">
     <i class="fa fa-twitter list-group-item pl-3  pr-4"></i>
     <a href="#" class="list-group-item pl-3  pr-4 list-group-item-action">
       <i class="d-inline fa fa-home"></i>
       <p class="d-none d-lg-none d-xl-inline"> Home</p>
     </a>
     <a href="explore.html" class="list-group-item pl-3  pr-4 list-group-item-action active">
       <i class="fa fa-hashtag"></i>
       <p class="d-none d-lg-none d-xl-inline"> Explore</p>
     </a>
     <a href="#" class="list-group-item pl-3  pr-4 list-group-item-action">
       <i class="fa fa-bell"></i>
       <p class="d-none d-lg-none d-xl-inline"> Notifications</p>
     </a>
     <a href="#" class="list-group-item pl-3  pr-4 list-group-item-action">
       <i class="fa fa-envelope"></i>
       <p class="d-none d-lg-none d-xl-inline"> Messages</p>
     </a>
     <a href="#" class="list-group-item pl-3  pr-4 list-group-item-action">
       <i class="fa fa-bookmark"></i>
       <p class="d-none d-lg-none d-xl-inline"> Bookmarks</p>
     </a>
     <a href="#" class="list-group-item pl-3  pr-4 list-group-item-action">
       <i class="fa fa-list"></i>
       <p class="d-none d-lg-none d-xl-inline"> Lists</p>
     </a>
     <a href="#" class="list-group-item pl-3  pr-4 list-group-item-action">
       <i class="fa fa-user"></i>
       <p class="d-none d-lg-none d-xl-inline"> Profile</p>
     </a>
     <a href="#" class="list-group-item pl-3  pr-4 list-group-item-action">
       <i class="fa fa-ellipsis-h"></i>
       <p class="d-none d-lg-none d-xl-inline"> More</p>
     </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;
