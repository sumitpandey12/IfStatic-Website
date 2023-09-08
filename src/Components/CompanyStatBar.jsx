import React from "react";

const CompanyStatBar = () => {
  return (
    <>
      <section className="bg-[#BD3752] h-[170px] mt-20 mb-20">
        <div className="container px-6 h-full flex items-center justify-center m-auto ">
          <div className="grid grid-cols-4 gap-32 md:grid-cols-8 lg:grid-cols-12 text-[#ffffff]  font-poppins text-center items-center">
            <div className="col-span-4 lg:col-span-3 ">
              <h1 className="text-[3vw] font-bold">100+</h1>
              <p className="text-[1vw] font-semibold">Project Completed</p>
            </div>
            <div className="col-span-4 lg:col-span-3">
              <h1 className="text-[3vw] font-bold">5Cr +</h1>
              <p className="text-[1vw] font-semibold">
                Marketing Budgets Managed
              </p>
            </div>
            <div className="col-span-4 lg:col-span-3">
              <h1 className="text-[3vw] font-bold">100Cr +</h1>
              <p className="text-[1vw] font-semibold">Reach Delivered</p>
            </div>
            <div className="col-span-4 lg:col-span-3">
              <h1 className="text-[3vw] font-bold">10+</h1>
              <p className="text-[1vw] font-semibold">Start-Ups Supported</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyStatBar;
