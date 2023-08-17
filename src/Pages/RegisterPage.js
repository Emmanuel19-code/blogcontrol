import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import { createAccount } from "../api/Authentication";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const navigation = useNavigate()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [image,setImage] = useState("")
  const [message,setMessage] = useState("")
  const [sign,setSign] = useState(false)
 
  const submitInfo = async() =>{
   const message= await createAccount(name,email,username,password,image) 
   setTimeout(()=>{
          if(message){
      navigation("/accountverification")
   }
   },5000)
  }
  const valueFromChild = (value) =>{
     setPassword(value)
  }
  return (
    <div className='flex justify-center items-center h-screen bg-slate-100 flex-col'>
         <h1 className="font-bold text-2xl mb-1">REGISTER</h1>
            <div className="bg-white p-5 shadow-lg flex flex-col md:w-96">
             <input type="text" placeholder="Name" 
             className="m-2 outline-none border-b p-2"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
             />
             <input type="text" placeholder="email" 
             className="m-2 outline-none border-b p-2"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
             />
             <input type="text" placeholder="username" 
             className="m-2 outline-none border-b p-2"
             value={username}
             onChange={(e)=>{setUsername(e.target.value)}}
             />
             <PasswordInput
              valueFromChild={valueFromChild}
             />
             <div className="m-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Upload Profile Picture</label>
                  <input id="file_input" type="file"  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none" 
                   name="fileimage"
                   value={image}
                   onChange={(e)=>{setImage(e.target.value)}}
                  />
             </div>
             <button className="bg-blue-500 text-white font-bold p-1 rounded m-1 cursor-pointer"
              onClick={submitInfo}
             >
                Sign Up
             </button>
              <div>
                <ToastContainer 
                hideProgressBar={true}
                />
            </div>
                  <div>
                      <span className="">
                        Have an account ?
                        <Link to={"/"} className="m-1 font-bold hover:underline">Login</Link>
                     </span>
                  </div>
           </div>
     </div>
  )
}
export default RegisterPage