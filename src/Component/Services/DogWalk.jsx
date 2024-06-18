import React from 'react';
import Testimonial from '../Home/Testimonial';
import { GiDistressSignal } from "react-icons/gi";

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

            {/* Dog Walking Services Section */}
            <div className="dog-walking-services mt-12 bg-gray-100 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Professional Dog Walking Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center items-center">
                        <img src="https://img.freepik.com/free-vector/people-walking-with-their-cute-dogs_23-2148525750.jpg?t=st=1718174820~exp=1718178420~hmac=eff47f5c643a45aa8864fb6a9df3b9070ea3b944ef91e2e72601541ef3fa05a7&w=996" alt="Dog Walking" className="w-full rounded-lg shadow-lg mb-4" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-xl text-gray-700 mb-4">Are you a busy professional in need of a reliable dog walking service? Look no further. Our team of trained professional walkers offers both monthly and emergency walks tailored to your needs and availability.</p>
                        <p className="text-xl text-gray-700 mb-4">We prioritize your dog's safety and enjoyment during each walk, ensuring they receive the exercise and attention they deserve. Unlike other services, our team guarantees consistency and reliability, so you never have to worry about missed appointments or last-minute cancellations.</p>
                        <p className="text-xl text-gray-700 mb-4">Trust us to provide exceptional care for your furry friend, no matter how demanding your schedule.</p>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto mt-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">How Our Dog Walking Service Works:</h3>
                    <ol className="list-decimal text-lg text-gray-700">
                        <li className="mb-2">Initial Consultation: We start with an initial consultation to understand your dog's specific needs, preferences, and any special requirements they may have.</li>
                        <li className="mb-2">Customized Walk Schedules: Based on your input, we create a personalized walking schedule that fits seamlessly into your routine, whether you need daily, weekly, or occasional walks.</li>
                        <li className="mb-2">Experienced Walkers: Our team of experienced and trained walkers is dedicated to providing the highest level of care and attention, ensuring your dog’s well-being during each walk.</li>
                        <li className="mb-2">Emergency Support: In case of any unexpected changes or emergencies, our backup team is always ready to step in, ensuring your dog’s routine remains uninterrupted.</li>
                        <li className="mb-2">Health and Safety: We follow strict health and safety protocols, including using appropriate equipment and maintaining a close watch on your dog’s behavior and environment during walks.</li>
                    </ol>
                </div>
                <p className="mt-8 text-xl text-center text-gray-700">Trust us to provide exceptional care for your furry friend, no matter how demanding your schedule.</p>
            </div>



            {/* Benefits Section */}
            <div className="benefits mt-12 mb-10">
                <h2 className="text-3xl font-bold text-center mb-8">Benefits of Our Walking Services</h2>
                <div className="flex flex-wrap justify-around">
                    <div className="benefit-card bg-gray-100 rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios-filled/50/000000/heart-health.png" alt="Health & Exercise" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Health & Exercise</h3>
                        <p>Regular walks keep your dog fit and healthy.</p>
                    </div>
                    <div className="benefit-card bg-gray-100 rounded p-4 m-2 w-1/3 text-center">
                        <img src="https://img.icons8.com/ios/50/000000/group-foreground-selected.png" alt="Socialization" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Socialization</h3>
                        <p>Group walks help your dog make new friends.</p>
                    </div>
                    <div className="benefit-card bg-gray-100 rounded p-4 m-2 w-1/3 text-center">
                      <GiDistressSignal  className="mx-auto mb-4 h-16 w-16" />
                        <h3 className="text-xl font-bold mb-2">Stress Relief</h3>
                        <p>Walking helps reduce anxiety and stress in dogs.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <Testimonial />



        </div>
    );
};

export default DogWalk;
