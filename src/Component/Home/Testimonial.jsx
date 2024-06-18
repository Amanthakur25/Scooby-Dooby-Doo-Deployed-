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
      <Link to="/"> Sell All The Google Reviews</Link>
     
      </div>
      <div  className="flex flex-row gap-10 absolute mt-28">

         <div className=" bg-slate-50  rounded-lg shadow-lg p-6 w-96 ">
        <div className="flex flex-row items-center ">
          <div className="logo text-black mb-40 mr-4">
            <GiSittingDog size={30} />
          </div>
          <div className="text-wrap  text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta ipsum, aliquam necessitatibus error veniam iusto voluptates illum laudantium nostrum similique, repellat alias minima pariatur,iusto iusto voluptates illum voluptates illumiusto voluptates illum
            </p>
            <div className="flex  mt-2 ">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" size={20} />
              ))}
            </div>
            <div className="mt-2 font-semibold">
              Demo Name
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-slate-50 rounded-lg shadow-lg p-6 w-96 ">
        <div className="flex flex-row items-center ">
          <div className="logo text-black mb-40 mr-4">
            <GiSittingDog size={30} />
          </div>
          <div className="text-wrap  text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta ipsum, aliquam necessitatibus error veniam iusto voluptates illum laudantium nostrum similique, repellat alias minima pariatur,iusto iusto voluptates illum voluptates illumiusto voluptates illum
            </p>
            <div className="flex  mt-2 ">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" size={20} />
              ))}
            </div>
            <div className="mt-2 font-semibold">
              Demo Name
            </div>
          </div>
        </div>
      </div>  <div className=" bg-slate-50  rounded-lg shadow-lg p-6 w-96 ">
        <div className="flex flex-row items-center ">
          <div className="logo text-black mb-40 mr-4">
            <GiSittingDog size={30} />
          </div>
          <div className="text-wrap  text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta ipsum, aliquam necessitatibus error veniam iusto voluptates illum laudantium nostrum similique, repellat alias minima pariatur,iusto iusto voluptates illum voluptates illumiusto voluptates illum
            </p>
            <div className="flex  mt-2 ">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" size={20} />
              ))}
            </div>
            <div className="mt-2 font-semibold">
              Demo Name
            </div>
          </div>
        </div>
      </div>

      </div>
     
    </div>
  );
};

export default Testimonial;
