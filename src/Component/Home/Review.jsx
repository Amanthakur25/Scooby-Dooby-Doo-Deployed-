import React from 'react'
import { FaStar } from "react-icons/fa";
import {Link} from "react-router-dom"

function Review() {

  const review = [
    {
      name:"Pooja Dash",
      review:"Have opted walking service for my baby, Rio (Shihtzu) and he absolutely loving Hallahan (Walker) ,very much experienced and professional in handling and caring Rio (mine is little spoiled and having so much of tantrums).",
      img:"https://lh3.googleusercontent.com/a-/ALV-UjUJsgAYV6LIP-vfDM4_Fv2EM-ivpbqQ4jE8tVG5GYoBRA2Ik7Y=w75-h75-p-rp-mo-br100",
      readmore:"https://maps.app.goo.gl/fTPBvVQPSm3U2Lsp9"
    },
    {
      name:"Sheba Philip",
      review:"Our not-very-social Shih Tzu felt at home when we left him for a few days at Scooby Doo Doo. The staff and management ensured that his stay was comfortable. They even gave us constant updates on how our little pooch was doing",
      img:"https://lh3.googleusercontent.com/a-/ALV-UjUbXtoHIFDvqyKxfN4_aHMsqLHt9DzGwPgm4LrUXBCeWmwDcoc0=w75-h75-p-rp-mo-br100",
      readmore:"https://maps.app.goo.gl/4Re2eTLEH9J4orX3A"
    },
    {
      name:"Aakansha Kapoor",
      review:" I have never left my fur baby Muffin with anyone in the last 3 years and last two days were his first time at a boarding without us.",
      img:"https://lh3.googleusercontent.com/a-/ALV-UjW4Ed-wKuyLkzp21Xl9WRPPmVWccKRaUaDislNjcS7M7T8sunku=w75-h75-p-rp-mo-br100",
      readmore:"https://maps.app.goo.gl/54ftYRtAiDF1RK2VA"
    },
    {
      name:"Sraavan Chevireddy",
      review:" Pet boarding not just requires professionalism. But, the fur friends need attention, care and affection. No doubt, Mr. and Mrs. Arno have extraordinary etiquette in handling fur friends.",
      img:"https://lh3.googleusercontent.com/a-/ALV-UjVFVL3biN1mROQKL3Mf1vLhXHFoE0CtoLLQh6YjxpDxE6Jrlne1=w75-h75-p-rp-mo-br100",
      readmore:"https://maps.app.goo.gl/QEPaCCzo1dQBiutP8"
    },
    {
      name:"Kamarsu Sai Teja Aravind",
      review:"The experience was Amazing, they treated our pet like they’re own. Nice stay for pets and the care for my pet was great and the owner duo were really very helpful and supportive.",
      img:"https://lh3.googleusercontent.com/a-/ALV-UjXc_brrsSoiztr95F4s8v5cgob1nscSZgqPLlZeFBMRm8OahZlS=w75-h75-p-rp-mo-br100",
      readmore:"https://maps.app.goo.gl/niAYopUfS15M45CQA"
    },
    
  ]
  return (
    <div className='mt-96 md:mt-20'>
      <div className=' flex flex-col'>
      <div className=" text-4xl text-orange-500 flex justify-center items-center ">
        <h1>Testimonials</h1>
      </div>
      <div className=" text-2xl flex justify-center items-center px-5 max-sm:text-center">
        <h3>Hear What Our Happy Clients Have To Say</h3>
      </div>
      </div>

      <div className='relative'>

      <div className="  bg-orange-500 font-bold  text-black text-xl h-52 w-full relative  mt-60  flex justify-center items-center">
      <Link to="https://maps.app.goo.gl/6iWaa8jVXbXauzcB7?g_st=iwb"> Sell All The Google Reviews</Link>
     
       </div>

      
  <div className="flex flex-row space-x-4  absolute -top-52 overflow-x-auto w-full p-5 ">
        {review.map((data, index) => (
        <div key={index} className=" bg-slate-50  rounded-lg shadow-lg p-6 ">
        <div className="flex flex-row items-center ">
          <div className="logo h-14 w-14 text-black mb-40 mr-4">
            <img src={data.img} alt="" className=" h-14 w-14" />
          </div>
          <div>
            <p className=' w-64 md:w-96'>
              {data.review}
            <a  href={data.readmore}> 
            <div className=" text-blue-400 hover:text-blue-600 cursor-pointer hover:underline ">
              
              Read more 
            </div>
            </a>
            </p>
            
            <div className="flex  mt-2 ">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" size={20} />
              ))}
            </div>
            <div className="mt-2 font-semibold">
            {data.name}
            </div>
          </div>
        </div>
        </div>
        ))}
        
      </div>
      </div>
    </div>
  )
}

export default Review
