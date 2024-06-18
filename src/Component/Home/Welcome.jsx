import React from "react";
import { GiDogHouse, GiDogBowl, GiSittingDog, GiPawPrint } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Welcome to Scooby Dooby Doo
          </h2>
          <p className="mt-5 text-lg text-white bg-orange-400 rounded-xl px-5 py-2 inline-block">
            Cageless boarding service, a family of care providers, providing
            cuddles not cages.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <GiDogHouse size={50} className="text-orange-500" />,
              text: "Are you tired of leaving your furry friends in small, cramped cages while you’re away? Look no further than Scooby Dooby Doo Pet Hotel. Introducing Scooby-Dooby-Doo Pet Hotel - The ultimate pet vacation destination.",
            },
            {
              icon: <GiDogBowl size={50} className="text-orange-500" />,
              text: "Join our Scooby Dooby Doo family today and treat your pet to the ultimate getaway. Contact us to schedule a tour and see firsthand why we’re not just a pet hotel—we’re a sanctuary for your beloved companion. Because at Scooby Dooby Doo, every pet is family.",
            },
            {
              icon: <GiSittingDog size={50} className="text-orange-500" />,
              text: "Nestled in Hyderabad, our luxurious haven offers more than just boarding—it’s a vacation destination for your furry friends. Imagine a place where your dog can lounge in plush suites, enjoy gourmet meals, and romp freely in our expansive play areas.",
            },
            {
              icon: <GiPawPrint size={50} className="text-orange-500" />,
              text: "At Scooby Dooby Doo, we believe in indulging your pets with the finest care and attention. Our dedicated team ensures every tail wags with joy, whether it’s through personalized playtime, soothing massages, or bedtime stories under the stars.",
            },
            {
              icon: <GiDogHouse size={50} className="text-orange-500" />,
              text: "Rest assured, your pet’s well-being is our top concern. From daily grooming sessions to tailored dietary needs, we go above and beyond to meet their every comfort. With our secure premises and supervision, and our hotel hosts on-site 24x7, you can relax knowing your pet is safe and happy in our care.",
            },
            {
              icon: <GiDogBowl size={50} className="text-orange-500" />,
              text: "We also offer convenient drop & pick-up times to fit your schedule. Welcome to Scooby Dooby Doo Pet Hotel, where pampering your pets is our passion and priority!",
            },
            {
              icon: <GiSittingDog size={50} className="text-orange-500" />,
              text: "Your pet will enjoy playtime daily with our pet-loving staff and we even offer medication administering if needed. Unlimited relief walks under surveillance to ensure maximum safety.",
            },
            {
              icon: <GiPawPrint size={50} className="text-orange-500" />,
              text: "Have peace of mind while you are away that your furry friend is having a blast at our premium cageless boarding facility. Simply book a slot for your dog and watch them have the time of their life.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <div className="flex justify-center items-center mb-4">{item.icon}</div>
              <p className="text-gray-700 text-center">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          <Link to="/aboutUs">
            <button className="px-6 py-3 flex justify-center items-center bg-white border-2 border-gray-700 text-orange-500 font-semibold rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-xl">
              <span className="mr-2">
                <IoIosArrowForward />
              </span>
              Read More
            </button>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-10 mt-10">
          {[
            {
              icon: <GiDogHouse size={150} className="text-white" />,
              title: "LUXURY BOARDING",
            },
            {
              icon: <GiSittingDog size={150} className="text-white" />,
              title: "DAYCARE",
            },
          ].map((item, index) => (
            <div key={index} className="flex justify-center items-center transform transition duration-500 hover:scale-105">
              <div className="bg-black hover:bg-orange-600 w-96 p-8 rounded-2xl shadow-lg">
                <div className="flex flex-col items-center">
                  <div className="mb-4">{item.icon}</div>
                  <div className="text-white text-2xl">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
