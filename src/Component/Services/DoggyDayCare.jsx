import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaDog } from 'react-icons/fa';
// import MeetNGreet from "../../assets/MeetNGreet.jpg"
import { Link } from 'react-router-dom';

import { DogDay } from "../../constants/imageConstant";
import { daycare2 } from "../../constants/imageConstant";
import { daycare3 } from "../../constants/imageConstant";
import { lux1 } from "../../constants/imageConstant";
import { lux2 } from "../../constants/imageConstant";

const DoggyDayCare = () => {

  return (
    <>

      {/* Hero Section */}
      <div className=" w-full flex flex-wrap justify-center items-center">
        <img
          src={DogDay}
          alt="header"
          className=" object-cover h-[550px]"
        />

      </div>

      {/* Scooby Dooby Doo Pet Hotel Section */}
      <div className="max-w-6xl mx-auto p-6">
        <header className="text-center my-12">
          <h1 className="text-5xl font-bold">Welcome to Scooby Dooby Doo Pet Hotel!</h1>
          <p className="text-lg text-gray-600 mt-4">
            Your premier destination for upscale pet boarding and daycare services.
          </p>
        </header>
      </div>

      {/* Day Boarding */}

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Doggy Day Care Process</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Reservation Inquiry</h3>
            <p className='text-black'>Begin by reaching out to us via phone, email, or through our online booking form. Provide basic information about your pet, including their breed, age, and any special requirements.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Meet & Greet Session</h3>
            <p className='text-black'>For pet parents who would like to tour our facilities and discuss their dog's specific needs in person, we offer an optional Meet & Greet session.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Booking a Trial or Boarding</h3>
            <p className='text-black'> After the Meet & Greet, you can choose to book a trial or a full boarding session based on availability.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Complete Documentation</h3>
            <p className='text-black'>
              Gather your pet's essential documents, such as vaccination records and medical history. These documents help us ensure a safe and healthy environment for all our guests.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Blocking the Slots</h3>
            <p className='text-black'> Once all forms and documentation are submitted, you can block your desired slot by paying in advance.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Confirmationn</h3>
            <p className='text-black'>Once we receive your inquiry and documents, our team will review the information and confirm the availability of your desired dates. A detailed confirmation message will be sent to you, outlining the next steps.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>

      {/* Additional Booking Steps */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">To proceed with the booking, fill the Google Form:</h2>
          <div className="flex flex-col items-center justify-center mb-8">
              <Link  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg mb-4 transition duration-300 transform hover:scale-105"
                to="https://docs.google.com/forms/d/1-Ru5nmLJWJSZp5hVsDtBSAsXs-6T0J3GFbls7qm7x18/edit#responses"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Google Form Link
              </Link>
            <p className="text-center mb-4">Fill out our detailed form with your pet's information.</p>
            <div className="bg-gray-200 py-4 px-8 rounded-lg mb-4 w-full">
              <p className="text-center font-bold">Vaccination Records & Medical History</p>
            </div>
            <p className="text-center">Submit your pet's vaccination records, medical history, ticks & fleas treatment, and deworming status.</p>
          </div>
        </div>
      </div>



      <div className=' flex flex-col justify-center items-center py-32'>
        <p className=' w-[60%] text-[20px] text-center font-semibold'>
          "We offer premium pet boarding and flexible daycare solutions to meet your needs.
At Scooby Dooby Doo, we redefine pet care with our 
<span className=' font-bold text-[21px]'>24/7 boarding</span> 
options designed to accommodate both short-term getaways and extended stays lasting months."

          
          </p>
          
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2  justify-center items-center pb-20">
        <div className=" px-10 flex flex-col justify-center md:justify-end items-center md:items-end">
          <h1 className=' text-[35px] text-[#e87200] font-semibold  md:w-[65%]'> Luxury boarding</h1>
          
          <p className=' text-[20px] md:w-[65%] '>
          Our luxurious accommodations ensure that your furry family members experience comfort, security, and personalized attention around the clock. Whether you’re off on a vacation or handling a long-term commitment, rest assured knowing your pet is in caring hands.

          </p>


        </div>

        <div className='flex justify-center md:justify-start items-center md:items-start max-md:mt-5'>
          <img src={lux1} alt="dogstay" loading="lazy" className=" w-[55%]" />
        </div>

      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2  justify-center items-center pb-20">
      <div className='max-md:order-2 flex justify-center md:justify-end items-center md:items-end max-md:mt-5'>
          <img src={lux2} alt="dogstay" loading="lazy" className=" w-[55%]" />
        </div>
        <div className=" px-10 flex flex-col justify-center md:justify-start items-center md:items-start">
          <h1 className=' text-[35px] text-[#e87200] font-semibold  md:w-[65%]'> Daycare Service</h1>
          
          <p className='max-md:order-1 text-[20px] md:w-[65%] '>
          For those needing flexible daytime care, our hourly daycare service is the perfect solution. Tailored to meet the needs of working pet parents or those with busy schedules, our daycare offers a stimulating environment where dogs can socialize, exercise, and receive top-notch care while you handle your responsibilities.
Whether it’s for a few hours or several months, we’re here to provide your pet with a safe, nurturing environment they’ll love.

          </p>       
        </div>
      </div>

      <div className=' flex flex-col justify-center items-center py-32'>
        <p className=' text-gray-800 w-[60%] text-[20px] text-center font-bold'>
          Contact us to learn more about our boarding and daycare services and discover why we’re more than just a place for pets—we’re a home away from home.

        </p>
        <Link to="/contactUs">
          <button className=" my-5 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Contact Us</button>
        </Link>
      </div>



    </>
  );
};

export default DoggyDayCare;