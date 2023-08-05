import { useState } from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createPost, updatePost } from "../api/BlogPost";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuillEditor = ({buttonName}) => {
    const [title,setTitle] = useState()
    const [content,setContent] = useState()
    const [image,setImage]=useState()
    const [selectedCategory,SetSelectedCategory] = useState("")
    const PublishPost =async () =>{
      if(buttonName === "Publish"){
        await createPost(title,content,image,selectedCategory)
      }
      else{
         updatePost()
      }
    }
    const SelectCategory = (e) =>{
       SetSelectedCategory(e.target.value)
    }
  return (
    <div className="md:flex items-center m-1 gap-4">
        <div className="flex-1 ">
            <input type="text" 
         placeholder="Title" className="outline-none border p-1 md:w-96 mb-2"
         value={title}
         onChange={(e)=>{
           setTitle(e.target.value)
         }} 
         />
         <div className="md:w-full h-64 mb-3">
                <ReactQuill
             theme="snow"
             placeholder="write post"
             value={content}
             onChange={setContent}
             className="h-60"
          />
         </div>
          <div class="md:flex items-center justify-center w-full md:mt-10 mt-14">
             <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-200  hover:bg-gray-100 ">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
              <input id="dropzone-file" type="file" class="hidden" 
               value={image}
               onChange={(e)=>{setImage(e.target.value)}}
              />
              </label>
          </div> 
        </div>
        <div className="">
            <div className="border border-gray-300 p-1 m-1 md:w-64">
                <h1 className="font-bold text-2xl m-2">Category</h1>
                <div className="flex items-center m-2">
                   <input type="radio" name="category" value="Art"
                   checked={selectedCategory === "Art"}
                   onChange={SelectCategory}
                   />
                   <label className="ml-1">Art</label>
                </div>
                <div className="flex items-center m-2">
                   <input type="radio" name="category" value="Science"
                    checked={selectedCategory === "Science"}
                     onChange={SelectCategory}
                   />
                   <label className="ml-1">Science</label>
                </div>
                <div className="flex items-center m-2">
                   <input type="radio" name="category" value="Technology"
                    checked={selectedCategory === "Technology"}
                     onChange={SelectCategory}
                   />
                   <label className="ml-1">Technology</label>
                </div>
                <div className="flex items-center m-2">
                   <input type="radio" name="category" value="Food"
                    checked={selectedCategory === "Food"}
                     onChange={SelectCategory}
                   />
                   <label className="ml-1">Food</label>
                </div>
                <div className="flex items-center m-2">
                   <input type="radio" name="category" value="Movies"
                   checked={selectedCategory === "Movies"}
                    onChange={SelectCategory}
                   />
                   <label className="ml-1">Movies</label>
                </div>
                <div className="flex items-center m-2">
                   <input type="radio" name="category" value="Design"
                   checked={selectedCategory === "Design"}
                    onChange={SelectCategory}
                   />
                   <label className="ml-1">Design</label>
                </div>
            </div>
           <div className="border border-gray-300 m-1 p-1 md:w-64">
                <h1 className="font-bold text-2xl m-2">Publish</h1>
                     <p className="font-bold m-2">
                    Status: <span className="font-normal text-gray-500">Draft</span>
                </p>
                <p className="font-bold m-2">
                    Visibilty: <span className="font-normal text-gray-500">Public</span>
                </p>

                <div className="flex items-center justify-between m-2">
                    <div className="border border-gray-300 p-1">
                        <p className="text-teal-500">Save as a Draft</p>
                    </div>
                    <div>
                        <button className="bg-teal-600 p-1 text-white rounded"
                        onClick={PublishPost}
                        >{buttonName}</button>
                    </div>
                </div>
            </div>
             
        </div>
        <div>
                <ToastContainer 
                hideProgressBar={true}
                />
            </div>
     </div>
  )
}

export default QuillEditor