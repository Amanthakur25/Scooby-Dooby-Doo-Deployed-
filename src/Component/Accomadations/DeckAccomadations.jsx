import React, { useState } from 'react';
import Testimonial from '../Home/Testimonial';
import AccomadationsComp from './AccomadationsComp';
import BenefitComp from './BenefitComp';
import AccommodationContact from './AccomdationContact';


const FeaturedAccommodations = () => {
  const [accommodations] = useState([
    {
      id: 1,
      name: 'Deck Dog',
      image: 'https://img.freepik.com/free-vector/hand-drawn-cartoon-animal-illustration_23-2150420440.jpg?t=st=1718187185~exp=1718190785~hmac=2fefd5c945695ba79ab7010df3e730178465892f867c4a8d662f0a4bf6f6d5a3&w=740',
      location: 'Your Location',
      description: 'Designed for smaller breeds or pets who prefer cozy quarters, our Deck Accommodation offers compact yet comfortable rooms. These accommodations provide a snug retreat where small dogs can feel secure and relaxed throughout their stay. They also enjoy access to supervised play sessions and individual attention, ensuring they have a fulfilling experience while with us.',
      rating: 4.5,
      price: '550/night'
    },
    {
      id: 1,
      name: 'Deck Dog',
      image: 'https://img.freepik.com/free-vector/hand-drawn-cartoon-animal-illustration_23-2150420440.jpg?t=st=1718187185~exp=1718190785~hmac=2fefd5c945695ba79ab7010df3e730178465892f867c4a8d662f0a4bf6f6d5a3&w=740',
      location: 'Your Location',
      description: 'Designed for smaller breeds or pets who prefer cozy quarters, our Deck Accommodation offers compact yet comfortable rooms. These accommodations provide a snug retreat where small dogs can feel secure and relaxed throughout their stay. They also enjoy access to supervised play sessions and individual attention, ensuring they have a fulfilling experience while with us.',
      rating: 4.5,
      price: '550/night'
    },
    {
      id: 1,
      name: 'Deck Dog',
      image: 'https://img.freepik.com/free-vector/hand-drawn-cartoon-animal-illustration_23-2150420440.jpg?t=st=1718187185~exp=1718190785~hmac=2fefd5c945695ba79ab7010df3e730178465892f867c4a8d662f0a4bf6f6d5a3&w=740',
      location: 'Your Location',
      description: 'Designed for smaller breeds or pets who prefer cozy quarters, our Deck Accommodation offers compact yet comfortable rooms. These accommodations provide a snug retreat where small dogs can feel secure and relaxed throughout their stay. They also enjoy access to supervised play sessions and individual attention, ensuring they have a fulfilling experience while with us.',
      rating: 4.5,
      price: '550/night'
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

const DeckAccomadations = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Hero Section */}
      <div className="hero bg-cover bg-center h-96" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/group-different-dog-various-activities-park_1308-101176.jpg?t=st=1718187203~exp=1718190803~hmac=575d43a3e9ed2efc9ffffdae88e522e291cdc24a62f5acbe3b82783aa22a0a5b&w=1380')" }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Deck Accommodations</h1>
            <p className="text-xl font-bold mb-6  ">Welcome to Scooby Dooby doo Pet Hotel, where we offer a range of accommodations <br/> designed to cater to every pet’s unique personality and needs.</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Explore Now</button>
          </div>
        </div>
      </div>

      {/* Featured Accommodations Section */}
      <FeaturedAccommodations />

      {/* Accommodation Details Section */}
      <AccomadationsComp />

      {/* Benefits Section */}
      <BenefitComp />

      {/* Testimonials Section */}
      <Testimonial />

{/* Contact  */}
<AccommodationContact/>

    </div>
  );
};

export default DeckAccomadations;

