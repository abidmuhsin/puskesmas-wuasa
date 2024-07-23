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
import Inul from '../assets/inul.jpg'
import Alief from '../assets/alief.jpg'
import Mas from '../assets/mas al.jpg'
import Jema from '../assets/jema.jpg'

const Dashboard =()=> {
    return (
        <div className='relative max-w-full h-[170vh] bg-center bg-cover'>
            <AutoSlider/>
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-500  opacity-60"></div>
            <div className='z-10 relative flex flex-col justify-end items-center h-[40vh] text-white gap-4'>
                <h1 className='text-[40px] font-bold'>Puskesmas Lore Utara</h1>
                <p className='w-[70%] text-center font-bold text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, nisi sit amet sodales dictum, ex metus lobortis ex, ac dictum odio quam ac nibh. In pellentesque lobortis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla malesuada sapien et enim fringilla venenatis.</p>
            </div>
            <div className='z-10 relative text-white font-bold flex gap-9 justify-center mt-8 text-base'>
                <button className='w-40 h-10 bg-blue-800 hover:bg-blue-950 rounded-md'>Kontak</button>
                <button className='w-40 h-10 text-black bg-white rounded-md hover:bg-slate-600 hover:text-white'>Pelajari</button>
            </div> */}
            <div className='max-w-full min-h-[100vh] flex justify-left items-center'>
                <FadeInOnScroll>
                <div className='h-[70vh] w-[80%] flex flex-col justify-center items-left gap-4 px-20 text-blue-900'>
                    <h1 className='text-3xl text-blue-900 font-bold '>Puskesmas Lore Utara Desa Wuasa</h1>
                    <p className=''>Puskesmas Lore Utara adalah pusat kesehatan masyarakat yang berada di sekitar daerah desa wuasa</p>
                    <button className='flex items-left bg-blue-600 rounded-full w-fit px-8 py-3 text-white'><Link to="/aboutus">Selengkapnya</Link></button>
                    <div className="flex flex-row gap-5 my-5">
                        <div className="my-2">
                            <GiHealthNormal className="text-[10vh]" />  
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-2xl">Visi Puskesmas</h1>
                            <p>Puskesmas Lore Utara adalah pusat kesehatan masyarakat yang berada di sekitar didaerah desa wuasa</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 my-5">
                        <div className="my-2">
                            <FaBook className="text-[10vh]" />  
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-2xl">Misi Puskesmas</h1>
                            <p>Puskesmas Lore Utara adalah pusat kesehatan masyarakat yang berada di sekitar didaerah desa wuasa</p>
                        </div>
                    </div>
                </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                <div className='w-[50vh] h-[75vh] flex flex-row'>   
                        <img src={content} alt="" className='pt-20 bg-blue-500 rounded-tl-[15vh] border border-blue-500 border-4 absolute top-[2vh] right-[30vh] w-[50vh] z-10'/>
                        <div className='relative w-96 h-70 top-[10vh] right-[20vh] bg-gradient-to-t from-blue-500 to-blue-400 rounded-br-[15vh] z-0'>
                        </div>
                        
                </div>
                </FadeInOnScroll>
                
            </div>
                <div className="bg-slate-300 max-w-full min-h-[30vh] flex items-center justify-evenly gap-8 mt-8 text-blue-900">
                    <FadeInOnScroll>
                        <DataCard
                        Image={<BiMedal/>}
                        Title='10'
                        Description='10 Tahun Lebih Berdiri'/>
                    </FadeInOnScroll>
                    <FadeInOnScroll>
                        <DataCard
                        Image={<BsFillPersonFill/>}
                        Title='356+'
                        Description='Penanganan Pasien'/>
                    </FadeInOnScroll>
                    <FadeInOnScroll>
                        <DataCard
                        Image={<GoPerson/>}
                        Title='12+'
                        Description='Dokter dan Staff'/>
                    </FadeInOnScroll>
                    <FadeInOnScroll>
                        <DataCard
                        Image={<CiHospital1/>}
                        Title='15+'
                        Description='Ruangan Puskesmas'/>
                    </FadeInOnScroll>
                   
                </div>
                <div className="max-w-full min-h-[80vh] border border-b-1 flex flex-row justify-evenly items-center ml-16 mt-14 text-blue-900">
                    <div className="flex flex-col justify-center items-left">
                        <FadeInOnScroll>
                        <h1 className="font-bold text-2xl">Puskesmas Lore Utara <br/> Menyediakan Layanan Medis</h1>
                        <p>Ada beberapa layanan yang disediakan oleh Puskesmas Lore Utara Desa Wuasa</p>
                        <button className="w-52 h-14 bg-blue-500 rounded-3xl text-white hover:bg-blue-800 my-5">Selengkapnya</button>
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
                    <div className="w-[40%] h-[55vh] bg-gradient-to-t from-blue-700 to-blue-500 text-white flex flex-col items-left p-8 rounded-3xl ">
                    <FadeInOnScroll>
                        <h1 className="text-xl font-bold mb-2">Waktu Beroperasi</h1>
                        <p className="mb-3">Puskesmas Lore Utara memiliki waktu beroperasi sebagai berikut:</p>
                        <h1 className="font-bold">Senin - Kamis</h1>
                        <div className="flex gap-2 items-center gap-2 my-1">
                            <AiOutlineClockCircle className="text-lg gap-2" />
                            <p> Pagi : 08.00 - 12.00</p>
                        </div>
                        <div className="flex gap-2 items-center gap-2 my-1">
                            <AiOutlineClockCircle className="text-lg" />
                            <p> Siang : 13.00 - 17.00</p>
                        </div>
                        <h1 className="font-bold">Jumat - Sabtu</h1>
                        <div className="flex gap-2 items-center my-1">
                            <AiOutlineClockCircle className="text-lg" />
                            <p> Pagi : 08.00 - 12.00</p>
                        </div>
                        <div className="flex gap-2 items-center my-1">
                            <AiOutlineClockCircle className="text-lg" />
                            <p> Siang : 15.00 - 18.00</p>
                        </div>
                        </FadeInOnScroll>
                    </div>
                </div>
                <div className="max-w-full text-blue-900">
                    <FadeInOnScroll>
                        <h1 className="text-center font-bold text-3xl mt-20">Tim Medis <br/> Puskesmas Lore Utara</h1>
                        <p className="text-center text-lg mt-3 mb-9">Tim Medis Lore Utara yang sangat berkualitas</p>
                        <div className="flex justify-center gap-8 ">
                            <Cardmember
                            Imagemember={Inul}
                            Title='Inul Daratista'
                            Description='Bendahara'
                            />
                            <Cardmember
                            Imagemember={Alief}
                            Title='Alief Surya Ningsih'
                            Description='Sekretaris'
                            />
                            <Cardmember
                            Imagemember={Mas}
                            Title='Aldi Saputra'
                            Description='Anggota 1'
                            />
                            <Cardmember
                            Imagemember={Jema}
                            Title='Jeremy Reinaldi Mansa'
                            Description='Koordinator Desa'
                            />
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
                    <div className="flex justify-evenly">
                        <div className="w-[15%] h-[30vh]] p-5 bg-slate-500">
                            <h1>Link Cepat</h1>
                            <ul>
                                <li>Beranda</li>
                                <li>Beranda</li>
                                <li>Beranda</li>
                                <li>Beranda</li>
                                <li>Beranda</li>
                            </ul>
                        </div>
                        <div className="w-[15%] h-[30vh] p-5 bg-slate-500">
                            <h1>Halaman Lain</h1>
                            <ul>
                                <li>Contact</li>
                                <li>Contact</li>
                                <li>Contact</li>
                                <li>Contact</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="w-[15%] h-[30vh] p-5 bg-slate-500">
                            <div>
                                <h1>Info Kontak</h1>
                                <CiLocationOn />
                            </div>
                            <div className="">
                                <h1>Lokasi</h1>
                                <BiPhone />
                            </div>
                        </div>
                        <div className="w-[15%] h-[20%] p-5 bg-slate-500">
                            <h1>Panggilan Darurat</h1>
                            <p>Segera Lakukan Panggilan Ketika Dalam Keadaan Darurat</p>
                            <div>
                                <AiTwotonePhone />
                                <h1>08223456789</h1>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Dashboard