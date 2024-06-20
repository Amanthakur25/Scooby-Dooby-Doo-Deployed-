import React from "react";
import dogFood from "../../assets/accfood.png";
import dogWalk from "../../assets/dogFoodPlan.jpg";
import accdogcom from "../../assets/accdogcom.png";
import doggroom from "../../assets/doggroom.jpg"
import dogvedio from '../../assets/dogvedio.jpg'
import dogchat from "../../assets/dogchat.jpg";
import dogstay from "../../assets/dogstay.png"
import { PiBowlFoodDuotone } from "react-icons/pi";
import { MdFoodBank } from "react-icons/md";
import { GiRolledCloth } from "react-icons/gi";


function ServicesCards() {
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
      img: dogFood,
      des:"We feed each pet individually to cater to their specific dietary needs and preferences."
    },
    {
      name: "One-on-One Walks",
      img: dogWalk,
      des:" Every dog enjoys individual walks, ensuring they get the exercise and attention they need."
    },
    {
      name:"Basic Grooming",
      img:doggroom,
      des:"Our grooming services include cleaning eyes, ears, dry bath and combing hair, keeping your pet looking and feeling their best."
    },
    {
      name:"Daily Video Updates",
      img:dogvedio,
      des:"Request a daily video to see how your pet is doing, providing peace of mind while you’re away (11:00am - 6:00 pm)"
    },
    {
      name:"Chat Support",
      img:dogchat,
      des:"Stay updated on your pet’s well-being with our chat support available from 11:00 am to 6:00 pm."
    }
  ];
  const css1 =
    "group before:hover:scale-95 before:hover:h-72 before:hover:w-80  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-[#ffb380] via-[#e87200] to-[#b55a00] before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden";
  const css2 =
    "w-32 h-32 bg-blue-700 mt-5 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500";
  const css3 =
    "overflow-hidden w-80 h-72 before:ease-in-out after:ease-in-out bg-white group cursor-pointer relative flex flex-col   rounded-2xl border hover:after:w-full border-white-222 hover:border-[#e87200] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#e87200] before:absolute before:top-0 before:left-0";
  const css4 =
    "text-[#1D2825] group-hover:z-[5] font-medium duration-300 group-hover:text-white flex items-center gap-2 text-[15px] xl:text-base";

  return (
    <div className=" flex flex-col justify-center items-center pt-20 bg-white">
      <div className=" py-[20px]">
        <span className=" text-[60px] text-[#e87200] font-gochi-hand ">
          Our Accommodations Include
        </span>
      </div>
      <div className=" grid grid-cols-2 gap-y-10 gap-x-10 ">
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

      <div className=" grid grid-cols-2 gap-y-10 gap-x-10 ">
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
      <div className=" flex justify-center items-center text-justify ">
        <div className=" py-40 ">
         
            <p className=" text-[28px] text-[#e87200] font-bold "> 
            “Comfort is our priority, and we provide everything to make your pet’s stay cozy and enjoyable.”
            </p>
          
        </div>
      
      </div>

      <div className=" py-[20px]">
        <span className=" text-[60px] text-[#e87200] font-gochi-hand ">
        Individual Attention and Care
        </span>
      </div>


      <div className=" grid grid-cols-2 gap-y-10 gap-x-10 ">
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
        <div className=" py-40 ">
         
            <p className=" text-[28px] text-[#e87200] font-bold "> 
            “A clean pet is a happy pet, and our grooming services keep them fresh and tidy.”
            </p>
          
        </div>
      
      </div>
      <div className=" flex  justify-center items-center">
        <div className=" px-10 w-[50%]">
          <div className=" flex flex-col ">
          <h1 className=" text-[20px] text-gray-600 font-semibold"> Special Benefits for Extended Stays</h1>
          <p className=" text-[28px] text-[#e87200] font-bold ">Planning to book for more than 15 days?</p>
          <p className=" text-[20px] font-medium">Enjoy complimentary services and receive exclusive discounted coupons as a token of our appreciation.
          </p>
          </div>
          
        </div>

        <div>
          <img src={dogstay} alt="dogstay" loading="lazy" className=" w-52 h-72" />
        </div>

      </div>
      <div className=" flex justify-center items-center text-justify ">
        <div className=" py-40 ">
         
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
  );
}

export default ServicesCards;
