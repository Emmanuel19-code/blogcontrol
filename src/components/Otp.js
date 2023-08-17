import { useEffect, useState } from "react"
import {  otpverification } from "../api/Authentication";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Otp = () => {
 const navigation = useNavigate()
 const [firstnumber,setFirstnumber] = useState("");
 const [secondnumber,setSecondnumber] = useState("");
 const [thirdnumber,setThirdnumber] = useState("");
 const [fourthnumber,setFourthnumber] = useState("");


 const submitOtp =async () =>{
    const numberOtp = firstnumber+secondnumber+thirdnumber+fourthnumber
   const status=await  otpverification(numberOtp)
    setTimeout(()=>{
          if(status){
      navigation("/home")
   }
   },5000)
     }
  return (
   <div className='flex justify-center items-center h-screen bg-slate-100 flex-col'>
        <h4 className="font-bold text-2xl mb-1">Please enter your otp code </h4>
       <div className="bg-white p-2 flex flex-col shadow-lg  md:w-96 m-1">
            <div className='flex justify-evenly items-center md:w-96'>
                <input type='text'  placeholder='#' 
                className='w-10 h-10 flex justify-center text-center border border-gray-500'
                  value={firstnumber}
                  onChange={(e)=>{setFirstnumber(e.target.value)}}
                 />
                <input type='text'  placeholder='#'
                 className='w-10 h-10 flex justify-center text-center border border-gray-500'
                 value={secondnumber}
                 onChange={(e)=>{setSecondnumber(e.target.value)}}
                 />
                <input type='text'  placeholder='#' 
                className='w-10 h-10 flex justify-center text-center border border-gray-500'
                value={thirdnumber}
                onChange={(e)=>{setThirdnumber(e.target.value)}}
                />
                <input type='text'  placeholder='#' 
                className='w-10 h-10 flex justify-center text-center border border-gray-500'
                value={fourthnumber}
                onChange={(e)=>{setFourthnumber(e.target.value)}}
                />
            </div>
            <div>
                <ToastContainer 
                hideProgressBar={true}
                />
            </div>
            <p className='cursor-pointer m-1'>
                Didn't receive OTP ? 
                <span className='hover:underline ml-1'>Request</span>
            </p>
            <button className='bg-blue-500 text-white p-1 font-bold flex justify-center m-1 rounded'
            onClick={submitOtp}
            >
                Submit
            </button>
        </div>
        
     </div>
  )
}

export default Otp