import React from "react";
import img from "../assets/out (6).svg";

const Layout3 = (props) => {
  return (
    <>
      <div className="flex justify-center text-5xl py-4 text-[#000] font-semibold sm:mx-6 mobile:text-center sm:px-0 ">{props.head}</div>

    
       
           
            <div className=" flex flex-col overflow-hidden  rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row mx-20 bg-white">
              <div className="flex-1 p-6 sm:mx-6 sm:px-0 flex flex-col items-center text-[#C6426E]  text-2xl font-medium ">
                <p>
                {props.content}
                </p>
                <p className="text-[#C6426E] text-center mt-7">{props.content2}</p>
              </div>
              <figure className="flex-1">
                <img
                  src={props.img}
                  alt="card image"
                  className="object-cover min-h-full aspect-auto"
                />
              </figure>
            </div>
          </>
      
  );
};

export default Layout3;
