// src/pages/AboutUs.js
import React from 'react';
import image1 from '../assets/mas al.jpg'
import image2 from '../assets/inul.jpg'
import image3 from '../assets/alief.jpg'
import image4 from '../assets/jema.jpg'
import Cardmember from '../container/Cardmember.jsx';
import background1 from '../assets/logo-puskesmas.png'
import FadeInOnScroll from '../container/FadeInOnScroll.jsx';
import background from '../assets/dashboard2.jpeg'
import about from '../assets/dashboard.jpeg'
import about2 from '../assets/dashboard2.jpeg'
import about3 from '../assets/dashboard3.jpeg'
import about4 from '../assets/dashboard-content.png'
import Footer from '../components/Footer.jsx'
import { AiTwotonePhone } from "react-icons/ai"; 
import { BiPhone } from "react-icons/bi"; 
import { CiLocationOn } from "react-icons/ci"; 
import { AiFillYoutube } from "react-icons/ai"; 
import { FaTiktok } from "react-icons/fa"; 
import { AiOutlineInstagram } from "react-icons/ai"; 



const AboutUs = () => {
    const image = [
        background1
    ];
    const images = [image1, image1, image1, image1];

    return (
        <div className="w-full h-screen">
            <FadeInOnScroll>
            <div className='relative max-w-full min-h-[90vh] bg-cover bg-center ' style={{ backgroundImage: `url(${background})`}}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-500  opacity-60"></div>
                    <div className='z-10 relative flex flex-col justify-center items-center h-[90vh] text-white gap-4'>
                        <div className='flex gap-24 justify-center w-full min-h-[10vh] items-center'>
                            <img src={about} alt="" className='w-48 h-60 mt-16 object-cover'/>
                            <img src={about2} alt="" className='w-48 h-60 object-cover'/>
                            <img src={about3} alt="" className='w-48 h-60 mt-16 object-cover '/>
                            <img src={about4} alt="" className='w-48 h-60 object-cover'/>
                        </div>
                        <h1 className='text-[40px] font-bold mt-5'>Sejarah Puskesmas</h1>
                        <p className='w-[50%] text-center font-bold text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, nisi sit amet sodales di.</p>
                    </div>
            </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
            <div className='w-full h-[30vh] flex flex-col justify-center items-center gap-3'>
                <h1 className='font-bold text-2xl'>Visi</h1>
                <p className='text-center w-[70%] '>Puskesmas Lore Utara adalah pusat keseluruhan masyarakat yang berada di sekitar daerah desa wuasa yang dimanfaatkan sebagai konsultasi kesehatan dan pengobatan masyarakat</p>
            </div>
            </FadeInOnScroll>
      <div className='flex flex-col justify-center items-center mt-10'>
        <FadeInOnScroll>
        <h1 className='text-2xl font-bold'>Jajaran Manajemen</h1>
      <div className='flex gap-5 justify-center mt-8'>
                <Cardmember 
                    Imagemember={image1}
                    Title='John Doe'
                    Description='Kelas semua dan lain lain'/>
                <Cardmember 
                    Imagemember={image2}
                    Title='John Cena'
                    Description='Kelas semua dan lain lain'/>
                <Cardmember 
                    Imagemember={image3}
                    Title='Jeremy Teti'
                    Description='Kelas semua dan lain lain'/>
                <Cardmember 
                    Imagemember={image4}
                    Title='Abid Muhsin'
                    Description='Kelas semua dan lain lain'/>
            </div>
            </FadeInOnScroll>
      </div>
      <div className='flex flex-col justify-center items-center mt-10'>
        <FadeInOnScroll>
        <h1 className='text-2xl font-bold'>Jajaran DOkter</h1>
      <div className='flex gap-5 justify-center mt-8'>
                <Cardmember 
                    Imagemember={image1}
                    Title='John Doe'
                    Description='Kelas semua dan lain lain'/>
                <Cardmember 
                    Imagemember={image2}
                    Title='John Cena'
                    Description='Kelas semua dan lain lain'/>
                <Cardmember 
                    Imagemember={image3}
                    Title='Jeremy Teti'
                    Description='Kelas semua dan lain lain'/>
                <Cardmember 
                    Imagemember={image4}
                    Title='Abid Muhsin'
                    Description='Kelas semua dan lain lain'/>
            </div>
            </FadeInOnScroll>
      </div>
      <div className='flex flex-col justify-center items-center mt-10'>
        <FadeInOnScroll>
        <h1 className='text-2xl font-bold'>Jajaran Perawat</h1>
      <div className='flex gap-5 justify-center mt-8'>
                <Cardmember 
                    Imagemember={image1}
                    Title='John Doe'
                    Description='Kelas semua dan lain lain'/>
                <Cardmember 
                    Imagemember={image2}
                    Title='John Cena'
                    Description='Kelas semua dan lain lain'/>
                <Cardmember 
                    Imagemember={image3}
                    Title='Jeremy Teti'
                    Description='Kelas semua dan lain lain'/>
                <Cardmember 
                    Imagemember={image4}
                    Title='Abid Muhsin'
                    Description='Kelas semua dan lain lain'/>
            </div>
            </FadeInOnScroll>
      </div>
      <FadeInOnScroll>
                    <div className="font-bold text-xl h-32 w-full flex justify-between items-center bg-slate-300 mt-9">
                        <h1 className="ml-16">Production by KKN 108 UNTAD Desa Wuasa</h1>
                        <div className="flex mr-16 text-[9vh] gap-4">
                            <AiOutlineInstagram className="bg-white p-2 rounded-3xl"/>
                            <FaTiktok className="bg-white p-2 rounded-3xl"/>
                            <AiFillYoutube className="bg-white p-2 rounded-3xl" />
                        </div>
                    </div>
                    </FadeInOnScroll>
                    <FadeInOnScroll>
                    <div className="flex justify-evenly my-16">
                        <div className="w-[15%] flex flex-col h-[30vh]] p-5 gap-4">
                            <h1 className="font-bold">Link Cepat</h1>
                            <ul className="flex flex-col gap-2">
                                <li>Beranda</li>
                                <li>Beranda</li>
                                <li>Beranda</li>
                                <li>Beranda</li>
                            </ul>
                        </div>
                        <div className="w-[15%] h-[30vh] p-5 flex flex-col gap-4">
                            <h1 className="font-bold">Halaman Lain</h1>
                            <ul className="flex flex-col gap-2">
                                <li>Contact</li>
                                <li>Contact</li>
                                <li>Contact</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="w-[15%] h-[30vh] p-5  flex flex-col gap-5">
                            <div className="flex gap-3 items-center">
                                <CiLocationOn className="text-3xl text-center"/>
                                <div>
                                    <h1 className="text-base font-bold">Info Kontak</h1>
                                    <p>0823456789</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <BiPhone className="text-3xl text-center" />
                                <div>
                                    <h1 className="text-base font-bold">Lokasi</h1>
                                    <p>Jl. Yos Sudarso</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="w-[20%] h-[20%] p-5 flex flex-col gap-3">
                            <h1 className="font-bold">Panggilan Darurat</h1>
                            <p className="">Segera Lakukan Panggilan Ketika Dalam Keadaan Darurat</p>
                            <div className="flex w-40 h-8 items-center bg-blue-900 text-white justify-center gap-2 font-bold ">
                                <AiTwotonePhone className="text-xl"/>
                                <h1>08223456789</h1>
                            </div>
                        </div>
                    </div>
                    </FadeInOnScroll>
                    <Footer/>
            
        </div>
    );
};

export default AboutUs;
