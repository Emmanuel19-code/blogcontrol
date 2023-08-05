//import axios from "./axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const createPost =async (title,content,image,selectedCategory) =>{
    let errormessage,success = ""
     const data ={
       title:title,
       content:content,
       image:image,
       category:selectedCategory
    }
  await axios.post("/content/create",data)
  .then((res)=>{
     success = res.data.msg
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

const updatePost = async(title,information)=>{
   let errormessage,success=""
   const data = {
     
   }
   await axios.post("/updateContent:id",data)
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
  await axios.delete(`/deleteContent:${id}`)
  .then((res)=>{
    message=res.data
  }).catch((error)=>{
     if(error.response){
        message=error.response.data.msg
     }
  })
}


const savedToDraft =async (title,information,image,selectedCategory) =>{
    let message=""
      const data ={
       title:title,
       information:information,
       image:image,
       category:selectedCategory
    }
    await axios.post("/saveToDrafts",data)
    .then((res)=>{
        message = res.data
    })
    .catch((error)=>{
        if(error.response){
            message = error.response.data.msg
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