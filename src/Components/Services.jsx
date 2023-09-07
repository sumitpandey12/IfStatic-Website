import React from "react";
import Partners from "./Partners";
import circle from "../assets/image-removebg-preview - 2023-02-19T191726.svg";
import Cards from "./Cards";

const Services = () => {
  return (
    <div className="h-[70vh] w-[100vw] mt-20">
      <div>
        <Partners name="Our Available Services" />
      </div>

      <div className="flex justify-around   relative">
        
        
        <Cards name='Mobile App Development' content='We have extensive experience in developing mobile apps for many platforms. Our team of skilled developers can bring your app ideas. '/>
        <Cards name='Web Development' contant='Our web development services involve design, creation, and website maintenance for our clients '/>
        <Cards name='UI UX Design' content='Our web development services involve design, creation, and website maintenance for our clients satisfaction. '/>
      </div>







    </div>
  );
};

export default Services;
