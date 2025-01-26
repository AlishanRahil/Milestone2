
import React from 'react'
import { CiPen } from 'react-icons/ci'
import { FaBoxOpen } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'

const Skills = () => {
  return (
    <div className='bg-gray-900'>
      <div className="container py-32 mx-auto text-white text-center">
        {/* Centered Heading */}
        <h2 className="text-4xl font-bold mb-10 text-yellow-300"  data-aos='fade-up'>
          What I Can Do For You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <div  data-aos='fade-right' className="flex flex-col items-center hover:bg-yellow-300 hover:text-black cursor-pointer p-5 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaBoxOpen className="text-4xl mb-3 text-yellow-300 " />
            <p className="text-lg font-semibold ">Web Designing</p>
          </div>
          <div data-aos='fade-left' className="flex   hover:bg-yellow-300 cursor-pointer flex-col hover:text-black items-center p-5 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CiPen className="text-4xl mb-3 text-yellow-300  hover:text-black" />
            <p className="text-lg font-semibold ">Graphic Design</p>
          </div>
          <div data-aos='fade-right' className="flex flex-col hover:bg-yellow-300 cursor-pointer hover:text-black items-center p-5 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <MdComputer className="text-4xl mb-3 text-yellow-300 " />
            <p className="text-lg font-semibold">Development</p>
          </div>
          <div data-aos='fade-left' className="flex flex-col hover:bg-yellow-300 cursor-pointer hover:text-black items-center p-5 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <MdComputer className="text-4xl mb-3 text-yellow-300 " />
            <p className="text-lg font-semibold">UI/UX Design</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
