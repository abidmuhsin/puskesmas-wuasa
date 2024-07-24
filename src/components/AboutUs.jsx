// src/pages/AboutUs.js
import React from 'react';
import { Cardmember } from '../container/Cardmember.jsx';
import Image from '../assets/logo-puskesmas.png';
import background1 from '../assets/dashboard.jpeg';
import image1 from '../assets/dashboard2.jpeg';

const AboutUs = () => {
    const image = [
        background1
    ];
    const images = [image1, image1, image1, image1];

    return (
        <div className="min-h-[10vh]">
            <div className='relative max-w-full h-[90vh] bg-cover' style={{ backgroundImage: `url(${image})` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-500 opacity-60 h-full bg-cover bg-center"></div>
                <div className='z-10 relative flex flex-col items-center h-full text-white'>
                    <div className='flex justify-center gap-4 mt-4'>
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`image-${index}`}
                                className={`w-60 h-60 object-cover ${index % 2 === 0 ? 'mt-5' : 'mt-20'}`}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col items-center mt-4"> 
                        <h1 className='text-[40px] font-bold'>Puskesmas Lore Utara</h1>
                        <p className='w-[70%] text-center text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, nisi sit amet sodales dictum, ex metus lobortis ex, ac dictum odio quam ac nibh. In pellentesque lobortis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla malesuada sapien et enim fringilla venenatis.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 justify-center mt-8'>
                <Cardmember 
                    Imagemember={Image}
                    Title='John Doe'
                    Description='Kelas semua dan lain lain'/>
                <Cardmember 
                    Imagemember={Image}
                    Title='John Cena'
                    Description='Kelas semua dan lain lain'/>
                <Cardmember 
                    Imagemember={Image}
                    Title='Jeremy Teti'
                    Description='Kelas semua dan lain lain'/>
                <Cardmember 
                    Imagemember={Image}
                    Title='Abid Muhsin'
                    Description='Kelas semua dan lain lain'/>
                <Cardmember 
                    Imagemember={Image}
                    Title='Abid Muhsin'
                    Description='Kelas semua dan lain lain'/>
            </div>
        </div>
    );
};

export default AboutUs;
