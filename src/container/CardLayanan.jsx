import React from 'react'

const CardLayanan = ( {image, title, deskripsi} ) => {
  return (
    <div className='w-[32vh] h-[55vh] overflow-hidden bg-white rounded-3xl shadow-2xl flex flex-col items-center'>
        <img src={image} alt="" className='rounded-md h-[35vh] w-full object-cover'/>
        <h1 className='text-center font-bold mt-2 bg-blue-800 text-white rounded-3xl py-1 px-3 mb-2'>{title}</h1>
        <p className='text-center w-[90%]'>{deskripsi}</p>
    </div>
  )
}

export default CardLayanan