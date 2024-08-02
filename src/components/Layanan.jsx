import React from 'react'
import FadeInOnScroll from '../container/FadeInOnScroll'
import dashboard from '../assets/dashboard.jpeg'
import kpuskesmas from '../assets/rkepalapuskesmas.jpg'
import loket from '../assets/loket.jpg'
import ruanginap from '../assets/rawatinap.jpg'
import ruanginap2 from '../assets/ruanginap2.jpg'
import ruanginap3 from '../assets/ruanginap3.jpg'
import CardLayanan from '../container/CardLayanan.jsx'

export const Layanan = () => {
  const background = [
    dashboard
  ]

  return (
    <div className='w-full h-screen'>
        <FadeInOnScroll>
      <div className='relative max-w-full min-h-[75vh] bg-cover bg-center ' style={{ backgroundImage: `url(${background})`}}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-500  opacity-60"></div>
              <div className='z-10 relative flex flex-col justify-center items-center h-[75vh] text-white gap-4'>
                  <h1 className='text-[40px] font-bold'>Penyajian Layanan</h1>
                  <p className='w-[50%] text-center font-bold text-base'>Puskemas Lore Utara adalah pusat kesehatan masyarakat yang berada di sekitar daerah desa wuasa yang dimanfaatkan untuk konsultasi kesehatan dan pengobatan masyarakat.</p>
              </div>
      </div>
      </FadeInOnScroll>
      <div className=' max-w-full min-h-72 flex flex-col items-center justify-center'>
        <h1 className='mt-10 font-bold text-[4vh]'>Galeri Layanan Puskesmas Desa Wuasa</h1>
        <div className='flex w-[80%] h-[60vh] gap-8 m-10 justify-center items-center mr-56'>
          <div className='w-[95vh]'>
            <img src={kpuskesmas} alt="" className='rounded-3xl'/>
          </div>
          <div className='flex gap-5 flex-col'>
            <div className='flex w-[35vh] h-[25vh] gap-5'>
              <img src={loket} alt="" className='rounded-3xl'/>
              <img src={ruanginap} alt="" className='rounded-3xl' />
            </div>
            <div className='flex w-[35vh] h-[25vh] gap-5'>
              <img src={ruanginap2} alt="" className='rounded-3xl'/>
              <img src={ruanginap3} alt="" className='rounded-3xl'/>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-2'>
        <p className=''>Jenis Layanan</p>
        <h1 className='font-bold text-2xl '>Jenis Layanan Puskesmas Desa Wuasa</h1>
        <h2 className='font-semibold'>Terdapat macam macam layanan yang ada di di puskesmas desa wuasa</h2>
        <div>
          <CardLayanan
          image=''
          title='Poli Umum'
          deskripsi='Poli Umum adalah tempat pengobatan'/>
        </div>
      </div>
    </div>
  )
}

export default Layanan
