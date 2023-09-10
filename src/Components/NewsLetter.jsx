// import React from "react";
import Button from "./Button";
import bgimg from "../assets/image-removebg-preview - 2023-02-19T191726.svg";

import { BsFillArrowRightCircleFill } from "react-icons/Bs";

const NewsLetter = () => {
  return (
    <>
      <section className=" lg:py-10 h-full ">
        <div className="container px- m-auto  flex flex-col justify-center mt-10 ">
          <div className="relative overflow-hidden bg-cover bg-no-repeat flex h-full">
            <img src={bgimg} alt="" className="h-[300px] invisible lg:visible" />

            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12  absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed   items-center">
              <div className="col-span-4 md:col-span-8 lg:col-span-12">
                <section>
                  <div className="container px-6 m-auto ">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-8 lg:grid-cols-12  justify-between">
                      <div className="col-span-4 lg:col-span-6 lg:text-left text-center">
                        <h2 className=" text-xl font-semibold font-poppins text-[#BC384A]">
                          NEWSLETTER
                        </h2>
                        <h1 className="  text-4xl font-bold  font-poppins text-[#333333]">
                          Got A Project For Us?
                        </h1>
                        <p className=" text-base font-medium font-poppins text-[#272726] lg:w-[30vw]">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Molestias non quasi, tempore deleniti
                        </p>
                      </div>
                      <div className="col-span-4 lg:col-span-6  flex justify-center items-center ">
                        <Button
                          name="Your Email Address"
                          icon={<BsFillArrowRightCircleFill />}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End One column even layout --> */}
    </>
  );
};

export default NewsLetter;
