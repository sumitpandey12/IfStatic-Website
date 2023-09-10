import React from "react";


const Layout2 = (props) => {
  return (
    <>
      <section>
        <div className="container px-3 py-3 m-auto  ">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-12  bg-gradient-to-b from-[#BD3752] via-[#BD3752B0] to-[#BD3752] lg:rounded-br-[20%] lg:rounded-tl-[20%] rounded-2xl">
            <div className="flex justify-center text-xl lg:text-2xl py-8 text-[#ffffff] font-semibold sm:mx-6 sm:px-0 mobile:text-center xl:text-3xl text-center  ">{props.head}</div>
              <div className="flex flex-col overflow-hidden lg:p-16 py-16 rounded-xl  text-slate-500 sm:flex-row ">
                
                
                <figure className="flex-1">
                  <img
                    src={props.img}
                    alt="card image"
                    className="object-cover min-h-full aspect-auto"
                  />
                </figure>
                {/*  <!-- Body--> */}
                
                <div className="flex-1 lg:p-6 sm:mx-6 sm:px-0 flex lg:text-xl text-[#ffffff] items-center font-medium text-center lg:text-left">
                  
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
