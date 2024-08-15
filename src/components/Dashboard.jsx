import { AiTwotonePhone } from "react-icons/ai"; 
import { BiPhone } from "react-icons/bi"; 
import { CiLocationOn } from "react-icons/ci"; 
import { AiFillYoutube } from "react-icons/ai"; 
import { FaTiktok } from "react-icons/fa"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { AiOutlineClockCircle } from "react-icons/ai"; 
import { BsFillEarFill } from "react-icons/bs"; 
import { FaTeeth } from "react-icons/fa"; 
import { FaHandHoldingHeart } from "react-icons/fa"; 
import { FaBook } from "react-icons/fa"; 
import { GiHealthNormal } from "react-icons/gi"; 
import { MdChildCare } from "react-icons/md"; 
import { GoPerson } from "react-icons/go"; 
import { CiHospital1 } from "react-icons/ci"; 
import { BsFillPersonFill } from "react-icons/bs"; 
import { BiMedal } from "react-icons/bi"; 
import AutoSlider from '../container/AutoSlider.jsx';
import content from '../assets/dashboard-content2.png'
import { Link } from 'react-router-dom'
import FadeInOnScroll from '../container/FadeInOnScroll.jsx'
import { DataCard } from '../container/DataCard.jsx';
import Cardmember from '../container/Cardmember.jsx'
import images from '../assets/images.png'
import Footer from '../components/Footer.jsx'

