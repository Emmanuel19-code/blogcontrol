import { useState,useEffect } from "react"
import BlogPost from '../components/BlogPost'
import DataFetchingError from "../components/DataFetchingError";
import { getAllPost } from "../api/BlogPost";


const HomePage = () => {
 const [data, setData] = useState()
   const [error,setError] = useState();
  useEffect(()=>{
      const getdata = async ()=>{
     try {
      const response = await getAllPost()
        setData(response)
     } catch (error) {
       console.log(error);
     }    
  }
  },[])
  if(!data) return <DataFetchingError/>
  return (
    <div className='flex-col flex items-center justify-center'>
        <div className="">
         {
            data.map((items)=>(
               <BlogPost key={items.id}
                title={items.title}
                content={items.content}
                image={items.image}
                id={items.id}
                username={items.createdBy}
               />
            ))
         }
       </div>
    </div>
  )
}

export default HomePage