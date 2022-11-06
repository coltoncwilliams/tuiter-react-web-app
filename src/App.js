import Labs from "./labs";
import {Routes, Route} from "react-router";

function App() {
  return (

   <div className="container">
       <Routes>
       <Route path="/*" element={<Labs/>}/>
       </Routes>
   </div>
  );
}
export default App;
