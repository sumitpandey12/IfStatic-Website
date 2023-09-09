import React from "react";
import Navbar from "./Components/Navbar";

import CarouselLogo from "./Components/CarouselLogo";
import AboutUs from "./Components/AboutUs";

import Services from "./Components/Services";

import PortfolioComp from "./Components/PortfolioComp";
import ClientCardComp from "./Components/ClientCardComp";
import CompanyStatBar from "./Components/CompanyStatBar";
import ContactUs from "./Components/ContactUs";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <LandingPage /> */}
      <CarouselLogo/>
      <AboutUs />
       <Services />
         <PortfolioComp />
       <ClientCardComp />
       <CompanyStatBar />
        <ContactUs />
      <NewsLetter />
      
      <Footer /> 
      
     
      
     










      
      
      
     
    
      

      
     





      
     
    </div>
  );
};

export default App;
