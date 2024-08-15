// AutoSlider.js
import React, { useState, useEffect } from 'react';
import dashboard from '../assets/puskes2.jpg'
import dashboard2 from '../assets/puskes1.jpg'
import dashboard3 from '../assets/puskes3.jpg'
import { Link } from 'react-router-dom'

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    dashboard,
    dashboard2,
    dashboard3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Ganti slide setiap 3 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      
      {/* Slider Background */}
      <div
        className="absolute inset-0 flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full"
            style={{ backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-cyan-400 opacity-50" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center flex-col text-center text-white p-4">
        <h1 className="text-4xl font-bold mb-4">Puskesmas Wuasa</h1>
        <p className="text-lg mb-8 w-[80%]">Puskesmas Wuasa adalah sebuah Pusat Kesehatan Masyarakat (Puskesmas) yang berlokasi di Wuasa, sebuah desa yang berada di wilayah Kabupaten Poso, Kecamatan Lore Utara, Indonesia..</p>
        <div className='flex gap-10'>
          <Link to='/kontak'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Kontak
          </button>
          </Link>
          <Link to='/aboutus'>
          <button className='bg-white hover:bg-slate-800 text-black hover:text-white font-bold py-2 px-4 rounded'>Pelajari</button>
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
