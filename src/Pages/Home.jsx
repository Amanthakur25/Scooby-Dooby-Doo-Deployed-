import React from 'react'
import AccomationSection from '../Component/Home/AccomationSection'
import HeroSection from '../Component/Home/HeroSection'
import Welcome from '../Component/Home/Welcome'
import Testimonial from '../Component/Home/Testimonial'
import WhyChooseUs from '../Component/Home/WhyChooseUs';



const Home = () => {
  return (
    <div>  
     <HeroSection/> 
     <Welcome/>
    <AccomationSection/> 
    <Testimonial/>
     <WhyChooseUs/>
 

  
    </div>
  )
}

export default Home
