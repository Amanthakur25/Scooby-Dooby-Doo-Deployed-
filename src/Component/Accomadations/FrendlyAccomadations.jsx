import React, { useState } from 'react';
import Testimonial from '../Home/Testimonial';

const FeaturedAccommodations = () => {
    const [accommodations] = useState([
        {
            id: 1,
            name: 'Luxury Stay',
            image: 'https://img.freepik.com/free-vector/dogs-doghouse-made-wood_1308-90854.jpg?t=st=1718187591~exp=1718191191~hmac=8d3e55b43608462e90796bb2503d56e048041bc7b5be17267d82bff2cb859a7d&w=740',
            description: 'Beautiful and luxurious stay with all amenities.',
            rating: 4.5,
            // location: 'City Center',
            price: '$300/night'
        },
        {
            id: 2,
            name: 'Solo Stay',
            image: 'https://img.freepik.com/free-vector/dogs-doghouse-made-wood_1308-90854.jpg?t=st=1718187591~exp=1718191191~hmac=8d3e55b43608462e90796bb2503d56e048041bc7b5be17267d82bff2cb859a7d&w=740',
            description: 'Cozy accommodation perfect for solo dog',
            rating: 4,
            // location: 'Suburbs',
            price: '$150/night'
        },
        {
            id: 3,
            name: 'Group Stay',
            image: 'https://img.freepik.com/free-vector/dogs-doghouse-made-wood_1308-90854.jpg?t=st=1718187591~exp=1718191191~hmac=8d3e55b43608462e90796bb2503d56e048041bc7b5be17267d82bff2cb859a7d&w=740',
            description: 'Spacious house ideal for group vacations.',
            rating: 4.8,
            // location: 'Beachfront',
            price: '$500/night'
        },
    ]);

    return (
        <div className="featured-accommodations mt-12">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Accommodations</h2>
            <div className="flex flex-wrap justify-around">
                {accommodations.map(accommodation => (
                    <div key={accommodation.id} className="accommodation-card bg-white shadow-md rounded p-4 m-2 w-full md:w-1/3 lg:w-1/4 text-center transition-transform transform hover:scale-105">
                        <img src={accommodation.image} alt={accommodation.name} className="w-full  object-cover mb-4 rounded" />
                        <h3 className="text-xl font-bold mb-2">{accommodation.name}</h3>
                        <p className="text-gray-600 mb-2">{accommodation.location}</p>
                        <p className="text-yellow-500 mb-2">Rating: {accommodation.rating}</p>
                        <p className="mb-2">{accommodation.description}</p>
                        <p className="text-green-600 font-bold mb-2">{accommodation.price}</p>
                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">View Details</button>
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
                        <p className="text-xl mb-6">Find the perfect stay for your furry friend</p>
                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Explore Now</button>
                    </div>
                </div>
            </div>

            {/* Featured Accommodations Section */}
            <FeaturedAccommodations />

            {/* Accommodation Details Section */}
            <div className="accommodation-details mt-12">
                <h2 className="text-3xl font-bold text-center mb-8">Accommodation Details</h2>
                <div className="flex flex-wrap justify-around">
                    <div className="details-card bg-white shadow-lg rounded p-6 m-4 w-full md:w-1/3">
                        <h3 className="text-2xl font-bold mb-4 text-blue-600">Amenities</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Spacious rooms</li>
                            <li>Pet-friendly facilities</li>
                            <li>Free Wi-Fi</li>
                            <li>Complimentary breakfast</li>
                        </ul>
                    </div>
                    <div className="details-card bg-white shadow-lg rounded p-6 m-4 w-full md:w-1/3">
                        <h3 className="text-2xl font-bold mb-4 text-blue-600">Location</h3>
                        <p className="text-gray-700">Conveniently located in the heart of the city with easy access to parks and pet-friendly attractions.</p>
                    </div>
                    <div className="details-card bg-white shadow-lg rounded p-6 m-4 w-full md:w-1/3">
                        <h3 className="text-2xl font-bold mb-4 text-blue-600">Pricing</h3>
                        <p className="text-gray-700">Starting from $120 per night. Special discounts available for long stays.</p>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="benefits mt-12 mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Dog-Friendly Accommodations</h2>
                <div className="flex flex-wrap justify-around">
                    <div className="benefit-card bg-white shadow-md rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/dog.png" alt="Dog-Friendly" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Dog-Friendly</h3>
                        <p>Enjoy a comfortable stay with your dogs without any restrictions.</p>
                    </div>
                    <div className="benefit-card bg-white shadow-md rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/home.png" alt="Comfort" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Comfort</h3>
                        <p>Experience top-notch amenities designed for both you and your dogs.</p>
                    </div>
                    <div className="benefit-card bg-white shadow-md rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/home.png" alt="Convenience" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Convenience</h3>
                        <p>Located near parks and dog-friendly attractions for a delightful stay.</p>
                    </div>
                </div>
            </div>


            {/* Testimonials Section */}
           <Testimonial/>

          

        </div>
    );
};

export default FriendlyAccommodations;

