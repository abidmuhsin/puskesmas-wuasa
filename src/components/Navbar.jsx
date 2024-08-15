// import { useState } from 'react';
// import { BsFillTelephoneFill } from 'react-icons/bs'; 
// import { HiLocationMarker } from 'react-icons/hi'; 
// import logoPuskesmas from '../assets/logo-puskesmas.png';
// import { Link, useLocation } from 'react-router-dom';


// const Navbar = () => {
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div className='w-full border border-b-black bg-white text-blue-800 shadow-3xl sticky z-10 top-0 '>
//       <div className="flex justify-between items-center md:h-[10vh] h-[8vh] mx-8">
//         <div className='flex items-center gap-2'>
//           <img src={logoPuskesmas} alt="Logo Puskesmas" className='md:w-14 w-10 md:h-12 h-8' />
//           <h1 className='text-sm font-bold md:text-xl'>Puskesmas Wuasa</h1>
//         </div>
//         <div className='hidden md:flex gap-5 items-center'>
//           <div className="flex items-center">
//             <HiLocationMarker className="text-[7vh] rounded-md mx-3 border border-blue-800 p-1"/>
//             <div>
//               <h2 className="text-sm font-bold">Lokasi</h2>
//               <p className="text-sm">Jl. Garuda No.361</p>
//             </div>
//           </div>
//           <div className="flex items-center ml-4">
//             <BsFillTelephoneFill className="text-[7vh] rounded-md mx-3 border border-blue-800 p-2"/>
//             <div>
//               <h2 className="text-sm font-bold">Kontak</h2>
//               <p className="text-sm">082293914600</p>
//             </div>  
//           </div>
//         </div>
//         <button
//           onClick={toggleMenu}
//           className="text-3xl md:hidden focus:outline-none"
//         >
//           &#9776;
//         </button>
//       </div>
//       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-gray-800 text-white`}>
//         <ul className="flex flex-col text-base font-bold relative">
//         <Link to="/"><li className={`py-4 px-8 hover:bg-blue-900 ${isActive('/') ? 'bg-blue-800' : 'bg-gray-800'}`}>
//             Beranda
//           </li></Link>
//           <Link to="/aboutus"><li className={`py-4 px-8 hover:bg-blue-900 ${isActive('/aboutus') ? 'bg-blue-800' : 'bg-gray-800'}`}>
//             Tentang Kami
//           </li></Link>
//           <Link to="/layanan"><li className={`py-4 px-8 hover:bg-blue-900 ${isActive('/layanan') ? 'bg-blue-800' : 'bg-gray-800'}`}>
//             Layanan
//           </li></Link>
//           <Link to="/semua"><li className={`py-4 px-8 hover:bg-blue-900 ${isActive('/semua') ? 'bg-blue-800' : 'bg-gray-800'}`}>
//             Tim Medis
//           </li></Link>
//           {/* <Link to="/artikel"><li className={`py-4 px-8 hover:bg-blue-900 ${isActive('/artikel') ? 'bg-blue-800' : 'bg-gray-800'}`}>
//             Artikel
//           </li></Link> */}
//           <Link to="/kontak"> <li className={`py-4 px-8 hover:bg-blue-900 ${isActive('/kontak') ? 'bg-blue-800' : 'bg-gray-800'}`}>
//             Kontak
//           </li></Link>
//         </ul>
//       </div>
//       <div className='hidden md:flex max-w-full min-h-15 items-center'>
//         <ul className="flex text-sm font-bold">
//           <Link to="/"><li className={`py-4 px-8 hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Beranda</li></Link>
//           <Link to="/aboutus"><li className={`py-4 px-8 hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/aboutus') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Tentang Kami</li></Link>
//           <Link to="/layanan"><li className={`py-4 px-8 hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/layanan') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Layanan</li></Link>
//           <Link to="/semua"><li className={`py-4 px-8 hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/semua') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Tim Medis</li></Link>
//           {/* <Link to="/artikel"><li className={`py-4 px-8 hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/artikel') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Artikel</li></Link> */}
//           <Link to="/kontak"><li className={`py-4 px-8 hover:bg-blue-900 hover:text-white text-blue-900 ${isActive('/kontak') ? 'bg-blue-800 text-white' : 'bg-white'}`}>Kontak</li></Link>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoPuskesmas from '../assets/logo-puskesmas.png';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(''); // Close any open dropdown when menu is toggled
  };

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? '' : menu); // Toggle dropdown visibility
  };

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown('');
  };

  return (
    <div className='w-full border border-b-black bg-white text-blue-900 shadow-3xl sticky z-10 top-0'>
      <div className="flex justify-between items-center md:h-[12vh] h-[8vh] mx-8">
        <div className='flex items-center gap-2'>
          <img src={logoPuskesmas} alt="Logo Puskesmas" className='md:w-14 w-10 md:h-12 h-8' />
          <h1 className='text-sm font-bold md:text-xl'>Puskesmas Wuasa</h1>
        </div>
        <div className='hidden md:flex gap-5 items-center'>
        <a href="https://maps.app.goo.gl/v5kK7NEFjqyNHquSA">
          <div className="flex items-center">
            <HiLocationMarker className="text-[7vh] rounded-md mx-3 border border-blue-800 p-1"/>
            <div>
              <h2 className="text-sm font-bold">Lokasi</h2>
              <p className="text-sm">Jl. Garuda No.361</p>
              
            </div>
          </div>
          </a>
          <div className="flex items-center ml-4">
            <BsFillTelephoneFill className="text-[7vh] rounded-md mx-3 border border-blue-800 p-2"/>
            <div>
              <h2 className="text-sm font-bold">Kontak</h2>
              <p className="text-sm">082293914600</p>
            </div>  
          </div>
        </div>
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className="text-blue-800 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Dropdown Menu for Mobile */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-800 text-white w-full`}>
        <ul className="flex flex-col p-4">
          <li className="relative">
            <Link to='/'>
            <button 
              onClick={() => handleDropdown('beranda')} 
              className="text-white block py-1 px-4 hover:text-gray-300"
            >
              Beranda
            </button>
            </Link>
            <div className={`absolute bg-white text-blue-800 mt-0 z-10 shadow-md ${activeDropdown === 'beranda' ? 'block' : 'hidden'} w-full`}>
              <ul className="py-1">
                <HashLink to="/#visi-misi" className="block px-4 py-1 hover:bg-gray-200"><li>Visi Misi</li></HashLink>
                <HashLink to="/#layanan-medis" className="block px-4 py-1 hover:bg-gray-200"><li>Layanan Medis</li></HashLink>
                <HashLink to="/#timmedis" className="block px-4 py-1 hover:bg-gray-200"><li>Tim Medis</li></HashLink>
              </ul>
            </div>
          </li>
          <li className="relative">
            <Link to=''>
            <button 
              onClick={() => handleDropdown('tentangKami')} 
              className="text-white block py-1 px-4 hover:text-gray-300"
            >
              Tentang Kami
            </button>
            </Link>
            <div className={`absolute bg-white text-blue-800 mt-0 shadow-md ${activeDropdown === 'tentangKami' ? 'block' : 'hidden'} w-full`}>
              <ul className="py-1">
                <li><HashLink to="/aboutus#jajaran-administrator" className="block px-4 py-1 hover:bg-gray-200">Jajaran Administrator</HashLink></li>
                <li><HashLink to="/aboutus#jajaran-bidan" className="block px-4 py-1 hover:bg-gray-200">Jajaran Bidan</HashLink></li>
                <li><HashLink to="/aboutus#jajaran-dokter" className="block px-4 py-1 hover:bg-gray-200">Jajaran Dokter</HashLink></li>
                <li><HashLink to="/aboutus#jajaran-perawat" className="block px-4 py-1 hover:bg-gray-200">Jajaran Perawat</HashLink></li>
              </ul>
            </div>
          </li>
          <li className="relative">
            <Link to='/layanan'>
            <button 
              onClick={() => handleDropdown('layanan')} 
              className="text-white block py-1 px-4 hover:text-gray-300"
            >
              Layanan
            </button>
            </Link>
            <div className={`absolute bg-white text-blue-800 mt-0 shadow-md ${activeDropdown === 'layanan' ? 'block' : 'hidden'} w-full`}>
              <ul className="py-1">
                <li><HashLink to="/galeri-layanan" className="block px-4 py-1 hover:bg-gray-200">Galeri Layanan</HashLink></li>
                <li><HashLink to="/jenis-layanan" className="block px-4 py-1 hover:bg-gray-200">Jenis Layanan</HashLink></li>
              </ul>
            </div>
          </li>
          <li>
            <HashLink to="/tim-medis" className="block py-1 px-4 hover:text-gray-300">Tim Medis</HashLink>
          </li>
          <li>
            <HashLink to="/kontak" className="block py-1 px-4 hover:text-gray-300">Kontak</HashLink>
          </li>
        </ul>
      </div>

      {/* Dropdown Menu for Web */}
      <div className='hidden md:flex bg-blue-800 text-white'>
        <ul className="flex gap-8 p-4">
          <li 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('beranda')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to='/'>
            <button className="text-white block py-1 px-4 hover:text-gray-300">
              Beranda
            </button>
            </Link>
            <div className={`absolute bg-white text-blue-800 mt-0 shadow-md ${activeDropdown === 'beranda' ? 'block' : 'hidden'} md:w-48`}>
              <ul className="py-1">
                <li><HashLink to="/#visi-misi" className="block px-4 py-1 hover:bg-gray-200">Visi Misi</HashLink></li>
                <li><HashLink to="/#layanan-medis" className="block px-4 py-1 hover:bg-gray-200">Layanan Medis</HashLink></li>
                <li><HashLink to="/#timmedis" className="block px-4 py-1 hover:bg-gray-200">Tim Medis</HashLink></li>
              </ul>
            </div>
          </li>
          <li 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('tentangKami')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to='/aboutus'>
            <button className="text-white block py-1 px-4 hover:text-gray-300">
              Tentang Kami
            </button>
            </Link>
            <div className={`absolute bg-white text-blue-800 mt-0 shadow-md ${activeDropdown === 'tentangKami' ? 'block' : 'hidden'} md:w-48`}>
              <ul className="py-1">
                <li><HashLink to="/aboutus#jajaran-administrator" className="block px-4 py-1 hover:bg-gray-200">Jajaran Administrator</HashLink></li>
                <li><HashLink to="/aboutus#jajaran-bidan" className="block px-4 py-1 hover:bg-gray-200">Jajaran Bidan</HashLink></li>
                <li><HashLink to="/aboutus#jajaran-dokter" className="block px-4 py-1 hover:bg-gray-200">Jajaran Dokter</HashLink></li>
                <li><HashLink to="/aboutus#jajaran-perawat" className="block px-4 py-1 hover:bg-gray-200">Jajaran Perawat</HashLink></li>
              </ul>
            </div>
          </li>
          <li 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('layanan')}
            onMouseLeave={handleMouseLeave}
          ><Link to='/layanan'>
            <button className="text-white block py-1 px-4 hover:text-gray-300">
              Layanan
            </button>
            </Link>
            <div className={`absolute bg-white text-blue-800 mt-0 shadow-md ${activeDropdown === 'layanan' ? 'block' : 'hidden'} md:w-48`}>
              <ul className="py-1">
                <li><HashLink to="/layanan#galerilayanan" className="block px-4 py-1 hover:bg-gray-200">Galeri Layanan</HashLink></li>
                <li><HashLink to="/layanan#jenislayanan" className="block px-4 py-1 hover:bg-gray-200">Jenis Layanan</HashLink></li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/semua" className="block py-1 px-4 hover:text-gray-300">Tim Medis</Link>
          </li>
          <li>
            <Link to="/kontak" className="block py-1 px-4 hover:text-gray-300">Kontak</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
