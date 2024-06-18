import React from "react";
import dog from "../../assets/dog.png";

function AboutUsHeader() {
  return (
    <div className="bg-white">
      <div className="relative w-full">
        <img
          src="https://scoobydoobydoopethouse.com/wp-content/themes/scooby/assets/images/innerbg.jpg"
          alt="header"
          className="w-full object-cover"
        />
        <div className="absolute  flex-col top-0 left-0 w-full h-full flex items-center">
          <h1 className=" text-[60px] text-[#e87200] font-bold mt-14 font-gochi-hand text-shadowText">
            About Us
          </h1>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 bg-[#e87200] pt-10 ">
      <div className=' flex justify-center items-center'>
        <img src={dog} alt="Dog" className=" w-[408px] h-[376px]" />
      </div>
      <div className="flex items-center justify-center">
        <div className=' w-[60%]'>
          <h1 className="text-[30px] font-bold text-white">Cageless boarding service, a family of care providers, providing cuddles not cages.</h1>
          <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded">Explore Our Services</button>
        </div>
      </div>
        </div> */}

      <div className=" flex justify-center items-center text-justify">
        <div className=" py-40">
          <p className=" text-center text-[20px] font-bold">
            Are you tired of leaving your furry friends in small, cramped cages
            while you’re away? <br />
            <span className=" text-gray-600 text-[15px]">
              Look no further than Unleashed Pet Hotel brought you by
            </span>{" "}
            <br />
            <span className=" text-3xl text-[#e87200]">Scooby-Dooby-Doo!</span>
          </p>
        </div>
      </div>

      <div>
        <div className=" p-8">
          <div className="flex flex-col lg:flex-row justify-center items-center ">
            <div className="relative  flex justify-center items-center mb-8 lg:mb-0">
              <img
                src="https://i.pinimg.com/564x/3e/39/4a/3e394aa91a338a3c4fc653ca66954a29.jpg"
                alt="Dog Walking"
                className="relative z-10 w-[360px] mx-auto lg:mx-0  lg:ml-auto shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-16 ">
              <div className=" w-[40%] h-[2px] bg-[#e87200]"></div>
              <h1 className="font-bold text-gray-800 mb-4 mt-2">
                <span className="text-[30px]">Introducing</span> <br></br>
                <span className=" text-[25px] text-[#e87200]">
                  Unleashed Pet Hotel –
                </span>{" "}
                <br />
              </h1>
              <p className="text-gray-700 mb-6">
                The ultimate pet vacation destination. Our hotel hosts are
                on-site 24×7. We also offer convenient drop & pick-up times to
                fit your schedule.
              </p>
              <p className="text-gray-700 mb-6">
                Your pet will enjoy playtime daily with our pet-loving staff and
                we even offer medication administering if needed. Unlimited
                relief walks under surveillance to ensure maximum safety. Have
                peace of mind while you are away that your furry friend is
                having a blast at our premium cageless boarding facility. Simply
                book a slot for your dog and watch them have the time of their
                life.
              </p>
              <div className=" w-[40%] h-[2px] bg-[#e87200]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* meet our team */}
      <div className=" flex justify-center items-center text-justify w-full">
        <div className=" py-40 flex flex-col justify-center items-center w-[70%]">
          <span className=" text-3xl text-[#e87200] text-center w-full mb-5">
            Meet the Crew
          </span>
          <p className=" text-center text-gray-600 text-[15px]">
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

      <div className=" flex flex-col gap-y-20 mb-10 ">
        <div className=" flex justify-center items-center ">
        <div className="  pl-2 flex justify-end items-end bg-[#e87200]">
          <img
            src="https://i.pinimg.com/474x/78/fd/28/78fd28a29f1bcc895dace7b57061dc46.jpg"
            alt="team"
            className=" w-[300px] "
          />
        </div>
        <div className=" gap-y-1 md:gap-y-5  w-[50%] bg-[#e87200] p-5 text-sm">
          <p>
            <span className=" text-bold text-3xl text-white">Priya Raghuvanshi</span>, who
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

        <div className=" flex justify-center items-center">
        
        <div className=" gap-y-1 md:gap-y-5  w-[50%] bg-[#e87200] p-5 text-sm">
          <p>
            <span className=" text-bold text-3xl text-white">Arno Ghosh</span>, 
            holds a bachelor’s degree in hotel management and has experience in the corporate sector. He brings to Scooby dooby doo pet hotel his great organizational skills, along with leadership qualities and a very strong disposition towards customer satisfaction. When Arno started helping Priya run her business in 2022, he worked on every possible scope of improvement for making the facility stand out.
          </p>
          <p>
          Providing leadership to ensure proper training, motivation, accountability and teamwork. Arno experience in leading and managing large teams ensures that every team member has the training, knowledge and supervision to care for each client’s pet in the safest way possible.
          </p>
          <p>
          Arno knows that Customer Satisfaction is best achieved when you exceed your customer’s expectations. His disposition toward customer satisfaction can be felt by every client that visits Scooby–doo pet hotel but he insists that it has to be felt by the pets that board here first. Dogs do not want to be locked up or left alone at any time. So here we are at the service of your dog, a step away to help you out 24×7.
          </p>
        </div>
        <div className="  pr-2 flex justify-end items-end bg-[#e87200]">
          <img
            src="https://i.pinimg.com/474x/43/3c/e6/433ce6cea8436711544d24ff2f881aca.jpg"
            alt="team"
            className=" w-[300px] "
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHeader;
