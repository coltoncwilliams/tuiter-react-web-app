import React from "react";

import { AiTwotoneMessage } from 'react-icons/ai';
import { FaRetweet } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';
import { FaThumbsDown } from 'react-icons/fa';
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch, useSelector} from "react-redux";

const TuitStats = ({
                    tuit = {
                    "topic": "Space",
                         "userName": "SpaceX",
                         "time": "2h",
                         "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
                         "image": "tesla.png"
                         }
                     }) => {
 const dispatch = useDispatch();
 return(
   <div className="row">
   <div className="col-2">
   <AiTwotoneMessage className=""/>
   {' ' + tuit.replies}
   </div>
   <div className="col-2">
      <FaRetweet/>
      {' ' + tuit.retuits}
      </div>
      <div className="col-4">
           Likes: {tuit.likes}
           <AiFillHeart onClick={() => dispatch(updateTuitThunk({...tuit, liked: true, likes: tuit.likes + 1}))} className={tuit.liked? "text-danger" : ""}/>
         </div>
         <div className="col-4">
           Dislikes: {tuit.dislikes}
           <FaThumbsDown onClick={() => dispatch(updateTuitThunk({...tuit, disliked: true, dislikes: tuit.dislikes + 1}))} className={tuit.disliked? "text-danger" : ""}/>
           </div>
         <div className="col-2">
            <BsShareFill/>
          </div>
   </div>
 );
};
export default TuitStats;