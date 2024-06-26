import React from 'react'
import { FaStar } from "react-icons/fa";
import {Link} from "react-router-dom"

function Review() {

  const review = [
    {
      name:"Hollohon Daulagupu",
      review:"This dog boarding house deserves nothing short of five stars! From the moment you step in, it's evident that the staff is dedicated to providing exceptional care for our furry friends.",
      img:"https://lh3.googleusercontent.com/a/ACg8ocItqWemofFZb4PA58uAJdux5aEXjtftJC27kuYdU2jMTnsS0Q=w45-h45-p-rp-mo-br100",
      readmore:"https://maps.app.goo.gl/aK64Q6m32dStutVV7"
    },
    {
      name:"Akash Roy",
      review:"Just brilliant! Priya made my dog so comfortable. Love normally takes sometime to get comfortable with anyone but with her it just took 10 mins.",
      img:"https://lh3.googleusercontent.com/a-/ALV-UjWimej2eBYIeJ6HHFk55mYzi60Bklj2D66yTSbU5qDGxIQYCAsV=w75-h75-p-rp-mo-br100",
      readmore:"https://maps.app.goo.gl/gVerA2LjMieq5Jdf6"
    },
    {
      name:"Aakansha Kapoor",
      review:" I have never left my fur baby Muffin with anyone in the last 3 years and last two days were his first time at a boarding without us.",
      img:"https://lh3.googleusercontent.com/a-/ALV-UjW4Ed-wKuyLkzp21Xl9WRPPmVWccKRaUaDislNjcS7M7T8sunku=w75-h75-p-rp-mo-br100",
      readmore:"https://maps.app.goo.gl/54ftYRtAiDF1RK2VA"
    },
    {
      name:"Aakansha Kapoor",
      review:" I have never left my fur baby Muffin with anyone in the last 3 years and last two days were his first time at a boarding without us.",
      img:"https://lh3.googleusercontent.com/a-/ALV-UjW4Ed-wKuyLkzp21Xl9WRPPmVWccKRaUaDislNjcS7M7T8sunku=w75-h75-p-rp-mo-br100",
      readmore:"https://maps.app.goo.gl/54ftYRtAiDF1RK2VA"
    },
    {
      name:"Aakansha Kapoor",
      review:" I have never left my fur baby Muffin with anyone in the last 3 years and last two days were his first time at a boarding without us.",
      img:"https://lh3.googleusercontent.com/a-/ALV-UjW4Ed-wKuyLkzp21Xl9WRPPmVWccKRaUaDislNjcS7M7T8sunku=w75-h75-p-rp-mo-br100",
      readmore:"https://maps.app.goo.gl/54ftYRtAiDF1RK2VA"
    },
    {
      name:"Aakansha Kapoor",
      review:" I have never left my fur baby Muffin with anyone in the last 3 years and last two days were his first time at a boarding without us.",
      img:"https://lh3.googleusercontent.com/a-/ALV-UjW4Ed-wKuyLkzp21Xl9WRPPmVWccKRaUaDislNjcS7M7T8sunku=w75-h75-p-rp-mo-br100",
      readmore:"https://maps.app.goo.gl/54ftYRtAiDF1RK2VA"
    }
  ]
  return (
    <div className='mt-96 md:mt-20'>
      <div className=' flex flex-col'>
      <div className=" text-4xl text-orange-500 flex justify-center items-center ">
        <h1>Testimonials</h1>
      </div>
      <div className=" text-2xl flex justify-center items-center">
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
