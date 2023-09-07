// import React from "react";

import Navbar from "./Components/Navbar";


import Services from "./Components/Services";
import LandingPage from "./Pages/LandingPage";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import CompanyStatBar from "./Components/CompanyStatBar";
import NewsLetter from "./Components/NewsLetter";


const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />

     
      <AboutUs />

      <Services />
      <CompanyStatBar />
      <ContactUs />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default App;
