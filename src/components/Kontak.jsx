// import { AiFillClockCircle } from "react-icons/ai"; 
// import { AiTwotoneMail } from "react-icons/ai"; 
// import { AiFillPhone } from "react-icons/ai"; 
// import { BiLocationPlus } from "react-icons/bi"; 
// import dashboard from '../assets/dashboard.jpeg'
// import KontakCard from '../container/KontakCard.jsx'
// import Map from '../container/Map.jsx';
// import React, { useState } from 'react';
// import Footer from "../components/Footer.jsx";
// import { AiTwotonePhone } from "react-icons/ai"; 
// import { BiPhone } from "react-icons/bi"; 
// import { CiLocationOn } from "react-icons/ci"; 
// import { AiFillYoutube } from "react-icons/ai"; 
// import { FaTiktok } from "react-icons/fa"; 
// import { AiOutlineInstagram } from "react-icons/ai"; 
// import FadeInOnScroll from "../container/FadeInOnScroll.jsx";


// export const Kontak = () => {
//   const background = [
//     dashboard
//   ]
//     const [formData, setFormData] = useState({
//       name: '',
//       gender: '',
//       kkNumber: '',
//       phone: '',
//       message: '',
//     });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log(formData);
//       // Tambahkan logika untuk menangani pengiriman formulir, misalnya mengirim data ke server
//     };

//   return (
//     <div className="w-full h-screen">
//       <FadeInOnScroll>
//       <div className='relative max-w-full min-h-[75vh] bg-cover bg-center ' style={{ backgroundImage: `url(${background})`}}>
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-500  opacity-60"></div>
//               <div className='z-10 relative flex flex-col justify-center items-center h-[75vh] text-white gap-4'>
//                   <h1 className='text-[40px] font-bold'>Hubungi Kami</h1>
//                   <p className='w-[50%] text-center font-bold text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, nisi sit amet sodales dictum, ex metus lobortis ex, ac dictum odio quam ac nibh. In pellentesque lobortis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla malesuada sapien et enim fringilla venenatis.</p>
//               </div>
//       </div>
//       </FadeInOnScroll>
//       <div className="flex my-8">
//         <div className="max-w-[40%] flex flex-wrap gap-10 m-7">
//           <FadeInOnScroll>
//           <KontakCard 
//           Icon={<BiLocationPlus />}
//           Title='Lokasi'
//           Description='Jl. Yos Sudarso No.9'/>
//           </FadeInOnScroll>
//           <FadeInOnScroll>
//           <KontakCard 
//           Icon={<AiFillPhone />}
//           Title='Telepon'
//           Description='08223456788'/>
//           </FadeInOnScroll>
//           <FadeInOnScroll>
//           <KontakCard 
//           Icon={<AiTwotoneMail />}
//           Title='Email'
//           Description='puskesmaswuasa @gmail.com'/>
//           </FadeInOnScroll>
//           <FadeInOnScroll>
//           <KontakCard 
//           Icon={<AiFillClockCircle />}
//           Title='Jam Operasional'
//           Description='09.00 - 12.00'/>
//           </FadeInOnScroll>
//           <div className="w-full">
//             <FadeInOnScroll className=''>
//             <Map className='m-5'/>
//             </FadeInOnScroll>
//           </div>
//         </div>
//         <div>
//         <div className="max-w-[120vh] mx-auto p-6 bg-white rounded-md shadow-md gap-8 flex flex-col">
//           <FadeInOnScroll>
//             <h2 className="text-2xl font-bold mb-10">Contact Form</h2>
//             </FadeInOnScroll>
//             <form onSubmit={handleSubmit}>
//               <FadeInOnScroll>
//               <div className="mb-4 flex flex-col gap-5">
//                 <label htmlFor="name" className="block text-[3vh] font-medium text-gray-700">
//                   Nama
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="mt-1 block w-[100vh] p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                 />
//               </div>
//               </FadeInOnScroll>
//               <FadeInOnScroll>
//               <div className="mb-4 flex flex-col gap-5">
//                 <label htmlFor="gender" className="block font-medium text-gray-700 text-[3vh]">
//                   Jenis Kelamin
//                 </label>
//                 <select
//                   name="gender"
//                   id="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border w-[100vh] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                 >
//                   <option value="">Pilih Jenis Kelamin</option>
//                   <option value="male">Laki-laki</option>
//                   <option value="female">Perempuan</option>
//                 </select>
//               </div>
//               </FadeInOnScroll>
//               <FadeInOnScroll>
//               <div className="mb-4 flex flex-col gap-5">
//                 <label htmlFor="kkNumber" className="block text-[3vh] font-medium text-gray-700">
//                   Nomor KK
//                 </label>
//                 <input
//                   type="text"
//                   name="kkNumber"
//                   id="kkNumber"
//                   value={formData.kkNumber}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border w-[100vh] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                 />
//               </div>
//               </FadeInOnScroll>
//               <FadeInOnScroll>
//               <div className="mb-4 flex flex-col gap-5">
//                 <label htmlFor="phone" className="block  font-medium text-gray-700 text-[3vh]">
//                   Nomor Telepon
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   id="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                 />
//               </div>
//               </FadeInOnScroll>
//               <FadeInOnScroll>
//               <div className="mb-4 flex flex-col gap-5">
//                 <label htmlFor="message" className="block font-medium text-gray-700 text-[3vh]">
//                   Pesan
//                 </label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="mt-1 block w-full h-[28vh] p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   rows="4"
//                   required
//                 ></textarea>
//               </div>
//               </FadeInOnScroll>
//               <FadeInOnScroll>
//               <button
//                 type="submit"
//                 className="w-full h-16 text-xl font-bold bg-blue-800 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >
//                 Submit
//               </button>
//               </FadeInOnScroll>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   )
// }
// export default Kontak


