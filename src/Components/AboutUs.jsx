// import React from 'react'

import Button from "./Button";
import Partners from "./Partners";

import img from "..//assets/GroupAboutus.svg";
const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row mt-36">
        <figure className="flex-1">
          <img
            src={img}
            alt="card image"
            className="object-cover min-h-full aspect-auto"
          />
        </figure>

        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <Partners name="About Us" />
          </header>
          <p className="text-black font-poppins ml-7">
            Lorem ipsum dolor sit amet consectetur. Maecenas dignissim fringilla
            faucibus urna non cum. Consequat eget feugiat rhoncus nunc amet
            aliquet nunc. Arcu scelerisque ullamcorper curabitur morbi elementum
            convallis. Orci a lacinia ac vitae ut nunc odio ut et. Sollicitudin
            in habitasse venenatis aliquam et amet et erat.
          </p>
          <Button name="Know More" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
