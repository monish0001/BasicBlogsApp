import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from "./Spinner"
import "./Blogs.css"

const Blogs = () => {

    const {loading,posts}=useContext(AppContext);



  return (
    <div className='w-11/12 h-screen max-w-[600px] py-8 flex justify-center items-center  flex-col gap-y-7 mt-[65px]  mb-[65px]'>
      {
        loading ? (<Spinner/>):(
            posts.length===0?(
                <p>No Blogs</p>
            ):(posts.map((post)=>(
                    <div key={post.id}>
                        <p className='font-bold text-lg'>{post.title}</p>
                        <p className='text-sm mt-[4px] '>
                        By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span> 
                        </p>
                        <p className='text-sm mt-[4px]'>
                        Posted on {post.date}
                        </p>
                        <p className='text-[14px] mt-[10px]'>
                        {post.content}</p>
                        <div className='flex gap-x-3'>
                            {post.tags.map((tag,index)=>{
                               return <span className='text-blue-500 underline font-bold text-xs' key={index}> {`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                ))
            )
        )
      }
    </div>
  )
}

export default Blogs
