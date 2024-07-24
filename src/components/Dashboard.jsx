import AutoSlider from '../container/AutoSlider.jsx';
import content from '../assets/dashboard-content.png'

const Dashboard =()=> {
    return (
        <div className='relative max-w-full min-h-[75vh] bg-center bg-cover'>
            <AutoSlider/>
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