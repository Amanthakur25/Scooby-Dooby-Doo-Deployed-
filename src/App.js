import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Component/Home/Navbar';
import Footer from './Component/Home/Footer';
import PhotoGalary from './Component/galary/PhotoGalary';
import VideoGallery from './Component/galary/VideoGallery';
import  ContactUs from "./Pages/ContactUs";
import Blog from "./Pages/Blog";
import FrendlyAccomadations from "./Component/Accomadations/FrendlyAccomadations";
import DeckAccomadations from "./Component/Accomadations/DeckAccomadations";
import SeprateAccomadations from "./Component/Accomadations/SeprateAccomadations";
import DoggyDayCare from "./Component/Services/DoggyDayCare";
import DogWalk from "./Component/Services/DogWalk";
import DogPickupNDrop from "./Component/Services/DogPickupNDrop";
import Faq from './Pages/Faq';
import AboutUs from './Pages/AboutUs'; 
import ScrollTopLink from "./Component/Home/ScrollTopLink";
import ScrollTop from './Component/Home/ScrollTop';
import ParticularBlog from './Component/Blog/ParticularBlog'
import CrewMembers from './Pages/CrewMembers'
import TermsAndConditions from './Pages/TermsNCondition';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollTopLink/>
        <Navbar />
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo-galary" element={<PhotoGalary />} />
          <Route path="/video-galary" element={<VideoGallery />} />
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/blogs/:id" element={<ParticularBlog/>} /> 
          <Route path="/friendlyAccommodations" element={<FrendlyAccomadations/>} />
          <Route path="/deckAccomadations" element={<DeckAccomadations/>} />
          <Route path="/seprateAccomadations" element={<SeprateAccomadations/>} />
          <Route path="/doggyDayCare" element={<DoggyDayCare/>} />
          <Route path="/dogWalk" element={<DogWalk/>} />
          <Route path="/dogPickupNDrop" element={<DogPickupNDrop/>} />
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/CrewMembers" element={<CrewMembers/>}/> 
          <Route path="/termscondition" element={<TermsAndConditions/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
