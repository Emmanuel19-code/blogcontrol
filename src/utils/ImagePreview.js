 
 export const previewImage=(file)=>{
    let image = ""
   const reader = new FileReader()
   reader.readAsDataURL(file)
   reader.onloadend=()=>{
      image = reader.result
      console.log(image);
      return image
   }
  }