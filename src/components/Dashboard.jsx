import Jakarta from '../assets/dashimage.jpeg'

const Dashboard =()=> {
    return (
        <div className='relative max-w-full min-h-[75vh] bg-dashimage bg-center bg-cover'>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500  opacity-60"></div>
            <div className='z-10 relative flex flex-col justify-end items-center h-[40vh] text-white gap-4'>
                <h1 className='text-3xl font-bold'>Puskesmas Lore Utara</h1>
                <p className='w-[70%] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, nisi sit amet sodales dictum, ex metus lobortis ex, ac dictum odio quam ac nibh. In pellentesque lobortis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla malesuada sapien et enim fringilla venenatis.</p>
            </div>
            <div className='z-10 relative text-white font-bold flex gap-9 justify-center mt-5 text-base'>
                <button className='w-40 h-10 bg-blue-800 rounded-md'>Kontak</button>
                <button className='w-40 h-10 text-black bg-white rounded-md'>Pelajari</button>
            </div>
        </div>
    )
}

export default Dashboard