import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
const About = () => {
  return (
  

<div className=' bg-gray-800'>
    <div className='container mx-auto py-20  px-5'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <section className=' space-y-7 lg:max-w-md'>
            <p className=' text-xl text-white leading-4  opacity-50 tracking-widest' data-aos='fade-left'>About Me</p>
            <h1 className=' text-white text-2xl lg:text-3xl font-semibold w-full md:w-3/4 ' data-aos='fade-left'>Web-developer Over One And Half Year Eperience In Front-end-development</h1>
           
            <p className=' text-lg text-white' data-aos='fade-left'>Intrested To Do Clients Projects Of Abroad Like Dubai And More <br /> Serious About Work And Consisteny Person </p>
           <button data-aos='fade-left' className=' text-yellow-600  border-b-2 border-yellow-300  mt-5 mb-5 text-xl font-bold p-1 flex items-center gap-4'>
            My Story{''}
            <FaArrowRight className='flex text-sm hover:translate-x-2 transition duration-200 hover:scale-75' />
           </button>
</section>

<div className=' space-y-7'>
    
    <p className=' text-2xl md:text-3xl text-white' data-aos='fade-up'> You can&apos;t use up creativity, the more you use, more you have in your signifant mind. and you have to do things by your self</p>
    <p className=' mt-5 text-white'  data-aos='fade-up'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo cupiditate nobis vitae possimus minima adipisci, reprehenderit veniam quisquam quod nisi, repellat culpa? Id magni cumque accusantium? Magnam nemo voluptatibus dignissimos?</p>


<div className=' grid grid-cols-2 gap-4 mt-10'>
   <div className=' flex items-center  gap-2'>
    <p className='  text-2xl md:text-4xl  font-bold text-orange-300'  data-aos='fade-up'>1.5</p>
    <p className=' text-white font-bold text-xl'  data-aos='fade-up'>Years Of Experience</p>
   </div>
   <div className=' flex items-center  gap-2'>
   <p className='  text-2xl md:text-4xl  font-bold text-orange-300'  data-aos='fade-up'>20+</p>
    <p className='  font-bold text-white text-xl'  data-aos='fade-up'>Project&apos;s Completed</p>
 
   </div>
   
</div>
</div>


      </div>
    </div>
    </div>
  )
}

export default About

