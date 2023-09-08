// eslint-disable-next-line no-unused-vars
import React from "react";

const PortfolioCard = (props) => {
  return (
    <>
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        <figure>
          <img src={props.img} alt="card image" className="aspect-video w-full" />
        </figure>

        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              {props.heading}
            </h3>
          </header>
          <p>
          {props.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
