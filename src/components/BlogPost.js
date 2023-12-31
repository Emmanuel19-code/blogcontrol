import { Link } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import {AiOutlineEdit} from "react-icons/ai"

const BlogPost = ({title,content,id,image,username}) => {
    const deletePost = () =>{
       deletePost(id)
    }
  return (
    <div className=' md:w-4/5  flex justify-center'>
        <div className='p-2 m-4 cursor-pointer  md:w-4/5'>
         <div className=''>
            <img
            src={image}
            width={700}
            height={200}
            alt='Info Picture'
            className='md:h-52 md:w-4/5'
            loading='lazy'
            />
            <div className='flex items-center mt-4'>
                <img
                src="/assets/Image1.jpg"
                width={50}
                height={50}
                loading="lazy"
                className='w-14 h-14 rounded-full'
                />
                <div className='ml-2'>
                    <p className='font-bold'>{username}</p>
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
                {title}
             </h3>
            <p className='md:w-4/5'>
               {content}
            </p>
        </div>
    </div>
    </div>
  )
}

export default BlogPost