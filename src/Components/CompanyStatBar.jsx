import React from "react";

const CompanyStatBar = () => {
  return (
    <>
      <div className="dark:bg-[#BD3752] md:w-full lg:h-70  ">
        <div className="">
          <div className="mx-auto bg-gradient-to-l bg-[#BD3752]  lg:w-full  h-40">
            <div className="mx-auto container w-full flex flex-col justify-center items-center"></div>
          </div>
          <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-16 md:gap-x-6 md:gap-y-6 ">
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-[#BD3752] ">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-[#ffffff]">
                  100+
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-[#ffffff]">
                  Projects Completed
                </p>
              </div>
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-60 lg:h-56 bg-[#BD3752] ">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-[#ffffff]">
                  5Cr +
                </h2>

                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-[#ffffff]">
                  Marketing Budgets Managed
                </p>
              </div>

              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-[#BD3752] ">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-[#ffffff]">
                  100Cr +
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-[#ffffff]">
                  Reach Delivered
                </p>
              </div>

              <div className="flex justify-center flex-col items-center h-36 md:w-44 md:h-48 lg:w-40 lg:h-full bg-[#BD3752] ">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-[#ffffff]">
                  10+
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-[#ffffff]">
                  Start-Ups Supported
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyStatBar;
