import React from 'react';
import DogPaw from "../../assets/PawImage.png";
import Dog1 from "../../assets/Dog1Image.webp";
import Dog2 from "../../assets/Dog2Image.webp";
import Dog3 from "../../assets/Dog3Image.webp";
import Dog4 from "../../assets/Dog4Image.webp";
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
    return (
        <div className="grid grid-cols-2 bg-black h-[692px] text-white">
            {/* Left Side */}
            <div className="p-8 ml-5 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-orange-500 mb-4">Why Choose Us?</h2>
                <p className='mb-4'>Relax While Your Pet Stays at Scooby Dooby Doo.</p>
                <ul className="list-disc mb-4">
                    <li>Book a Safe & Loving Pet Carer Near You.</li>
                    <li>Affordable, Personalized Pet Boarding.</li>
                    <li>Home Boarding Turns into Joyful Vacations.</li>
                    <li>Follow Your Pet’s Boarding Joy with New Friends.</li>
                </ul>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">Call Us: 1234567890</button>
                <div className="flex justify-end mt-4">
                    {/* Dog paw images */}
                    <img src={DogPaw} alt="Dog Paw" className="h-12 md:h-16 mx-2 my-2" />
                    <img src={DogPaw} alt="Dog Paw" className="h-12 md:h-16 mx-2 my-2" />
                    <img src={DogPaw} alt="Dog Paw" className="h-12 md:h-16 mx-2 my-2" />
                    <img src={DogPaw} alt="Dog Paw" className="h-12 md:h-16 mx-2 my-2" />
                </div>
            </div>
            {/* Right Side */}
            <div className="relative flex justify-center items-center">
                {/* Background images of dogs */}
                <div className="absolute inset-0 grid grid-cols-2 ">
                    <div className="col-span-2 md:col-span-1 flex justify-center items-center">
                        <img src={Dog1} alt="Dog 1" className="w-full h-auto  ease-in md:max-h-full opacity-50 hover:opacity-100 transition-opacity duration-300" style={{ maxWidth: '384px' }} />
                    </div>
                    <div className="hidden md:flex justify-center items-center">
                        <img src={Dog2} alt="Dog 2" className="w-full h-auto  ease-in md:max-h-full opacity-50 hover:opacity-100 transition-opacity duration-300" style={{ maxWidth: '384px' }} />
                    </div>
                    <div className="hidden md:flex justify-center items-center">
                        <img src={Dog3} alt="Dog 3" className="w-full h-auto  ease-in md:max-h-full opacity-50 hover:opacity-100 transition-opacity duration-300" style={{ maxWidth: '384px' }} />
                    </div>
                    <div className="hidden md:flex justify-center items-center">
                        <img src={Dog4} alt="Dog 4" className="w-full h-auto  ease-in md:max-h-full opacity-50 hover:opacity-100 transition-opacity duration-300" style={{ maxWidth: '384px' }} />
                    </div>
                </div>
                <div className="relative z-10 p-8 md:pl-20 md:py-20">
                <Link to="/enquiry">
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out">Make an Enquiry</button>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
