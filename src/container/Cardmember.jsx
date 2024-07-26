import React from 'react'

const Cardmember = ( {Imagemember, Title, Description} ) => {
  return (
    <div className='max-w-[40vh] h-[50vh] overflow-hidden bg-white rounded-3xl shadow-2xl flex flex-col items-center'>
        <img src={Imagemember} alt="" className='rounded-md h-[35vh] w-full object-cover'/>
        <h1 className='text-center font-bold mt-2'>{Title}</h1>
        <p className='text-center w-[90%]'>{Description}</p>
    </div>
  )
}

export default Cardmember
