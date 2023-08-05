import  {Link}  from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai";
import { FiX} from "react-icons/fi";
import { useState } from "react";
import { logout } from "../api/Authentication";
import { useDispatch } from "react-redux";
import { LoggedOut } from "../store/AuthSlice";


const Navbar = () => {
   const [show,setShow] = useState(false)
   const dispatch = useDispatch()
   const SignOut = async() =>{
    // logout()
     dispatch(LoggedOut())
   }
  return (
    <div className="p-2 border-b flex items-center sticky top-0 bg-white justify-between cursor-pointer">
       <div className="flex md:hidden p-2">
        {
        show?
        <div className="text-xl"
         onClick={()=>{setShow(false)}}
         >
            <FiX/>
        </div>
          :
       <div className="text-xl"
         onClick={()=>{setShow(true)}}
         >
            <AiOutlineMenu/>
        </div>
        }
      </div>
       <div className="hidden md:flex items-center">
           <div className="flex items-center">
             <p className="bg-blue-500 p-1 m-2 rounded-full text-white">
                <Link to={"/edit/writepost"}>Write</Link>
             </p>
            <p className="m-2">
                <Link to={"/"}>ALL Posts</Link>
             </p>
             <p className="m-2">
               <Link to={"/edit/updatepost"}>Your Uploads</Link>
             </p>
             <p className="m-2">
               <Link to={"/edit/draft"}>Drafts</Link>
             </p>
           </div>
        </div>
        {
        show && 
        <div className="absolute top-12 md:hidden">
           <div id="dropdown" class=" bg-white divide-y mt-2 divide-gray-100 rounded-lg shadow w-44 ">
            <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                <li onClick={()=>{setShow(false)}}>
                     <Link to={"/edit/writepost"} class="block px-4 py-2 hover:bg-gray-100 ">
                        Write
                     </Link>
                </li>
                  <li onClick={()=>{setShow(false)}}>
                     <Link to={"/"} class="block px-4 py-2 hover:bg-gray-100 ">
                        ALL Posts
                     </Link>
                </li>
              <li onClick={()=>{setShow(false)}}>
                <Link to={"/edit/your_uploads"} class="block px-4 py-2 hover:bg-gray-100 ">
                       Your Uploads
                     </Link>
             </li>
              <li onClick={()=>{setShow(false)}}>
                 <Link to={"/edit/draft"} class="block px-4 py-2 hover:bg-gray-100 ">
                       Drafts
                 </Link>
             </li>
         </ul>
          </div>
       </div> 
      }
       <div className="flex items-center">
        <div className="text-lg">
            <AiOutlineUser/>
        </div>
            {
              /*
                <img
              src=""
              width={40}
              height={40}
              className="bg-red-500 rounded-full"
              alt="Profile Picture"
             />
              */
            }
             <p className="m-2">manuel</p>
             <p className="p-1 rounded bg-blue-700 text-white"
             onClick={SignOut}
             >
              LogOut
            </p>
        </div>
    </div>
  )
}

export default Navbar