// import React, { useState } from 'react'
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
// import Modal from 'react-modal';

// export const Layanan = () => {
//   const modalStyles = {
//     content: {
//       position: 'absolute',
//       zindex: '20',
//       width: '80%',
//       maxWidth: '800px',
//       margin: 'auto',
//       padding: '20px',
//       background: 'white',
//       borderRadius: '10px',
//       overflow: 'hidden',
//     },
//     overlay: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: 'rgba(0, 0, 0, 0.8)',
//     },
//     closeButton: {
//       position: 'absolute',
//       top: '10px',
//       right: '10px',
//       fontSize: '24px',
//       color: 'white',
//       background: 'transparent',
//       border: 'none',
//       cursor: 'pointer',
//     },
//     image: {
//       width: '100%',
//       height: 'auto',
//     },
//   };
//   const background = [
//     dashboard
//   ]
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState('');

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div className='w-full h-screen'>
//         <FadeInOnScroll>
//       <div className='relative max-w-full md:min-h-[75vh] min-h-[50vh] bg-cover bg-center ' style={{ backgroundImage: `url(${background})`}}>
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-500  opacity-60"></div>
//               <div className='z-10 relative flex flex-col justify-center items-center md:h-[73vh] h-[50vh] text-white gap-4'>
//                   <h1 className='md:text-[40px] text-[30px] font-bold'>Penyajian Layanan</h1>
//                   <p className='md:w-[80%] w-[70%] text-center md:text-base text-[14px]'>Puskesmas Desa Wuasa menyediakan pemeriksaan umum, layanan ibu dan anak, imunisasi, gawat darurat, dan konsultasi kesehatan. Kami siap melayani kebutuhan kesehatan masyarakat dengan profesionalisme dan kepedulian.</p>
//               </div>
//       </div>
//       </FadeInOnScroll>
//     {/* Galeri Layanan */}
//     <div className='flex flex-col items-center justify-center gap-2 mt-10'>
//         <FadeInOnScroll>
//           <p className='text-lg mt-5'>Galeri Layanan</p>
//         </FadeInOnScroll>
//         <FadeInOnScroll>
//           <h1 className='font-bold text-2xl md:mx-0 mx-4'>Galeri Layanan Puskesmas Desa Wuasa</h1>
//         </FadeInOnScroll>
//         <FadeInOnScroll>
//           <h2 className='font-semibold mb-5 md:mx-0 mx-4'>Berikut adalah gambar-gambar terkait layanan yang kami sediakan:</h2>
//         </FadeInOnScroll>
//         <FadeInOnScroll>
//           <div className='flex gap-8 flex-wrap justify-center mb-10'>
//             <img
//               src={kpuskesmas}
//               alt="Kepala Puskesmas"
//               className='cursor-pointer w-32 h-32 object-cover'
//               onClick={() => openModal(kpuskesmas)}
//             />
//             <img
//               src={loket}
//               alt="Loket"
//               className='cursor-pointer w-32 h-32 object-cover'
//               onClick={() => openModal(loket)}
//             />
//             <img
//               src={ruanginap}
//               alt="Ruang Inap 1"
//               className='cursor-pointer w-32 h-32 object-cover'
//               onClick={() => openModal(ruanginap)}
//             />
//             <img
//               src={ruanginap2}
//               alt="Ruang Inap 2"
//               className='cursor-pointer w-32 h-32 object-cover'
//               onClick={() => openModal(ruanginap2)}
//             />
//             <img
//               src={ruanginap3}
//               alt="Ruang Inap 3"
//               className='cursor-pointer w-32 h-32 object-cover'
//               onClick={() => openModal(ruanginap3)}
//             />
//           </div>
//         </FadeInOnScroll>
//       </div>
//       {/* Akhir Galeri Layanan */}
      
    
//       <div className='flex flex-col items-center justify-center gap-2 mt-10 bg-slate-200'>
//         <FadeInOnScroll>
//         <p className='text-lg mt-5'>Jenis Layanan</p>
//         </FadeInOnScroll>
//         <FadeInOnScroll>
//         <h1 className='font-bold text-2xl md:mx-0 mx-4'>Jenis Layanan Puskesmas Desa Wuasa</h1>
//         </FadeInOnScroll>
//         <FadeInOnScroll>
//         <h2 className='font-semibold mb-5 md:mx-0 mx-4'>Terdapat macam macam layanan yang ada di di puskesmas desa wuasa</h2>
//         </FadeInOnScroll>
//         <FadeInOnScroll>
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
//         </FadeInOnScroll>
//       </div>
//       <div className='flex flex-col'>
//         <FadeInOnScroll>
//         <div className='w-full flex md:h-[60vh] h-[30vh] justify-center items-center md:gap-20 gap-5'>
//             <div className='w-[50vh] h-[35vh] hidden md:flex'> 
//               <img src={Poliumum} alt="" className='bg-blue-500 rounded-tr-[15vh] border border-blue-500 border-4 w-[70vh] z-10 absolute left-44'/>
//               <div className='relative w-32 h-20 top-[30vh] right-36 bg-gradient-to-t from-blue-500 to-blue-400 rounded-bl-[6vh] rounded-tr-[6vh] z-10'></div>
//             </div>        
//             <div className='md:w-[30%] w-[80%] flex flex-col gap-1'>
//               <p className='font-light text-lg'>Poli Umum</p>
//               <h1 className='font-bold text-3xl'>Poli Umum</h1>
//               <p className='text-base font-bold'>Poli Umum adalah Layanan kesehatan dasar yang disediakan di banyak klinik, pusat kesehatan, dan rumah sakit.</p>
//             </div>
//         </div>
//         </FadeInOnScroll>
//         <FadeInOnScroll>
//         <div className='w-full flex md:h-[60vh] h-[30vh] justify-center items-center gap-20'>
//             <div className='md:w-[30%] w-[80%] flex flex-col gap-1'>
//               <p className='font-light text-lg'>Poli Anak</p>
//               <h1 className='font-bold text-3xl'>Poli Anak</h1>
//               <p className='text-base font-bold'>Poli Anak adalah Layanan pemeriksaan dan pengobatan terhadap bayi dan anak sakit langsung oleh Dokter Spesialis Anak yang berkompeten di bidangnya</p>
//             </div>
//             <div className='w-[50vh] h-[35vh] md:flex hidden'>   
//               <img src={Polianak} alt="" className='bg-blue-500 rounded-tl-[15vh] border border-blue-500 border-4 w-[70vh] z-10 absolute right-44 rounded-br-[15vh]'/>
//               <div className='relative w-32 h-20 top-[30vh] right-10 bg-gradient-to-t from-blue-500 to-blue-400 rounded-br-[6vh] rounded-tl-[6vh] z-10'></div>
//             </div>        
//         </div>
//         </FadeInOnScroll>
//         <FadeInOnScroll>
//         <div className='w-full flex md:h-[60vh] h-[30vh] justify-center items-center gap-20'>
//             <div className='w-[50vh] h-[35vh] md:flex hidden'>   
//               <img src={Poligigi} alt="" className='bg-blue-500 rounded-tr-[15vh] border border-blue-500 border-4 w-[70vh] z-10 absolute left-44'/>
//               <div className='relative w-32 h-20 top-[30vh] right-36 bg-gradient-to-t from-blue-500 to-blue-400 rounded-bl-[6vh] rounded-tr-[6vh] z-10'></div>
//             </div>
//             <div className='md:w-[30%] w-[80%] flex flex-col gap-1'>
//               <p className='font-light text-lg'>Poli Gigi</p>
//               <h1 className='font-bold text-3xl'>Poli Gigi</h1>
//               <p className='text-base font-bold'>Poli Gigi adalah salah satu jenis pelayanan kesehatan gigi yang bertujuan untuk menjaga kesehatan gigi dan mulut pasien secara umum</p>
//             </div>        
//         </div>
//         </FadeInOnScroll>
//       </div>
//       <Footer/>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={modalStyles}
//         contentLabel="Image Modal"
//       >
//         <button onClick={closeModal} style={modalStyles.closeButton}>&times;</button>
//         <img src={selectedImage} alt="Selected" style={modalStyles.image} />
//       </Modal>
//     </div>
//   )
// }

