import { BsFillTelephoneFill } from "react-icons/bs"; 
import { HiLocationMarker } from "react-icons/hi"; 
import { AiFillContacts } from "react-icons/ai"; 
import logoPuskesmas from '../assets/logo-puskesmas.png'

const Navbar =()=> {
    return (
        <div className='max-w-full border border-b-black text-blue-800'>
            <div className="flex justify-between h-[15vh]">
                <div className='flex items-center mx-8 gap-2'>
                    <img src={logoPuskesmas} alt="" className='w-18 h-14' />
                    <h1 className='text-2xl font-bold'>Puskesmas Lore Utara</h1>
                </div>
                <div className='flex gap-5 mx-16 items-center'>
                    <div className="flex items-center">
                        <HiLocationMarker className="text-[7vh] rounded-md mx-3 border border-black p-1"/>
                        <div>
                            <h2 className="text-sm font-bold">Lokasi</h2>
                            <p className="text-sm">Jl. Yompudono No.09</p>
                        </div>
                    </div>
                    <div className="flex items-center ml-4">
                        <BsFillTelephoneFill className="text-[7vh] rounded-md mx-3 border border-black p-2"/>
                        <div>
                            <h2 className="text-sm font-bold">Kontak</h2>
                            <p className="text-sm">082345678912383</p>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="max-w-full min-h-14 flex items-center">
                <ul className="flex text-base font-bold ml-10 gap-16">
                    <li><a href="">Beranda</a></li>
                    <li><a href="">Tentang Kami</a></li>
                    <li><a href="">Layanan</a></li>
                    <li><a href="">Tim Media</a></li>
                    <li><a href="">Artikel</a></li>
                    <li><a href="">Kontak</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar