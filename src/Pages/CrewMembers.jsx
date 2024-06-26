import React , { useState} from 'react';
import {CrewMembers} from "../constants/imageConstant";

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
          <div className="flex max-md:flex-col justify-center items-center">
            <div className="pl-2 flex justify-end  items-end bg-[#e87200]">
              <img
                src="https://res.cloudinary.com/dypgcizq4/image/upload/f_auto,q_auto/v1/assets/suuz1ttsy8mfohmf3jn4"
                alt="team"
                className=" max-md:h-[300px] w-[250px] md:w-[200px] object-cover"
              />
            </div>
            <div className="gap-y-1 md:gap-y-5 w-[70%] md:w-[50%]  bg-[#e87200] p-5 text-sm">
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
                confident, and fair leader. She found that if you evaluate every
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

          <div className="flex max-md:flex-col justify-center items-center">
            <div className=" max-md:order-2  gap-y-1 md:gap-y-5 w-[70%] md:w-[50%] bg-[#e87200] p-5 text-sm">
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
            <div className="max-md:order-1 pr-2 flex justify-end items-end bg-[#e87200]">
              <img
                src="https://i.pinimg.com/474x/43/3c/e6/433ce6cea8436711544d24ff2f881aca.jpg"
                alt="team"
                className="max-md:h-[300px] w-[250px] md:w-[300px] object-cover"
              />
            </div>
          </div>
        </div>


        {/* Additional provided text content */}
        <div className="text-center mt-10 text-gray-800">
          <h2 className="text-3xl font-bold mb-4">Meet the Team at Scooby Dooby Doo Pet Hotel</h2>
          <p className="text-lg leading-relaxed">
            At Scooby Dooby Doo Pet Hotel, our team is a close-knit family of dog lovers who are dedicated to providing exceptional care and creating a home away from home for your furry friends. Every member of our crew is selected not just for their passion for pets but for their commitment to excellence in every aspect of pet care.
          </p>
          {/* Additional detailed description of the team */}
          <p className="text-lg leading-relaxed mt-4">
            Our team undergoes rigorous training to master the intricacies of dog behavior, safety handling, and pet health. This includes learning the latest in medical care, emergency first aid, and creating a safe, engaging environment for dogs of all breeds and sizes. Their ongoing education ensures that they are always up-to-date with the best practices in pet hospitality.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            But what truly sets our crew apart is their genuine love for dogs. This isn’t just a job for them—it’s a calling. They understand that each dog is unique and deserves personalized attention and care. Our team members are excellent hosts, making sure every dog feels loved, secure, and happy during their stay. From interactive play sessions to cozy nap times, they are experts at creating a balanced and enriching experience for your pet.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Whether it's greeting you with a friendly smile at check-in, ensuring your pet’s medical needs are met, or providing comforting cuddles and play, our team excels in making your pet's stay unforgettable. At Scooby Dooby Doo Pet Hotel, our crew’s dedication, expertise, and genuine affection for animals create a welcoming and joyful environment that both pets and their owners trust and love.
          </p>
        </div>


        <div class="grid grid-cols-3 gap-2 mt-10">
          
         
          <div>
            <img class="h-auto max-w-full rounded-lg opacity-50 hover:opacity-100" src={CrewMembers.M3} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg opacity-50 hover:opacity-100" src={CrewMembers.M4} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg opacity-50 hover:opacity-100" src={CrewMembers.M5} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg opacity-50 hover:opacity-100" src={CrewMembers.M6} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg opacity-50 hover:opacity-100" src={CrewMembers.M7} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg opacity-50 hover:opacity-100" src={CrewMembers.M8} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg opacity-50 hover:opacity-100" src={CrewMembers.M10} alt="" />
          </div>
         
          <div>
            <img class="h-auto max-w-full rounded-lg opacity-50 hover:opacity-100" src={CrewMembers.M2} alt="" />
          </div>
          <div>
            <img class=" max-w-full h-[435px] w-[400px] rounded-lg opacity-50 hover:opacity-100" src={CrewMembers.M11} alt="" />
          </div>
          
        </div>


      </div>
    </div>

  );
};

export default CrewMembersPage;
