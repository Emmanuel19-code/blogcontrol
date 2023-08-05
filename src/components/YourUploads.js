import { Link } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import {AiOutlineEdit} from "react-icons/ai"

const YourUploads = () => {
    const deletePost = () =>{
        alert("hello")
    }
  return (
    <div className=' md:w-4/5  flex justify-center'>
        <div className='p-2 m-4 cursor-pointer  md:w-4/5'>
         <div className=''>
            <img
            src="/assets/Image2.png"
            width={700}
            height={200}
            alt='Info Picture'
            className='md:h-52 md:w-4/5'
            />
            <div className='flex items-center mt-4'>
                <img
                src="/assets/Image1.jpg"
                width={50}
                height={50}
                alt=''
                className='w-14 h-14 rounded-full'
                />
                <div className='ml-2'>
                    <p className='font-bold'>Emma</p>
                    <p className='text-sm font-medium'>Posted 3 hour ago</p>
                </div>
                <div className='flex items-center ml-1'>
                      <div onClick={deletePost}>
                                 <AiTwotoneDelete
                        className='text-red-500 m-1'
                        />
                      </div>
                       
                    <Link to={"/edit/updatepost"}>
                        <AiOutlineEdit
                            className='text-teal-500 m-1'
                        />
                    </Link>
                </div>
            </div>
            <h3 className='font-bold text-2xl mt-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
             </h3>
            <p className='md:w-4/5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, deleniti doloribus a sint voluptate quas, modi eos repellat asperiores neque aperiam illum atque saepe numquam eligendi ex explicabo accusantium mollitia?
            </p>
        </div>
    </div>
    </div>
  )
}

export default YourUploads