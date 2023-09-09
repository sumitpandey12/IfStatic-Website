import React from "react";

const CompanyStatBar = () => {
  return (
  <>
    <div className="dark:bg-[#BD3752] md:w-full lg:h-60 bg-green-500 ">
      <div className="">
        <div className="mx-auto bg-gradient-to-l bg-[#BD3752] h-32">
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

            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-[#BD3752] ">
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

// <>
//   <section className="mt-16">
//     <div className="container px-6 m-auto bg-[#BD3752] h-full p-10">
//       <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 text-[#ffffff]">
//         <div className="col-span-4 lg:col-span-3 flex flex-col justify-center text-center">
//           <h1 className="text-[3vw] font-bold">100+</h1>
//           <p className="text-[1vw] font-semibold">Project Completed</p>
//         </div>
//         <div className="col-span-4 lg:col-span-3 flex flex-col justify-center text-center">
//           <h1 className="text-[3vw] font-bold">5Cr +</h1>
//           <p className="text-[1vw] font-semibold">
//             Marketing Budgets Managed
//           </p>
//         </div>
//         <div className="col-span-4 lg:col-span-3 flex flex-col justify-center text-center">
//           <h1 className="text-[3vw] font-bold">100Cr +</h1>
//           <p className="text-[1vw] font-semibold">Reach Delivered</p>
//         </div>
//         <div className="col-span-4 lg:col-span-3 flex flex-col justify-center text-center">
//           <h1 className="text-[3vw] font-bold">10+</h1>
//           <p className="text-[1vw] font-semibold">Start-Ups Supported</p>
//         </div>
//       </div>
//     </div>
//   </section>

// </>
