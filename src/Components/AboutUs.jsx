// import React from 'react'
import circle from "../assets/image-removebg-preview - 2023-02-19T191726.svg";

import Button from "./Button";
import Partners from "./Partners";

import img from "..//assets/GroupAboutus.svg";
const AboutUs = () => {
  return (
    <>
      <div className="  flex flex-col overflow-hidden mt-14 rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
        <figure className="flex-1">
          <img src={img} alt="card image" className="lg:h-[30rem] ml-28" />
        </figure>

        <div className="flex-1 p-6 sm:mx-6 sm:px-0 relative">
          <header className="flex gap-4 mb-4">
            <Partners name="About Us" className="text-10px" />
          </header>
          <p className="text-black font-poppins ml-7 mb-6">
            Lorem ipsum dolor sit amet consectetur. Maecenas dignissim fringilla
            faucibus urna non cum. Consequat eget feugiat rhoncus nunc amet
            aliquet nunc. Arcu scelerisque ullamcorper curabitur morbi elementum
            convallis. Orci a lacinia ac vitae ut nunc odio ut et. Sollicitudin
            in habitasse venenatis aliquam et amet et erat.
          </p>
          <Button name="Know More" />
          <img
            src={circle}
            alt=""
            className="ml-96 absolute top-40 h-96 w-72 left-16"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
