import React from 'react'
import FadeInOnScroll from '../container/FadeInOnScroll.jsx'

export const DataCard = ( { Title, Description, Image }) => {
  return (
    <FadeInOnScroll>
    <div className='max-w-32 min-h-[20vh] flex flex-col justify-center items-center text-center text-blue'>
        <div className='text-[10vh]'>{Image}</div>
        <h1 className='text-2xl font-bold'>{Title}</h1>
        <p className='text-sm'>{Description}</p>
    </div>
    </FadeInOnScroll>
  )
}
