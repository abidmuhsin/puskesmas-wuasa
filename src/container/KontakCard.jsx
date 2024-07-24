import React from 'react'
import { BiLocationPlus } from 'react-icons/bi'

const KontakCard = ( {Icon, Title, Description}) => {
  return (
    <div className='w-[40vh] h-[40vh] bg-gradient-to-t from-blue-800 to-blue-500 text-white p-3 rounded-3xl flex items-center flex-col justify-center text-center gap-1 '>
        <div className='text-[9vh]'>{Icon}</div>
        <h1 className='font-bold'>{Title}</h1>
        <p className='max-w-[80%] text-sm'>{Description}</p>
    </div>
  )
}

export default KontakCard