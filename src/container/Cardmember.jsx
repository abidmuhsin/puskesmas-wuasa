import React from 'react'


export const Cardmember = ( {Imagemember, Title, Description} ) => {
  return (
    <div className='max-w-[40vh] min-h-[50vh] bg-white rounded-3xl shadow-2xl'>
        <img src={Imagemember} alt="" className='rounded-md'/>
        <h1 className='text-center font-bold mt-4'>{Title}</h1>
        <p className='text-center'>{Description}</p>
    </div>
  )
}
