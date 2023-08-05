import React from 'react'
import BlogPost from '../components/BlogPost'

const HomePage = () => {
  return (
    <div className='flex-col flex items-center justify-center'>
       <BlogPost/>
       <BlogPost/>
    </div>
  )
}

export default HomePage