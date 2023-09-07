// import React from 'react'



import line from "../assets/Line.svg";

const Partners = (props) => {
  return (

    <div className="">
    <div className=" h-full">
      <div className="flex items-center flex-col">
        <h1 className="text-5xl font-bold font-general">{props.name}</h1>

        <img className="w-72 mt-2" src={line} alt="" />

       
      </div>
    </div>
    </div>
  );
};

export default Partners;
