import axios from "./axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const loginAccount =async (username,password) =>{
    let errormessage =""
    let success,token,profilename,profilePicture,status=""
    const data={
        username:username,
        password:password
    }
    const notify = (message) => toast(message);
  await axios.post("user/login",data).
  then((res)=>{
       console.log(res);
       success = res.data.message
       profilename = res.data.username
       profilePicture=res.data.profilePicture
       token=res.data.token
       notify(success)
     localStorage.setItem("token",token)
     localStorage.setItem("username",profilename)
     localStorage.setItem("profilePicture",profilePicture)
     status=true
   }).catch((error)=>{
        errormessage = error.response.data.msg
        notify(errormessage)
        status=false
   })
   return status
}


const createAccount = async(name,email,username,password,profilePicture)=>{
     let errormessage,status =""
    let success,token=""
    const data ={
     name:name,
     email:email,
     username:username,
     password:password,
     profilePicture:profilePicture
  }
  await axios.post("user/register",data)
  .then((res)=>{
    console.log(res);
       success = res.data.msg
       token=res.data.otpcookie
       const notify = (message) => toast(message);
     notify(success)
     localStorage.setItem("otpcookie",token)
     status=true
  }).catch((error)=>{
        errormessage = error.response.data.msg
        const notify = (message) => toast(message);
       notify(errormessage)
       status=false
  })
 return status
}



const otpverification =async (otp) =>{
        let errormessage,status =""
    let success,token=""
   const otp_cookie = localStorage.getItem("otpcookie")
   const headers = { 'Authorization': `Bearer ${otp_cookie}`};
   const data={
    otp:otp
   }
   await axios.post("user/user-verification",data,{headers})
   .then((res)=>{
        success = res.data.msg
     const notify = (message) => toast(message);
     notify(success)
     localStorage.setItem("otpcookie","")
     status=true
   })
   .catch((error)=>{
    errormessage = error.response.data.msg
    const notify = (message) => toast(message);
     notify(errormessage)
     status=false
   })
   return status
}


const forgotPassword = async (userInfo)=>{
   let errormessage,_status,token =""
   const data ={
    userInfo:userInfo
   }
   await axios.post("user/forgotpassword",data).
    then((res)=>{
       _status = res.status
       token=res.data.otpcookie
       localStorage.setItem("otpcookie",token)
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
  const otp_cookie = localStorage.getItem("otpcookie")
   const headers = { 'Authorization': `Bearer ${otp_cookie}`};
  const data = {
    newpassword:newpassword
  }
   await axios.post("user/newPassword",data,{headers}).
    then((res)=>{
      success = res.data.msg;
      localStorage.setItem("otpcookie","");
    })
    .catch((error)=>{
    if(error.response){
        errormessage=error.response.data.msg
     }
    })
   if(_status!=200){
     const notify = (message) => toast(message);
     notify(errormessage)
   }else{
    const notify = (message) => toast(message);
    notify(success)
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