const Dashboard =()=> {
    return (
        <div className='relative max-w-full h-[170vh] bg-center bg-cover z-1'>
            <FadeInOnScroll>
            <AutoSlider/>
            </FadeInOnScroll>
            <section id="visi-misi" className='max-w-full min-h-[120vh] md:min-h-[100vh] flex justify-center items-center'>
                <FadeInOnScroll>
                <div className='h-[70vh] md:w-[80%] w-full md:mt-0 xs:mt-5 mt-16 flex flex-col justify-center items-left gap-4 md:px-20 px-10 text-blue-900'>
                    <h1 className='text-3xl text-blue-900 font-bold '>Puskesmas Wuasa Desa Wuasa</h1>
                    <p className=''>Puskesmas Wuasa adalah pusat kesehatan masyarakat yang berada di sekitar daerah desa wuasa</p>
                    <button className='flex items-left bg-blue-600 rounded-full w-fit px-8 py-3 text-white'><Link to="/aboutus">Selengkapnya</Link></button>
                    <div className="flex flex-row gap-5 my-5">
                        <div className="my-2">
                            <GiHealthNormal className="text-[10vh]" />  
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-2xl">Visi Puskesmas</h1>
                            <p>Puskesmas Wuasa adalah pusat kesehatan masyarakat yang berada di sekitar didaerah desa wuasa</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 my-5">
                        <div className="my-2">
                            <FaBook className="text-[10vh]" />  
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-2xl">Misi Puskesmas</h1>
                            <p>Puskesmas Wuasa adalah pusat kesehatan masyarakat yang berada di sekitar didaerah desa wuasa</p>
                        </div>
                    </div>
                </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                <div className='w-[50vh] h-[75vh] hidden md:flex flex-row'>   
                    <img src={content} alt="" className='pt-20 bg-blue-500 rounded-tl-[15vh] border border-blue-500 border-4 absolute top-[2vh] right-[30vh] w-[50vh] z-10'/>
                    <div className='relative w-96 h-70 top-[10vh] right-[20vh] bg-gradient-to-t from-blue-500 to-blue-400 rounded-br-[15vh] z-0'>
                    </div>
                </div>
                </FadeInOnScroll>
            </section>
                <div className="bg-slate-300 max-w-full min-h-[30vh] flex flex-row flex-wrap items-center justify-evenly gap-8 md:mt-8 mt-0 py-5 md:py-0 text-blue-900">
                    <FadeInOnScroll>
                        <DataCard
                        Image={<BiMedal/>}
                        Title='10'
                        Description='10 Tahun Lebih Berdiri'/>
                    </FadeInOnScroll>
                    <FadeInOnScroll>
                        <DataCard
                        Image={<BsFillPersonFill/>}
                        Title='2,4 juta+'
                        Description='Penanganan Pasien'/>
                    </FadeInOnScroll>
                    <FadeInOnScroll>
                        <DataCard
                        Image={<GoPerson/>}
                        Title='33+'
                        Description='Dokter dan Staff'/>
                    </FadeInOnScroll>
                    <FadeInOnScroll>
                        <DataCard
                        Image={<CiHospital1/>}
                        Title='15+'
                        Description='Ruangan Puskesmas'/>
                    </FadeInOnScroll>
                   
                </div>
                <section id="layanan-medis" className="max-w-full min-h-[80vh] border border-b-1 flex md:flex-row flex-col justify-evenly items-center md:ml-16 ml-3 md:mx-0 mx-5 mt-14 text-blue-900">
                    <div className="flex flex-col justify-center items-left">
                        <FadeInOnScroll>
                        <h1 className="font-bold text-2xl">Puskesmas Wuasa <br/> Menyediakan Layanan Medis</h1>
                        <p>Ada beberapa layanan yang disediakan oleh Puskesmas Wuasa Desa Wuasa</p>
                        <Link to='/layanan'><button className="w-52 h-14 bg-blue-500 rounded-3xl text-white hover:bg-blue-800 my-5">Selengkapnya</button></Link>
                        </FadeInOnScroll>
                        <FadeInOnScroll>
                        <div className="flex flex-col gap-5 font-semibold mt-4">
                            <div className="flex gap-3 items-center">
                                <MdChildCare className="text-[8vh] rounded-full bg-blue-300 p-2" />
                                <p>Pelayanan Ibu dan Anak</p>
                            </div>
                            <div className="flex gap-3 items-center ">
                                <FaHandHoldingHeart className="text-[8vh] rounded-full bg-blue-300 p-2" />
                                <p>Pelayanan Lanjut Usia</p>
                            </div>
                            <div className="flex gap-3 items-center ">
                                <FaTeeth className="text-[8vh] rounded-full bg-blue-300 p-2" />
                                <p>Pelayanan Gigi dan Mulut</p>
                            </div>
                            <div className="flex gap-3 items-center ">
                                <BsFillEarFill className="text-[8vh] rounded-full bg-blue-300 p-2" />
                                <p>Pelayanan Telinga, Hidung, dan Tenggorokan</p>
                            </div>
                        </div>
                        </FadeInOnScroll>
                    </div>
                    <div className="md:w-[40%] w-full md:h-[50vh] h-[40vh] bg-gradient-to-t from-blue-700 to-blue-500 text-white flex flex-col items-left p-8 rounded-3xl md:mt-0 mt-10 ">
                        <FadeInOnScroll>
                        <h1 className="text-xl font-bold mb-2">Waktu Beroperasi</h1>
                        <p className="mb-3">Puskesmas Wuasa memiliki waktu beroperasi sebagai berikut:</p>
                        </FadeInOnScroll>
                        <FadeInOnScroll>
                        <h1 className="font-bold">Rawat Jalan</h1>
                        <div className="flex gap-2 items-center gap-2 my-1">
                            <AiOutlineClockCircle className="text-lg gap-2" />
                            <p> Senin - Sabtu : 08.00 - 14.00 </p>
                        </div>
                        </FadeInOnScroll>
                        <FadeInOnScroll>
                        <h1 className="font-bold">Rawat Inap</h1>
                        <div className="flex gap-2 items-center my-1">
                            <AiOutlineClockCircle className="text-lg" />
                            <p> Setiap Hari</p>
                        </div>
                        </FadeInOnScroll>
                    </div>
                </section>
                <section id="timmedis" className="max-w-full text-blue-900">
                    <FadeInOnScroll>
                        <h1 className="text-center font-bold text-3xl mt-20">Tim Medis <br/> Puskesmas Wuasa</h1>
                        <p className="text-center text-lg mt-3 mb-9">Tim Medis Lore Utara yang sangat berkualitas</p>
                    </FadeInOnScroll>
                    <FadeInOnScroll>
                        <div className="flex flex-row flex-wrap justify-center gap-8 ">
                        <Cardmember 
                        Imagemember={images}
                        Title='Helvie Etmawati Gae, SKM'
                        Description='Kepala Puskesmas Wuasa'/>
                        <Cardmember 
                        Imagemember={images}
                        Title='drg. Diah Ayu Lestari A.M.'
                        Description='Dokter Gigi'/>
                        <Cardmember 
                        Imagemember={images}
                        Title='dr. David Matthew Toding'
                        Description='Dokter'/>
                        <Cardmember 
                        Imagemember={images}
                        Title='Marlisna Tolibo, SST'
                        Description='Kepala Ruangan Kamar Bersalin'/>
                        </div>
                        </FadeInOnScroll>
                    </section>
                    <Footer/>
                    
        </div>
    )
}

export default Dashboard


