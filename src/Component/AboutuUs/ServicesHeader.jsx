import React from 'react'
import {dog2} from "../../constants/imageConstant"

function ServicesHeader() {
  return (
    <div className=''>
      <div className=' bg-[#f0ebdb] relative'>
        <img src="https://scoobydoobydoopethouse.com/wp-content/themes/scooby/assets/images/briks.png" alt="" />
      
      <div className='absolute top-[152px] flex justify-center items-center w-full'>
        <div >
            <p className=' text-[#e87200]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, porro!</p>
            <p className=' text-[#102C57] text-[40px] font-bold'>WE TAKE CARE</p>
            <p className=' text-[#e87200] text-[40px] font-bold'>YOURS PET</p>

            <button className=' border border-black p-1'>Book Now</button>
        </div>
        <div className='    '>
        <img src={dog2} alt="dog" />
      </div>
      </div>

      
      </div>
    </div>
  )
}

export default ServicesHeader
