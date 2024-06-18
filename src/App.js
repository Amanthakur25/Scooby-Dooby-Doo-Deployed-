import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Component/Home/Navbar';
import Footer from './Component/Home/Footer';
import PhotoGalary from './Component/galary/PhotoGalary';
import VideoGallery from './Component/galary/VideoGallery';
import  ContactUs from "./Pages/ContactUs";
import QuickEnuiry from "./Component/QuickEnquiry/QuickEnquiry";
import Blog from "./Pages/Blog";
import FrendlyAccomadations from "./Component/Accomadations/FrendlyAccomadations";
import DeckAccomadations from "./Component/Accomadations/DeckAccomadations";
import SeprateAccomadations from "./Component/Accomadations/SeprateAccomadations";
import DogBoarding from './Component/Services/DogBoarding';
import DoggyDayCare from "./Component/Services/DoggyDayCare";
import DogWalk from "./Component/Services/DogWalk";
import DogPickupNDrop from "./Component/Services/DogPickupNDrop";
import Faq from './Pages/Faq';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo-galary" element={<PhotoGalary />} />
          <Route path="/video-galary" element={<VideoGallery />} />
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/enquiry" element={<QuickEnuiry/>} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/friendlyAccommodations" element={<FrendlyAccomadations/>} />
          <Route path="/deckAccomadations" element={<DeckAccomadations/>} />
          <Route path="/seprateAccomadations" element={<SeprateAccomadations/>} />
          <Route path="/dogBoarding" element={<DogBoarding/>} />
          <Route path="/doggyDayCare" element={<DoggyDayCare/>} />
          <Route path="/dogWalk" element={<DogWalk/>} />
          <Route path="/dogPickupNDrop" element={<DogPickupNDrop/>} />
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
         
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
