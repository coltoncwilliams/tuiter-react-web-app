import Nav from "../nav";
import Assignment6 from "./a6";
import Assignment7 from "./a7";
import Tuiter from "../tuiter";
import {Routes, Route} from "react-router";

function Labs() {
 return (
   <div>
     <Nav/>
     <Routes>
       <Route index
        element={<Assignment6/>}/>
       <Route path="/a7"
        element={<Assignment7/>}/>
       <Route path="tuiter/*"
               element={<Tuiter/>}/>
     </Routes>
   </div>
 );
}

export default Labs;