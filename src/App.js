import { useSelector } from "react-redux";
import UserLogin from "./components/UserLogin";
import { isAllowed } from "./store/AuthSlice";
import HomePage from "./Pages/HomePage";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
 const allow = useSelector(isAllowed)
   useEffect(()=>{
     
   },[allow])
  return (
    <div className="">
      
      {allow &&  
      <div>
            <Navbar/>
            <HomePage/>
       </div>
       }
       {
        !allow&&
        <UserLogin/>
      }
    </div>
  );
}

export default App;
