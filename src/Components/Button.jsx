import React from "react";
// import { FaBeer } from 'react-icons/fa';

const Button = (props) => {
  return (
    <div>
      <button
        className="bg-white border-solid border-[1px] border-[#BC384A] font-poppins p-2 px-6 m-5 rounded transition-transform-[0.8s]  transition-shadow-[0.8s] first-letter:first-line:
      
      shadow-[5px_5px_0px_0px_#BC384A]
      
      
     active:translate-x-[5px] transform-y-[5px] active:translate-y-3 active:shadow-none text-[#BC384A] 
     
     inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap   text-sm font-medium tracking-wide  transition duration-300 hover:border-[#BC384A] hover:text-[#BC384A] focus:border-[#BC384A] focus:text-[#BC384A] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-[#BC384A] disabled:text-[#BC384A] disabled:shadow-none
     "
      >
        {props.name}
        {props.icon}
      </button>
    </div>
  );
};

export default Button;
