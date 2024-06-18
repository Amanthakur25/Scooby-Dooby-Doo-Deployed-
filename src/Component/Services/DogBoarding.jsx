import React from 'react';
import Testimonial from '../Home/Testimonial';

const DogBoarding = () => {
    return (
        <div className="container mx-auto p-8">
            {/* Hero Section */}
            <div className="hero bg-cover bg-center h-96" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/animal-background-vector-with-cute-pets-illustration_53876-127698.jpg?t=st=1718174156~exp=1718177756~hmac=7beae6a961e46763e10fcb6aeeea501e87d530b459cd66c812baaae41107be39&w=996')" }}>
                <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Welcome to Our Dog Boarding Facility</h1>
                        <p className="text-xl mb-6">Your dog's home away from home</p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
                    </div>
                </div>
            </div>

            {/* <!-- Services Section --> */}
            <div className="services py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                <div className="flex flex-wrap justify-around">
                    <div className="service-card bg-white shadow-md rounded p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" style={{ height: '400px' }}>
                        <img src="https://img.freepik.com/free-vector/adopt-pet-illustration_23-2148511389.jpg?t=st=1718174222~exp=1718177822~hmac=2632d5a4362973dce56287005400cfd9ac9c0eae3c1768543d78fce8970f1659&w=996" alt="Daycare" className="rounded h-1/2 mb-4 object-cover" />
                        <h3 className="text-xl font-bold mb-2">Daycare</h3>
                        <p>Supervised playtime and socialization during the day.</p>
                    </div>
                    <div className="service-card bg-white shadow-md rounded p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" style={{ height: '400px' }}>
                        <img src="https://img.freepik.com/free-vector/dog-thinking-with-callouts_1308-96396.jpg?t=st=1718174277~exp=1718177877~hmac=878e62ba3e1062075d1d5bbb5e8236bf5a33f4872c45c9f233bdf0f1714db1d3&w=740" alt="Overnight Boarding" className="rounded h-1/2 mb-4 object-cover" />
                        <h3 className="text-xl font-bold mb-2">Overnight Boarding</h3>
                        <p>Comfortable and safe overnight stays with 24/7 supervision.</p>
                    </div>
                    <div className="service-card bg-white shadow-md rounded p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" style={{ height: '400px' }}>
                        <img src="https://img.freepik.com/free-vector/pet-grooming-concept-illustration_114360-20938.jpg?t=st=1718174310~exp=1718177910~hmac=1600d91f6d4da2bf6cfeae7e42fbfa29f2665294438cf3077a459903639dd950&w=996" alt="Grooming" className="rounded h-1/2 mb-4 object-cover" />
                        <h3 className="text-xl font-bold mb-2">Grooming</h3>
                        <p>Professional grooming services to keep your dog looking their best.</p>
                    </div>
                </div>
            </div>

            {/* Facility Features Section */}
            <div className="features mt-12 mb-10">
                <h2 className="text-3xl font-bold text-center mb-8">Our Facility</h2>
                <div className="flex flex-wrap justify-around">
                    <div className="feature-card bg-gray-100 rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/dog-park.png" alt="Spacious Play Areas" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Spacious Play Areas</h3>
                        <p>Large, secure play areas for your dog to run and have fun.</p>
                    </div>
                    <div className="feature-card bg-gray-100 rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/bed.png" alt="Comfortable Sleeping Quarters" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Comfortable Sleeping Quarters</h3>
                        <p>Cozy and safe sleeping areas for a restful night.</p>
                    </div>
                    <div className="feature-card bg-gray-100 rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/security-checked.png" alt="24/7 Supervision" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">24/7 Supervision</h3>
                        <p>Our staff is always on-site to ensure the safety of your pet.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <Testimonial />
        </div>
    );
};

export default DogBoarding;
