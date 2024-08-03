// import React from 'react'
// import FadeInOnScroll from '../container/FadeInOnScroll'
// import dashboard from '../assets/dashboard.jpeg'
// import kpuskesmas from '../assets/rkepalapuskesmas.jpg'
// import loket from '../assets/loket.jpg'
// import ruanginap from '../assets/rawatinap.jpg'
// import ruanginap2 from '../assets/ruanginap2.jpg'
// import ruanginap3 from '../assets/ruanginap3.jpg'
// import CardLayanan from '../container/CardLayanan.jsx'
// import Poliumum from '../assets/poli-umum.jpg'
// import Poligigi from '../assets/poli-gigi.jpg'
// import Polianak from '../assets/poli-anak.jpg'
// import Footer from '../components/Footer.jsx'

// export const Layanan = () => {
//   const background = [
//     dashboard
//   ]

//   return (
//     <div className='w-full h-screen'>
//         <FadeInOnScroll>
//       <div className='relative max-w-full min-h-[75vh] bg-cover bg-center ' style={{ backgroundImage: `url(${background})`}}>
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-500  opacity-60"></div>
//               <div className='z-10 relative flex flex-col justify-center items-center h-[75vh] text-white gap-4'>
//                   <h1 className='text-[40px] font-bold'>Penyajian Layanan</h1>
//                   <p className='w-[50%] text-center font-bold text-base'>Puskemas Lore Utara adalah pusat kesehatan masyarakat yang berada di sekitar daerah desa wuasa yang dimanfaatkan untuk konsultasi kesehatan dan pengobatan masyarakat.</p>
//               </div>
//       </div>
//       </FadeInOnScroll>
//       <div className=' max-w-full min-h-72 flex flex-col items-center justify-center'>
//         <h1 className='mt-10 font-bold text-[4vh]'>Galeri Layanan Puskesmas Desa Wuasa</h1>
//         <div className='flex w-[80%] h-[60vh] gap-8 justify-center items-center mr-56'>
//           <div className='w-[95vh]'>
//             <img src={kpuskesmas} alt="" className='rounded-3xl'/>
//           </div>
//           <div className='flex gap-5 flex-col'>
//             <div className='flex w-[35vh] h-[25vh] gap-5'>
//               <img src={loket} alt="" className='rounded-3xl'/>
//               <img src={ruanginap} alt="" className='rounded-3xl' />
//             </div>
//             <div className='flex w-[35vh] h-[25vh] gap-5'>
//               <img src={ruanginap2} alt="" className='rounded-3xl'/>
//               <img src={ruanginap3} alt="" className='rounded-3xl'/>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='flex flex-col items-center justify-center gap-2 mt-10 bg-slate-200'>
//         <p className='text-lg mt-5'>Jenis Layanan</p>
//         <h1 className='font-bold text-2xl '>Jenis Layanan Puskesmas Desa Wuasa</h1>
//         <h2 className='font-semibold mb-5'>Terdapat macam macam layanan yang ada di di puskesmas desa wuasa</h2>
//         <div className='flex gap-8 flex-wrap justify-center mb-10'>
//           <CardLayanan
//           image={Poliumum}
//           title='Poli Umum'
//           deskripsi='Poli Umum adalah tempat pengobatan'/>
//           <CardLayanan
//           image={Polianak}
//           title='Poli Anak'
//           deskripsi='Poli Umum adalah tempat pengobatan'/>
//           <CardLayanan
//           image={Poligigi}
//           title='Poli Gigi'
//           deskripsi='Poli Umum adalah tempat pengobatan'/>
//         </div>
//       </div>
//       <div className='flex flex-col'>
//         <div className='w-full flex h-[60vh] justify-center items-center gap-20'>
//             <div className='w-[50vh] h-[35vh] flex'>   
//               <img src={Poliumum} alt="" className='bg-blue-500 rounded-tr-[15vh] border border-blue-500 border-4 w-[70vh] z-10 absolute left-44'/>
//               <div className='relative w-32 h-20 top-[30vh] right-36 bg-gradient-to-t from-blue-500 to-blue-400 rounded-bl-[6vh] rounded-tr-[6vh] z-10'></div>
//             </div>        
//             <div className='w-[30%] flex flex-col gap-1'>
//               <p className='font-light text-lg'>Poli Umum</p>
//               <h1 className='font-bold text-3xl'>Poli Umum</h1>
//               <p className='text-base font-bold'>Poli Umum adalah Layanan kesehatan dasar yang disediakan di banyak klinik, pusat kesehatan, dan rumah sakit.</p>
//             </div>
//         </div>
//         <div className='w-full flex h-[60vh] justify-center items-center gap-20'>
//             <div className='w-[30%] flex flex-col gap-1'>
//               <p className='font-light text-lg'>Poli Anak</p>
//               <h1 className='font-bold text-3xl'>Poli Anak</h1>
//               <p className='text-base font-bold'>Poli Anak adalah Layanan pemeriksaan dan pengobatan terhadap bayi dan anak sakit langsung oleh Dokter Spesialis Anak yang berkompeten di bidangnya</p>
//             </div>
//             <div className='w-[50vh] h-[35vh] flex'>   
//               <img src={Polianak} alt="" className='bg-blue-500 rounded-tl-[15vh] border border-blue-500 border-4 w-[70vh] z-10 absolute right-44 rounded-br-[15vh]'/>
//               <div className='relative w-32 h-20 top-[30vh] right-10 bg-gradient-to-t from-blue-500 to-blue-400 rounded-br-[6vh] rounded-tl-[6vh] z-10'></div>
//             </div>        
//         </div>
//         <div className='w-full flex h-[60vh] justify-center items-center gap-20'>
//             <div className='w-[50vh] h-[35vh] flex'>   
//               <img src={Poligigi} alt="" className='bg-blue-500 rounded-tr-[15vh] border border-blue-500 border-4 w-[70vh] z-10 absolute left-44'/>
//               <div className='relative w-32 h-20 top-[30vh] right-36 bg-gradient-to-t from-blue-500 to-blue-400 rounded-bl-[6vh] rounded-tr-[6vh] z-10'></div>
//             </div>
//             <div className='w-[30%] flex flex-col gap-1'>
//               <p className='font-light text-lg'>Poli Gigi</p>
//               <h1 className='font-bold text-3xl'>Poli Gigi</h1>
//               <p className='text-base font-bold'>Poli Gigi adalah salah satu jenis pelayanan kesehatan gigi yang bertujuan untuk menjaga kesehatan gigi dan mulut pasien secara umum</p>
//             </div>        
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   )
// }

