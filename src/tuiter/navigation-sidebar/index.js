import React from "react";

const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
 return (
   <div className="list-group">
     <a className="list-group-item">Tuiter</a>
     <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
       <i className="bi bi-house-door-fill"></i>
              <p className="d-none d-lg-none d-xl-inline"> Home</p>
     </a>
     <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
      <i class="bi bi-hash"></i>
             <p className="d-none d-lg-none d-xl-inline"> Explore</p>
     </a>
     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
      <i class="bi bi-bell-fill"></i>
             <p className="d-none d-lg-none d-xl-inline"> Notifications</p>
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
     <i class="bi bi-envelope-fill"></i>
            <p className="d-none d-lg-none d-xl-inline"> Messages</p>
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
      <i class="bi bi-bookmark-fill"></i>
             <p className="d-none d-lg-none d-xl-inline"> Bookmarks</p>
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
      <i class="bi bi-list-ul"></i>
             <p className="d-none d-lg-none d-xl-inline"> Lists</p>
     </a>
     <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
     <i class="bi bi-person-fill"></i>
            <p className="d-none d-lg-none d-xl-inline"> Profile</p>
     </a>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
     <i class="bi bi-three-dots"></i>
            <p className="d-none d-lg-none d-xl-inline"> More</p>
     </a>
   </div>
 );
};
export default NavigationSidebar;


