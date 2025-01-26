import React from 'react'
import log from '../Assets/happy-logo-BmSVFBBt.png'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
const Navbar = () => {

    const itemsnav = [
        {
            id:1,
            title:'Home',
            link:'#'
        },
        {
            id:1,
            title:'About',
            link:'#'
        },
        {
            id:1,
            title:'Contact',
            link:'#'
        },
        {
            id:1,
            title:'Services',
            link:'#'
        }
    ]
  return (
    <div className='bg-gray-700'>
        <div className="conatiner flex justify-between items-center mx-10  ">
         <div className=' flex items-center ' data-aos='fade-in'>
            <Image  alt='' src={log} className='w-28 mt-1'/> <p className=' text-white text-lg font-bold'>ALi&apos;s <span className=' text-yellow-500'>Portfolio</span>
            </p>
         </div>
         <div >
            <ul className='hidden md:flex gap-10 justify-center' key={''}>
                {
                    itemsnav.map((item ) => (
                        
                       <li key={item.id} className=' text-white font-bold text-xl'>
                        <a href={item.link} className='list-none'> 
                           {item.title}
                        </a>
                       </li>
                      
                    ))
                }
            </ul>
         <div className=' md:hidden'>
            <GiHamburgerMenu  className=' text-white'/>
         </div>
         </div>
      </div>
    </div>
  )
}

export default Navbar