// export default Layanan



import React, { useState } from 'react'
import FadeInOnScroll from '../container/FadeInOnScroll.jsx'
import dashboard from '../assets/dashboard.jpeg'
import kpuskesmas from '../assets/rkepalapuskesmas.jpg'
import loket from '../assets/loket.jpg'
import ruanginap from '../assets/rawatinap.jpg'
import ruanginap2 from '../assets/ruanginap2.jpg'
import ruanginap3 from '../assets/ruanginap3.jpg'
import CardLayanan from '../container/CardLayanan.jsx'
import Poliumum from '../assets/poli-umum.jpg'
import Poligigi from '../assets/poli-gigi.jpg'
import Polianak from '../assets/poli-anak.jpg'
import Footer from '../components/Footer.jsx'
import Modal from 'react-modal';

export const Layanan = () => {
  const modalStyles = {
    content: {
      position: 'absolute',
      zIndex: '100',
      width: '80%',
      maxWidth: '800px',
      margin: 'auto',
      top: '25vh',
      padding: '',
      background: 'white',
      borderRadius: '10px',
      overflow: 'hidden',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      fontSize: '24px',
      color: 'white',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
  };

  const background = [dashboard];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='w-full h-screen'>
      <FadeInOnScroll>
        <div className='relative max-w-full md:min-h-[75vh] min-h-[50vh] bg-cover bg-center ' style={{ backgroundImage: `url(${background})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-500 opacity-60"></div>
          <div className='z-10 relative flex flex-col justify-center items-center md:h-[73vh] h-[50vh] text-white gap-4'>
            <h1 className='md:text-[40px] text-[30px] font-bold'>Penyajian Layanan</h1>
            <p className='md:w-[80%] w-[70%] text-center md:text-base text-[14px]'>Puskesmas Desa Wuasa menyediakan pemeriksaan umum, layanan ibu dan anak, imunisasi, gawat darurat, dan konsultasi kesehatan. Kami siap melayani kebutuhan kesehatan masyarakat dengan profesionalisme dan kepedulian.</p>
          </div>
        </div>
      </FadeInOnScroll>
      {/* Galeri Layanan */}
      <div className='flex flex-col items-center justify-center gap-2 mt-10'>
        <FadeInOnScroll>
          <p className='text-lg mt-5'>Galeri Layanan</p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <h1 className='font-bold text-2xl md:mx-0 mx-4'>Galeri Layanan Puskesmas Desa Wuasa</h1>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <h2 className='font-semibold mb-5 md:mx-0 mx-4'>Berikut adalah gambar-gambar terkait layanan yang kami sediakan:</h2>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className='flex gap-4 overflow-x-auto pb-4'>
            <img
              src={kpuskesmas}
              alt="Kepala Puskesmas"
              className='cursor-pointer w-32 h-32 object-cover flex-shrink-0'
              onClick={() => openModal(kpuskesmas)}
            />
            <img
              src={loket}
              alt="Loket"
              className='cursor-pointer w-32 h-32 object-cover flex-shrink-0'
              onClick={() => openModal(loket)}
            />
            <img
              src={ruanginap}
              alt="Ruang Inap 1"
              className='cursor-pointer w-32 h-32 object-cover flex-shrink-0'
              onClick={() => openModal(ruanginap)}
            />
            <img
              src={ruanginap2}
              alt="Ruang Inap 2"
              className='cursor-pointer w-32 h-32 object-cover flex-shrink-0'
              onClick={() => openModal(ruanginap2)}
            />
            <img
              src={ruanginap3}
              alt="Ruang Inap 3"
              className='cursor-pointer w-32 h-32 object-cover flex-shrink-0'
              onClick={() => openModal(ruanginap3)}
            />
          </div>
        </FadeInOnScroll>
      </div>
      {/* Akhir Galeri Layanan */}

      <div className='flex flex-col items-center justify-center gap-2 mt-10 bg-slate-200'>
        <FadeInOnScroll>
          <p className='text-lg mt-5'>Jenis Layanan</p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <h1 className='font-bold text-2xl md:mx-0 mx-4'>Jenis Layanan Puskesmas Desa Wuasa</h1>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <h2 className='font-semibold mb-5 md:mx-0 mx-4'>Terdapat macam macam layanan yang ada di puskesmas desa wuasa</h2>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className='flex gap-8 flex-wrap justify-center mb-10'>
            <CardLayanan
              image={Poliumum}
              title='Poli Umum'
              deskripsi='Poli Umum adalah tempat pengobatan' />
            <CardLayanan
              image={Polianak}
              title='Poli Anak'
              deskripsi='Poli Umum adalah tempat pengobatan' />
            <CardLayanan
              image={Poligigi}
              title='Poli Gigi'
              deskripsi='Poli Umum adalah tempat pengobatan' />
          </div>
        </FadeInOnScroll>
      </div>
      <div className='flex flex-col'>
        <FadeInOnScroll>
          <div className='w-full flex md:h-[60vh] h-[30vh] justify-center items-center md:gap-20 gap-5'>
            <div className='w-[50vh] h-[35vh] hidden md:flex'>
              <img src={Poliumum} alt="" className='bg-blue-500 rounded-tr-[15vh] border border-blue-500 border-4 w-[70vh] z-10 absolute left-44' />
              <div className='relative w-32 h-20 top-[30vh] right-36 bg-gradient-to-t from-blue-500 to-blue-400 rounded-bl-[6vh] rounded-tr-[6vh] z-10'></div>
            </div>
            <div className='md:w-[30%] w-[80%] flex flex-col gap-1'>
              <p className='font-light text-lg'>Poli Umum</p>
              <h1 className='font-bold text-3xl'>Poli Umum</h1>
              <p className='text-base font-bold'>Poli Umum adalah Layanan kesehatan dasar yang disediakan di banyak klinik, pusat kesehatan, dan rumah sakit.</p>
            </div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className='w-full flex md:h-[60vh] h-[30vh] justify-center items-center gap-20'>
            <div className='md:w-[30%] w-[80%] flex flex-col gap-1'>
              <p className='font-light text-lg'>Poli Anak</p>
              <h1 className='font-bold text-3xl'>Poli Anak</h1>
              <p className='text-base font-bold'>Poli Anak adalah Layanan pemeriksaan dan pengobatan terhadap bayi dan anak sakit langsung oleh Dokter Spesialis Anak yang berkompeten di bidangnya</p>
            </div>
            <div className='w-[50vh] h-[35vh] md:flex hidden'>
              <img src={Polianak} alt="" className='bg-blue-500 rounded-tl-[15vh] border border-blue-500 border-4 w-[70vh] z-10 absolute right-44 rounded-br-[15vh]' />
              <div className='relative w-32 h-20 top-[30vh] right-10 bg-gradient-to-t from-blue-500 to-blue-400 rounded-br-[6vh] rounded-tl-[6vh] z-10'></div>
            </div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className='w-full flex md:h-[60vh] h-[30vh] justify-center items-center gap-20'>
            <div className='w-[50vh] h-[35vh] md:flex hidden'>
              <img src={Poligigi} alt="" className='bg-blue-500 rounded-tr-[15vh] border border-blue-500 border-4 w-[70vh] z-10 absolute left-44' />
              <div className='relative w-32 h-20 top-[30vh] right-36 bg-gradient-to-t from-blue-500 to-blue-400 rounded-bl-[6vh] rounded-tr-[6vh] z-10'></div>
            </div>
            <div className='md:w-[30%] w-[80%] flex flex-col gap-1'>
              <p className='font-light text-lg'>Poli Gigi</p>
              <h1 className='font-bold text-3xl'>Poli Gigi</h1>
              <p className='text-base font-bold'>Poli Gigi adalah salah satu jenis pelayanan kesehatan gigi yang bertujuan untuk menjaga kesehatan gigi dan mulut pasien secara umum</p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
      <Footer />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Image Modal"
      >
        <button onClick={closeModal} style={modalStyles.closeButton}>&times;</button>
        <img src={selectedImage} alt="Selected" style={modalStyles.image} />
      </Modal>
    </div>
  )
}

export default Layanan
