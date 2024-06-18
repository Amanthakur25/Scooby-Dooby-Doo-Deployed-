import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaDog } from 'react-icons/fa';


const DoggyDayCare = () => {

    const dogIllustration = 'https://img.freepik.com/free-vector/beagle-dog-cartoon-white-background_1308-68249.jpg?size=626&ext=jpg&ga=GA1.1.1209051022.1717757913&semt=sph';
    return (
        <>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-center mb-8">Doggy Day Care Process</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2b6cb0', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2b6cb0' }}
                        iconStyle={{ background: '#2b6cb0', color: '#fff' }}
                        icon={<FaDog />}
                    >
                        <h3 className="vertical-timeline-element-title">Meet & Greet Session</h3>
                        <p>Get to know each other</p>
                        <img src={dogIllustration} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#d53f8c', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #d53f8c' }}
                        iconStyle={{ background: '#d53f8c', color: '#fff' }}
                        icon={<FaDog />}
                    >
                        <h3 className="vertical-timeline-element-title">Physical Check</h3>
                        <p>A quick physical check of the dog will be conducted during check-in</p>
                        <img src={dogIllustration} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#38a169', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #38a169' }}
                        iconStyle={{ background: '#38a169', color: '#fff' }}
                        icon={<FaDog />}
                    >
                        <h3 className="vertical-timeline-element-title">Check-in Form</h3>
                        <p>You will be asked to fill in a check-in form where you can also include any special instructions.</p>
                        <img src={dogIllustration} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#dd6b20', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #dd6b20' }}
                        iconStyle={{ background: '#dd6b20', color: '#fff' }}
                        icon={<FaDog />}
                    >
                        <h3 className="vertical-timeline-element-title">Care Instructions Discussion</h3>
                        <p>Care instructions will be discussed prior making a booking – behavior, allergies, medications etc.</p>
                        <img src={dogIllustration} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#ecc94b', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #ecc94b' }}
                        iconStyle={{ background: '#ecc94b', color: '#fff' }}
                        icon={<FaDog />}
                    >
                        <h3 className="vertical-timeline-element-title">Dog is Taken In</h3>
                        <p>The dog is then taken in</p>
                        <img src={dogIllustration} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#48bb78', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #48bb78' }}
                        iconStyle={{ background: '#48bb78', color: '#fff' }}
                        icon={<FaDog />}
                    >
                        <h3 className="vertical-timeline-element-title">Grooming Services</h3>
                        <p>On the date of check-out, if you require any Grooming services, let us know in advance so that we can schedule it according to the availability. The same will be done prior to the check-out time indicated by you.</p>
                        <img src={dogIllustration} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" />
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>

            <div className="container mx-auto py-8 max-w-6xl px-4">
                <h1 className="text-3xl font-bold text-center mb-8">Additionally</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-100 hover:bg-blue-200 rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-xl font-semibold mb-4">Daily Updates</h2>
                        <p className="text-gray-800">You will receive a daily video of your pet. Any health/behavior issue will also be communicated to you, while we address the same at our end.</p>
                    </div>
                    <div className="bg-pink-100 hover:bg-pink-200 rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-xl font-semibold mb-4">Medical Care</h2>
                        <p className="text-gray-800">We have a visiting vet and are also tied up with multiple vet hospitals to deal with any medical emergency. Our staff is also trained in canine first-aid.</p>
                    </div>
                    <div className="bg-yellow-100 hover:bg-yellow-200 rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-xl font-semibold mb-4">Grooming Services</h2>
                        <p className="text-gray-800">Long-haired dogs like Shih Tzus, Cocker Spaniels, Golden Retrievers, etc., will be brushed daily to maintain their coat.</p>
                    </div>
                    <div className="bg-green-100 hover:bg-green-200 rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-xl font-semibold mb-4">Playgroups & Supervision</h2>
                        <p className="text-gray-800">Playgroups are separated by size and temperament. Playtime is supervised 100% of the time. Interaction with other pets and playing can lead to a few minor nicks and bruises, which will be attended to and communicated as well.</p>
                    </div>
                    <div className="bg-purple-100 hover:bg-purple-200 rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-xl font-semibold mb-4">Special Accommodations</h2>
                        <p className="text-gray-800">Small puppies and brachycephalic breeds (Pugs, Shih Tzus, etc.) will be kept in an indoor play area. Our facility has 24X7 CCTV coverage.</p>
                    </div>
                    <div className="bg-red-100 hover:bg-red-200 rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-xl font-semibold mb-4">Boarding Requirements</h2>
                        <p className="text-gray-800">If you are boarding for the first time, you will be asked to share your pet’s medical records, tick prevention record, and your ID proof. You will also be asked to bring your pet to the facility a couple of times ahead of boarding in order to familiarize the dog with the place and reduce separation anxiety or undergo proper temperament testing.</p>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-gray-800 font-semibold">Please Note:</p>
                    <p className="text-gray-800">If you are boarding for the first time, you will be asked to share your pet’s medical records, tick prevention record, and your ID proof. You will also be asked to bring your pet to the facility a couple of times ahead of boarding in order to familiarize the dog with the place and reduce separation anxiety or undergo proper temperament testing.</p>
                </div>
            </div>

        </>
    );
};

export default DoggyDayCare;
