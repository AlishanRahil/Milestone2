import React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from "react-icons/fa6";

import { FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


const Contact = () => {
  return (
    <div className=' bg-gray-800'>
      <div className="container mx-auto py-10" data-aos='fade-down-right'>
        <h1 className=' text-center  mb-6 text-2xl md:text-4xl font-bold text-yellow-400'>Contact Me </h1>
        <div className=' shadow-lg md:w-[550px] px-5 pt-5 w-[400px] h-[550px] p-5 md:h-[710px] bg-yellow-400 mx-auto rounded-xl'>
        <div className=' flex flex-col gap-10 items-start justify-start'>
         <div className=' flex items-center gap-5 mt-5'>

            <MdEmail className='text-black text-2xl md:text-6xl'/>
            <p className=' text-2xl  md:text-3xl'>alishanrahil407@gmail.com</p>
         </div>
         <div className=' flex items-center gap-5 mt-5'>

            <FaLocationDot className='text-black text-2xl md:text-6xl'/>
            <p className=' text-2xl  md:text-3xl'>Pakistan-Karachi</p>
         </div>
         <div className=' flex items-center gap-5 mt-5'>

            <FaPhoneAlt className='text-black text-2xl md:text-6xl'/>
            <p className=' text-2xl  md:text-3xl'>+923132571346</p>
         </div>
         <div className=' flex items-center gap-5 mt-5'>

            <TbWorld className='text-black text-2xl md:text-6xl'/>
            <p className=' text-2xl  md:text-3xl'>alishanrahil407@gmail.com</p>
         </div>
         <div className=' flex items-center gap-5 mt-5'>

            <FaLinkedin className='text-black text-2xl md:text-6xl'/>
            <p className=' text-2xl  md:text-3xl'>Alishan-Rahil</p>
         </div>
         <div className=' flex items-center gap-5 mt-5'>

<FaInstagram className='text-black text-2xl md:text-6xl'/>
<p className=' text-2xl  md:text-3xl'>Alishanrahil</p>
</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
