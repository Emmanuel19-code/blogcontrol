import { Link } from "react-router-dom";
import { useState } from "react"
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { ChangePassword, forgotPassword } from "../api/Authentication";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [userInfo,setUserInfo] = useState()
  const [newpassword,setNewpassword] = useState()
   const [errorMessage,setErrorMessage] = useState()
   const [show,setShow] = useState(false)
   const [sign,setSign] = useState(false)
   const [disable,setDisabled] = useState(false)
 const submitInfo = async() =>{
  const response= await forgotPassword(userInfo)
   if(response === "true"){
     setShow(true)
   }
  }

  const ChangeInfo =async() =>{
   await ChangePassword(newpassword)
  }
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100 flex-col">
       <h1 className="font-bold text-2xl mb-1">FORGOT PASSWORD</h1>
        <div className="bg-white p-5 shadow-lg flex flex-col md:w-96">
             <input type="text" placeholder="username or email" 
             className="m-2 outline-none border-b p-2 "
              value={userInfo}
              onChange={(e)=>{setUserInfo(e.target.value)}}
              disabled={disable}
             />
             {
                show &&
             <div className="flex items-center">
             <input type={sign?"text":"password"} placeholder="Enter new password" 
             className="m-2 outline-none border-b p-2 w-full"
              value={newpassword}
              onChange={(e)=>{setNewpassword(e.target.value)}}
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
             }
             {
                !show?
             <button className="bg-blue-500 text-white font-bold p-1 rounded m-1 cursor-pointer"
               onClick={submitInfo}
               >
                SUBMIT
             </button>  
             :
             <button className="bg-blue-500 text-white font-bold p-1 rounded m-1 cursor-pointer"
             onClick={ChangeInfo}
             >
                CHANGE
             </button>
             }
             <div>
                  <p className="text-red-400 text-center m-2">
                     {errorMessage}   
                  </p>
            </div>
                  <div>
                        <span className="">
                Don't you have an account ?
                <Link href="/register" className="m-1 font-bold hover:underline">Register here </Link>
             </span>
                  </div>
                 <div>
                <ToastContainer 
                hideProgressBar={true}
                />
            </div>
        </div>
        
    </div>
  )
}

export default ForgotPassword