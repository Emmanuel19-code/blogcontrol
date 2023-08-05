import {Link}  from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import {AiOutlineEdit} from "react-icons/ai"

const SavedDraft = ({id}) => {
const deletePost = () =>{
        alert("hello")
    }
    const PublishDraft = () =>{

    }
    return (
        <div className='flex justify-center md:w-4/5'>
              <div className='flex justify-center p-2 m-4 cursor-pointer md:w-4/5'>
        <div className=''>
            <img
            src="/assets/Image2.png"
            width={700}
            height={200}
            alt='Info Picture'
            className='h-52 md:w-4/5'
            />
            <div className='flex items-center mt-4'>
                <img
                src="/assets/Image1.jpg"
                width={50}
                height={50}
                className='w-14 h-14 rounded-full'
                />
                <div className='ml-2'>
                    <p className='font-bold'>Emma</p>
                    <p className='text-sm font-medium'>
                      saved <span> 5 mins ago</span>
                    </p>
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
                    <button className='px-2 text-white rounded bg-teal-600 ml-1'
                    onClick={PublishDraft}
                    >
                       Publish
                    </button>
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

export default SavedDraft