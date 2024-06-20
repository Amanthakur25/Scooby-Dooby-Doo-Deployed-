import {React} from "react";
import { GiSittingDog } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import {Link} from "react-router-dom"

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="heading text-4xl text-orange-500 flex justify-center items-center ">
        <h1>Testimonials</h1>
      </div>
      <div className="sub-heading text-2xl flex justify-center items-center">
        <h3>Hear What Our Happy Clients Have To Say</h3>
      </div>

      <div className=" bg-orange-500 font-bold text-black text-xl h-52 w-full relative mt-60   flex justify-center items-center">
      <Link to="https://maps.app.goo.gl/6iWaa8jVXbXauzcB7?g_st=iwb"> Sell All The Google Reviews</Link>
     
      </div>
      <div  className="flex flex-col min-[900px]:flex-row gap-10 min-[900px]:absolute mt-28">

         <div className=" bg-slate-50  rounded-lg shadow-lg p-6 w-96 ">
        <div className="flex flex-row items-center ">
          <div className="logo text-black mb-40 mr-4">
            <img src="https://lh3.googleusercontent.com/a/ACg8ocItqWemofFZb4PA58uAJdux5aEXjtftJC27kuYdU2jMTnsS0Q=w45-h45-p-rp-mo-br100" alt="" className=" h-12 w-32" />
          </div>
          <div className="text-wrap  text-justify">
            <p>
            This dog boarding house deserves nothing short of five stars! From the moment you step in, it's evident that the staff is dedicated to providing exceptional care for our furry friends. <a  href="https://maps.app.goo.gl/aK64Q6m32dStutVV7"> <div className=" text-blue-400 hover:text-blue-600 cursor-pointer hover:underline ">
              
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
            Hollohon Daulagupu
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-slate-50 rounded-lg shadow-lg p-6 w-96 ">
        <div className="flex flex-row items-center ">
          <div className="logo text-black mb-40 mr-4">
            <img src="https://lh3.googleusercontent.com/a-/ALV-UjWimej2eBYIeJ6HHFk55mYzi60Bklj2D66yTSbU5qDGxIQYCAsV=w75-h75-p-rp-mo-br100" alt="" className=" h-12 w-32" />
          </div>
          <div className="text-wrap  text-justify">
            <p>
            Just brilliant! Priya made my dog so comfortable. Love normally takes sometime to get comfortable with anyone but with her it just took 10 mins. 
            <a  href="https://maps.app.goo.gl/gVerA2LjMieq5Jdf6"> <div className=" text-blue-400 hover:text-blue-600 cursor-pointer hover:underline ">
              
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
            Akash Roy
            </div>
          </div>
        </div>
      </div>  <div className=" bg-slate-50  rounded-lg shadow-lg p-6 w-96 ">
        <div className="flex flex-row items-center ">
          <div className="logo text-black mb-40 mr-4">
           <img src="https://lh3.googleusercontent.com/a-/ALV-UjW4Ed-wKuyLkzp21Xl9WRPPmVWccKRaUaDislNjcS7M7T8sunku=w75-h75-p-rp-mo-br100" alt="" className=" h-12 w-32" />
          </div>
          <div className="text-wrap  text-justify">
            <p>
            I have never left my fur baby Muffin with anyone in the last 3 years and last two days were his first time at a boarding without us. 
            <a  href="https://maps.app.goo.gl/54ftYRtAiDF1RK2VA"> <div className=" text-blue-400 hover:text-blue-600 cursor-pointer hover:underline ">
              
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
            Aakansha Kapoor
            </div>
          </div>
        </div>
      </div>

      </div>
     
    </div>
  );
};

export default Testimonial;