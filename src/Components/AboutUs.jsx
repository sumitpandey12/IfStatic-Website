// import React from 'react'
import circle from "../assets/image-removebg-preview - 2023-02-19T191726.svg";

import Button from "./Button";
import Partners from "./Partners";

import img from "..//assets/GroupAboutus.svg";
const AboutUs = () => {
  return (
    <>
      {/*<!-- Component: Horizontal card--> */}
      <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img
            src={img}
            alt="card image"
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <Partners name="About Us" />
          <p className="text-black mb-8 ">
            Lorem ipsum dolor sit amet consectetur. Maecenas dignissim fringilla
            faucibus urna non cum. Consequat eget feugiat rhoncus nunc amet
            aliquet nunc. Arcu scelerisque ullamcorper curabitur morbi elementum
            convallis. Orci a lacinia ac vitae ut nunc odio ut et. Sollicitudin
            in habitasse venenatis aliquam et amet et erat.
          </p>
          <div className=" flex justify-between">
            <Button name="Know More" />
            <img src={circle} alt="" className="h-32 lg:h-64" />
          </div>
        </div>
      </div>
      {/*<!-- End Horizontal card--> */}
    </>
  );
};

export default AboutUs;