// import React from 'react';
// import { AiTwotonePhone, AiFillYoutube, AiOutlineInstagram, AiOutlineClockCircle } from "react-icons/ai"; 
// import { BiPhone, BiMedal } from "react-icons/bi"; 
// import { CiLocationOn, CiHospital1 } from "react-icons/ci"; 
// import { FaTiktok, FaTeeth, FaHandHoldingHeart, FaBook } from "react-icons/fa"; 
// import { GiHealthNormal } from "react-icons/gi"; 
// import { MdChildCare } from "react-icons/md"; 
// import { GoPerson } from "react-icons/go"; 
// import { BsFillEarFill, BsFillPersonFill } from "react-icons/bs"; 
// import AutoSlider from '../container/AutoSlider.jsx';
// import content from '../assets/dashboard-content2.png';
// import { Link } from 'react-router-dom';
// import FadeInOnScroll from '../container/FadeInOnScroll.jsx';
// import { DataCard } from '../container/DataCard.jsx';
// import Cardmember from '../container/Cardmember.jsx';
// import Inul from '../assets/inul.jpg';
// import Alief from '../assets/alief.jpg';
// import Mas from '../assets/mas al.jpg';
// import Jema from '../assets/jema.jpg';
// import Footer from '../components/Footer.jsx';
// import images from '../assets/images.png'

