import Labs from "./labs";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
   <div className="container">
       <Routes>
           <Route path="/*" element={<Labs/>}/>
       </Routes>
   </div>
</BrowserRouter>
  );
}
export default App;
