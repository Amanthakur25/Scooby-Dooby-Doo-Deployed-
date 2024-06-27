import React from 'react';
import { GiDistressSignal } from "react-icons/gi";
import { Link } from 'react-router-dom';
import {DogDayCare} from "../../constants/imageConstant"
import {dw5} from "../../constants/imageConstant"

const DogWalk = () => {
    return (
        <div className="">
            {/* Hero Section */}
            <div className="w-full flex flex-wrap justify-center items-center">
        <img
          src={DogDayCare}
          alt="header"
          className=" object-cover h-[550px]"
        />
      
        
      </div>
            
            {/* Dog Walking Services Section */}
            <div className="dog-walking-services mt-12  p-8 rounded-lg">
                <h2 className="text-[35px] font-bold text-center mb-8 text-[#e87200]">Professional <span className='text-[40px] font-gochi-hand'>Dog Walking</span> Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center items-center">
                        <img src="https://img.freepik.com/free-vector/people-walking-with-their-cute-dogs_23-2148525750.jpg?t=st=1718174820~exp=1718178420~hmac=eff47f5c643a45aa8864fb6a9df3b9070ea3b944ef91e2e72601541ef3fa05a7&w=996" alt="Dog Walking" className="w-full rounded-lg shadow-lg mb-4" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-[20px] font-bold mb-4">Are you a busy professional in need of a reliable dog walking service? </h1>
                           <p className='text-xl text-gray-700 mb-4'> Look no further. Our team of trained professional walkers offers both monthly and emergency walks tailored to your needs and availability.</p>
                        <p className="text-xl text-gray-700 mb-4">We prioritize your dog's safety and enjoyment during each walk, ensuring they receive the exercise and attention they deserve. Unlike other services, our team guarantees consistency and reliability, so you never have to worry about missed appointments or last-minute cancellations.</p>
                        <p className="text-xl text-gray-700 mb-4">Trust us to provide exceptional care for your furry friend, no matter how demanding your schedule.</p>
                    </div>
                </div>

                <div className="flex max-md:flex-col justify-center items-center mt-8">
                    <div className='max-md:order-2 flex flex-col  md:w-[50%]'>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">How Our Dog Walking Service Works:</h3>
                    <ol className="list-decimal text-lg text-gray-700">
                        <li className="mb-2">Initial Consultation: We start with an initial consultation to understand your dog's specific needs, preferences, and any special requirements they may have.</li>
                        <li className="mb-2">Customized Walk Schedules: Based on your input, we create a personalized walking schedule that fits seamlessly into your routine, whether you need daily, weekly, or occasional walks.</li>
                        <li className="mb-2">Experienced Walkers: Our team of experienced and trained walkers is dedicated to providing the highest level of care and attention, ensuring your dog’s well-being during each walk.</li>
                        <li className="mb-2">Emergency Support: In case of any unexpected changes or emergencies, our backup team is always ready to step in, ensuring your dog’s routine remains uninterrupted.</li>
                        <li className="mb-2">Health and Safety: We follow strict health and safety protocols, including using appropriate equipment and maintaining a close watch on your dog’s behavior and environment during walks.</li>
                    </ol>
                    </div>
                    <div className='max-md:order-1 flex justify-start items-start'>
                        <img src={dw5} alt="dw5" className='w-60 h-72' />
                    </div>
                </div>
                <p className="mt-8 text-[25px] text-center  font-bold text-[#e87200]">"Trust us to provide exceptional care for your furry friend, no matter how demanding your schedule."</p>
            </div>



            {/* Benefits Section */}
            <div className="benefits mt-12 mb-10">
                <h2 className="text-3xl font-bold text-center mb-8">Benefits of Our Walking Services</h2>
                <div className="flex max-md:flex-col flex-wrap justify-around max-md:justify-center max-md:items-center">
                    <div className="benefit-card bg-gray-100 rounded p-4 m-2 w-1/2 md:w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/heart-health.png" alt="Health & Exercise" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Health & Exercise</h3>
                        <p>Regular walks keep your dog fit and healthy.</p>
                    </div>
                    <div className="benefit-card bg-gray-100 rounded p-4 m-2 w-1/2 md:w-1/3 text-center">
                        <img src="https://img.icons8.com/ios/50/000000/group-foreground-selected.png" alt="Socialization" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Socialization</h3>
                        <p>Group walks help your dog make new friends.</p>
                    </div>
                    <div className="benefit-card bg-gray-100 rounded p-4 m-2 w-1/2 md:w-1/3 text-center">
                        <GiDistressSignal className="mx-auto mb-4 h-16 w-16" />
                        <h3 className="text-xl font-bold mb-2">Stress Relief</h3>
                        <p>Walking helps reduce anxiety and stress in dogs.</p>
                    </div>
                </div>
            </div>

            {/* Get a Quote Section */}
            <div className="get-a-quote mt-12 bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md">
                <h2 className="text-4xl font-bold text-center mb-6 text-blue-900">Get a Quote</h2>
                <p className="text-center mb-4 text-lg text-gray-700">
                    The cost of our dog walking service varies. To receive a personalized quote, please reach out to us with your address and preferred dates.
                </p>
                <p className="text-center mb-8 text-lg text-gray-700">

                    Contact us today to ensure your furry friend enjoys a fun and safe walk!
                </p>
                <div className="flex justify-center">
                    <Link to="/contactus" className="bg-orange-600 max-sm:text-sm text-white py-3 px-6 rounded-full hover:bg-orange-700 transition duration-300">
                        Contact Us
                    </Link>
                </div>
            </div>

           


        </div>
    );
};

export default DogWalk;
