// import React from 'react'

import Button from "./Button";
import Partners from "./Partners";
import circle from "..//assets/image-removebg-preview - 2023-02-19T191726.svg";

const AboutUs = () => {
  return (
    <div className="h-[100vh] w-[100vw]  flex items-center ">
      <div className="w-[40vw] h-[80vh] bg-black  flex justify-center items-center text-[30px] text-white">
        images
      </div>
      <div className="w-[60vw] h-[70vh]  flex flex-col justify-center ">
        <div className="h-[67px]  w-[241px] text-[48px] ml-16">
          <Partners name="About Us" />
        </div>

        <div className="  w-[40vw] mt-5 ml-16 ">
          <p className="font-[regular] font-semibold">
            Lorem ipsum dolor sit amet consectetur. Maecenas dignissim fringilla
            faucibus urna non cum. Consequat eget feugiat rhoncus nunc amet
            aliquet nunc. Arcu scelerisque ullamcorper curabitur morbi elementum
            convallis. Orci a lacinia ac vitae ut nunc odio ut et. Sollicitudin
            in habitasse venenatis aliquam et amet et erat.
          </p>
        </div>

        <div className="mt-10 ml-12 font-[regular] flex justify-between ">
          <Button name="Know More" />
          <img className="h-[250px]" src={circle} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
