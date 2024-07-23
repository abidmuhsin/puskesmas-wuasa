// src/pages/AboutUs.js
import React from 'react';
import Cardmember  from '../container/Cardmember.jsx';
import Image from '../assets/logo-puskesmas.png'

const AboutUs = () => {
    return (
        <div>
            <div>
                <h1>About Us</h1>
                <p>Ini adalah halaman Tentang Kami.</p>
            </div>
            <div>

            </div>
            <div className='flex gap-5 justify-center'>
                <Cardmember 
                Imagemember={Image}
                Title='Abid Muhsin'
                Description='Kelas semua dan lain lain'/>
                <Cardmember 
                Imagemember={Image}
                Title='Abid Muhsin'
                Description='Kelas semua dan lain lain'/>
                <Cardmember 
                Imagemember={Image}
                Title='Abid Muhsin'
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
