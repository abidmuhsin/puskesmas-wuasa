// src/components/FadeInOnScroll.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInOnScroll = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya muncul sekali ketika elemen pertama kali masuk viewport
    threshold: 1, // Berapa banyak elemen yang harus terlihat sebelum memicu animasi
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity translate-x-1 duration-1000 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
