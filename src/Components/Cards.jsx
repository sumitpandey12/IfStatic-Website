/* eslint-disable react/prop-types */
// import React,{PropTypes} from "react";

const Cards = (props) => {
  return (
    <>
      <div className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        <figure className="p-6 pb-0 flex justify-center">
          <img src={props.img} alt="" />
          <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
            <img
              src={props.roundedimg}
              alt="user name"
              title="user name"
              width="80"
              height="80"
              className="max-w-full rounded-full"
            />
          </span>
        </figure>

        <div className="p-6">
          <h3 className="mb-4 text-xl font-medium text-slate-700">
            {props.heading}
          </h3>
          <p>{props.stars}</p>
          <p>{props.content}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
