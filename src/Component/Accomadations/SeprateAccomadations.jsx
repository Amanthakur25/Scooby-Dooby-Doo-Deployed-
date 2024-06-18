import React from 'react';
import Testimonial from '../Home/Testimonial';

const SeprateAccomadations = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Hero Section */}
      <div className="hero bg-cover bg-center h-96" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/adopt-pet-illustration_23-2148511389.jpg?t=st=1718187795~exp=1718191395~hmac=4a979f4cebd20eb8fd8b89c0590ff4acc638c625208b677c6ec2f3c9d5729a42&w=996')" }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Separate Accommodations</h1>
            <p className="text-xl mb-6">Find the perfect stay for your dog</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Explore Now</button>
          </div>
        </div>
      </div>

      {/* Featured Accommodations Section */}
      <div className="featured-accommodations mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Accommodations</h2>
        <div className="flex flex-wrap justify-around">
          {/* Accommodation Cards */}
          <div className="accommodation-card bg-white shadow-md rounded p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
            <img src="https://img.freepik.com/free-vector/hand-drawn-cartoon-animal-illustration_23-2150420452.jpg?t=st=1718187816~exp=1718191416~hmac=e99ea98e4b9f5d48c0fd6ca617164132d77161fc9e403f8bf0803fc001d9b02b&w=740" alt="Accommodation" className="w-full object-cover mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">Accommodation Name</h3>
            <p className="text-gray-600 mb-2">Location</p>
            <p className="text-yellow-500 mb-2">Rating: 4.5</p>
            <p className="mb-2">Description of the accommodation.</p>
            <p className="text-green-600 font-bold mb-2">$120/night</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">View Details</button>
          </div>
          {/* Add more accommodation cards here */}
        </div>
      </div>

      {/* Accommodation Details Section */}
      <div className="accommodation-details mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Accommodation Details</h2>
        <div className="flex flex-wrap justify-around">
          {/* Details Cards */}
          <div className="details-card bg-white shadow-lg rounded p-6 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Amenities</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Spacious rooms</li>
              <li>Pet-friendly facilities</li>
              <li>Free Wi-Fi</li>
              <li>Complimentary breakfast</li>
            </ul>
          </div>
          {/* Add more details cards here */}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits mt-12 mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Dog-Friendly Accommodations</h2>
        <div className="flex flex-wrap justify-around">
          {/* Benefit Cards */}
          <div className="benefit-card bg-white shadow-md rounded p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
            <img src="https://img.icons8.com/ios-filled/50/000000/dog.png" alt="Pet-Friendly" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Pet-Friendly</h3>
            <p>Enjoy a comfortable stay with your pets without any restrictions.</p>
          </div>
          {/* Add more benefit cards here */}
        </div>
      </div>

      {/* Testimonials Section */}
     <Testimonial/>

    
    </div>
  );
}

export default SeprateAccomadations;
