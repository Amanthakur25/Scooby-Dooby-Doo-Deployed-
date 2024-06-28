import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto max-w-6xl p-8 md:p-10 lg:p-12 bg-white mt-32">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 lg:mb-10  text-orange-400">Terms and Conditions for Pet Boarding Services</h1>
      
      <div className="relative">
        <div className="border-l-4 border-gray-200 absolute h-full left-4"></div>
        <div className="ml-10 space-y-6 md:space-y-8">

          <div className="mb-8">
            <div className="flex items-center mb-1">
              <div className="bg-orange-400 h-8 w-8 rounded-full flex items-center justify-center text-white">1</div>
              <h4 className="text-xl md:text-2xl font-bold ml-4">Onboarding and Offboarding Timelines</h4>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              The operational hours for onboarding and offboarding your pet are from 8:30 am till 8:30 pm. Please ensure adherence to these timelines for a smooth transition.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-1">
              <div className="bg-orange-400 h-8 w-8 rounded-full flex items-center justify-center text-white">2</div>
              <h4 className="text-xl md:text-2xl font-bold ml-4">Pre Booking Requirement</h4>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Prior to availing of our boarding services, prebooking slots are mandatory. This involves completing a Google Form submission containing proper vaccination records of your pet and payment for blocking the slots.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-1">
              <div className="bg-orange-400 h-8 w-8 rounded-full flex items-center justify-center text-white">3</div>
              <h4 className="text-xl md:text-2xl font-bold ml-4">Submission of ID Proofs</h4>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              For security purposes and to prevent any pet abandonment scenarios, we require pet owners to share their ID proofs, including Aadhar Card details and current address proof.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-1">
              <div className="bg-orange-400 h-8 w-8 rounded-full flex items-center justify-center text-white">4</div>
              <h4 className="text-xl md:text-2xl font-bold ml-4">Health and Hygiene Check</h4>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Upon arrival, each pet will undergo a thorough physical examination to check for allergies, skin infections, wounds, scars, and ticks. Proper transparency regarding the health and condition of the dogs is crucial. Failure to disclose any health issues may lead to immediate cancellation of the boarding reservation with no refunds.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-1">
              <div className="bg-orange-400 h-8 w-8 rounded-full flex items-center justify-center text-white">5</div>
              <h4 className="text-xl md:text-2xl font-bold ml-4">Tick and Fleas Medication</h4>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              It is mandatory to administer ticks and fleas medication to your pet before dropping them off for boarding. This is essential for maintaining the health and hygiene of all pets at our facility.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-1">
              <div className="bg-orange-400 h-8 w-8 rounded-full flex items-center justify-center text-white">6</div>
              <h4 className="text-xl md:text-2xl font-bold ml-4">Female Pets</h4>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Female pets who are due for heat cycle or are in heat are not accepted for boarding to prevent any potential stress or discomfort to them and other pets. We prioritise the well-being and safety of all animals in our care.
            </p>
          </div>

        </div>
      </div>

      <p className="mt-8 md:mt-10 lg:mt-12 text-center text-lg text-gray-700">
        By availing of our pet boarding services, you agree to comply with the aforementioned terms and conditions. We prioritise the safety and well-being of all pets under our care and appreciate your cooperation in ensuring a pleasant experience for everyone involved.
      </p>
    </div>
  );
};

export default TermsAndConditions;
