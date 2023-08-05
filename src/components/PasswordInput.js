import { useState } from "react"
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";



const PasswordInput = ({valueFromChild}) => {
     const [sign,setSign] = useState(false)
     const [inputValue,setInputValue] = useState()
     const handleInputChange = (e) =>{
        const value = e.target.value
        setInputValue(value)
        valueFromChild(value)
     }
  return (
     <div className="flex items-center">
             <input type={sign?"text":"password"} placeholder="Enter new password" 
             className="m-2 outline-none border-b p-2 w-full"
              value={inputValue}
              onChange={handleInputChange}
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
  )
}

export default PasswordInput