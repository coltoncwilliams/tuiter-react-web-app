import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";


const WhoToFollowList = () => {

  return (`
   <div class="list-group">
   ${who.map(WhoToFollowListItem).join("")}
   </div>`);
}
export default WhoToFollowList;
