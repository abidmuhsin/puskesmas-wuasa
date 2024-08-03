// import React from 'react'
// import logoPuskesmas from '../assets/logo-puskesmas.png'
// import FadeInOnScroll from '../container/FadeInOnScroll'
// import { AiTwotonePhone } from "react-icons/ai"; 
// import { BiPhone } from "react-icons/bi"; 
// import { CiLocationOn } from "react-icons/ci"; 
// import { AiFillYoutube } from "react-icons/ai"; 
// import { FaTiktok } from "react-icons/fa"; 
// import { AiOutlineInstagram } from "react-icons/ai"; 

// const Footer = () => {
//   return (
//     <div>
//       <div className="font-bold text-xl h-32 w-full flex justify-between items-center bg-slate-300 mt-9">
//                         <h1 className="ml-16">Production by KKN 108 UNTAD Desa Wuasa</h1>
//                         <div className="flex mr-16 text-[9vh] gap-4">
//                             <AiOutlineInstagram className="bg-white p-2 rounded-3xl"/>
//                             <FaTiktok className="bg-white p-2 rounded-3xl"/>
//                             <AiFillYoutube className="bg-white p-2 rounded-3xl" />
//                         </div>
//                     </div>
//                     <div className="flex justify-evenly my-16">
//                         <div className="w-[15%] flex flex-col h-[30vh]] p-5 gap-4">
//                             <h1 className="font-bold">Link Cepat</h1>
//                             <ul className="flex flex-col gap-2">
//                                 <li>Beranda</li>
//                                 <li>Beranda</li>
//                                 <li>Beranda</li>
//                                 <li>Beranda</li>
//                             </ul>
//                         </div>
//                         <div className="w-[15%] h-[30vh] p-5 flex flex-col gap-4">
//                             <h1 className="font-bold">Halaman Lain</h1>
//                             <ul className="flex flex-col gap-2">
//                                 <li>Contact</li>
//                                 <li>Contact</li>
//                                 <li>Contact</li>
//                                 <li>Contact</li>
//                             </ul>
//                         </div>
//                         <div className="w-[15%] h-[30vh] p-5  flex flex-col gap-5">
//                             <div className="flex gap-3 items-center">
//                                 <CiLocationOn className="text-3xl text-center"/>
//                                 <div>
//                                     <h1 className="text-base font-bold">Info Kontak</h1>
//                                     <p>0823456789</p>
//                                 </div>
//                             </div>
//                             <div className="flex gap-3 items-center">
//                                 <BiPhone className="text-3xl text-center" />
//                                 <div>
//                                     <h1 className="text-base font-bold">Lokasi</h1>
//                                     <p>Jl. Yos Sudarso</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-[20%] h-[20%] p-5 flex flex-col gap-3">
//                             <h1 className="font-bold">Panggilan Darurat</h1>
//                             <p className="">Segera Lakukan Panggilan Ketika Dalam Keadaan Darurat</p>
//                             <div className="flex w-40 h-8 items-center bg-blue-900 text-white justify-center gap-2 font-bold ">
//                                 <AiTwotonePhone className="text-xl"/>
//                                 <h1>08223456789</h1>
//                             </div>
//                         </div>
//                     </div>
//         <div className='flex items-center mx-8 gap-2 h-20 justify-between'>
//             <div className="flex items-center">
//                 <img src={logoPuskesmas} alt="" className='w-18 h-14' />
//                 <h1 className='text-2xl font-bold'>Puskesmas Lore Utara</h1>
//             </div>
//             <h1 className="text-slate-600">Production by KKN 108 UNTAD Desa Wuasa</h1>
//         </div>
//     </div>
                    
//   )
// }

// export default Footer

import React from 'react';
import logoPuskesmas from '../assets/logo-puskesmas.png';
import { AiTwotonePhone, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-slate-300">
      <div className="font-bold text-xl flex flex-col md:flex-row justify-between items-center p-4 md:p-8">
        <h1 className="text-center md:text-left">Production by KKN 108 UNTAD Desa Wuasa</h1>
        <div className="flex gap-4 mt-4 md:mt-0">
          <AiOutlineInstagram className="text-3xl bg-white p-2 rounded-full" />
          <FaTiktok className="text-3xl bg-white p-2 rounded-full" />
          <AiFillYoutube className="text-3xl bg-white p-2 rounded-full" />
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-around my-8 px-4 md:px-8">
        <div className="w-full md:w-1/4 p-4">
          <h1 className="font-bold mb-4">Link Cepat</h1>
          <ul className="flex flex-col gap-2">
            <li>Beranda</li>
            <li>Beranda</li>
            <li>Beranda</li>
            <li>Beranda</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <h1 className="font-bold mb-4">Halaman Lain</h1>
          <ul className="flex flex-col gap-2">
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className="flex gap-3 items-center mb-4 ">
            <CiLocationOn className="text-3xl" />
            <div>
              <h1 className="text-base font-bold">Info Kontak</h1>
              <p>0823456789</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <BiPhone className="text-3xl" />
            <div>
              <h1 className="text-base font-bold">Lokasi</h1>
              <p>Jl. Yos Sudarso</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <h1 className="font-bold mb-4">Panggilan Darurat</h1>
          <p>Segera Lakukan Panggilan Ketika Dalam Keadaan Darurat</p>
          <div className="flex items-center bg-blue-900 text-white p-2 rounded-md font-bold">
            <AiTwotonePhone className="text-xl mr-2" />
            <h1>08223456789</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-slate-200">
        <div className="flex items-center">
          <img src={logoPuskesmas} alt="Logo Puskesmas" className="w-18 h-14" />
          <h1 className="text-2xl font-bold ml-2">Puskesmas Lore Utara</h1>
        </div>
        <h1 className="text-slate-600 mt-4 md:mt-0">Production by KKN 108 UNTAD Desa Wuasa</h1>
      </div>
    </div>
  );
};

export default Footer;
