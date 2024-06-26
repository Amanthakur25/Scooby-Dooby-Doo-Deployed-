import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto max-w-6xl p-8 md:p-10 lg:p-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 lg:mb-10 text-center">Terms and Conditions for Pet Boarding Services</h1>
      <ol className="list-decimal pl-6 space-y-6 md:space-y-8">
        <li>
          <strong>Onboarding and Offboarding Timelines:</strong> The operational hours for onboarding and offboarding your pet are from 8:30 am till 8:30 pm. Please ensure adherence to these timelines for a smooth transition.
        </li>
        <li>
          <strong>Pre Booking Requirement:</strong> Prior to availing of our boarding services, prebooking slots are mandatory. This involves completing a Google Form submission containing proper vaccination records of your pet and payment for blocking the slots.
        </li>
        <li>
          <strong>Submission of ID Proofs:</strong> For security purposes and to prevent any pet abandonment scenarios, we require pet owners to share their ID proofs, including Aadhar Card details and current address proof.
        </li>
        <li>
          <strong>Health and Hygiene Check:</strong> Upon arrival, each pet will undergo a thorough physical examination to check for allergies, skin infections, wounds, scars, and ticks. Proper transparency regarding the health and condition of the dogs is crucial. Failure to disclose any health issues may lead to immediate cancellation of the boarding reservation with no refunds.
        </li>
        <li>
          <strong>Tick and Fleas Medication:</strong> It is mandatory to administer ticks and fleas medication to your pet before dropping them off for boarding. This is essential for maintaining the health and hygiene of all pets at our facility.
        </li>
        <li>
          <strong>Female Pets:</strong> Female pets who are due for heat cycle or are in heat are not accepted for boarding to prevent any potential stress or discomfort to them and other pets. We prioritise the well-being and safety of all animals in our care.
        </li>
      </ol>
      <p className="mt-8 md:mt-10 lg:mt-12 text-center">By availing of our pet boarding services, you agree to comply with the aforementioned terms and conditions. We prioritise the safety and well-being of all pets under our care and appreciate your cooperation in ensuring a pleasant experience for everyone involved.</p>
    </div>
  );
};

export default TermsAndConditions;
