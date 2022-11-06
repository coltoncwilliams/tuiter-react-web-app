import React from "react";

import { AiTwotoneMessage } from 'react-icons/ai';
import { FaRetweet } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';

const TuitStats = ({
                    tuit = {
                    "topic": "Space",
                         "userName": "SpaceX",
                         "time": "2h",
                         "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
                         "image": "tesla.png"
                         }
                     }) => {
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
      <div className="col-2">
         {tuit.liked? <AiFillHeart className="text-danger"/> : <AiFillHeart/>}
         {' ' + tuit.likes}
         </div>
         <div className="col-2">
            <BsShareFill/>
            </div>
   </div>
 );
};
export default TuitStats;