import { AiFillClockCircle, AiTwotoneMail, AiFillPhone, AiTwotonePhone, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai"; 
import { BiLocationPlus, BiPhone } from "react-icons/bi"; 
import { CiLocationOn } from "react-icons/ci"; 
import { FaTiktok } from "react-icons/fa"; 
import dashboard from '../assets/dashboard.jpeg'
import KontakCard from '../container/KontakCard.jsx'
import Map from '../container/Map.jsx';
import React, { useState } from 'react';
import Footer from "../components/Footer.jsx";
import FadeInOnScroll from "../container/FadeInOnScroll.jsx";

export const Kontak = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    kkNumber: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Tambahkan logika untuk menangani pengiriman formulir, misalnya mengirim data ke server
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <FadeInOnScroll>
        <div className='relative w-full h-[50vh] md:h-[60vh] lg:h-[75vh] bg-cover bg-center' style={{ backgroundImage: `url(${dashboard})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-500 opacity-60"></div>
          <div className='z-10 relative flex flex-col justify-center items-center h-full text-white gap-4 p-4'>
            <h1 className='text-3xl md:text-4xl lg:text-[40px] font-bold text-center'>Hubungi Kami</h1>
            <p className='w-full md:w-3/4 lg:w-1/2 text-center font-bold text-base md:text-lg'>
              
            </p>
          </div>
        </div>
      </FadeInOnScroll>
      
      <div className="flex flex-col md:flex-row my-8 px-4 md:px-10">
        <div className="flex-1 flex flex-wrap gap-10 mb-8 md:mb-0">
          <FadeInOnScroll>
            <KontakCard 
              Icon={<BiLocationPlus />}
              Title='Lokasi'
              Description='Jl. Yos Sudarso No.9'/>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <KontakCard 
              Icon={<AiFillPhone />}
              Title='Telepon'
              Description='08223456788'/>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <KontakCard 
              Icon={<AiTwotoneMail />}
              Title='Email'
              Description='puskesmaswuasa@gmail.com'/>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <KontakCard 
              Icon={<AiFillClockCircle />}
              Title='Jam Operasional'
              Description='09.00 - 12.00'/>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Map />
          </FadeInOnScroll>
        </div>
        
        <div className="flex-1 max-w-[1200px] mx-auto bg-white rounded-md shadow-md p-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold mb-8">Contact Form</h2>
          </FadeInOnScroll>
          <form onSubmit={handleSubmit}>
            <FadeInOnScroll>
              <div className="mb-4 flex flex-col">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nama</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="mb-4 flex flex-col">
                <label htmlFor="gender" className="block text-lg font-medium text-gray-700">Jenis Kelamin</label>
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="male">Laki-laki</option>
                  <option value="female">Perempuan</option>
                </select>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="mb-4 flex flex-col">
                <label htmlFor="kkNumber" className="block text-lg font-medium text-gray-700">Nomor KK</label>
                <input
                  type="text"
                  name="kkNumber"
                  id="kkNumber"
                  value={formData.kkNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="mb-4 flex flex-col">
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Nomor Telepon</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="mb-4 flex flex-col">
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Pesan</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  rows="4"
                  required
                ></textarea>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <button
                type="submit"
                className="w-full h-12 text-lg font-bold bg-blue-800 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </FadeInOnScroll>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Kontak;
