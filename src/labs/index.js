import Nav from "../nav";
import Assignment6 from "./a6";
import Assignment7 from "./a7";
import Tuiter from "../tuiter";
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

function Labs() {
 return (

   <div>
     <Nav/>
     <Routes>
       <Route path="/a7" element={<Assignment7/>}/>
       <Route path="/tuiter/*" element={<Tuiter/>}/>
       <Route path="/*" element={<Assignment6/>}/>
     </Routes>
   </div>

 );
}

export default Labs;