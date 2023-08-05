import axios from "./axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const loginAccount =async (username,password) =>{
    let errormessage =""
    let success,token=""
    const data={
        username:username,
        password:password
    }
  await axios.post("user/login",data).
  then((res)=>{
       success = res.data.message
       token=res.data.token
   }).catch(async(error)=>{
      if(error.response){
        errormessage = error.response.data.msg
       }
   })
   if(success){
     const notify = (message) => toast(message);
     notify(success)
     localStorage.setItem("token",token)
     return (
          <div>
                <ToastContainer 
                hideProgressBar={true}
                />
            </div>
     )
   }else{
     const notify = (message) => toast(message);
     notify(errormessage)
     return (
          <div>
                <ToastContainer 
                hideProgressBar={true}
                />
            </div>
     )
   }
}


const createAccount = async(name,email,username,password,image)=>{
     let errormessage =""
    let success,token=""
    const data ={
     name:name,
     email:email,
     username:username,
     password:password,
     image:image
  }
  await axios.post("user/register",data)
  .then((res)=>{
    console.log(res);
       success = res.data.msg
       token=res.data.otpcookie
  }).catch((error)=>{
       if(error.response){
        errormessage = error.response.data.msg
       } 
  })
    if(success){
     const notify = (message) => toast(message);
     notify(success)
     localStorage.setItem("otpcookie",token)
     return (
          <div>
                <ToastContainer 
                hideProgressBar={true}
                />
            </div>
     )
   }else{
     const notify = (message) => toast(message);
     notify(errormessage)
     return (
          <div>
                <ToastContainer 
                hideProgressBar={true}
                />
            </div>
     )
   }
}



const otpverification =async (otp) =>{
   let errormessage,success=""
   const otp_cookie = localStorage.getItem("otpcookie")
   const headers = { 'Authorization': `Bearer ${otp_cookie}`};
   const data={
    otp:otp
   }
   await axios.post("user/user-verification",data,{headers})
   .then((res)=>{
        success = res.data
   })
   .catch((error)=>{
         if(error.response){
          errormessage = error.response.data.msg
       }
   })
  if(success){
     const notify = (message) => toast(message);
     notify(success)
    
     return (
          <div>
                <ToastContainer 
                hideProgressBar={true}
                />
            </div>
     )
   }else{
     const notify = (message) => toast(message);
     notify(errormessage)
     return (
          <div>
                <ToastContainer 
                hideProgressBar={true}
                />
            </div>
     )
   }
}


const forgotPassword = async (userInfo)=>{
   let errormessage,success,_status =""
   const data ={
    userInfo:userInfo
   }
   await axios.post("user/forgotpassword",data).
    then((res)=>{
       _status = res.status
    })
   .catch((error)=>{
     if(error.response){
        errormessage=error.response.data.msg
      //_status=error.response.status;
     }
   })
   if(_status!=200){
     const notify = (message) => toast(message);
     notify(errormessage)
     return (
          <div>
                <ToastContainer 
                hideProgressBar={true}
                />
            </div>
     )
   }else{
     return "true"
   }
}


const logout = async() => {
    let message = ""
    await axios.get("user/logOut").
    then((res)=>{
       
    })
    .catch((error)=>{
    if(error.response){
        message=error.response.data.msg
     }
    })
}

const RequestNewOtp = async ()=>{
    let message=""
    await axios.get("user/").
    then((res)=>{

    }).catch((error)=>{
        if(error.response){
            message = error.response.data.msg
        }
    })
}


const ChangePassword = async(newpassword)=>{
  let errormessage,success,_status =""
  const data = {
    newpassword:newpassword
  }
   await axios.post("user/newPassword",data).
    then((res)=>{
      success = res.data.msg
    })
    .catch((error)=>{
    if(error.response){
        errormessage=error.response.data.msg
     }
    })
    if(success){
     const notify = (message) => toast(message);
     notify(success)
     return (
          <div>
                <ToastContainer 
                hideProgressBar={true}
                />
            </div>
     )
   }else{
     const notify = (message) => toast(message);
     notify(errormessage)
     return (
          <div>
                <ToastContainer 
                hideProgressBar={true}
                />
            </div>
     )
   }
}

export {
    createAccount,
    loginAccount,
    otpverification,
    forgotPassword,
    logout,
    RequestNewOtp,
    ChangePassword
}