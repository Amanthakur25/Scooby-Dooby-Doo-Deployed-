// ScoobySection.js
import React from "react";
import { GiDogHouse } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { GiSittingDog } from "react-icons/gi";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <section className="bg-gray-100 mt-10 mb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="">
          <h2 className="text-3xl text-center font-bold sm:text-4xl">
            Welcome to Scooby Dooby Doo
          </h2>
          <p className="text-center text-lg  text-white bg-orange-400 rounded-xl pl-5 pr-5 inline-block p-1 ml-72 justify-center items-center mt-5">
            Cageless boarding service, a family of care providers, providing
            cuddles not cages.
          </p>
          <p className="mt-4 text-lg  text-center">
            Are you tired of leaving your furry friends in small, cramped cages
            while you’re away? Look no further than Scooby Dooby Doo brought to
            you by Scooby-Dooby-Doo! Introducing Scooby Dooby Doo – The ultimate
            pet vacation destination. Our hotel hosts are on-site 24×7. We also
            offer convenient drop & pick-up times to fit your schedule.
          </p>
          <div class="flex justify-center items-center mt-5">
          <Link to="/aboutUs">
            <button class="px-6 py-3 flex justify-center items-center bg-white border-2 border-slate-700 text-orange-500 font-semibold rounded-none hover:bg-black hover:text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-xl">
              <span class="mr-2"><IoIosArrowForward /></span>Read More
            </button>
            </Link>
          </div>





          <div className=" flex flex-row justify-center gap-40 mt-10">
            <div className="flex justify-center items-center mt-5">
              <div className=" bg-black hover:bg-orange-600 w-96 p-4 rounded-2xl ">
                <div className=" flex flex-col
                ">
                  <div className="flex justify-center items-center text-white">
                    <GiDogHouse size={150} />
                  </div>
                  <div className="flex justify-center items-center text-white text-2xl ">
                    lUXURY BOARDING
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-5">
              <div className=" bg-black hover:bg-orange-600 w-96 p-4 rounded-2xl ">
                <div className=" flex flex-col
                ">
                  <div className="flex justify-center items-center text-white">
                    <GiSittingDog size={150} />
                  </div>
                  <div className="flex justify-center items-center text-white text-2xl ">
                    DAYCARE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;