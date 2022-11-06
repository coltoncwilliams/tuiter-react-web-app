import React from "react";

const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
 return (
   <div className="list-group">
     <a href="/tuiter/home" className="list-group-item">Tuiter</a>
     <a href="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
       <i className="bi bi-house-door-fill"></i>
              <p className="d-none d-lg-none d-xl-inline"> Home</p>
     </a>
     <a href="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
      <i className="bi bi-hash"></i>
             <p className="d-none d-lg-none d-xl-inline"> Explore</p>
     </a>
     <a href="/tuiter/notifications" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
      <i className="bi bi-bell-fill"></i>
             <p className="d-none d-lg-none d-xl-inline"> Notifications</p>
     </a>
     <a href="/tuiter/messages" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
     <i className="bi bi-envelope-fill"></i>
            <p className="d-none d-lg-none d-xl-inline"> Messages</p>
     </a>
     <a href="/tuiter/bookmarks" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
      <i className="bi bi-bookmark-fill"></i>
             <p className="d-none d-lg-none d-xl-inline"> Bookmarks</p>
     </a>
     <a href="/tuiter/lists" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
      <i className="bi bi-list-ul"></i>
             <p className="d-none d-lg-none d-xl-inline"> Lists</p>
     </a>
     <a href="/tuiter/profile" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
     <i className="bi bi-person-fill"></i>
            <p className="d-none d-lg-none d-xl-inline"> Profile</p>
     </a>
     <a href="/tuiter/more" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
     <i className="bi bi-three-dots"></i>
            <p className="d-none d-lg-none d-xl-inline"> More</p>
     </a>
   </div>
 );
};
export default NavigationSidebar;


