import React from 'react';
import { FaTruckPickup } from "react-icons/fa";
import Testimonial from '../Home/Testimonial';
import { Link } from 'react-router-dom';
import pd1 from "../../assets/pd1.jpg"
const DogPickupNDrop = () => {
    return (
        <div className="container mx-auto p-8">
            {/* Hero Section */}
            <div className="relative w-full">
        <img
          src={pd1}
          alt="header"
          className="w-full object-cover h-[550px]"
        />
        <div className="absolute  flex-col top-0 left-0 w-full h-full flex items-center">
          
        </div>
      </div>
            <div className="text-center py-20">
                        <h1 className="text-5xl font-bold text-[#e87200] mb-4 font-gochi-hand">Dog Pickup & Drop-Off Service</h1>
                        <p className="text-xl mb-6">
                            At our facility, we understand the importance of ensuring your dog's safe and comfortable travel. <br></br>
                            That’s why we offer a reliable pick-up and drop-off service tailored to your needs.</p>
                            <Link to="/contactus">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
                    </Link>
                    </div>
            {/* How It Works Section */}
            <div className="how-it-works mt-12 bg-gray-50 py-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">How It Works</h2>
                <div className="flex flex-col md:flex-row md:justify-around items-center">
                    <div className="step-card bg-white shadow-lg rounded p-6 m-4 w-full md:w-1/3 text-center transform hover:scale-105 transition-transform duration-300">
                        <FaTruckPickup className="mx-auto mb-4 h-16 w-16 " />
                        <h3 className="text-2xl font-bold mb-2 text-gray-700">1. Schedule a Pickup</h3>
                        <p className="text-gray-600">Choose a convenient time for us to pick up your dog.</p>
                    </div>
                    <div className="step-card bg-white shadow-lg rounded p-6 m-4 w-full md:w-1/3 text-center transform hover:scale-105 transition-transform duration-300">
                        <img src="https://img.icons8.com/ios-filled/100/000000/van.png" alt="Pickup" className="mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2 text-gray-700">2. We Pick Up</h3>
                        <p className="text-gray-600">Our team will arrive at your location to pick up your dog.</p>
                    </div>
                    <div className="step-card bg-white shadow-lg rounded p-6 m-4 w-full md:w-1/3 text-center transform hover:scale-105 transition-transform duration-300">
                        <img src="https://img.icons8.com/ios-filled/100/000000/dog-house.png" alt="Drop-Off" className="mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2 text-gray-700">3. Safe Drop-Off</h3>
                        <p className="text-gray-600">We ensure your dog reaches their destination safely.</p>
                    </div>
                </div>
            </div>



            {/* Key Features Section */}
            <div className="key-features mt-12">
                <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
                <div className="flex flex-wrap justify-around gap-6">
                    <div className="feature-card bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center transition-transform transform hover:scale-105">
                        <div className="icon-container mx-auto mb-4">
                            <img src="https://img.icons8.com/ios-filled/100/000000/dog-training.png" alt="Professional Care" className="h-16 w-16 mx-auto" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-gray-700">Professional Care</h3>
                        <p className="text-gray-600">One of our trained team members will personally pick up and drop off your dog. Our staff are experienced professionals who understand canine needs and ensure a stress-free travel experience.</p>
                    </div>
                    <div className="feature-card bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center transition-transform transform hover:scale-105">
                        <div className="icon-container mx-auto mb-4">
                            <img src="https://img.icons8.com/ios-filled/100/000000/shield.png" alt="Safety First" className="h-16 w-16 mx-auto" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-gray-700">Safety First</h3>
                        <p className="text-gray-600">Your dog's safety is our top priority. We follow strict protocols to ensure secure and comfortable transportation from your home to our boarding facility and vice versa.</p>
                    </div>
                    <div className="feature-card bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center transition-transform transform hover:scale-105">
                        <div className="icon-container mx-auto mb-4">
                            <img src="https://img.icons8.com/ios-filled/100/000000/dog-park.png" alt="Convenient and Stress-Free" className="h-16 w-16 mx-auto" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-gray-700">Convenient and Stress-Free</h3>
                        <p className="text-gray-600">Whether your dog is coming to stay with us or returning home, our service makes the process smooth and hassle-free for both you and your pet.</p>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="benefits mt-12 mb-10">
                <h2 className="text-3xl font-bold text-center mb-8">Benefits of Our Service</h2>
                <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="benefit-card bg-white rounded-lg shadow-lg p-6 m-4 w-full md:w-1/3 text-center transform transition duration-500 hover:scale-105">
                        <img src="https://img.icons8.com/ios-filled/50/000000/clock.png" alt="Convenience" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Convenience</h3>
                        <p className="text-gray-700">Save time and effort with our door-to-door service.</p>
                    </div>
                    <div className="benefit-card bg-white rounded-lg shadow-lg p-6 m-4 w-full md:w-1/3 text-center transform transition duration-500 hover:scale-105">
                        <img src="https://img.icons8.com/ios-filled/50/000000/protection-mask.png" alt="Safety" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Safety</h3>
                        <p className="text-gray-700">Our vehicles are equipped for safe pet transport.</p>
                    </div>
                    <div className="benefit-card bg-white rounded-lg shadow-lg p-6 m-4 w-full md:w-1/3 text-center transform transition duration-500 hover:scale-105">
                        <img src="https://img.icons8.com/ios-filled/50/000000/verified-account.png" alt="Reliability" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Reliability</h3>
                        <p className="text-gray-700">Count on us for punctual and dependable service.</p>
                    </div>
                </div>
            </div>

            {/* Get a Quote Section */}
            <div className="get-a-quote mt-12 bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md">
                <h2 className="text-4xl font-bold text-center mb-6 text-blue-900">Get a Quote</h2>
                <p className="text-center mb-4 text-lg text-gray-700">
                    The cost of our pick-up and drop-off service depends on your location. To receive a personalized quote, please reach out to us with your address and preferred dates.
                </p>
                <p className="text-center mb-8 text-lg text-gray-700">
                    Contact us today to ensure a seamless and safe journey for your furry friend!
                </p>
                <div className="flex justify-center">
                    <Link to="/contactus" className="bg-orange-600 text-white py-3 px-6 rounded-full hover:bg-orange-700 transition duration-300">
                        Contact Us
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default DogPickupNDrop;
