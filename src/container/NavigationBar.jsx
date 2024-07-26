import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='flex justify-around w-[50%] m-10 '>
      <button
        className={`text-blue-500 h-8 w-[25%]  ${isActive('/semua') ? 'bg-blue-800 text-white rounded-3xl' : 'text-blue-900 bg-white'}`}
        onClick={() => handleNavigation('/semua')}
      >
        Semua
      </button>
      <button
        className={`text-blue-500 h-8 w-[25%] ${isActive('/staff') ? 'bg-blue-800 text-white rounded-3xl' : 'text-blue-900 bg-white'}`}
        onClick={() => handleNavigation('/staff')}
      >
        Staff
      </button>
      <button
        className={`text-blue-500 h-8 w-[25%] ${isActive('/dokter') ? 'bg-blue-800 text-white rounded-3xl' : 'text-blue-900 bg-white'}`}
        onClick={() => handleNavigation('/dokter')}
      >
        Dokter
      </button>
      <button
        className={`text-blue-500 h-8 w-[25%] ${isActive('/perawat') ? 'bg-blue-800 text-white rounded-3xl' : 'text-blue-900 bg-white'}`}
        onClick={() => handleNavigation('/perawat')}
      >
        Perawat
      </button>
    </div>
  );
};

export default NavigationBar;
