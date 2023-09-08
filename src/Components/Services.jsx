import React from "react";

import Cards from "./Cards";
import images from "../assets/mobile app development 1.svg";
import Partners from "./Partners";

const Services = () => {
  return (
   

    <>
    
      <section className="mt-20 mb-20">
      <Partners name='Our Available Services'/>
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4">
              <Cards
                heading="Mobile App Development"
                img={images}
                content="We have extensive experience in developing mobile apps for many platforms. Our team of skilled developers can bring your app ideas. "
              />
            </div>
            <div className="col-span-4">
              <Cards
                heading="Mobile Development"
                img={images}
                content="We have extensive experience in developing mobile apps for many platforms. Our team of skilled developers can bring your app ideas. "
              />
            </div>
            <div className="col-span-4">
              <Cards
                heading="Mobile Development"
                img={images}
                content="We have extensive experience in developing mobile apps for many platforms. Our team of skilled developers can bring your app ideas. "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
