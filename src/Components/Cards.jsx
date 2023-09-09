/* eslint-disable react/prop-types */
// import React,{PropTypes} from "react";

const Cards = (props) => {
  return (
    <>
      <div className="overflow-hidden text-center rounded shadow-md text-slate-500 shadow-slate-200">
        <figure className="p-8 flex justify-center  pb-9">
          <img src={props.img} alt="" />
        </figure>

        <div className="p-8 flex flex-col justify-center items-center">
          <h3 className="mb-4 text-2xl font-bold text-[#0D0E13CC]">
            {props.heading}
          </h3>
          <p>{props.star}</p>
          <p className="text-[#0D0E13CC] w-80 font-normal text-lg ">{props.content}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
