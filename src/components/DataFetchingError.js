import React from 'react'

const DataFetchingError = () => {
  return (
    <div className='flex items-center justify-center h-96'>
       <p className='font-bold text-xl'>
        An error occured while trying to fetch data please try again in a few minutes
       </p>
    </div>
  )
}

export default DataFetchingError