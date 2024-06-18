import React, { useState } from 'react';
import Testimonial from '../Home/Testimonial';
import AccomadationsComp from './AccomadationsComp';
import BenefitComp from './BenefitComp';
import AccommodationContact from './AccomdationContact';

const FeaturedAccommodations = () => {
  const [accommodations] = useState([
      {
          id: 1,
          name: 'Separate Dog',
          image: 'https://img.freepik.com/free-vector/hand-drawn-cartoon-animal-illustration_23-2150420452.jpg?t=st=1718187816~exp=1718191416~hmac=e99ea98e4b9f5d48c0fd6ca617164132d77161fc9e403f8bf0803fc001d9b02b&w=740',
          location: 'Your Location',
          description: 'Our Separate Accommodation is ideal for dogs who prefer their own space or may not be fully comfortable in group settings. Each guest in our Separate Accommodation enjoys single occupancy, providing ample space to relax and unwind. Throughout the day, they also have personalised play sessions and socialising opportunities tailored to their preferences. This option ensures that even more reserved or independent pets can enjoy a fulfilling and enjoyable stay.',
          rating: 4.5,
          price: '950/night'
      },
      {
        id: 2,
        name: 'Separate Dog',
        image: 'https://img.freepik.com/free-vector/hand-drawn-cartoon-animal-illustration_23-2150420452.jpg?t=st=1718187816~exp=1718191416~hmac=e99ea98e4b9f5d48c0fd6ca617164132d77161fc9e403f8bf0803fc001d9b02b&w=740',
        location: 'Your Location',
        description: 'Our Separate Accommodation is ideal for dogs who prefer their own space or may not be fully comfortable in group settings. Each guest in our Separate Accommodation enjoys single occupancy, providing ample space to relax and unwind. Throughout the day, they also have personalised play sessions and socialising opportunities tailored to their preferences. This option ensures that even more reserved or independent pets can enjoy a fulfilling and enjoyable stay.',
        rating: 4.5,
        price: '950/night'
    },
    {
      id: 3,
      name: 'Separate Dog',
      image: 'https://img.freepik.com/free-vector/hand-drawn-cartoon-animal-illustration_23-2150420452.jpg?t=st=1718187816~exp=1718191416~hmac=e99ea98e4b9f5d48c0fd6ca617164132d77161fc9e403f8bf0803fc001d9b02b&w=740',
      location: 'Your Location',
      description: 'Our Separate Accommodation is ideal for dogs who prefer their own space or may not be fully comfortable in group settings. Each guest in our Separate Accommodation enjoys single occupancy, providing ample space to relax and unwind. Throughout the day, they also have personalised play sessions and socialising opportunities tailored to their preferences. This option ensures that even more reserved or independent pets can enjoy a fulfilling and enjoyable stay.',
      rating: 4.5,
      price: '950/night'
  },
  ]);

  return (
      <div className="featured-accommodations mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Accommodations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {accommodations.map(accommodation => (
                  <div key={accommodation.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                      <img className=" w-full " src={accommodation.image} alt={accommodation.name} />
                      <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{accommodation.name}</h3>
                          <p className="text-gray-600 mb-4">{accommodation.location}</p>
                          <p className="text-gray-700 mb-4">{accommodation.description}</p>
                          <div className="flex items-center justify-between">
                              <p className="text-yellow-500 font-semibold">{accommodation.rating}</p>
                              <p className="text-green-600 font-bold">{accommodation.price}</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};

const SeprateAccomadations = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Hero Section */}
      <div className="hero bg-cover bg-center h-96" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/adopt-pet-illustration_23-2148511389.jpg?t=st=1718187795~exp=1718191395~hmac=4a979f4cebd20eb8fd8b89c0590ff4acc638c625208b677c6ec2f3c9d5729a42&w=996')" }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Separate Accommodations</h1>
            <p className="text-xl  font-bold mb-6">Welcome to Scooby Dooby doo Pet Hotel, where we offer a range of accommodations <br/>designed to cater to every pet’s unique personality and needs.</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Explore Now</button>
          </div>
        </div>
      </div>

      {/* Featured Accommodations Section */}
      <FeaturedAccommodations/>
    
      {/* Accommodation Details Section */}
      <AccomadationsComp/>

      {/* Benefits Section */}
      <BenefitComp/>

      {/* Testimonials Section */}
     <Testimonial/>

     
{/* Contact  */}
<AccommodationContact/>

    
    </div>
  );
}

export default SeprateAccomadations;
