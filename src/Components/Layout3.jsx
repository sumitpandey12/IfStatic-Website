import React from "react";

const Layout3 = (props) => {
  return (
    <>
      <section>
        <div className="text-3xl font-semibold flex justify-center text-center">
          <h1 className="lg:w-[650px] lg:text-center">{props.heading}</h1>
        </div>

        {/*<!-- Component: Horizontal card--> */}
        <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
          {/*  <!-- Body--> */}
          <div className="flex-1 p-6 sm:mx-6 sm:px-0">
            <header className="flex gap-4 mb-4"></header>
            <p className="text-black text-lg font-medium ">{props.content}</p>
            <h3 className="text-center mt-5 text-[#C6426E] font-semibold">
              {props.content2}
            </h3>
          </div>
          {/*  <!-- Image --> */}
          <figure className="ml-12  justify-center flex">
            <img
              src={props.img}
              alt="card image"
              className="object-cover min-h-full aspect-auto h-60"
            />
          </figure>
        </div>
        {/*<!-- End Horizontal card--> */}
      </section>
    </>
  );
};

export default Layout3;
