import React from 'react';
import { FaTruckPickup } from "react-icons/fa";
import Testimonial from '../Home/Testimonial';

const  DogPickupNDrop = () => {
    return (
        <div className="container mx-auto p-8">
            {/* Hero Section */}
            <div className="hero bg-cover bg-center h-96" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/two-dogs-driving-red-car_1308-134954.jpg?t=st=1718175544~exp=1718179144~hmac=c940528dfad15eb6b3e9a37a083ca500d556e97a44e1c90554c505523cc27a88&w=1380')" }}>
                <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Dog Pickup & Drop-Off Service</h1>
                        <p className="text-xl mb-6">Convenient and reliable transport for your furry friends</p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="how-it-works mt-12">
                <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
                <div className="flex flex-wrap justify-around">
                    <div className="step-card bg-white shadow-md rounded p-4 m-2 w-1/3 text-center">
                        <FaTruckPickup className="mx-auto mb-4 h-10 w-12"/> 
                        <h3 className="text-xl font-bold mb-2">1. Schedule a Pickup</h3>
                        <p>Choose a convenient time for us to pick up your dog.</p>
                    </div>
                    <div className="step-card bg-white shadow-md rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/van.png" alt="Pickup" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">2. We Pick Up</h3>
                        <p>Our team will arrive at your location to pick up your dog.</p>
                    </div>
                    <div className="step-card bg-white shadow-md rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/dog-house.png" alt="Drop-Off" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">3. Safe Drop-Off</h3>
                        <p>We ensure your dog reaches their destination safely.</p>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="benefits mt-12">
                <h2 className="text-3xl font-bold text-center mb-8">Benefits of Our Service</h2>
                <div className="flex flex-wrap justify-around">
                    <div className="benefit-card bg-gray-100 rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/clock.png" alt="Convenience" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Convenience</h3>
                        <p>Save time and effort with our door-to-door service.</p>
                    </div>
                    <div className="benefit-card bg-gray-100 rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/safety.png" alt="Safety" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Safety</h3>
                        <p>Our vehicles are equipped for safe pet transport.</p>
                    </div>
                    <div className="benefit-card bg-gray-100 rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/verified-account.png" alt="Reliability" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Reliability</h3>
                        <p>Count on us for punctual and dependable service.</p>
                    </div>
                </div>
            </div>

            {/* Service Areas Section */}
            <div className="service-areas mt-12">
                <h2 className="text-3xl font-bold text-center mb-8">Our Service Areas</h2>
                <div className="flex flex-wrap justify-around">
                    <div className="area-card bg-white shadow-md rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/map-pin.png" alt="Area 1" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Downtown</h3>
                        <p>Serving the heart of the city with our reliable service.</p>
                    </div>
                    <div className="area-card bg-white shadow-md rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/map-pin.png" alt="Area 2" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Suburbs</h3>
                        <p>Convenient pickup and drop-off in suburban areas.</p>
                    </div>
                    <div className="area-card bg-white shadow-md rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/map-pin.png" alt="Area 3" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Outskirts</h3>
                        <p>Extending our services to the outskirts of the city.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
           <Testimonial/>

            {/* Pricing Section */}
            <div className="pricing mt-12">
                <h2 className="text-3xl font-bold text-center mb-8">Our Pricing</h2>
                <div className="flex flex-wrap justify-around">
                    <div className="pricing-card bg-white shadow-md rounded p-4 m-2 w-1/3 text-center">
                        <h3 className="text-xl font-bold mb-2">One-Way Trip</h3>
                        <p className="text-2xl font-bold">$25</p>
                        <p>Includes pickup or drop-off within city limits.</p>
                    </div>
                    <div className="pricing-card bg-white shadow-md rounded p-4 m-2 w-1/3 text-center">
                        <h3 className="text-xl font-bold mb-2">Round Trip</h3>
                        <p className="text-2xl font-bold">$45</p>
                        <p>Includes both pickup and drop-off within city limits.</p>
                    </div>
                </div>
            </div>

           
        </div>
    );
};

export default DogPickupNDrop;
