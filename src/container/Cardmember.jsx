import React from 'react'

const Cardmember = ( {Imagemember, Title, Description} ) => {
  return (
    <div className='max-w-[40vh] h-[50vh] overflow-hidden bg-white rounded-3xl shadow-2xl'>
        <img src={Imagemember} alt="" className='rounded-md h-[40vh] w-full object-cover'/>
        <h1 className='text-center font-bold mt-2'>{Title}</h1>
        <p className='text-center'>{Description}</p>
    </div>
  )
}

export default Cardmember
