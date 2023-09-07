// import React from 'react'

import Button from "./Components/Button";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import PartnersPage from "./Components/Partners";
import AboutUs from "./Components/AboutUs";
// import Slider from "react-slick";
import Services from "./Components/Services";
import Slider from "./Components/Slider";
// import Slider from "react-slick";
<Slider/>


const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Button/> */}

      <LandingPage/>
      <PartnersPage name="Our Trusted Partner"/>
      <Slider/>
      <AboutUs/>
      {/* <Services/> */}
    </div>
  );
};

export default App;
