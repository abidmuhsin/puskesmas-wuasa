// src/pages/AboutUs.js
import React from 'react';
import images from '../assets/images.png'
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
        <h1 className='text-2xl font-bold'>Jajaran Administrator</h1>
        </FadeInOnScroll>
        <div className='flex gap-5 justify-center flex-wrap mt-8'>
        
                <Cardmember 
                    Imagemember={images}
                    Title='Helvie Etmawati Gae, SKM'
                    Description='Kepala Puskesmas Wuasa'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Noli Tagora, SKM'
                    Description='PJ Kecacingan'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Stien Towaki, SKM'
                    Description='PJ Batra'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Nini Yunita Larapos, SKM'
                    Description='PJ Klinik Gigi'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Yubtan Tangkoro'
                    Description='Petugas Schistosomiasis'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Meni Pau'
                    Description='Petugas Apotik'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Chobert Gatra Eleasar Abu'
                    Description='PJ Loket'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Bernad Roreng'
                    Description='Kesling'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Cerni Tolu'
                    Description='Petugas Schistosomiasis'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Rosda'
                    Description='Staf TU'/>
            </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-10'>
        <h1 className='text-2xl font-bold'>Jajaran Dokter</h1>
        <div className='flex gap-5 justify-center mt-8'>
                <Cardmember 
                    Imagemember={images}
                    Title='drg. Diah Ayu Lestari A.M.'
                    Description='Dokter Gigi'/>
                <Cardmember 
                    Imagemember={images}
                    Title='dr. David Matthew Toding'
                    Description='Dokter'/>
            </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-10'>
        <FadeInOnScroll>
        <h1 className='text-2xl font-bold'>Jajaran Perawat</h1>
        </FadeInOnScroll>
      <div className='flex gap-5 justify-center flex-wrap mt-8'>
                <Cardmember 
                    Imagemember={images}
                    Title='Agus Salim Suali, S.Kep.Ns'
                    Description='PJ Gudang Obat'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Ramabay Palanti'
                    Description='PJ Ispa'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Menis Boka'
                    Description='PJ Lansia'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Irmayanti Lage, A.Md.Kep'
                    Description='PJ Kesehatan Jiwa'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Paulus Massang, Amk'
                    Description='Petugas Schistosomiasis'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Frida O. Wantuk, A.Md.Kep'
                    Description='PJ PTM'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Meylani Selvia Lewo, S.Kep'
                    Description='PJ Lansia'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Retslyn Mysna T., A.Md.Kep'
                    Description='PJ Imunisasi dan Malaria'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Nia Duhriyah Sair, Amk'
                    Description='PJ UKS'/>
            </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-10'>
        <FadeInOnScroll>
        <h1 className='text-2xl font-bold'>Jajaran Bidan</h1>
        </FadeInOnScroll>
      <div className='flex gap-5 justify-center flex-wrap mt-8'>
                <Cardmember 
                    Imagemember={images}
                    Title='Marlisna Tolibo, SST'
                    Description='Kepala Ruangan Kamar Bersalin'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Ketty Wahyuni, S.Tr.Keb'
                    Description='PJ KB'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Herliyanti Br. Sembiring, A.Md.Keb'
                    Description='Pengelola JKN'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Firginia Nelloh, A.Md.Keb'
                    Description='Staf Kamar Bersalin'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Sunariarti, S.Tr.Keb'
                    Description='KTU dan PJ Hepatitis'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Agustin Susanti Agnes Lakengke, A.Md.Keb'
                    Description='PJ HIV'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Agusdiana, A.Md.Keb'
                    Description='PJ Kespro'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Rahal Y. Sandingku, A.Md.Keb'
                    Description='Pengelola BOK dan PJ Remaja'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Darmi Susianti, A.Md.Keb'
                    Description='PJ Ibu'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Martina Bonggadika, A.Md.Keb'
                    Description='Bidan Desa Bongi-bongi'/>
                <Cardmember 
                    Imagemember={images}
                    Title='Vivin Sandini Boka, A.Md.Keb'
                    Description='Bidan Koordinator Surveilens '/>
                <Cardmember 
                    Imagemember={images}
                    Title='Nensi Indriani Mangki, A.Md.Keb'
                    Description='PJ Anak'/>
            </div>
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
