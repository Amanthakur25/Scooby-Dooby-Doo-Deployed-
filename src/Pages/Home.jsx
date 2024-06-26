import React from 'react'
import AccomationSection from '../Component/Home/AccomationSection'
import HeroSection from '../Component/Home/HeroSection'
import Welcome from '../Component/Home/Welcome'
import WhyChooseUs from '../Component/Home/WhyChooseUs';
import Review from '../Component/Home/Review'



const Home = () => {
  return (
    <div>  
     <HeroSection/> 
     <Welcome/>
    <AccomationSection/> 
    <Review/>
    
     <WhyChooseUs/>
 

  
    </div>
  )
}

export default Home
