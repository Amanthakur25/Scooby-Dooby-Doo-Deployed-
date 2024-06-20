import React, { useState } from 'react';

const Faq = () => {
  const [isCancellationOpen, setIsCancellationOpen] = useState(false);
  const [isTemperamentOpen, setIsTemperamentOpen] = useState(false);
  const [isAccommodationOpen, setIsAccommodationOpen] = useState(false);
  const [isHealthOpen, setIsHealthOpen] = useState(false);
  const [isSafetyOpen, setIsSafetyOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const toggleCancellation = () => {
    setIsCancellationOpen(!isCancellationOpen);
  };

  const toggleTemperament = () => {
    setIsTemperamentOpen(!isTemperamentOpen);
  };

  const toggleAccommodation = () => {
    setIsAccommodationOpen(!isAccommodationOpen);
  };

  const toggleHealth = () => {
    setIsHealthOpen(!isHealthOpen);
  };

  const toggleSafety = () => {
    setIsSafetyOpen(!isSafetyOpen);
  };

  const toggleBooking = () => {
    setIsBookingOpen(!isBookingOpen);
  };

  const togglePayment = () => {
    setIsPaymentOpen(!isPaymentOpen);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">FAQ’s</h1>

      <div className="mb-8">
        <h2 className={`text-2xl font-semibold mb-2 text-gray-800 flex justify-between items-center cursor-pointer ${isCancellationOpen ? "bg-orange-500" : "bg-orange-400 hover:bg-orange-600"} py-3 px-4 rounded-lg`} onClick={toggleCancellation}>
          What is your cancellation policy?
          {isCancellationOpen ? <span>&#9660;</span> : <span>&#9658;</span>}
        </h2>
        {isCancellationOpen && (
          <ul className="list-disc text-lg text-gray-700 pl-6">
            <li>Last minute cancellations (less than 24 hours before booking begins) may be charged a 50% cancellation fee.</li>
            <li>For no show with no cancellation requested, the full amount of the booking may be forfeited.</li>
            <li>Credits are applicable only toward future booking fees for use of the service and are not convertible into cash or any type of refund.</li>
            <li>If the cancellation is due to personal reasons such as a trip being cut short, the period that the service has been rendered will need to be paid in full and for the remaining booking period the amount will be credited for future bookings.</li>
          </ul>
        )}
      </div>

      <div className="mb-8">
        <h2 className={`text-2xl font-semibold mb-2 text-gray-800 flex justify-between items-center cursor-pointer ${isTemperamentOpen ? "bg-orange-500" : "bg-orange-400 hover:bg-orange-600"} py-3 px-4 rounded-lg`} onClick={toggleTemperament}>
          What is a temperament test?
          {isTemperamentOpen ? <span>&#9660;</span> : <span>&#9658;</span>}
        </h2>
        {isTemperamentOpen && (
          <ul className="list-disc text-lg text-gray-700 pl-6">
            <li>At Scooby Dooby Doo pet hotel, our team is dedicated to ensuring every dog that enters our facilities is well acclimated, socialized, and grouped accordingly.</li>
            <li>We help make this happen by requiring that each dog stays for overnight boarding or dog daycare undergoes a temperament test.</li>
            <li>A temperament test is a process in which we evaluate a dog’s physical and mental characteristics and its reaction to the characteristics of other dogs.</li>
            <li>This helps ensure their safety and success in group daycare.</li>
            <li>The test may include an initial interview with the pet owner and pet, followed by introducing the dog into a play area with the other dogs to evaluate their behavior, body language, personality with other dogs, etc.</li>
            <li>The test involves looking for any aggressive behavior toward the other dogs. Additionally, we look for general personality characteristics, such as separation anxiety, timidness, toy aggression, leash aggression, and other behaviors that may present risk to the pet or other guests.</li>
          </ul>
        )}
      </div>

      <div className="mb-8">
        <h2 className={`text-2xl font-semibold mb-2 text-gray-800 flex justify-between items-center cursor-pointer ${isAccommodationOpen ? "bg-orange-500" : "bg-orange-400 hover:bg-orange-600"} py-3 px-4 rounded-lg`} onClick={toggleAccommodation}>
          What types of accommodations do you offer?
          {isAccommodationOpen ? <span>&#9660;</span> : <span>&#9658;</span>}
        </h2>
        {isAccommodationOpen && (
          <ul className="list-disc text-lg text-gray-700 pl-6">
            <li>We offer three types of accommodations: Friendly Accommodation, Separate Accommodation, and Deck Accommodation.</li>
            <li>Each accommodation type is designed to cater to different pet personalities and needs.</li>
            <li>Our Friendly Accommodation is suitable for sociable dogs who enjoy interacting with other dogs and humans.</li>
            <li>Separate Accommodation is ideal for dogs who prefer their own space or may not be fully comfortable in group settings.</li>
            <li>Deck Accommodation is designed for smaller breeds or pets who prefer cozy quarters.</li>
          </ul>
        )}
      </div>

      <div className="mb-8">
        <h2 className={`text-2xl font-semibold mb-2 text-gray-800 flex justify-between items-center cursor-pointer ${isHealthOpen ? "bg-orange-500" : "bg-orange-400 hover:bg-orange-600"} py-3 px-4 rounded-lg`} onClick={toggleHealth}>
          How do you ensure the health and well-being of pets during their stay?
          {isHealthOpen ? <span>&#9660;</span> : <span>&#9658;</span>}
        </h2>
        {isHealthOpen && (
          <ul className="list-disc text-lg text-gray-700 pl-6">
            <li>We have trained staff members who monitor the health and well-being of pets regularly.</li>
            <li>We provide nutritious meals and clean water to ensure proper nutrition and hydration.</li>
            <li>Our facilities are cleaned and sanitized regularly to maintain a clean and hygienic environment.</li>
            <li>If a pet requires medication or special care, we follow the instructions provided by the pet owner and ensure that they receive the necessary treatment.</li>
          </ul>
        )}
      </div>

      <div className="mb-8">
        <h2 className={`text-2xl font-semibold mb-2 text-gray-800 flex justify-between items-center cursor-pointer ${isSafetyOpen ? "bg-orange-500" : "bg-orange-400 hover:bg-orange-600"} py-3 px-4 rounded-lg`} onClick={toggleSafety}>
          What safety measures do you have in place?
          {isSafetyOpen ? <span>&#9660;</span> : <span>&#9658;</span>}
        </h2>
        {isSafetyOpen && (
          <ul className="list-disc text-lg text-gray-700 pl-6">
            <li>We have strict security measures in place to ensure the safety of all pets.</li>
            <li>Our facilities are equipped with secure fencing and gates to prevent pets from escaping.</li>
            <li>We have trained staff members who supervise pets at all times and are trained in pet first aid and CPR.</li>
            <li>In case of emergencies, we have protocols in place to ensure the safety and well-being of pets.</li>
          </ul>
        )}
      </div>

      <div className="mb-8">
        <h2 className={`text-2xl font-semibold mb-2 text-gray-800 flex justify-between items-center cursor-pointer ${isBookingOpen ? "bg-orange-500" : "bg-orange-400 hover:bg-orange-600"} py-3 px-4 rounded-lg`} onClick={toggleBooking}>
          How do I make a booking?
          {isBookingOpen ? <span>&#9660;</span> : <span>&#9658;</span>}
        </h2>
        {isBookingOpen && (
          <ul className="list-disc text-lg text-gray-700 pl-6">
            <li>You can make a booking by visiting our website and selecting the desired dates and accommodation type.</li>
            <li>Once you have selected the dates and accommodation, you can proceed to fill out the booking form with your details and your pet's details.</li>
            <li>After submitting the booking form, you will receive a confirmation email with the details of your booking.</li>
            <li>If you have any special requests or requirements, you can mention them in the booking form, and we will do our best to accommodate them.</li>
          </ul>
        )}
      </div>

      <div className="mb-8">
        <h2 className={`text-2xl font-semibold mb-2 text-gray-800 flex justify-between items-center cursor-pointer ${isPaymentOpen ? "bg-orange-500" : "bg-orange-400 hover:bg-orange-600"} py-3 px-4 rounded-lg`} onClick={togglePayment}>
          What payment methods do you accept?
          {isPaymentOpen ? <span>&#9660;</span> : <span>&#9658;</span>}
        </h2>
        {isPaymentOpen && (
          <ul className="list-disc text-lg text-gray-700 pl-6">
            <li>We accept payment via credit card, debit card, and PayPal.</li>
            <li>Payment is required at the time of booking to secure your reservation.</li>
            <li>If you have any concerns or questions regarding payment, feel free to contact our customer support team for assistance.</li>
          </ul>
        )}
      </div>

     
    </div>
  );
}

export default Faq;
