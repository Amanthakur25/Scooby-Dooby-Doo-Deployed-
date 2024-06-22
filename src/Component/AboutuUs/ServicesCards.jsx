import React from 'react';
import DayCareImage from '../../assets/PhotoGallery/Dog2.jpg';
import {PhotoGallery} from '../../constants/imageConstant';
import {PhotoGallery} from '../../constants/imageConstant';
import DogPickupNDropImage from '../../assets/PhotoGallery/Dog5.png';



 const BoardingImage=PhotoGallery.Dog3;
 const DogWalkImage=PhotoGallery.Dog4;
 const OtherImage=PhotoGallery.Dog1;
function ServicesCards() {
    const arr = [
        {
            name: "Doogy Day Care Service",
            img: DayCareImage
        },
        {
            name: "Boarding",
            img: BoardingImage
        },
        {
            name: "Dog Walk",
            img: DogWalkImage
        },
        {
            name: "Dog pickup/Drop within City",
            img: DogPickupNDropImage
        },
        {
            name: "Others",
            img: OtherImage
        }
    ];

    return (
        <div className='flex flex-col justify-center items-center pt-20 bg-white'>
            <div className='py-[20px]'>
                <span className="text-[50px] text-[#e87200] font-gochi-hand">What We Offer</span>
            </div>
            <div className='grid grid-cols-2 gap-y-10 gap-x-10'>
                {arr.map((item, index) => (
                    <div key={index} className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-[#ffb380] via-[#e87200] to-[#b55a00] before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                        <div className="w-40 h-40 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500">
                            <img src={item.img} alt={item.name} className='object-cover rounded-full w-full h-full' />
                        </div>
                        <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
                            <span className="text-2xl font-semibold w-1/2">{item.name}</span>
                        </div>
                        <a className="bg-orange-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500" href="#">Follow</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesCards;
