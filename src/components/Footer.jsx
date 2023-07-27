import React from 'react'
import ItemsContainer from './ItemsContainer'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-blue-700   to-orange-800
     max-w-[2000px] px-4 py-12 mx-auto  '>
        <div className='md:flex md:justufy-between md:items-center
         sm:px-12 px-4 bg-[#ffffff19] py-7'>
            <h2 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal 
            font-semibold md:w-2/5' > 
            <span className=' text-black hover:text-white '> 
            Free untill you're ready to launch </span>
            </h2>

            <div>
                <input type="text"
                placeholder='Enter Your Request'  
                className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"/>
            </div>
            <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full">
                Send Your Request
            </button>
        </div>
        <ItemsContainer/>
    </footer>
  )
}

export default Footer