import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import assets from '../Assets/linkdin.png'
import img2 from '../Assets/localhost_3001 and 1 more page - Profile 1 - Microsoft​ Edge 08_11_2024 19_39_09.png'
import img3 from '../Assets/React Foodie Website - Profile 1 - Microsoft​ Edge 01_09_2024 14_30_49.png'
import img4 from '../Assets/Untitled and 2 more pages - Profile 1 - Microsoft​ Edge 08_11_2024 19_44_11.png'
import img5 from '../Assets/Untitled and 2 more pages - Profile 1 - Microsoft​ Edge 08_11_2024 19_43_10.png'
import Image from 'next/image'

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'Linkdin-Clone',
      img: assets
    },
    {
      id: 2,
      title: 'Cab-Website',
      img: img2
    },
    {
      id: 3,
      title: 'Fodiee-Website',
      img: img3
    },
    {
        id: 4,
        title: 'Panaverse-Website',
        img: img4
      },
      {
        id: 5,
        title: 'Coffee-Shop',
        img: img5
      }
  ]

  return (
    <div className='bg-gray-900'>
      <div className='container mx-auto py-20 px-5'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <section className='space-y-7 lg:max-w-md'>
            <p className='text-xl text-white leading-4 opacity-50 tracking-widest' data-aos='fade-left'>- My Projects</p>
            <h1 className='text-white text-2xl lg:text-3xl font-semibold w-full md:w-3/4' data-aos='fade-left'>
              All Creative And Selected Projects
            </h1>
            <p className='text-lg text-white' data-aos='fade-left'>
              All I Have Made By Alishan Rahil <br /> Serious About Work And Consistency Person
            </p>
            <button
              data-aos='fade-left'
              className='text-yellow-600 border-b-2 border-yellow-300 mt-5 mb-5 text-xl font-bold p-1 flex items-center gap-4'
            >
              Explore More
              <FaArrowRight className='flex text-sm hover:translate-x-2 transition duration-200 hover:scale-75' />
            </button>
          </section>

       {projects.map((item) => (
                <div key={item.id} className='space-y-7'>
      <div className='relative' data-aos='fade-up'>
                <Image
                  src={item.img}
                  className='w-full rounded-lg shadow-lg hover:scale-105 transition duration-300'
                  alt={item.title}
                  layout='responsive'
                  width={500}
                  height={300}
                />
                <div className='absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white'>
                  <h3 className='text-xl font-bold'>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
