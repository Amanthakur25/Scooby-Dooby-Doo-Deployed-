import React from 'react';
import { Link } from 'react-router-dom'; 

const AccommodationContact = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            At Scooby Doozy Too, we prioritise the well-being and happiness of every pet
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Offering a range of accommodations to meet their individual needs.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Whether your dog thrives in social settings or prefers a more solitary retreat, Scooby Dooby Doo Pet Hotel ensures every pet receives the attention, care, and accommodations they need to feel right at home.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Contact us today to learn more about our accommodations and find the perfect fit for your furry friend!
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Schedule a temperament test to find the perfect fit for your furry friend!
          </p>
          {/* Contact Us Button */}
          <Link to="/contactus" className="inline-block bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-8 transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccommodationContact;
