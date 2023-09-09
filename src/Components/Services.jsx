// import React from "react";

import Cards from "./Cards";

import images from "../assets/mobile app development 1.svg";
import Partners from "./Partners";
import circle from "../assets//image-removebg-preview - 2023-02-19T191726.svg";

const Services = () => {
  return (
    <>
      <section className="mt-10 mb-20 p-6 h-screen ">
        <Partners name="Our Available Services" />
        <div className="relative">
          <img
            src={circle}
            alt=""
            className="absolute left-[7rem] top-[12rem]"
          />
          <img
            src={circle}
            alt=""
            className="absolute left-[27rem] top-[12rem]"
          />

          <div className="container px-6 m-auto mt-6 absolute">
            <div className="grid grid-cols-4 gap-12 md:grid-cols-8 lg:grid-cols-12 ">
              <div className="col-span-4 bg-white  rounded-3xl hover:bg-[#642B73] hover:text-[#ffffff] transition duration-700 ease-in-out">
                <Cards
                  heading="Mobile App Development"
                  img={images}
                  content="We have extensive experience in developing mobile apps for many platforms. Our team of skilled developers can bring your app ideas. "
                />
              </div>
              <div className="col-span-4 bg-white rounded-3xl hover:bg-[#642B73] hover:text-[#ffffff] transition duration-700 ease-in-out">
                <Cards
                  heading="Mobile Development"
                  img={images}
                  content="We have extensive experience in developing mobile apps for many platforms. Our team of skilled developers can bring your app ideas. "
                />
              </div>
              <div className="col-span-4 bg-white rounded-3xl hover:bg-[#642B73] hover:text-[#ffffff] transition duration-900 ease-in-out">
                <Cards
                  heading="Mobile Development"
                  img={images}
                  content="We have extensive experience in developing mobile apps for many platforms. Our team of skilled developers can bring your app ideas. "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
