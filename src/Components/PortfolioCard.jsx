// eslint-disable-next-line no-unused-vars
import React from "react";

const PortfolioCard = (props) => {
  return (
    <>
      <div className="overflow-hidden rounded bg- text-slate-500 shadow-md shadow-slate-200 lg:mx-5">
        <figure>
          <img
            src={props.img}
            alt="card image"
            className="aspect-video w-full  "
          />
        </figure>

        <div className="p-6 lg:ml-14 ">
          <header className="mb-4 font-poppins">
            <h3 className="text-2xl font-bold text-slate-700 sm:text-cente">
              {props.heading}
            </h3>
          </header>
          <p className="text-black leading-relaxed">{props.content}</p>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
