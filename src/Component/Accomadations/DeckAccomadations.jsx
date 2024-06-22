import React from 'react';
import BenefitComp from './BenefitComp';
import { Link } from 'react-router-dom';
import { Accomadation } from '../../constants/imageConstant';

const d1 = Accomadation.Deck;
const d2 = Accomadation.Deck;

function DeckAccomadations() {
  return (
    <div>
      <div>
        <div className="relative w-full">
          <img
            src={d1}
            alt="header"
            className="w-full object-cover h-[550px]"
          />
          <div className="absolute  flex-col top-0 left-0 w-full h-full flex items-center">
          </div>
        </div>

        <div className=" flex justify-center items-center text-justify">
          <div className="pt-20 pb-32">
            <h1 className=" text-[60px] text-center text-[#e87200] font-bold mt-14 font-gochi-hand text-shadowText">
              Deck Accommodation
            </h1>
            <p className=" text-center text-[20px] font-bold">
              Welcome to <span className='text-[#e87200] text-[23px]'>Scooby Dooby Doo Pet Hotel</span>, <br />
              where we offer a range of accommodations designed to cater to every pet’s unique personality and needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 justify-center items-center pb-20">
          <div className="px-10 flex justify-end items-end">
            <p className='text-[25px] w-[65%]'>
              Designed for smaller breeds or pets who prefer cozy quarters, our Deck Accommodation offers compact yet comfortable rooms. These accommodations provide a snug retreat where small dogs can feel secure and relaxed throughout their stay. They also enjoy access to supervised play sessions and individual attention, ensuring they have a fulfilling experience while with us.
            </p>
          </div>

          <div className='flex justify-start items-start'>
            <img src={d2} alt="dogstay" loading="lazy" className="w-[55%]" />
          </div>
        </div>

        <BenefitComp />

        <div className='flex flex-col justify-center items-center py-32'>
          <p className='w-[60%] text-[20px] text-center font-semibold'>
            At Scooby Doozy Doo, we prioritize the well-being and happiness of every pet, offering a range of accommodations to meet their individual needs.
          </p>
          <p className='text-gray-800 w-[60%] text-[20px] text-center font-bold'>
            Contact us today to learn more about our accommodations and find the perfect fit for your furry friend!
          </p>
          <Link to="/contactUs">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeckAccomadations;
