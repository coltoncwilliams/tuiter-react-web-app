import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
const TuitItem = ({
  tuit = {
  "topic": "Space",
       "userName": "SpaceX",
       "time": "2h",
       "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
       "image": "tesla.png"
       }
   }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
      dispatch(deleteTuit(id));
    };
 return(
  <li className="list-group-item">
  <div className="row">
  <div className="col-2">
         <img className="rounded-circle" alt="profile" height={48} src={`/images/${tuit.image}`}/>
       </div>
  <div className="col-10">
   <div className="row">
       <div>{tuit.userName} {tuit.handle} . {tuit.time}
       <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(tuit._id)}></i></div>
   </div>
   <div className="row">
   <div>{tuit.tuit}</div>
   </div>
   <div className="row">
   <TuitStats tuit={tuit}/>
   </div>
   </div>
   </div>
  </li>
 );
};
export default TuitItem;