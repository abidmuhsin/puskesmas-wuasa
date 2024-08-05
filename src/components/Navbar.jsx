// import { BsFillTelephoneFill } from "react-icons/bs"; 
// import { HiLocationMarker } from "react-icons/hi"; 
// import { AiFillContacts } from "react-icons/ai"; 
// import logoPuskesmas from '../assets/logo-puskesmas.png'
// import { Link, useLocation } from "react-router-dom";

// const Navbar =()=> {

// const location = useLocation();
// const isActive = (path) => location.pathname === path;

// const [isOpen, setIsOpen] = useState(false);

// const toggleMenu = () => setIsOpen(!isOpen);


//     return (
//         <div className='max-w-full border border-b-black text-blue-800 shadow-3xl'>
//             <div className="flex justify-between h-[15vh] md:">
//                 <div className='flex items-center mx-8 gap-2'>
//                     <img src={logoPuskesmas} alt="" className='w-18 h-14' />
//                     <h1 className='text-2xl font-bold'>Puskesmas Lore Utara</h1>
//                 </div>
//                 <div className='flex gap-5 mx-16 items-center'>
//                     <div className="flex items-center">
//                         <HiLocationMarker className="text-[7vh] rounded-md mx-3 border border-blue-800 p-1"/>
//                         <div>
//                             <h2 className="text-sm font-bold">Lokasi</h2>
//                             <p className="text-sm">Jl. Yompudono No.09</p>
//                         </div>
//                     </div>
//                     <div className="flex items-center ml-4">
//                         <BsFillTelephoneFill className="text-[7vh] rounded-md mx-3 border border-blue-800 p-2"/>
//                         <div>
//                             <h2 className="text-sm font-bold">Kontak</h2>
//                             <p className="text-sm">082345678912383</p>
//                         </div>  
//                     </div>
//                 </div>
//             </div>
//             <div className="max-w-full min-h-14 flex items-center">
//                 <ul className="flex text-base font-bold">
//                 <Link to="/"><li className={`py-4 px-8 hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Beranda</li></Link>
//                 <Link to="/aboutus"><li className={`py-4 px-8  hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/aboutus') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Tentang Kami</li></Link>
//                 <Link to="/layanan"><li className={`py-4 px-8  hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/layanan') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Layanan</li></Link>
//                 <Link to="/semua"><li className={`py-4 px-8  hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/semua') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Tim Medis</li></Link>
//                 <Link to="/artikel"><li className={`py-4 px-8  hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/artikel') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Artikel</li></Link>
//                 <Link to="/kontak"><li className={`py-4 px-8  hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/kontak') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Kontak</li></Link>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Navbar

import { useState } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs'; 
import { HiLocationMarker } from 'react-icons/hi'; 
import logoPuskesmas from '../assets/logo-puskesmas.png';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='w-full border border-b-black bg-white text-blue-800 shadow-3xl sticky z-10 top-0 '>
      <div className="flex justify-between items-center md:h-[10vh] h-[8vh] mx-8">
        <div className='flex items-center gap-2'>
          <img src={logoPuskesmas} alt="Logo Puskesmas" className='md:w-14 w-10 md:h-12 h-8' />
          <h1 className='text-sm font-bold md:text-xl'>Puskesmas Wuasa</h1>
        </div>
        <div className='hidden md:flex gap-5 items-center'>
          <div className="flex items-center">
            <HiLocationMarker className="text-[7vh] rounded-md mx-3 border border-blue-800 p-1"/>
            <div>
              <h2 className="text-sm font-bold">Lokasi</h2>
              <p className="text-sm">Jl. Garuda No.361</p>
            </div>
          </div>
          <div className="flex items-center ml-4">
            <BsFillTelephoneFill className="text-[7vh] rounded-md mx-3 border border-blue-800 p-2"/>
            <div>
              <h2 className="text-sm font-bold">Kontak</h2>
              <p className="text-sm">082293914600</p>
            </div>  
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="text-3xl md:hidden focus:outline-none"
        >
          &#9776;
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-gray-800 text-white`}>
        <ul className="flex flex-col text-base font-bold relative z-20">
        <Link to="/"><li className={`py-4 px-8 hover:bg-blue-900 ${isActive('/') ? 'bg-blue-800' : 'bg-gray-800'}`}>
            Beranda
          </li></Link>
          <Link to="/aboutus"><li className={`py-4 px-8 hover:bg-blue-900 ${isActive('/aboutus') ? 'bg-blue-800' : 'bg-gray-800'}`}>
            Tentang Kami
          </li></Link>
          <Link to="/layanan"><li className={`py-4 px-8 hover:bg-blue-900 ${isActive('/layanan') ? 'bg-blue-800' : 'bg-gray-800'}`}>
            Layanan
          </li></Link>
          <Link to="/semua"><li className={`py-4 px-8 hover:bg-blue-900 ${isActive('/semua') ? 'bg-blue-800' : 'bg-gray-800'}`}>
            Tim Medis
          </li></Link>
          {/* <Link to="/artikel"><li className={`py-4 px-8 hover:bg-blue-900 ${isActive('/artikel') ? 'bg-blue-800' : 'bg-gray-800'}`}>
            Artikel
          </li></Link> */}
          <Link to="/kontak"> <li className={`py-4 px-8 hover:bg-blue-900 ${isActive('/kontak') ? 'bg-blue-800' : 'bg-gray-800'}`}>
            Kontak
          </li></Link>
        </ul>
      </div>
      <div className='hidden md:flex max-w-full min-h-15 items-center'>
        <ul className="flex text-sm font-bold">
          <Link to="/"><li className={`py-4 px-8 hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Beranda</li></Link>
          <Link to="/aboutus"><li className={`py-4 px-8 hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/aboutus') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Tentang Kami</li></Link>
          <Link to="/layanan"><li className={`py-4 px-8 hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/layanan') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Layanan</li></Link>
          <Link to="/semua"><li className={`py-4 px-8 hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/semua') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Tim Medis</li></Link>
          {/* <Link to="/artikel"><li className={`py-4 px-8 hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/artikel') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Artikel</li></Link> */}
          <Link to="/kontak"><li className={`py-4 px-8 hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/kontak') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Kontak</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
