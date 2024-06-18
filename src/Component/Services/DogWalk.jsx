import React from 'react';
import Testimonial from '../Home/Testimonial';

const DogWalk = () => {
    return (
        <div className="container mx-auto p-8">
            {/* Hero Section */}
            <div className="hero bg-cover bg-center h-96" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/people-walking-dog_23-2148517389.jpg?t=st=1718174752~exp=1718178352~hmac=42494f59bceabd114d196f53f0ca6a5fcd19f415d249ff7c28f081f2dd3b9939&w=996')" }}>
                <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Professional Dog Walking Services</h1>
                        <p className="text-xl mb-6">Ensuring your dog gets the exercise and attention they need</p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Schedule a Walk</button>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="services mt-12">
                <h2 className="text-3xl font-bold text-center mb-8">Our Walking Services</h2>
                <div className="flex flex-wrap justify-around">
                    <div className="service-card bg-white shadow-md rounded p-4 m-2 w-1/3">
                        <img src="https://img.freepik.com/free-vector/people-walking-with-their-cute-dogs_23-2148525750.jpg?t=st=1718174820~exp=1718178420~hmac=eff47f5c643a45aa8864fb6a9df3b9070ea3b944ef91e2e72601541ef3fa05a7&w=996" alt="Group Walks" className="rounded mb-4" />
                        <h3 className="text-xl font-bold mb-2">Group Walks</h3>
                        <p>Fun and social walks with other friendly dogs.</p>
                    </div>
                    <div className="service-card bg-white shadow-md rounded p-4 m-2 w-1/3">
                        <img src="https://img.freepik.com/free-vector/people-walking-dog-illustration-concept_23-2148541852.jpg?t=st=1718174849~exp=1718178449~hmac=683ba41540256244c1e7e7d24c4d20c391dfb32f56139a569d7b58e73be43e3f&w=740" alt="Solo Walks" className="rounded mb-4" />
                        <h3 className="text-xl font-bold mb-2">Solo Walks</h3>
                        <p>Personalized one-on-one attention for your dog.</p>
                    </div>
                    <div className="service-card bg-white shadow-md rounded p-4 m-2 w-1/3">
                        <img src="https://img.freepik.com/free-vector/people-walking-dog-outdoors_23-2148526910.jpg?t=st=1718174878~exp=1718178478~hmac=56bfc7172989969548c1ebee0b7d6246ffc73c56f565f98d2d9a2ebf1e8a2ff2&w=996" alt="Puppy Walks" className="rounded mb-4" />
                        <h3 className="text-xl font-bold mb-2">Puppy Walks</h3>
                        <p>Special care and shorter walks for younger dogs.</p>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="benefits mt-12">
                <h2 className="text-3xl font-bold text-center mb-8">Benefits of Our Walking Services</h2>
                <div className="flex flex-wrap justify-around">
                    <div className="benefit-card bg-gray-100 rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/heart-health.png" alt="Health & Exercise" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Health & Exercise</h3>
                        <p>Regular walks keep your dog fit and healthy.</p>
                    </div>
                    <div className="benefit-card bg-gray-100 rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/group-of-people.png" alt="Socialization" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Socialization</h3>
                        <p>Group walks help your dog make new friends.</p>
                    </div>
                    <div className="benefit-card bg-gray-100 rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/smiling-face.png" alt="Stress Relief" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Stress Relief</h3>
                        <p>Walking helps reduce anxiety and stress in dogs.</p>
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
                        <h3 className="text-xl font-bold mb-2">Group Walks</h3>
                        <p>$20 per walk</p>
                    </div>
                    <div className="pricing-card bg-white shadow-md rounded p-4 m-2 w-1/3 text-center">
                        <h3 className="text-xl font-bold mb-2">Solo Walks</h3>
                        <p>$30 per walk</p>
                    </div>
                    <div className="pricing-card bg-white shadow-md rounded p-4 m-2 w-1/3 text-center">
                        <h3 className="text-xl font-bold mb-2">Puppy Walks</h3>
                        <p>$25 per walk</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DogWalk;
