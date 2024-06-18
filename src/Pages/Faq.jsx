import React, { useState } from 'react';

const Faq = () => {
  const [isCancellationOpen, setIsCancellationOpen] = useState(false);
  const [isTemperamentOpen, setIsTemperamentOpen] = useState(false);

  const toggleCancellation = () => {
    setIsCancellationOpen(!isCancellationOpen);
  };

  const toggleTemperament = () => {
    setIsTemperamentOpen(!isTemperamentOpen);
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

      {/* Image Section */}
      <div className="flex justify-center">
        <img src="https://img.freepik.com/free-vector/hand-drawn-pet-custody-illustration_23-2150778291.jpg?t=st=1718197220~exp=1718200820~hmac=f7d6c1780b6ef00cd358e1662d93c25b67bd6f018cb68b89f18934a612cab9f3&w=740" alt="Hand drawn pet custody illustration" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

export default Faq;
