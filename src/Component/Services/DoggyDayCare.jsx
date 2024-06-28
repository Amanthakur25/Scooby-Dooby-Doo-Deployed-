import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaDog } from 'react-icons/fa';
// import MeetNGreet from "../../assets/MeetNGreet.jpg"
import { Link } from 'react-router-dom';
import dayca from "../../assets/PhotoGallery/dayca.jpeg"
import { DogDay } from "../../constants/imageConstant";
import { daycare2 } from "../../constants/imageConstant";
import { daycare3 } from "../../constants/imageConstant";
import { lux1 } from "../../constants/imageConstant";
import { lux2 } from "../../constants/imageConstant";

const DoggyDayCare = () => {

  return (
    <>

      {/* Hero Section */}
      <div className=" w-full flex flex-wrap justify-center items-center">
        <img
          src={DogDay}
          alt="header"
          className="hidden md:block object-cover h-[550px]"
        />
        <img
          src={dayca}
          alt="header"
          className="block md:hidden object-cover h-[550px]"
        />

      </div>

      {/* Scooby Dooby Doo Pet Hotel Section */}
      <div className="max-w-6xl mx-auto p-6">
        <header className="text-center my-12">
          <h1 className="text-5xl font-bold">Welcome to Scooby Dooby Doo Pet Hotel!</h1>
          <p className="text-lg text-gray-600 mt-4">
            Your premier destination for upscale pet boarding and daycare services.
          </p>
        </header>
      </div>

      {/* Day Boarding */}

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Doggy Day Care Process</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Reservation Inquiry</h3>
            <p className='text-black'>Begin by reaching out to us via phone, email, or through our online booking form. Provide basic information about your pet, including their breed, age, and any special requirements.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Meet & Greet Session</h3>
            <p className='text-black'>For pet parents who would like to tour our facilities and discuss their dog's specific needs in person, we offer an optional Meet & Greet session.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Booking a Trial or Boarding</h3>
            <p className='text-black'> After the Meet & Greet, you can choose to book a trial or a full boarding session based on availability.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Complete Documentation</h3>
            <p className='text-black'>
              Gather your pet's essential documents, such as vaccination records and medical history. These documents help us ensure a safe and healthy environment for all our guests.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Blocking the Slots</h3>
            <p className='text-black'> Once all forms and documentation are submitted, you can block your desired slot by paying in advance.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
            iconStyle={{ background: 'linear-gradient(135deg, #FF8C00, #FF4500)', color: '#fff' }}
            icon={<FaDog />}
          >
            <h3 className="vertical-timeline-element-title text-black font-bold">Confirmationn</h3>
            <p className='text-black'>Once we receive your inquiry and documents, our team will review the information and confirm the availability of your desired dates. A detailed confirmation message will be sent to you, outlining the next steps.</p>
            {/* <img src={MeetNGreet} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" /> */}
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>

      {/* Additional Booking Steps */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">To proceed with the booking, fill the Google Form:</h2>
          <div className="flex flex-col items-center justify-center mb-8">
            <Link className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg mb-4 transition duration-300 transform hover:scale-105"
              to="https://docs.google.com/forms/d/1-Ru5nmLJWJSZp5hVsDtBSAsXs-6T0J3GFbls7qm7x18/edit#responses"
              target="_blank"
              rel="noopener noreferrer"

            >
              Google Form Link
            </Link>
            <p className="text-center mb-4">Fill out our detailed form with your pet's information.</p>
            <div className="bg-gray-200 py-4 px-8 rounded-lg mb-4 w-full">
              <p className="text-center font-bold">Vaccination Records & Medical History</p>
            </div>
            <p className="text-center">Submit your pet's vaccination records, medical history, ticks & fleas treatment, and deworming status.</p>
          </div>
        </div>
      </div>

      {/* Vaccination Section */}

      <div className="max-w-6xl mx-auto p-6 bg-white mt-10">
        <div>
          <h3 className="text-center text-4xl font-extrabold mb-8 text-orange-400">VACCINATIONS</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">For dog boarding, the most important and commonly required vaccinations include:</p>
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>
              <span className="font-semibold text-gray-900">Rabies:</span> Protects against the rabies virus, which is fatal and can be transmitted to humans.
            </li>
            <li>
              <span className="font-semibold text-gray-900">DHPP (or DAPP) Combo Vaccine:</span> Protects against several serious diseases:
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Distemper</li>
                <li>Hepatitis (Adenovirus)</li>
                <li>Parvovirus</li>
                <li>Parainfluenza</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Bordetella (Kennel Cough):</span> Protects against Bordetella bronchiseptica, a major cause of kennel cough.
            </li>
          </ul>
        </div>
      </div>


      {/* Ticks and Fleas Precautions for Dog Boarding */}

      <div className="max-w-6xl mx-auto p-6 bg-white mt-20">
        <div>
          <h3 className="text-center text-4xl font-extrabold mb-8 text-orange-400">Ticks and Fleas Precautions for Dog Boarding</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">To ensure the health and safety of all pets in our facility and to maintain hygiene, it is mandatory for all dogs to have ticks and fleas prevention before boarding. Here are the steps and options available:</p>

          <h4 className="text-2xl font-bold mb-4 text-gray-800">Medications:</h4>
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>
              <span className="font-semibold text-gray-900">Oral Medications:</span>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li><span className="font-semibold text-gray-800">NexGard:</span> A monthly chewable tablet that kills fleas and ticks.</li>
                <li><span className="font-semibold text-gray-800">Bravecto:</span> A chewable tablet that provides protection against fleas and ticks for up to three months.</li>
                <li><span className="font-semibold text-gray-800">Simparica:</span> A monthly chewable that kills fleas and ticks.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Topical Treatments (Spot-On):</span>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li><span className="font-semibold text-gray-800">Frontline Plus:</span> Applied monthly to the skin, it kills fleas, flea eggs, and ticks.</li>
                <li><span className="font-semibold text-gray-800">Advantix II:</span> A monthly topical treatment that repels and kills fleas, ticks, and mosquitoes.</li>
                <li><span className="font-semibold text-gray-800">Revolution:</span> A monthly spot-on treatment that protects against fleas, heartworms, and other parasites.</li>
              </ul>
            </li>
          </ul>

          <h4 className="text-2xl font-bold mb-4 mt-6 text-gray-800">Injection:</h4>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed"><span className="font-semibold text-gray-800">Bravecto 3 Month Injectable for Dogs:</span> Provides long-lasting protection against fleas and ticks with a single injection.</p>

          <p className="text-lg text-red-700 mb-6 leading-relaxed"><span className="font-semibold text-red-800">Please note:</span> Even if you are confident that your pet does not have ticks or fleas, it is mandatory to take these precautions to prevent tick fever and maintain our facility's hygiene. Parents who fail to comply with these requirements will be responsible for the costs of any tick treatment administered by us.</p>

        </div>
      </div>


      {/* Deworming Process*/}

      <div className="max-w-6xl mx-auto p-6 bg-white mt-20">
        <div>
          <h3 className="text-center text-4xl font-extrabold mb-8 text-orange-400">Deworming Requirements for Dog Boarding</h3>

          <h4 className="text-2xl font-bold mb-4 text-gray-800">Description and Importance of Deworming:</h4>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">Deworming is an essential health measure for dogs to protect them from intestinal parasites such as roundworms, hookworms, whipworms, and tapeworms. These parasites can cause various health issues, including weight loss, diarrhea, anemia, and general poor health. Some of these parasites can also be transmitted to humans, making it crucial for the health of both pets and people.</p>

          <h4 className="text-2xl font-bold mb-4 text-gray-800">Why Deworming is Mandatory Before Boarding:</h4>
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li><span className="font-semibold text-gray-900">Health of Your Pet:</span> Ensures your dog remains free from parasites that can affect their health and well-being.</li>
            <li><span className="font-semibold text-gray-900">Safety of Other Pets:</span> Prevents the spread of parasites to other dogs in the boarding facility.</li>
            <li><span className="font-semibold text-gray-900">Facility Hygiene:</span> Helps maintain a clean and sanitary environment.</li>
          </ul>

          <h4 className="text-2xl font-bold mb-4 mt-6 text-gray-800">Deworming Process:</h4>
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>
              <span className="font-semibold text-gray-900">Determine the Schedule:</span>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Puppies should be dewormed every 2-3 weeks starting at 2 weeks of age until they are about 12 weeks old.</li>
                <li>Adult dogs should typically be dewormed every 3-6 months.</li>
                <li>Dogs that are at higher risk (e.g., those who frequent parks, have exposure to other dogs, or are used for hunting) may need more frequent deworming.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Consult Your Veterinarian:</span> Discuss your dog's deworming history and get recommendations on the appropriate deworming schedule and medication.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Choose a Deworming Medication:</span>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>
                  <span className="font-semibold text-gray-800">Oral Medications:</span>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li><span className="font-semibold text-gray-800">Panacur (Fenbendazole):</span> Effective against a broad range of worms.</li>
                    <li><span className="font-semibold text-gray-800">Drontal Plus (Pyrantel Pamoate, Praziquantel, Febantel):</span> Treats multiple types of worms.</li>
                    <li><span className="font-semibold text-gray-800">Interceptor (Milbemycin Oxime):</span> Controls roundworms, hookworms, and whipworms.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Topical Treatments:</span>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li><span className="font-semibold text-gray-800">Advantage Multi (Imidacloprid, Moxidectin):</span> Provides broad-spectrum parasite control, including worms.</li>
                  </ul>
                </li>
                <li><span className="font-semibold text-gray-800">Prescription Medications:</span> Your vet may prescribe specific medications based on your dog's needs.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Administering the Medication:</span>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li><span className="font-semibold text-gray-800">Oral Tablets/Chewables:</span> These are usually given directly by mouth or mixed with food.</li>
                <li><span className="font-semibold text-gray-800">Topical Treatments:</span> Applied to the skin, usually at the back of the neck.</li>
                <li><span className="font-semibold text-gray-800">Follow the Instructions:</span> Ensure you follow the dosage and administration guidelines provided by your veterinarian or the medication packaging.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Monitor Your Dog:</span>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Watch for any side effects after administering the medication.</li>
                <li>Keep an eye on your dog’s stool for signs of worms or other issues.</li>
              </ul>
            </li>
          </ul>

          <h4 className="text-2xl font-bold mb-4 mt-6 text-gray-800">Proof of Deworming:</h4>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">Please provide a record or certificate from your veterinarian showing the date and type of deworming treatment your dog has received. If your dog is due for deworming, it must be done at least 7 days prior to boarding.</p>

          <h4 className="text-2xl font-bold mb-4 mt-6 text-red-700">Failure to Comply:</h4>
          <p className="text-lg text-red-700 mb-6 leading-relaxed">Dogs that are not dewormed will be subject to mandatory deworming at our facility, and the cost will be borne by the pet owner.</p>


        </div>
      </div>



      <div className=' flex flex-col justify-center items-center py-32'>
        <p className=' w-[60%] text-[20px] text-center font-semibold'>
          "We offer premium pet boarding and flexible daycare solutions to meet your needs.
          At Scooby Dooby Doo, we redefine pet care with our
          <span className=' font-bold text-[21px]'>24/7 boarding</span>
          options designed to accommodate both short-term getaways and extended stays lasting months."


        </p>

      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2  justify-center items-center pb-20">
        <div className=" px-10 flex flex-col justify-center md:justify-end items-center md:items-end">
          <h1 className=' text-[35px] text-[#e87200] font-semibold  md:w-[65%]'> Luxury boarding</h1>

          <p className=' text-[20px] md:w-[65%] '>
            Our luxurious accommodations ensure that your furry family members experience comfort, security, and personalized attention around the clock. Whether you’re off on a vacation or handling a long-term commitment, rest assured knowing your pet is in caring hands.

          </p>


        </div>

        <div className='flex justify-center md:justify-start items-center md:items-start max-md:mt-5'>
          <img src={lux1} alt="dogstay" loading="lazy" className=" w-[55%]" />
        </div>

      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2  justify-center items-center pb-20">
        <div className='max-md:order-2 flex justify-center md:justify-end items-center md:items-end max-md:mt-5'>
          <img src={lux2} alt="dogstay" loading="lazy" className=" w-[55%]" />
        </div>
        <div className=" px-10 flex flex-col justify-center md:justify-start items-center md:items-start">
          <h1 className=' text-[35px] text-[#e87200] font-semibold  md:w-[65%]'> Daycare Service</h1>

          <p className='max-md:order-1 text-[20px] md:w-[65%] '>
            For those needing flexible daytime care, our hourly daycare service is the perfect solution. Tailored to meet the needs of working pet parents or those with busy schedules, our daycare offers a stimulating environment where dogs can socialize, exercise, and receive top-notch care while you handle your responsibilities.
            Whether it’s for a few hours or several months, we’re here to provide your pet with a safe, nurturing environment they’ll love.

          </p>
        </div>
      </div>

        {/* Day of Boarding */}
        <div className="max-w-6xl mx-auto p-6 bg-white ">
        <div>
          <h3 className="text-center text-4xl font-extrabold mb-8 text-orange-400">What Happens on the Day of Boarding</h3>

          <div className="relative">
            <div className="border-l-4 border-gray-200 absolute h-full left-4"></div>
            <div className="ml-10">

              <div className="mb-8">
                <div className="flex items-center mb-1">
                  <div className="bg-orange-500 h-8 w-8 rounded-full flex items-center justify-center text-white">1</div>
                  <h4 className="text-2xl font-bold ml-4">Arrival and Onboarding</h4>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Please adhere to the designated timings for onboarding and offboarding, as discussed during the booking process. Timeliness helps ensure a smooth transition for your pet and all other guests at Scooby Dooby Doo Pet Hotel.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-1">
                  <div className="bg-orange-500 h-8 w-8 rounded-full flex items-center justify-center text-white">2</div>
                  <h4 className="text-2xl font-bold ml-4">Check-In and Consent Form</h4>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Upon arrival, you will be required to sign a consent form that outlines the terms and conditions of the boarding agreement. This form serves as a mutual agreement between you and Scooby Dooby Doo Pet Hotel.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-1">
                  <div className="bg-orange-500 h-8 w-8 rounded-full flex items-center justify-center text-white">3</div>
                  <h4 className="text-2xl font-bold ml-4">Physical Health Check</h4>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Our staff will conduct a thorough physical examination of your dog, checking for any wounds, injuries, skin infections, ticks, and fleas. This step is crucial to ensure the health and safety of all pets in our care. If any health concerns are detected, we will discuss the best course of action with you immediately.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-1">
                  <div className="bg-orange-500 h-8 w-8 rounded-full flex items-center justify-center text-white">4</div>
                  <h4 className="text-2xl font-bold ml-4">Settling In</h4>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  After the health check, your dog will be taken into the boarding area. For dogs boarding with us for the first time, we conduct a temperament test to assess their behaviour and compatibility with other pets.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  <span className="font-semibold text-red-600">Important Note:</span> We request that pet parents do not wait or stand by during this process, as your presence can affect your dog’s behaviour and hinder their ability to socialise. Rest assured, we will provide detailed feedback on how the test went and discuss any observations with you afterward.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-1">
                  <div className="bg-orange-500 h-8 w-8 rounded-full flex items-center justify-center text-white">5</div>
                  <h4 className="text-2xl font-bold ml-4">Additional Services</h4>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  If you wish to opt for any grooming services before the offboarding date, please inform us in advance. This allows us to schedule the grooming session and have your dog clean and ready before your arrival.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-1">
                  <div className="bg-orange-500 h-8 w-8 rounded-full flex items-center justify-center text-white">6</div>
                  <h4 className="text-2xl font-bold ml-4">Feedback and Updates</h4>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Throughout your pet’s stay, we will keep you updated with regular feedback and details about their behaviour, health, and overall experience. Our goal is to ensure your pet has a comfortable and enjoyable stay at Scooby Dooby Doo Pet Hotel.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className=' flex flex-col justify-center items-center py-32'>
        <p className=' text-gray-800 w-[60%] text-[20px] text-center font-bold'>
          Contact us to learn more about our boarding and daycare services and discover why we’re more than just a place for pets—we’re a home away from home.

        </p>
        <Link to="/contactUs">
          <button className=" my-5 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Contact Us</button>
        </Link>
      </div>



    </>
  );
};

export default DoggyDayCare;