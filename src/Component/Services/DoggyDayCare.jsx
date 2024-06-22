import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaDog } from 'react-icons/fa';
// import MeetNGreet from "../../assets/MeetNGreet.jpg"
import { Link } from 'react-router-dom';

import {daycare1} from "../../constants/imageConstant";
import {daycare2} from "../../constants/imageConstant";
import {daycare3} from "../../constants/imageConstant";
import {lux1} from "../../constants/imageConstant";
import {lux2} from "../../constants/imageConstant";
const DoggyDayCare = () => {

  // const dogImages = [
  //   'https://via.placeholder.com/150/FFB6C1/000000?text=Dog1',
  //   'https://via.placeholder.com/150/FFB6C1/000000?text=Dog2',
  //   'https://via.placeholder.com/150/FFB6C1/000000?text=Dog3',
  //   'https://via.placeholder.com/150/FFB6C1/000000?text=Dog4',
  //   'https://via.placeholder.com/150/FFB6C1/000000?text=Dog5',
  //   'https://via.placeholder.com/150/FFB6C1/000000?text=Dog6',
  // ];


  return (
    <>

     {/* Hero Section */}
     <div className="relative w-full flex">
        <img
          src={daycare1}
          alt="header"
          className=" object-cover h-[550px]"
        />
        <img
          src={daycare2}
          alt="header"
          className=" object-cover h-[550px]"
        />
        <img
          src={daycare3}
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
            <h3 className="vertical-timeline-element-title text-black font-bold">Meet & Greet Session</h3>
            <p className='text-black'>Get to know each other</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Physical Check</h3>
            <p className='text-black'>A quick physical check of the dog will be conducted during check-in</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Check-in Form</h3>
            <p className='text-black'>You will be asked to fill in a check-in form where you can also include any special instructions.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Care Instructions Discussion</h3>
            <p className='text-black'>Care instructions will be discussed prior to making a booking – behavior, allergies, medications, etc.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Dog is Taken In</h3>
            <p className='text-black'>The dog is then taken in</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Grooming Services</h3>
            <p className='text-black'>On the date of check-out, if you require any grooming services, let us know in advance so that we can schedule it according to the availability. The same will be done prior to the check-out time indicated by you.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      <div className=' flex flex-col justify-center items-center py-32'>
          <p className=' w-[60%] text-[20px] text-center font-semibold'>
          "We offer premium pet boarding and flexible daycare solutions to meet your needs.
At Scooby Dooby Doo, we redefine pet care with our <span className=' font-bold text-[21px]'>24/7 boarding</span> options designed to accommodate both short-term getaways and extended stays lasting months."

          
          </p>
          
      </div>

      <div className=" grid grid-cols-2  justify-center items-center pb-20">
        <div className=" px-10 flex flex-col justify-end items-end">
          <h1 className=' text-[35px] text-[#e87200] font-semibold  w-[65%]'> Luxury boarding</h1>
          
          <p className=' text-[20px] w-[65%] '>
          Our luxurious accommodations ensure that your furry family members experience comfort, security, and personalized attention around the clock. Whether you’re off on a vacation or handling a long-term commitment, rest assured knowing your pet is in caring hands.

          </p>
          
          
        </div>

        <div className='flex justify-start items-start'>
          <img src={lux1} alt="dogstay" loading="lazy" className=" w-[55%]" />
        </div>

      </div>

      <div className=" grid grid-cols-2  justify-center items-center pb-20">
      <div className='flex justify-end items-end'>
          <img src={lux2} alt="dogstay" loading="lazy" className=" w-[55%]" />
        </div>
        <div className=" px-10 flex flex-col justify-start items-start">
          <h1 className=' text-[35px] text-[#e87200] font-semibold  w-[65%]'> Daycare Service</h1>
          
          <p className=' text-[20px] w-[65%] '>
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