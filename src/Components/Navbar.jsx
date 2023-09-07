// import React from 'react'

import logo from "../assets/Frame 1000002387.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className=" flex justify-center w-screen">
      <div className="  w-[90vw] flex flex-wrap p-4 flex-col md:flex-row items-center ">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="h-28 w-36" src={logo} />
        </a>

        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-poppins gap-8 text-[3vh] font-medium">
          <a href="#">
            <span className="text-red-600">About Us</span>
          </a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Testimonial</a>
          <a href="#">Contact Us</a>
        </div>
        <Button name="Get Started" />
      </div>
    </div>
  );
};

export default Navbar;