// export default Layanan



import React from 'react';
import FadeInOnScroll from '../container/FadeInOnScroll';
import dashboard from '../assets/dashboard.jpeg';
import kpuskesmas from '../assets/rkepalapuskesmas.jpg';
import loket from '../assets/loket.jpg';
import ruanginap from '../assets/rawatinap.jpg';
import ruanginap2 from '../assets/ruanginap2.jpg';
import ruanginap3 from '../assets/ruanginap3.jpg';
import CardLayanan from '../container/CardLayanan.jsx';
import Poliumum from '../assets/poli-umum.jpg';
import Poligigi from '../assets/poli-gigi.jpg';
import Polianak from '../assets/poli-anak.jpg';
import Footer from '../components/Footer.jsx';
import Poliumum2 from '../assets/poliumum2.png'
import Poligigi2 from '../assets/poligigi2.png'
import Polianak2 from '../assets/polianak2.png'

export const Layanan = () => {
  const background = [dashboard];

  return (
    <div className='w-full min-h-screen'>
      <FadeInOnScroll>
        <div className='relative max-w-full min-h-[75vh] bg-cover bg-center flex justify-center items-center' style={{ backgroundImage: `url(${background})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-500 opacity-60"></div>
          <div className='z-10 relative flex flex-col justify-center items-center h-full text-white gap-4 p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold text-center'>Penyajian Layanan</h1>
            <p className='w-full md:w-1/2 text-center font-bold text-sm md:text-base'>
              Puskemas Lore Utara adalah pusat kesehatan masyarakat yang berada di sekitar daerah desa wuasa yang dimanfaatkan untuk konsultasi kesehatan dan pengobatan masyarakat.
            </p>
          </div>
        </div>
      </FadeInOnScroll>
      
      <div className=' max-w-full min-h-64 flex flex-col items-center justify-center'>
         <h1 className='mt-10 font-bold text-[4vh]'>Galeri Layanan Puskesmas Desa Wuasa</h1>
         <div className='flex md:w-[80%] w-full h-[80vh] gap-8 justify-center items-center flex-row '>
           <div className='w-[95vh] hidden md:flex'>
             <img src={kpuskesmas} alt="" className='rounded-3xl'/>
           </div>
           <div className='flex gap-5 flex-col'>
             <div className='flex-col md:flex-row w-[35vh] h-[25vh] gap-5'>
               <img src={loket} alt="" className='rounded-3xl'/>
               <img src={ruanginap} alt="" className='rounded-3xl' />
             </div>
             <div className='flex-col md:flex-row w-[35vh] h-[25vh] gap-5'>
               <img src={ruanginap2} alt="" className='rounded-3xl'/>
               <img src={ruanginap3} alt="" className='rounded-3xl'/>
             </div>
           </div>
       </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-4 mt-10 px-4 md:px-8'>
        <p className='text-lg font-light'>Jenis Layanan</p>
        <h1 className='font-bold text-2xl md:text-4xl text-center'>Jenis Layanan Puskesmas Desa Wuasa</h1>
        <h2 className='font-semibold text-center mb-5'>Terdapat macam-macam layanan yang ada di Puskesmas Desa Wuasa</h2>
        <div className='flex flex-wrap gap-8 justify-center'>
          <CardLayanan
            image={Poliumum}
            title='Poli Umum'
            deskripsi='Poli Umum adalah tempat pengobatan'
          />
          <CardLayanan
            image={Polianak}
            title='Poli Anak'
            deskripsi='Poli Anak adalah tempat pengobatan'
          />
          <CardLayanan
            image={Poligigi}
            title='Poli Gigi'
            deskripsi='Poli Gigi adalah tempat pengobatan'
          />
        </div>
      </div>

      <div className='flex flex-col mt-10 gap-8 px-4 md:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='w-full md:w-1/2 relative flex'>
            <img src={Poliumum2} alt="Poli Umum" className='bg-blue-500 rounded-tr-[15vh] border-4 w-full' />
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-1'>
            <p className='font-light text-lg'>Poli Umum</p>
            <h1 className='font-bold text-2xl md:text-3xl'>Poli Umum</h1>
            <p className='text-base font-bold'>
              Poli Umum adalah layanan kesehatan dasar yang disediakan di banyak klinik, pusat kesehatan, dan rumah sakit.
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <p className='font-light text-lg'>Poli Anak</p>
            <h1 className='font-bold text-2xl md:text-3xl'>Poli Anak</h1>
            <p className='text-base font-bold'>
              Poli Anak adalah layanan pemeriksaan dan pengobatan terhadap bayi dan anak sakit langsung oleh dokter spesialis anak yang berkompeten di bidangnya.
            </p>
          </div>
          <div className='w-full md:w-1/2 relative'>
            <img src={Polianak2} alt="Poli Anak" className='bg-blue-500 rounded-tl-[15vh] border-4 w-full ' />
          </div>
        </div>  
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='w-full md:w-1/2 relative'>
            <img src={Poligigi2} alt="Poli Gigi" className='bg-blue-500 rounded-tr-[15vh] w-full' />
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <p className='font-light text-lg'>Poli Gigi</p>
            <h1 className='font-bold text-2xl md:text-3xl'>Poli Gigi</h1>
            <p className='text-base font-bold mb-10 md:mb-0'>
              Poli Gigi adalah salah satu jenis pelayanan kesehatan gigi yang bertujuan untuk menjaga kesehatan gigi dan mulut pasien secara umum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layanan;
