// import React from "react";
import hero from "../assets/Hero.svg";
import Navbar from "../Components/Navbar";
import humanimg from "../assets/human.svg";
import Button from "../Components/Button";
import thred from "../assets/thread.svg";
import circle from "../assets/image-removebg-preview - 2023-02-19T191726.svg";
import Blockimg from "../Components/Blockimg";

const LandingPage = () => {
  return (
    <div className=" w-[100%] h-[100%] relative  overflow-x-clip ">
      <div className="absolute z-[-1] h-[100vh] w-[100vw]">
        <img className="" src={hero} alt="heroimg" />
      </div>

      <div className=" w-[100vw] h-[90vh] font-poppins ">
        <div className="w-[1000px] absolute top-20 left-14 h-[180px]">
          <h1 className="text-[#022252] text-[80px] leading-[85px] font-semibold">
            Creating Software <br />& Digital Excellence.
          </h1>
        </div>
        <div className=" w-[1000px] absolute top-72 left-14 h-[115px]">
          <p className=" text-lg font-medium font-[#10121dcd] ">
            Lorem ipsum dolor sit amet consectetur. Faucibus porttitor non mi
            enim <br />
            sapien integer integer. Iaculis nec vitae ut vel non neque cras
            turpis facilisis. <br />
            Leo enim faucibus consequat orci vestibulum at ac sed. Nisl donec
            molestie <br /> eget dictum et donec pharetra tristique semper.
          </p>
        </div>

        <div className="h-[600px] w-[300px]  absolute left-[75%] bottom-[123px] ">
          <img className="h-[650px] " src={humanimg} alt="" />
        </div>

        <div>
          <div className=" h-fit w-fit absolute left-24 top-[400px]">
            <Button name="Get Started" />
          </div>

          <div className=" h-[100px] w-[400px]  absolute left-60  top-[410px]">
            <img
              className="h-[139px] w-[245px] object-contain -rotate-12"
              src={thred}
              alt=""
            />
          </div>
          {/* isko component banana he yaad se */}

          <div>
            <Blockimg />
          </div>
        </div>

        <div className="absolute top-[550px] left-[1px]">
          <img className="h-[200px] " src={circle} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
