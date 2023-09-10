// import React from "react";

import Cards from "./Cards";

import images from "../assets/mobile app development 1.svg";
import Partners from "./Partners";
import circle from "../assets//image-removebg-preview - 2023-02-19T191726.svg";

const Services = () => {
  return (
    <>
      <section className="mt-10 mb-20 p-6 h-full ">
        <Partners name="Our Available Services" />

        <div className="container px-0 m-auto mt-6 ">
          <div className="grid grid-cols-4 gap-12 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 bg-white  rounded-3xl hover:bg-[#642B73] hover:text-[#ffffff] transition duration-700 ease-in-out ">
              <Cards
                heading="Mobile App Development"
                img={images}
                content="We have extensive experience in developing mobile apps for many platforms. Our team of skilled developers can bring your app ideas. "
              />
            </div>
            <div className="col-span-4 bg-white rounded-3xl hover:bg-[#642B73] hover:text-[#ffffff] transition duration-700 ease-in-out ">
              <Cards
                heading="Web Development"
                img={images}
                content="We have extensive experience in developing mobile apps for many platforms. Our team of skilled developers can bring your app ideas. "
              />
            </div>
            <div className="col-span-4 bg-white rounded-3xl hover:bg-[#642B73] hover:text-[#ffffff] transition duration-900 ease-in-out">
              <Cards
                heading="UI UX Design"
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