// const Dashboard = () => {
//     return (
//         <div className='relative max-w-full min-h-screen bg-center bg-cover'>
//             <FadeInOnScroll>
//                 <AutoSlider />
//             </FadeInOnScroll>
//             <div className='max-w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-12'>
//                     <div className='flex flex-col justify-center items-start gap-4 text-blue-900 my-8 md:my-16 w-full md:w-3/4'>
//                         <h1 className='text-3xl font-bold'>Puskesmas Wuasa</h1>
//                         <p>Puskesmas Wuasa adalah pusat kesehatan masyarakat yang berada di sekitar daerah <br/> desa wuasa</p>
//                         <Link to="/aboutus">
//                             <button className='bg-blue-600 rounded-full px-8 py-3 text-white hover:bg-blue-800 transition'>
//                                 Selengkapnya
//                             </button>
//                         </Link>
//                         <div className="flex flex-col md:flex-row gap-5 my-5">
//                             <div className="my-2 flex items-center justify-center">
//                                 <GiHealthNormal className="text-[8vh] md:text-[10vh]" />
//                             </div>
//                             <div className="flex flex-col gap-3">
//                                 <h1 className="font-bold text-xl md:text-2xl">Visi Puskesmas</h1>
//                                 <p>Puskesmas Wuasa adalah pusat kesehatan masyarakat yang berada di sekitar <br/> didaerah desa wuasa</p>
//                             </div>
//                         </div>
//                         <div className="flex flex-col md:flex-row gap-5 my-5">
//                             <div className="my-2 flex items-center justify-center">
//                                 <FaBook className="text-[8vh] md:text-[10vh]" />
//                             </div>
//                             <div className="flex flex-col gap-3">
//                                 <h1 className="font-bold text-xl md:text-2xl">Misi Puskesmas</h1>
//                                 <p>Puskesmas Wuasa adalah pusat kesehatan masyarakat yang berada di sekitar <br/>didaerah desa wuasa</p>
//                             </div>
//                         </div>
//                     </div>
//                 <FadeInOnScroll>
//                     <div className='relative w-full md:w-[50vh] h-auto md:h-[75vh] flex justify-end hidden md:flex'>
//                         <img src={content} alt="Content" className='w-full md:w-[50vh] h-auto md:h-[75vh] rounded-tl-[15vh] border border-blue-500 border-4' />
//                         <div className='absolute top-0 right-0 w-full md:w-96 h-[75vh] bg-gradient-to-t from-blue-500 to-blue-400 rounded-br-[15vh] z-0'></div>
//                     </div>
//                 </FadeInOnScroll>
//             </div>
//             <div className="bg-slate-300 flex flex-col md:flex-row justify-around items-center p-8 text-blue-900 gap-8">
//                 <FadeInOnScroll>
//                     <DataCard
//                         Image={<BiMedal />}
//                         Title='10'
//                         Description='10 Tahun Lebih Berdiri'
//                     />
//                 </FadeInOnScroll>
//                 <FadeInOnScroll>
//                     <DataCard
//                         Image={<BsFillPersonFill />}
//                         Title='356+'
//                         Description='Penanganan Pasien'
//                     />
//                 </FadeInOnScroll>
//                 <FadeInOnScroll>
//                     <DataCard
//                         Image={<GoPerson />}
//                         Title='33+'
//                         Description='Dokter dan Staff'
//                     />
//                 </FadeInOnScroll>
//                 <FadeInOnScroll>
//                     <DataCard
//                         Image={<CiHospital1 />}
//                         Title='15+'
//                         Description='Ruangan Puskesmas'
//                     />
//                 </FadeInOnScroll>
//             </div>
//             <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-8 text-blue-900">
//                 <div className="flex flex-col items-start mb-8 md:mb-0 w-full md:w-1/2">
//                     <FadeInOnScroll>
//                         <h1 className="font-bold text-2xl md:text-3xl mb-4">Puskesmas Wuasa Menyediakan Layanan Medis</h1>
//                         <p>Ada beberapa layanan yang disediakan oleh Puskesmas Wuasa Desa Wuasa</p>
//                         <Link to="/services">
//                             <button className="w-52 h-14 bg-blue-500 rounded-3xl text-white hover:bg-blue-800 transition my-5">Selengkapnya</button>
//                         </Link>
//                         <div className="flex flex-col gap-5 font-semibold mt-4">
//                             <div className="flex gap-3 items-center">
//                                 <MdChildCare className="text-[6vh] md:text-[8vh] rounded-full bg-blue-300 p-2" />
//                                 <p>Pelayanan Ibu dan Anak</p>
//                             </div>
//                             <div className="flex gap-3 items-center">
//                                 <FaHandHoldingHeart className="text-[6vh] md:text-[8vh] rounded-full bg-blue-300 p-2" />
//                                 <p>Pelayanan Lanjut Usia</p>
//                             </div>
//                             <div className="flex gap-3 items-center">
//                                 <FaTeeth className="text-[6vh] md:text-[8vh] rounded-full bg-blue-300 p-2" />
//                                 <p>Pelayanan Gigi dan Mulut</p>
//                             </div>
//                             <div className="flex gap-3 items-center">
//                                 <BsFillEarFill className="text-[6vh] md:text-[8vh] rounded-full bg-blue-300 p-2" />
//                                 <p>Pelayanan Telinga, Hidung, dan Tenggorokan</p>
//                             </div>
//                         </div>
//                     </FadeInOnScroll>
//                 </div>
//                 <div className="w-full md:w-1/2 h-auto bg-gradient-to-t from-blue-700 to-blue-500 text-white p-8 rounded-3xl">
//                     <FadeInOnScroll>
//                         <h1 className="text-xl font-bold mb-2">Waktu Beroperasi</h1>
//                         <p className="mb-3">Puskesmas Wuasa memiliki waktu beroperasi sebagai berikut:</p>
//                         <div className="flex flex-col gap-2">
//                             <h1 className="font-bold">Senin - Sabtu (Rawat Jalan & Rawat Inap)</h1>
//                             <div className="flex gap-2 items-center">
//                                 <AiOutlineClockCircle className="text-lg" />
//                                 <p>Pagi-Siang : 08.00 - 14.00</p>
//                             </div>
//                             <h1 className="font-bold">Minggu (Rawat Inap)</h1>
//                             <div className="flex gap-2 items-center">
//                                 <AiOutlineClockCircle className="text-lg" />
//                                 <p>24 Jam</p>
//                             </div>
//                         </div>
//                     </FadeInOnScroll>
//                 </div>
//             </div>
//             <div className="max-w-full text-blue-900 p-4">
//                 <FadeInOnScroll>
//                     <h1 className="text-center font-bold text-3xl mt-20">Tim Medis Puskesmas Wuasa</h1>
//                     <p className="text-center text-lg mt-3 mb-9">Tim Medis Lore Utara yang sangat berkualitas</p>
//                 </FadeInOnScroll>
//                     <div className="flex flex-wrap justify-center gap-8">
//                         <FadeInOnScroll>
//                         <Cardmember 
//                     Imagemember={images}
//                     Title='Helvie Etmawati Gae, SKM'
//                     Description='Kepala Puskesmas Wuasa'/>
//                         </FadeInOnScroll>
//                         <FadeInOnScroll>
//                         <Cardmember 
//                     Imagemember={images}
//                     Title='drg. Diah Ayu Lestari A.M.'
//                     Description='Dokter Gigi'/>
//                     </FadeInOnScroll>
//                     <FadeInOnScroll>
//                 <Cardmember 
//                     Imagemember={images}
//                     Title='dr. David Matthew Toding'
//                     Description='Dokter'/>
//                     </FadeInOnScroll>
//                         <FadeInOnScroll>
//                         <Cardmember 
//                         Imagemember={images}
//                         Title='Marlisna Tolibo, SST'
//                         Description='Kepala Ruangan Kamar Bersalin'/>
//                         </FadeInOnScroll>
//                     </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Dashboard;
