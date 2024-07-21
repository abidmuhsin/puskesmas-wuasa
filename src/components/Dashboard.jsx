import AutoSlider from '../container/AutoSlider.jsx';
import content from '../assets/dashboard-content.png'

const Dashboard =()=> {
    return (
        <div className='relative max-w-full min-h-[75vh] bg-center bg-cover'>
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
            <div className='max-w-full min-h-[70vh] flex'>
                <div className='w=[50%] h-[70vh] flex flex-col justify-center items-left gap-5 px-20 '>
                    <h1 className='text-3xl text-blue-900 font-bold '>Puskesmas Lore Utara Desa Wuasa</h1>
                    <p className=''>Puskesmas Lore Utara adalah pusat kesehatan masyarakat yang berada di sekitar daerah desa wuasa</p>
                    <button className='flex items-left bg-blue-600 rounded-full w-fit px-8 py-3 text-white'>Selengkapnya</button>
                </div>
                <div className='w-[50vh] h-[50vh] flex justify-center items-center'>
                    <img src={content} alt="" />
                </div>
            </div>
           
        </div>
    )
}

export default Dashboard