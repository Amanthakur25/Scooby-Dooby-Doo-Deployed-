import React from 'react';
import * as img from '../../constants/imageConstant';

function ServicesHeader() {
    return (
        <div className=''>
            <div className='bg-[#f0ebdb] relative'>
                <img src="https://scoobydoobydoopethouse.com/wp-content/themes/scooby/assets/images/briks.png" 
                    alt="bg"
                    className='h-[480px]' 
                />
                <div className='absolute top-[50px] flex justify-center items-center w-full'>
                    <div className='flex justify-end items-end'>
                        <img src={img.dog2} alt="dog" />
                    </div>
                    <div className='w-[40%]'>
                        <p className='text-[#102C57] text-[40px] font-bold'>WE TAKE CARE</p>
                        <p className='text-[#e87200] text-[40px] font-bold'>YOUR PET</p>
                        <p className='text-[17px] mt-1'>
                            At Scooby Dooby Doo Pet Hotel, we understand that your furry friends deserve the best care, comfort, and love. Our pet hotel offers a cosy, home-like environment with personalised services to ensure your pet feels right at home. Whether you are going on a short trip or an extended vacation, we provide exceptional accommodations and a range of complimentary services for longer stays.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesHeader;
