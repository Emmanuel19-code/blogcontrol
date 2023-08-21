import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { loginAccount } from "../api/Authentication";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UserLogin = () => {
   const navigation = useNavigate()
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()
  const [sign,setSign] = useState(false)
  const submitInfo =async() => {
   const status=await loginAccount(username,password)
   console.log(status);
    setTimeout(()=>{
         if(status){
     navigation("/home")
  }
  },5000)
  };
    const valueFromChild =(value) =>{
      setPassword(value)
    }
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100 flex-col">
       <h1 className="font-bold text-2xl mb-1">LOGIN</h1>
        <div className="bg-white p-5 shadow-lg flex flex-col md:w-96">
             <input type="text" placeholder="username" 
             className="m-2 outline-none border-b p-2"
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
             />
              <div className="flex items-center">
             <input type={sign?"text":"password"} placeholder="Enter new password" 
             className="m-2 outline-none border-b p-2 w-full"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
             />
                 {
               sign
               ?
               <BiShow
              className="text-2xl"
               onClick={()=>{setSign(false)}}
             />
             :
              <BiHide
               className="text-2xl"
               onClick={()=>{setSign(true)}}
              />
             }
             
             </div>
             <button className="bg-blue-500 text-white font-bold p-1 rounded m-1 cursor-pointer"
             onClick={submitInfo}
             >
                Login
             </button>
               <div>
                <ToastContainer 
                hideProgressBar={true}
                />
            </div>
            <div>
               <span className="">
                Forgot Password ?
                <Link to={"/forgotpassword"} className="m-1 font-bold hover:underline">Click here </Link>
             </span>
            </div>
                  <div>
                        <span className="">
                Don't you have an account ?
                <Link to={"/register"} className="m-1 font-bold hover:underline">Register here </Link>
             </span>
                  </div>
        </div>
        
    </div>
  )
}

export default UserLogin