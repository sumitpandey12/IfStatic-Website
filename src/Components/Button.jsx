import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className="bg-white border-solid border-[1px] border-[#BC384A] font-poppins p-2 px-5 m-5 rounded transition-transform-[0.8s]  transition-shadow-[0.8s] first-letter:first-line:
      
      shadow-[5px_5px_0px_0px_#BC384A]
      
      
     active:translate-x-[5px] transform-y-[5px] active:translate-y-3 active:shadow-none text-[#BC384A] "
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
