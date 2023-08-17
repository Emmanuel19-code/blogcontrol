import axios from "./axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import axios from "axios";


const createPost =async (title,content,image,selectedCategory) =>{
    let errormessage,success,_status = ""
     const data ={
       title:title,
       content:content,
       image:image,
       category:selectedCategory
    }
    const token = localStorage.getItem("token")
   const headers = { 'Authorization': `Bearer ${token}`};
  await axios.post("/content/create",data,{headers})
  .then((res)=>{
     success = res.data.msg
     const notify = (message) => toast(message);
     notify(success)
     _status="true"
  })
  .catch((error)=>{
    if(error.response){
        errormessage = error.response.data.msg
        const notify = (message) => toast(message);
        notify(errormessage)
        _status="false"
       }
  })
  return _status;
}

const updatePost = async(title,information)=>{
   let errormessage,success=""
   const data = {
     
   }
   const token = localStorage.getItem("token")
   const headers = { 'Authorization': `Bearer ${token}`};
   await axios.post("/updateContent:id",data,{headers})
   .then((res)=>{
     success = res.data.message
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

const deletePost = async(id)=>{
  let message=""
  const token = localStorage.getItem("token")
   const headers = { 'Authorization': `Bearer ${token}`};
  await axios.delete(`/deleteContent:${id}`)
  .then((res)=>{
    message=res.data
  }).catch((error)=>{
     if(error.response){
        message=error.response.data.msg
     }
  })
}


const savedToDraft =async (title,content,image,selectedCategory) =>{
     let errormessage,success,_status = ""
        const data ={
       title:title,
       content:content,
       image:image,
       category:selectedCategory
    }
    const token = localStorage.getItem("token")
   const headers = { 'Authorization': `Bearer ${token}`};
    await axios.post("/content/saveToDrafts",data,{headers})
    .then((res)=>{
         success = res.data.msg
     const notify = (message) => toast(message);
     notify(success)
     _status="true"
    })
    .catch((error)=>{
      if(error.response){
        errormessage = error.response.data.msg
        const notify = (message) => toast(message);
        notify(errormessage)
        _status="false"
       }
    })
}

const getCategoryContent = async (category)=>{
    let message=""
    await axios.get("/getCategoryContent:name")
    .then((res)=>{
        message = res.data
    })
    .catch((error)=>{
        if(error.response){
            message= error.response.data.msg
        }
    })
    return message
}

const draftContent = async ()=>{
  let message = ""
  const token = localStorage.getItem("token")
   const headers = { 'Authorization': `Bearer ${token}`};
  await axios.get("/draftContent")
  .then((res)=>{

  })
  .catch((error)=>{
    if(error.response){
        message= error.response.data.msg
    }
  })
  return message
}



export {
    createPost,
    updatePost,
    deletePost,
    savedToDraft,
    getCategoryContent,
    draftContent
}