// components/FAQComponent.js

import React, { useState } from 'react';

const faqs = [
  {
    category: 'General Questions',
    faqs: [
      {
        question: 'What is dog boarding?',
        answer:
          'Dog boarding is a service where your pet stays at our facility while you are away. We provide professional care, accommodation, and activities to ensure your dog is happy and well-cared for during their stay.',
      },
      {
        question: 'Why should I choose Scooby Dooby Doo Pet Hotel for boarding my dog?',
        answer:
          'We offer a secure, comfortable environment with professional staff, regular health checks, ample playtime, and personalized care tailored to your dog\'s needs.',
      },
    ],
  },
  {
    category: 'Booking and Reservations',
    faqs: [
      {
        question: 'How do I book a boarding slot for my dog?',
        answer:
          'You can book a slot by contacting us via phone, email, or through our online booking form. We recommend scheduling a Meet & Greet session first and completing the necessary documentation before confirming your booking.',
      },
      {
        question: 'Is pre-booking mandatory?',
        answer:
          'Yes, pre-booking is mandatory to avoid last-minute rush and cancellations. Please book only if your boarding dates are confirmed.',
      },
      {
        question: 'What is the cancellation policy?',
        answer:
          'In case of an emergency or change in plans, you can avail credit with an applicable cancellation fee equivalent to one day’s boarding charges. Credits can be used for future bookings but are not convertible into cash or any type of refund.',
      },
      {
        question: 'What happens if my booking exceeds the original dates?',
        answer:
          'If your booking exceeds the original dates and no further payment has been received within one week, Scooby Dooby Doo Pet Hotel reserves the right to recover the debt, which may involve debt recovery actions or the sale of the pet.',
      },
      {
        question: 'What documentation is required for booking?',
        answer:
          'You need to fill out a Google form, provide vaccination records, medical history including deworming status, and ID proofs such as Aadhar card (front and back) and a current electricity bill.',
      },
    ],
  },
  {
    category: 'Meet & Greet Session',
    faqs: [
      {
        question: 'What happens during the Meet & Greet session?',
        answer:
          'This session allows you to tour our facilities, meet our staff, and discuss your dog\'s specific needs. Dogs should not be brought to this session to maintain a calm environment and ensure effective communication.',
      },
      {
        question: 'Is the Meet & Greet session mandatory?',
        answer:
          'No, it is optional but highly recommended for first-time boarders to ensure you are comfortable with our facility and services.',
      },
    ],
  },
  {
    category: 'Health and Safety',
    faqs: [
      {
        question: 'What health checks are done upon arrival?',
        answer:
          'We conduct a thorough physical examination to check for wounds, injuries, skin infections, ticks, and fleas. Any health concerns will be discussed with you immediately.',
      },
      {
        question: 'Are vaccinations required for boarding?',
        answer:
          'Yes, all dogs must have up-to-date vaccinations to ensure a safe and healthy environment for all pets in our care.',
      },
    ],
  },
  {
    category: 'During the Stay',
    faqs: [
      {
        question: 'Can I bring my dog\'s food and personal items?',
        answer:
          'Yes, you are welcome to bring your dog\'s food, bedding, toys, and any other items that will make their stay more comfortable.',
      },
      {
        question: 'How do you handle dogs with special dietary needs?',
        answer:
          'We accommodate special dietary needs and preferences to ensure your dog receives the appropriate nutrition during their stay.',
      },
      {
        question: 'What activities are available for my dog during their stay?',
        answer:
          'We offer structured playtime, socialisation with other dogs, and access to indoor and outdoor play areas with toys and agility equipment.',
      },
    ],
  },
  {
    category: 'Temperament Testing',
    faqs: [
      {
        question: 'What is a temperament test?',
        answer:
          'The temperament test assesses your dog\'s behaviour and compatibility with other pets. This helps us provide the best possible care and ensure a safe environment.',
      },
      {
        question: 'Can I stay to watch the temperament test?',
        answer:
          'We request that pet parents do not stay during the test as it can affect your dog\'s behaviour. We will provide detailed feedback afterward.',
      },
      {
        question: 'Do you offer grooming services?',
        answer:
          'Yes, we offer a range of grooming services including baths, haircuts, nail trims, and ear cleaning. Please inform us in advance if you would like to schedule grooming before the offboarding date.',
      },
    ],
  },
  {
    category: 'Departure and Offboarding',
    faqs: [
      {
        question: 'What is the process for picking up my dog?',
        answer:
          'Please adhere to the pre-arranged offboarding time. If you have opted for any grooming services, we will have your dog ready before your arrival. Please discuss this in prior to avoid delays.',
      },
      {
        question: 'How will I know how my dog did during their stay?',
        answer:
          'We provide regular updates and detailed feedback about your dog\'s behaviour, health, and overall experience during their stay.',
      },
    ],
  },
];

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">FAQs about Dog Boarding</h1>
      {faqs.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
          {category.faqs.map((faq, faqIndex) => (
            <div
              key={faqIndex}
              className="bg-orange-400 text-white rounded-lg shadow-md p-6 mb-4 cursor-pointer transition duration-300 ease-in-out transform hover:shadow-lg hover:bg-orange-600"
              onClick={() => toggleFAQ(faqIndex)}
            >
              <div className="flex justify-between items-center">
                <div className="font-semibold">{faq.question}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${openIndex === faqIndex ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={openIndex === faqIndex ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                  />
                </svg>
              </div>
              {openIndex === faqIndex && (
                <div className="mt-4 text-white">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
