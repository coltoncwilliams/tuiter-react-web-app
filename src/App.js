import Labs from "./labs";
import {BrowserRouter} from "react-router-dom";
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
