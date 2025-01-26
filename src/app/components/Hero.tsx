import React from 'react'
import Image from 'next/image'
import person from '../Assets/person-j01VA7mM.png'
import { FaArrowRight, FaDribbble, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Hero = () => {
  return (
    <main className=' bg-gray-700 text-white'>
        <div className=' container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 md:min-h-[580px] min-h-[600px] place-items-center'>
            <div className=' grid  grid-cols-2  gap-4'>
             <div className=''>
                <h1 className=' text-2xl md:text-6xl font-bold md:mt-32 mt-16 ' data-aos='fade-right'>Alishan Rahil</h1>
             <div className=' h-[4px] w-[30px] bg-yellow-300'>

             </div>
             </div>
             <div className=' w-full flex justify-center md:block mt-10 mr-24'>
                <Image src={person} alt='waitng' className=' scale-110 relative z-10 min-w-[150px] md:max-w-full' />
             </div>
            </div>
            <div className=' space-y-5 text-start md:text-left'>
            <p className=' text-sm md:text-xl leading-4  opacity-50 tracking-widest' data-aos='fade-left'>Introduction</p>
            <h1 className=' text-2xl lg:text-3xl font-semibold w-full  md:w-1/2 ' data-aos='fade-left'>Product Designer and Developer, based in California.</h1>
           
            <p className=' text-sm' data-aos='fade-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt, autem quo, accusantium sint quod ab vitae quaerat nostrum consectetur nisi dolorum laborum quam quia earum, doloribus consequatur officia enim!</p>
           <button data-aos='fade-left' className=' text-yellow-300  border-b-2 border-yellow-300  mt-5 mb-5 text-xl font-bold p-1 flex items-center gap-4'>
            My Story{''}
            <FaArrowRight className='flex text-sm hover:translate-x-2 transition duration-200 hover:scale-75' />
           </button>

           <div className=' flex gap-6 justify-center md:justify-start mt-10'>
            <FaDribbble className=' text-3xl hover:scale-110 duration-200 cursor-pointer'/>
            <FaLinkedin className=' text-3xl hover:scale-110 duration-200 cursor-pointer'/>
            <FaInstagram className=' text-3xl hover:scale-110 duration-200 cursor-pointer'/>
           </div>
            </div>

            </div>
        </div>
      
    </main>
  )
}

export default Hero


