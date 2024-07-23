import React from 'react'
import logoPuskesmas from '../assets/logo-puskesmas.png'
import FadeInOnScroll from '../container/FadeInOnScroll'

const Footer = () => {
  return (
    <FadeInOnScroll>
        <div className='flex items-center mx-8 gap-2 h-20 justify-between'>
            <div className="flex items-center">
                <img src={logoPuskesmas} alt="" className='w-18 h-14' />
                <h1 className='text-2xl font-bold'>Puskesmas Lore Utara</h1>
            </div>
            <h1 className="text-slate-600">Production by KKN 108 UNTAD Desa Wuasa</h1>
        </div>
    </FadeInOnScroll>
  )
}

export default Footer