import React from 'react'
import { Link } from 'react-router-dom'
import { Accomadation } from '../../constants/imageConstant' // Importing the named export

const s1 = Accomadation.Seperates;
const s2 = Accomadation.Seperates;
function SeprateAccomadations() {
  return (
    <div>
         <div className="relative w-full">
        <img
          src={s1}
          alt="header"
          className="w-full"
        />
        <div className="absolute  flex-col top-0 left-0 w-full h-full flex items-center">
          
        </div>
      </div>

      <div className=" flex justify-center items-center text-justify">
        <div className="pt-20 pb-32">
        <h1 className=" text-[40px] sm:text-[60px] text-center text-[#e87200] font-bold mt-14 font-gochi-hand text-shadowText">
        Separate Accommodation
          </h1>
          
        </div>      
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-4 justify-center items-center pb-20">
        <div className=" px-10 flex justify-end items-end">
          
          <p className=' text-[25px] w-full lg:w-[65%] '>
            "Our Separate Accommodation is ideal for dogs who prefer their own space or may not be fully comfortable in group settings. Each guest in our Separate Accommodation enjoys single occupancy, providing ample space to relax and unwind. Throughout the day, they also have personalized play sessions and socializing opportunities tailored to their preferences. This option ensures that even more reserved or independent pets can enjoy a fulfilling and enjoyable stay."
          </p>
          
          
        </div>

        <div className='flex justify-start items-start'>
          <img src={s2} alt="dogstay" loading="lazy" className=" lg:w-[55%]" />
        </div>

      </div>

      <div className="flex justify-center py-6">
        <Link
          to="/termscondition"
          className="inline-block px-2 md:px-6 py-3 text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 active:bg-orange-700 transition transform hover:-translate-y-1 active:translate-y-0"
        >
          Terms and Conditions
        </Link>
      </div>
      
      <div className=' flex flex-col justify-center items-center py-32'>
          <p className=' w-[60%] text-[20px] text-center font-semibold'>
          At Scooby Doozy Doo, we prioritize the well-being and happiness of every pet, offering a range of accommodations to meet their individual needs.
          
          </p>
          <p className=' text-gray-800 w-[60%] text-[20px] text-center font-bold'>
          Contact us today to learn more about our accommodations and find the perfect fit for your furry friend!
          </p>
          <Link to="/contactUs">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Contact Us</button>
          </Link>
      </div>

    </div>
  )
}

export default SeprateAccomadations
