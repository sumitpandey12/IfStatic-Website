import React from "react";
// import img from "..//assets/image-removebg-preview (8).svg";

const Layout2 = (props) => {
  return (
    <>
      <section>
        <div className="container px-6 m-auto p-20 ">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-12 bg-[#BD3752] rounded-br-[20%] rounded-tl-[20%] rounded-2xl">
            <div className="flex justify-center text-5xl py-4 text-[#ffffff] font-semibold sm:mx-6 sm:px-0 mobile:text-center mobile:text-xl xl:text-3xl ">{props.head}</div>
              <div className="flex flex-col overflow-hidden p-16 py-16 rounded-xl  text-slate-500 sm:flex-row ">
                {/*  <!-- Image --> */}
                {/* <h1 className="flex">We provide UI/UX related all services</h1> */}
                
                <figure className="flex-1">
                  <img
                    src={props.img}
                    alt="card image"
                    className="object-cover min-h-full aspect-auto"
                  />
                </figure>
                {/*  <!-- Body--> */}
                
                <div className="flex-1 p-6 sm:mx-6 sm:px-0 flex text-xl text-[#ffffff] items-center font-medium">
                  
                  <p>
                  {props.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout2;
