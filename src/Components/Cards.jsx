/* eslint-disable react/prop-types */
// import React,{PropTypes} from "react";

const Cards = (props) => {
  return (
    <div className="h-[50vh] w-[29vw] mt-5 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  p-10 block">
      <div className=" flex justify-center p-10 ">
        <img
          className="rounded h-[80px] w-[160px] "
          src=""
          alt="img"
        />
      </div>

      <div className="w flex justify-center flex-col  text-center ">
        <h5 className="mb-2 text-xl font-medium leading-tight text-black font-poppins">
          {props.name}
        </h5>

        <div>
          <p className="mb-4 text-base text-black font-poppins">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
