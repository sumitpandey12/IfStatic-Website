// import React from 'react'
import Cards from "./Cards";
import clientimg from "../assets/Oval.svg";
import Partners from "./Partners";
import { useEffect } from "react";

import Glide from "@glidejs/glide";
import arr2 from "../assets/arrowright.svg";
import arr1 from "../assets/arrowleft.svg";
import semicolon from "../assets/semicol1.svg";
import semicolon2 from "../assets/semico2.svg";
import circle from "../assets/image-removebg-preview - 2023-02-19T191726.svg";

const ClientCardComp = () => {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <>
      {/*<!-- Component: Carousel with controls inside --> */}
      <section className="w-full h-screen mb-11 mt-12 ">
        <div className="glide-01 absolute w-full px-20 h- ">
          <Partners name="What Our Clients Saying?" />
          <div className="absolute left-0 flex h-0 w-full items-center justify-between px-4 ">
            <img src={semicolon} alt="" />
            <img src={semicolon2} alt="" />
            <img
              src={circle}
              alt=""
              className="bg--700 top-6 left-0 right-[3rem] absolute h-[30rem] w-[16rem]"
            />
          </div>

          {/*    <!-- Slides --> */}
          <div
            className="overflow-hidden mb-20 bg-transpa"
            data-glide-el="track"
          >
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 ">
              <li className="bg-transparent ">
                <Cards
                  roundedimg={clientimg}
                  heading="Alan Marti"
                  stars="**********"
                  content="Outsource your digital marketing efforts, instead of handling in house. They can provide your business with a variety."
                />
              </li>
              <li className=" ">
                <Cards
                  roundedimg={clientimg}
                  heading="Maria trofimova"
                  stars="**********"
                  content="Outsource your digital marketing efforts, instead of handling in house. They can provide your business with a variety."
                />
              </li>
              <li className=" border-solid border-r-2 border-t-4 shadow-2xl ">
                <Cards
                  roundedimg={clientimg}
                  heading="Richardo Kann"
                  stars="**********"
                  content="Outsource your digital marketing efforts, instead of handling in house. They can provide your business with a variety."
                />
              </li>
            </ul>
          </div>

          {/*    <!-- Controls --> */}
          <div
            className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
            data-glide-el="controls"
          >
            <button
              className="inline-flex h-8 w-8 items-center justify-center  border-none border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-10 lg:w-10"
              data-glide-dir="<"
              aria-label="prev slide"
            >
              <img src={arr1} alt="" />
            </button>
            <button
              className="inline-flex h-8 w-8 items-center justify-center  border-none border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-10 lg:w-10"
              data-glide-dir=">"
              aria-label="next slide"
            >
              <img src={arr2} alt="" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientCardComp;

// <>
//   <section className="mt-16">
//     <Partners name="What Our Clients Saying?" />
//     <div className="container px-6 m-auto">
//       <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 mt-10">

//         <div className="col-span-4">
// <Cards
//   roundedimg={clientimg}
//   heading="Alan Marti"
//   stars="**********"
//   content="Outsource your digital marketing efforts, instead of handling in house. They can provide your business with a variety."
// />
//         </div>
//         <div className="col-span-4">
// <Cards
//   roundedimg={clientimg}
//   heading="Alan Marti"
//   stars="**********"
//   content="Outsource your digital marketing efforts, instead of handling in house. They can provide your business with a variety."
// />
//         </div>
//         <div className="col-span-4">
// <Cards
//   roundedimg={clientimg}
//   heading="Alan Marti"
//   stars="**********"
//   content="Outsource your digital marketing efforts, instead of handling in house. They can provide your business with a variety."
// />
//         </div>
//       </div>
//     </div>
//   </section>
// </>
