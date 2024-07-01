import React from 'react'
import BenefitComp from './BenefitComp'
import { Link } from 'react-router-dom'
import { Accomadation } from '../../constants/imageConstant' 
import TermsNCondition from "../../Pages/TermsNCondition";

const fa1 = Accomadation.Frendly;
const fa2 = Accomadation.Frendly;
function FrendlyAccomadations() {
  return (
    <div>
      <div className="relative w-full">
        <img
          src={fa1}
          alt="header"
          className="w-full object-cover h-[550px]"
        />
        <div className="absolute  flex-col top-0 left-0 w-full h-full flex items-center">

        </div>
      </div>

      <div className=" flex justify-center items-center text-justify">
        <div className="pt-10 pb-32">
          <h1 className=" text-[40px] md:text-[60px] text-center text-[#e87200] font-bold mt-14 font-gochi-hand text-shadowText">
            Friendly Accommodation
          </h1>

        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-4 justify-center items-center ">
        <div className=" px-10 flex justify-end items-end">
          
          <p className=' text-[25px] w-full lg:w-[65%] '>
            "For sociable dogs who love interacting with other dogs and humans, our Friendly Accommodation provides a vibrant social environment. New guests undergo a temperament test to ensure they are comfortable and safe in group settings. Dogs that pass the test enjoy playtime, socializing, and supervised interactions with other friendly guests."
          </p>


        </div>

        <div className='flex justify-start items-start'>
          <img src={fa2} alt="dogstay" loading="lazy" className=" lg:w-[55%]" />
        </div>

      </div>

      <div className="flex justify-center py-6">
       <TermsNCondition/>
      </div>
      
      <BenefitComp />

      
      <div className=' flex flex-col justify-center items-center py-32'>
        <p className=' w-[60%] text-[20px] text-center font-semibold'>
          Whether your dog thrives in social settings or prefers a more solitary retreat, Scooby Dooby Doo Pet Hotel ensures every pet receives the attention, care, and accommodations they need to feel right at home.

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

export default FrendlyAccomadations
