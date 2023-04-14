import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Paginantion = () => {
  const {page,handlePageChange,totalPages}=useContext(AppContext);
  return (
    <div className='w-full flex  justify-center items-center  border-2 fixed bottom-0 bg-white'>
      <div className='flex justify-between items-center w-11/12 max-w-[600px] py-3 '>
       <div className='flex gap-x-2'>
       { page>1 &&(
          <button className='rounded-md border-2 px-4 py-1'
           onClick={()=>handlePageChange(page-1)}>
            privious
          </button>
        )
          
        }
        { page<totalPages &&(
          <button className='rounded-md border-2 px-4 py-1'
          onClick={()=>handlePageChange(page+1)}>
            Next
          </button>
        )
        }
       </div>
        <p className='font-bold text-sm flex '>{page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Paginantion
