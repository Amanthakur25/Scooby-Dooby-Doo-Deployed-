import React from "react";
import BgAboutUs from "../../assets/BgAboutUs.webp";

function AboutUsHeader() {
  return (
    <div className="bg-white">
      <div className="relative w-full">
        <img src={BgAboutUs} alt="header" className="w-full object-cover" />
        <div className="absolute flex-col top-0 left-0 w-full h-full flex items-center">
          <h1 className="text-[60px] text-[#e87200] font-bold mt-14 font-gochi-hand text-shadowText">
            About Us
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center py-20">
        <div className="max-w-5xl px-4">
          <p className="text-center text-[20px] font-bold">
            Are you tired of leaving your furry friends in small, cramped cages
            while you’re away? <br />
            <span className="text-gray-600 text-[15px]">
              Look no further than Pet Hotel brought to you by
            </span>{" "}
            <br />
            <span className="text-3xl text-[#e87200]">Scooby-Dooby-Doo!</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center py-20">
        <div className="max-w-5xl px-4">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="relative flex justify-center items-center mb-8 lg:mb-0 lg:w-1/2">
              <img
                src="https://i.pinimg.com/564x/3e/39/4a/3e394aa91a338a3c4fc653ca66954a29.jpg"
                alt="Dog Walking"
                className="w-full shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-16">
              <div className="w-full h-[2px] bg-[#e87200]"></div>
              <h1 className="font-bold text-gray-800 mb-4 mt-2">
                <span className="text-[30px]">Introducing</span> <br />
                <span className="text-[25px] text-[#e87200]">
                  Scooby Dooby Pet Hotel –
                </span>{" "}
                <br />
              </h1>
              <p className="text-gray-700 mb-6">
                The ultimate pet vacation destination. Our hotel hosts are on-site
                24×7. We also offer convenient drop & pick-up times to fit your
                schedule.
              </p>
              <p className="text-gray-700 mb-6">
                Your pet will enjoy playtime daily with our pet-loving staff and
                we even offer medication administering if needed. Unlimited relief
                walks under surveillance to ensure maximum safety. Have peace of
                mind while you are away that your furry friend is having a blast
                at our premium cageless boarding facility. Simply book a slot for
                your dog and watch them have the time of their life.
              </p>
              <div className="w-full h-[2px] bg-[#e87200]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-[40px] text-[#e87200] font-bold mb-8">
            Welcome to Scooby Dooby Doo Pet Hotel!
          </h2>
          <p className="text-center text-[20px] mb-8">
            At Scooby Dooby Doo Pet Hotel, we understand that your furry friends
            deserve the best care, comfort, and love. Our pet hotel offers a cosy,
            home-like environment with personalised services to ensure your pet
            feels right at home. Whether you are going on a short trip or an
            extended vacation, we provide exceptional accommodations and a range
            of complimentary services for longer stays.
          </p>
          <h3 className="text-[30px] text-[#e87200] font-bold mb-4">
            Our Accommodations Include:
          </h3>
          <ul className="list-disc list-inside mb-8">
            <li className="text-gray-700 mb-2">
              <strong>Home-Cooked Meals:</strong> Your pet will enjoy delicious
              and nutritious home-cooked meals such as chicken, rice, liver, curd,
              milk, chapati, and eggs. Have a special request? We’re happy to
              accommodate any other home-cooked meals your pet prefers.
            </li>
            <li className="text-gray-700 mb-2">
              <strong>Custom Feeding Plans:</strong> For dogs accustomed to
              dedicated pet food, please pack their meals according to their
              schedule, and we’ll take care of the rest.
            </li>
            <li className="text-gray-700 mb-2">
              <strong>Comfortable Essentials:</strong> Each pet will have their
              own bowls, treats, toys, and a comfortable bed to ensure they feel
              safe and secure.
            </li>
          </ul>
          <h3 className="text-[30px] text-[#e87200] font-bold mb-4">
            Individual Attention and Care:
          </h3>
          <ul className="list-disc list-inside mb-8">
            <li className="text-gray-700 mb-2">
              <strong>Personalised Feeding:</strong> We feed each pet individually
              to cater to their specific dietary needs and preferences.
            </li>
            <li className="text-gray-700 mb-2">
              <strong>One-on-One Walks:</strong> Every dog enjoys individual
              walks, ensuring they get the exercise and attention they need.
            </li>
            <li className="text-gray-700 mb-2">
              <strong>Basic Grooming:</strong> Our grooming services include
              cleaning eyes, ears, dry bath and combing hair, keeping your pet
              looking and feeling their best.
            </li>
            <li className="text-gray-700 mb-2">
              <strong>Daily Video Updates:</strong> Request a daily video to see
              how your pet is doing, providing peace of mind while you’re away
              (11:00am - 6:00 pm).
            </li>
            <li className="text-gray-700 mb-2">
              <strong>Chat Support:</strong> Stay updated on your pet’s well-being
              with our chat support available from 11:00 am to 6:00 pm.
            </li>
          </ul>
          <h3 className="text-[30px] text-[#e87200] font-bold mb-4">
            Special Benefits for Extended Stays:
          </h3>
          <p className="text-gray-700 mb-8">
            Planning to book for more than 15 days? Enjoy complimentary services
            and receive exclusive discounted coupons as a token of our
            appreciation.
          </p>
          <p className="text-center text-[20px] font-bold mb-8">
            At Scooby Dooby Doo Pet Hotel, your pet's happiness and comfort are
            our top priorities. Book with us today and give your furry friend a
            home away from home!
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-[40px] text-[#e87200] font-bold mb-8">
            Different Types of Accommodation
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-center mb-8">
            <div className="w-full lg:w-1/3 p-4">
              <h3 className="text-[25px] text-[#e87200] font-bold mb-2">
                Friendly Accommodation
              </h3>
              <p className="text-gray-700 mb-4">
                For sociable dogs who love interacting with other dogs and humans,
                our Friendly Accommodation provides a vibrant social environment.
                New guests undergo a temperament test to ensure they are
                comfortable and safe in group settings. Dogs that pass the test
                enjoy playtime, socialising, and supervised interactions with
                other friendly guests.
              </p>
              <p className="text-[#e87200] font-bold">Quote: 750</p>
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <h3 className="text-[25px] text-[#e87200] font-bold mb-2">
                Separate Accommodation
              </h3>
              <p className="text-gray-700 mb-4">
                Our Separate Accommodation is ideal for dogs who prefer their own
                space or may not be fully comfortable in group settings. These
                accommodations provide a quiet and private environment where your
                dog can relax and enjoy personalised care and attention from our
                staff.
              </p>
              <p className="text-[#e87200] font-bold">Quote: 600</p>
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <h3 className="text-[25px] text-[#e87200] font-bold mb-2">
                Day-Care Accommodation
              </h3>
              <p className="text-gray-700 mb-4">
                For pet owners who need a safe and fun place for their dogs during
                the day, our Day-Care Accommodation offers the perfect solution.
                Our day-care service provides a stimulating environment with
                supervised playtime, socialising with other dogs, and individual
                attention from our caring staff. Your dog will have a blast while
                you’re at work or running errands.
              </p>
              <p className="text-[#e87200] font-bold">Quote: 500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHeader;