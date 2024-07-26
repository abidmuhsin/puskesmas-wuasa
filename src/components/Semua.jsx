import React from 'react'
import NavigationBar from '../container/NavigationBar'
import SearchTab from '../components/SearchTab.jsx'
import FadeInOnScroll from '../container/FadeInOnScroll.jsx'
import image1 from '../assets/mas al.jpg'
import image2 from '../assets/inul.jpg'
import image3 from '../assets/alief.jpg'
import image4 from '../assets/jema.jpg'
import Cardmember from '../container/Cardmember.jsx'

export const Semua = () => {

  const images = [ image1, image2, image3, image4]

  return (
    <div className=''>
      <div className='flex justify-between'>
        <NavigationBar/>
        <SearchTab/>
      </div>
      <div className='flex flex-col justify-center items-center mt-10'>
        <div className='flex gap-5 flex-wrap justify-center mt-8'>
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
            </div>
    </div>
  )
}

export default Semua
