import React from 'react'
import { BiLocationPlus } from 'react-icons/bi'
import FadeInOnScroll from '../container/FadeInOnScroll.jsx'

const KontakCard = ( {Icon, Title, Description}) => {
  return (
    <FadeInOnScroll>
    <div className='md:w-[40vh] md:h-[40vh] w-[20vh] h-[20vh]  bg-gradient-to-t from-blue-800 to-blue-500 hover:bg-gradient-to-t hover:from-blue-900 hover:to-blue-950 text-white p-3 rounded-3xl flex items-center flex-col justify-center text-center gap-1 '>
        <div className='md:text-[9vh] text-[5vh]'>{Icon}</div>
        <h1 className='font-bold'>{Title}</h1>
        <p className='max-w-[80%] text-sm'>{Description}</p>
    </div>
    </FadeInOnScroll>
  )
}

export default KontakCard