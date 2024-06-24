import React from 'react';
import { FaUser, FaDog, FaMedkit, FaPaw } from 'react-icons/fa';

const crewMembers = [
  {
    name: 'Emily Johnson',
    position: 'Head Caretaker',
    description: 'Emily oversees the daily operations and ensures every pet receives top-notch care. She has a special bond with senior dogs and enjoys creating enriching activities for them.',
    icon: <FaUser className="text-4xl text-blue-500" />,
  },
  {
    name: 'Mark Davis',
    position: 'Training Specialist',
    description: 'Mark is a certified dog trainer with a passion for teaching pups new tricks and behaviors. His patience and positive reinforcement techniques make him a favorite among our furry guests.',
    icon: <FaDog className="text-4xl text-green-500" />,
  },
  {
    name: 'Sophie Roberts',
    position: 'Veterinary Nurse',
    description: 'Sophie provides expert medical care and ensures all pets are healthy during their stay. She has a gentle touch and a keen eye for spotting any signs of discomfort or illness.',
    icon: <FaMedkit className="text-4xl text-red-500" />,
  },
  {
    name: 'Alexandra Lee',
    position: 'Playtime Coordinator',
    description: 'Alexandra organizes fun play sessions and socialization activities for dogs. She loves seeing tails wagging and dogs having a blast together in our play area.',
    icon: <FaPaw className="text-4xl text-yellow-500" />,
  },
  {
    name: 'Thomas Adwin',
    position: 'Wellness Supervisor',
    description: 'Thomas ensures that each pet receives the proper diet and exercise regimen to promote their overall well-being. He believes in the importance of a healthy lifestyle for all pets.',
    icon: <FaMedkit className="text-4xl text-green-500" />,
  },
  {
    name: 'Lily Chang',
    position: 'Customer Care Specialist',
    description: 'Lily welcomes every pet and owner with a warm smile and ensures that all inquiries and requests are handled promptly. She loves building relationships with our clients and their pets.',
    icon: <FaUser className="text-4xl text-purple-500" />,
  },
];

const CrewMembersPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Founding Members Section */}
        <div className="flex justify-center items-center text-justify w-full">
          <div className="mb-10 flex flex-col justify-center items-center w-[70%]">
            <span className="text-3xl text-[#e87200] text-center w-full mb-5">
              Meet the Founding Members
            </span>
            <p className="text-center text-gray-600 text-[15px]">
              Scooby-dooby-doo Pet hotel is owned and operated by Arno Ghosh and
              Priya Raghuvanshi. They have been passionate about pets since their
              childhood and had five furry kids of their own, however, post the
              death of one of their kid they decided to start a facility of their
              own in 2020 to bring their unique set of skills and abilities to the
              ongoing pursuit of their mutual dream and passion to provide pet
              parents and their furry kids the world’s best boarding experience.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-20 mb-10">
          <div className="flex justify-center items-center">
            <div className="pl-2 flex justify-end  items-end bg-[#e87200]">
              <img
                src="https://res.cloudinary.com/dypgcizq4/image/upload/f_auto,q_auto/v1/assets/suuz1ttsy8mfohmf3jn4"
                alt="team"
                className="w-[200px]"
              />
            </div>
            <div className="gap-y-1 md:gap-y-5 w-[50%]  bg-[#e87200] p-5 text-sm">
              <p>
                <span className="text-bold text-3xl text-white">Priya Raghuvanshi</span>, who
                has an MBA degree, is the creator of the cage-free dog boarding
                concept, which was born out of her empathy for dogs being locked up
                in dog boarding kennels. Priya is a life-long animal lover, and she
                knew that there had to be a happier way to provide boarding for dogs
                and with the help of an expert dog trainer, she soon learned a very
                important fact: all dogs are inherently social pack animals. This
                means that they can get along with other strange dogs in a new
                environment as long as they are in a balanced pack with a strong,
                confident, and fair leader). She found that if you evaluate every
                dog first and follow the steps of careful introduction, pack
                socialization and consistent leadership, that a balanced pack can be
                created and maintained in a boarding facility 24-hours-a-day, which
                is the key to the success of Scooby dooby doo.
              </p>
              <p>
                Priya also has another wonderful attribute that has had a profound
                effect on the personality of Scooby dooby doo pet hotel and that is
                her belief that everything she does in life has got to be first
                class. Simply being cage-free was not good enough and everything at
                our SDD house had to have the feel of a first-class hotel.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="gap-y-1 md:gap-y-5 w-[50%] bg-[#e87200] p-5 text-sm">
              <p>
                <span className="text-bold text-3xl text-white">Arno Ghosh</span>, 
                holds a bachelor’s degree in hotel management and has experience in the corporate sector. He brings to Scooby dooby doo pet hotel his great organizational skills, along with leadership qualities and a very strong disposition towards customer satisfaction. When Arno started helping Priya run her business in 2022, he worked on every possible scope of improvement for making the facility stand out.
              </p>
              <p>
                Providing leadership to ensure proper training, motivation, accountability and teamwork. Arno experience in leading and managing large teams ensures that every team member has the training, knowledge and supervision to care for each client’s pet in the safest way possible.
              </p>
              <p>
                Arno knows that Customer Satisfaction is best achieved when you exceed your customer’s expectations. His disposition toward customer satisfaction can be felt by every client that visits Scooby–doo pet hotel but he insists that it has to be felt by the pets that board here first. Dogs do not want to be locked up or left alone at any time. So here we are at the service of your dog, a step away to help you out 24×7.
              </p>
            </div>
            <div className="pr-2 flex justify-end items-end bg-[#e87200]">
              <img
                src="https://i.pinimg.com/474x/43/3c/e6/433ce6cea8436711544d24ff2f881aca.jpg"
                alt="team"
                className="w-[300px]"
              />
            </div>
          </div>
        </div>

        {/* Crew Members Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-5xl">
            Meet Our Crew
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our team of passionate pet lovers dedicated to creating a home away from home for your furry friends.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {crewMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105">
              <div className="flex-shrink-0">
                {member.icon}
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-lg font-medium text-gray-900">{member.name}</h2>
                <p className="text-sm text-gray-600">{member.position}</p>
                <p className="mt-2 text-sm text-gray-700">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrewMembersPage;
