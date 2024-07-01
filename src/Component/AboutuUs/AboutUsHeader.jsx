import React from "react";
import {accdogcom} from "../../constants/imageConstant";
import {dagstay} from "../../constants/imageConstant"
import { PiBowlFoodDuotone } from "react-icons/pi";
import { MdFoodBank } from "react-icons/md";
import { GiRolledCloth } from "react-icons/gi";
import {BgAboutUs} from "../../constants/imageConstant";



function AboutUsHeader() {
  const arr = [
    {
      name: "Home-Cooked Meals",
      img: <PiBowlFoodDuotone className=" h-20 w-20" />,
      des: "Your pet will enjoy delicious and nutritious home-cooked meals such as chicken, rice, liver, curd, milk, chapati, and eggs.",
    },
    {
      name: "Custom Feeding Plans",
      img: <MdFoodBank className=" h-20 w-20" />,
      des: "For dogs accustomed to dedicated pet food, please pack their meals according to their schedule, and we’ll take care of the rest.",
    },
  ];
  const arr2 = [
    {
      name: "Personalised Feeding",
      img: "https://img.freepik.com/free-vector/everyday-scenes-with-pets_23-2148535788.jpg?t=st=1718967762~exp=1718971362~hmac=28084ceba3abc390c77b9ba035cd36df419b77621b3183f76c7ba486747fad1f&w=740",
      img: "https://img.freepik.com/free-vector/everyday-scenes-with-pets_23-2148535788.jpg?t=st=1718967762~exp=1718971362~hmac=28084ceba3abc390c77b9ba035cd36df419b77621b3183f76c7ba486747fad1f&w=740",
      des:"We feed each pet individually to cater to their specific dietary needs and preferences."
    },
    {
      name: "One-on-One Walks",
      img: "https://img.freepik.com/free-vector/woman-walking-your-dog-park_24877-62817.jpg?t=st=1718968057~exp=1718971657~hmac=40f5c885772e0956753be9cc67693d0ff89a7f411edf4129fa57e41077113a0a&w=740",
      des:" Every dog enjoys individual walks, ensuring they get the exercise and attention they need."
    },
    {
      name:"Basic Grooming",
      img:"https://img.freepik.com/free-vector/flat-grooming-icon-with-women-drying-dog-with-long-fur_1284-63972.jpg?t=st=1718968133~exp=1718971733~hmac=7ff7395533d94a3106eb707712e8cd07a01c5d0ad7a20d044fba9ff0b5e558a8&w=740",
      des:"Our grooming services include cleaning eyes, ears, dry bath and combing hair, keeping your pet looking and feeling their best."
    },
    {
      name:"Daily Video Updates",
      img:"https://img.freepik.com/free-vector/hand-drawn-people-taking-photos-with-phone_23-2149021061.jpg?t=st=1718968188~exp=1718971788~hmac=eb10838a112d08fa6c57bc145baa9719a2a3592bc8d4f4627c7f87a3bfe4eceb&w=740",
      des:"Request a daily video to see how your pet is doing, providing peace of mind while you’re away (11:00am - 6:00 pm)"
    },
    {
      name:"Chat Support",
      img:"https://img.freepik.com/free-vector/organic-flat-customer-support_23-2148903123.jpg?t=st=1718968131~exp=1718971731~hmac=e4e582f23465f0d14b091b697d10371d581b2fc808722dabc378e70285226fb4&w=996",
      des:"Stay updated on your pet’s well-being with our chat support available from 11:00 am to 6:00 pm."
    }
  ];
  const css1 =
    "group before:hover:scale-95 before:hover:h-72 before:hover:w-80  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-[#ffb380] via-[#e87200] to-[#b55a00] before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden";
  const css2 =
    "w-32 h-32 bg-blue-700 mt-5 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500";
  const css3 =
    "overflow-hidden w-80 h-72 before:ease-in-out after:ease-in-out bg-white group cursor-pointer relative flex flex-col   rounded-2xl border hover:after:w-full border-white-222 hover:border-[#e87200] duration-300 p-2 sm:p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#e87200] before:absolute before:top-0 before:left-0";
  const css4 =
    "text-[#1D2825] group-hover:z-[5] font-medium duration-300 group-hover:text-white flex items-center gap-2 text-[15px] xl:text-base";

  return (
    <div className="bg-white">
      <div className="relative w-full">

        <img src={BgAboutUs} alt="header" className="w-full object-cover" />
        <div className="absolute flex-col top-0 left-0 w-full h-full flex items-center">
          <h1 className="text-[60px] text-[#e87200] font-bold mt-36 font-gochi-hand text-shadowText">

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
                src="https://res.cloudinary.com/dypgcizq4/image/upload/f_auto,q_auto/v1/assets/me5yywfopuhu73tjcokg"
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

      <div className=" flex flex-col justify-center items-center pt-20 bg-white">
      <div className=" py-[20px] max-md:px-5">
        <span className="text-[40px] sm:text-[60px] text-[#e87200] font-gochi-hand text-center">
          Our Accommodations Include
        </span>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10 ">
        {arr.map((item, index) => (
          <div className={`${css3}`}>
            <h4 class="font-medium text-[25px] duration-300 group-hover:text-white group-hover:z-[5]">
              {item.name}
            </h4>
            <span className=" w-full flex justify-center items-center group-hover:z-[5]">
              {item.img}
            </span>
            <span className={`${css4}`}>{item.des}</span>
          </div>
        ))}
      </div>
      
      <div className=" flex justify-center items-center text-justify">
        <div className=" py-40">
          <p className=" text-center text-[20px] font-bold">
          Have a special request? <br />
            <span className=" text-gray-600 text-[15px]">
            We’re happy to accommodate any other home-cooked meals your pet prefers.

            </span>
            <br />
            <span className=" text-3xl text-[#e87200]"> “Our meals are designed to make your pet feel at home.”
            </span>
          </p>
        </div>
      
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10 ">
        <div>
        <div className={`${css3}`}>
            <h4 class="font-medium text-[25px] duration-300 group-hover:text-white group-hover:z-[5]">
            Comfortable Essentials
            </h4>
            <span className=" w-full flex justify-center items-center group-hover:z-[5]">
              <GiRolledCloth className=" h-20 w-20"/>
            </span>
            <span className={`${css4}`}>Each pet will have their own bowls, treats, toys, and a comfortable bed to ensure they feel safe and secure.
            </span>
          </div>
        </div>
        <div>
          <img src={accdogcom}
          alt="comfort" 
          loading="lazy"
          className=" w-72 h-80 rounded-xl"
          />
        </div>
      </div>
      <div className=" flex justify-center flex-wrap items-center text-justify">
        <div className=" py-40 max-xl:px-10">
         
            <p className=" text-[28px] text-[#e87200] font-bold "> 
            “Comfort is our priority, and we provide everything to make your pet’s stay cozy and enjoyable.”
            </p>
          
        </div>
      
      </div>

      <div className=" py-[20px] max-xl:px-10">
        <span className=" text-[60px] text-[#e87200] font-gochi-hand max-xl:text-center">
        Individual Attention and Care
        </span>
      </div>


      <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10 ">
        {arr2.map((item, index) => (
          <div key={index} className={`${css1}`}>
            <div className={`${css2}`}>
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className=" object-cover rounded-full w-full h-full"
              />
            </div>
            <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
              <span className="text-2xl font-semibold w-1/2">{item.name}</span>
              <p className="px-4 py-1">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-center items-center text-justify ">
        <div className=" py-40 max-md:px-10">
         
            <p className=" text-[28px] text-[#e87200] font-bold "> 
            “A clean pet is a happy pet, and our grooming services keep them fresh and tidy.”
            </p>
          
        </div>
      
      </div>
      <div className=" flex max-md:flex-col gap-y-5 justify-center items-center">
        <div className=" px-10 w-full  md:w-[50%]">
          <div className=" flex flex-col ">
          <h1 className=" text-[20px] text-gray-600 font-semibold"> Special Benefits for Extended Stays</h1>
          <p className=" text-[28px] text-[#e87200] font-bold ">Planning to book for more than 15 days?</p>
          <p className=" text-[20px] font-medium">Enjoy complimentary services and receive exclusive discounted coupons as a token of our appreciation.
          </p>
          </div>
          
        </div>

        <div>
          <img src={dagstay} alt="dogstay" loading="lazy" className=" w-52 h-72" />
        </div>

      </div>


      <div className=" flex justify-center items-center text-justify ">
        <div className=" py-40 max-xl:px-10">
         
            <p className=" text-[28px] text-[#e87200] font-bold "> 
            “Extended stays come with special perks to make your pet’s time with us even more delightful.”
            </p>
            <p className=" text-gray-600 text-[20px] pt-3 text-center">
            At Scooby Dooby Doo Pet Hotel, your pet's happiness and comfort are our top priorities. <br/>
            Book with us today and give your furry friend a home away from home!

            </p>

          
        </div>
      
      </div>
    </div>

    </div>
  );
}

export default AboutUsHeader;