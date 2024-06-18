import React, { useState } from 'react';
import Testimonial from '../Home/Testimonial';
import AccomadationsComp from './AccomadationsComp';
import BenefitComp from './BenefitComp';
import AccommodationContact from './AccomdationContact';

const FeaturedAccommodations = () => {
    const [accommodations] = useState([
        {
            id: 1,
            name: 'Frendly Dog',
            image: 'https://img.freepik.com/free-vector/dogs-doghouse-made-wood_1308-90854.jpg?t=st=1718187591~exp=1718191191~hmac=8d3e55b43608462e90796bb2503d56e048041bc7b5be17267d82bff2cb859a7d&w=740',
            location: 'Your Location',
            description: 'For sociable dogs who love interacting with other dogs and humans, our Friendly Accommodation provides a vibrant social environment. New guests undergo a temperament test to ensure they are comfortable and safe in group settings. Dogs that pass the test enjoy playtime, socializing, and supervised interactions with other friendly guests.',
            rating: 4.5,
            price: '750/night'
        },
        {
            id: 2,
            name: 'Frendly Dog',
            image: 'https://img.freepik.com/free-vector/dogs-doghouse-made-wood_1308-90854.jpg?t=st=1718187591~exp=1718191191~hmac=8d3e55b43608462e90796bb2503d56e048041bc7b5be17267d82bff2cb859a7d&w=740',
            location: 'Your Location',
            description: 'For sociable dogs who love interacting with other dogs and humans, our Friendly Accommodation provides a vibrant social environment. New guests undergo a temperament test to ensure they are comfortable and safe in group settings. Dogs that pass the test enjoy playtime, socializing, and supervised interactions with other friendly guests.',
            rating: 4.5,
            price: '750/night'
        },
        {
            id: 3,
            name: 'Frendly Dog',
            image: 'https://img.freepik.com/free-vector/dogs-doghouse-made-wood_1308-90854.jpg?t=st=1718187591~exp=1718191191~hmac=8d3e55b43608462e90796bb2503d56e048041bc7b5be17267d82bff2cb859a7d&w=740',
            location: 'Your Location',
            description: 'For sociable dogs who love interacting with other dogs and humans, our Friendly Accommodation provides a vibrant social environment. New guests undergo a temperament test to ensure they are comfortable and safe in group settings. Dogs that pass the test enjoy playtime, socializing, and supervised interactions with other friendly guests.',
            rating: 4.5,
            price: '750/night'
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

const FriendlyAccommodations = () => {
    return (
        <div className="container mx-auto p-8">
            {/* Hero Section */}
            <div className="hero bg-cover bg-center h-96" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/everyday-scenes-with-pets_23-2148533671.jpg?t=st=1718176602~exp=1718180202~hmac=670fb8e24d170ac844a112dfdcf3d065f672ad98329edd095e58a28139c7b693&w=996')" }}>
                <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Friendly Dog Accommodations</h1>
                        <p className="text-xl  font-bold mb-6">
                        Welcome to Scooby Dooby doo Pet Hotel, where we offer a range of accommodations<br/>
                         designed to cater to every pet’s unique personality and needs.</p>
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

export default FriendlyAccommodations;

