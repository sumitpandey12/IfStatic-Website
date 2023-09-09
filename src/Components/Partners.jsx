/* eslint-disable react/prop-types */
// import React from 'react'

import line from "../assets/Line.svg";

const Partners = (props) => {
  return (
    <>
      <section>
        <div className="container px-6 m-auto pb-10 flex justify-center">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-12 flex flex-col items-center">
              <h1 className="text-[4vw] font-bold font-general text-black">
                {props.name}
              </h1>
              <img className="w-[25vw] lg:w-48" src={line} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
