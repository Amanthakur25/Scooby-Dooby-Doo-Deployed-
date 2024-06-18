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
