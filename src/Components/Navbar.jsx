// import React from 'react'

import logo from "../assets/Frame 1000002387.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-[100vw] bg-[#ffffff] h-[110px] flex justify-center items-center  font-[popins] shadow-lg">
      <nav className="w-[90vw]  h-[75px] flex justify-between items-center">
        <div className=" flex justify-center items-center">
          <img src={logo} alt="" />
        </div>

        <div className=" flex justify-center items-center gap-8 text-[3vh]">
          <a href="#">
            <span className="text-red-600">About Us</span>
          </a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Testimonial</a>
          <a href="#">Contact Us</a>
        </div>
        <div>
          <Button name="Get Started"/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
