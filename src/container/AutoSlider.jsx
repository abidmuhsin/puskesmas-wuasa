// AutoSlider.js
import React, { useState, useEffect } from 'react';
import dashboard from '../assets/dashboard.jpeg'
import dashboard2 from '../assets/dashboard2.jpeg'
import dashboard3 from '../assets/dashboard3.jpeg'

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
        <h1 className="text-4xl font-bold mb-4">Puskesmas Lore Utara</h1>
        <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis dictum nulla, vel placerat mi faucibus vel. Proin ut odio tempor, rhoncus orci at, aliquet ante..</p>
        <div className='flex gap-10'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Kontak
          </button>
          <button className='bg-white hover:bg-slate-800 text-black hover:text-white font-bold py-2 px-4 rounded'>Pelajari</button>
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
