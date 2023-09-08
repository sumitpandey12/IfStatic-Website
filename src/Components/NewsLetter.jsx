import React from "react";
import Button from "./Button";

const NewsLetter = () => {
  return (
    <>
      <section className="mb-20">
        <div className="container px-6 m-auto  h-[25vh]">
          <div className="grid grid-cols-4 gap-16 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-9 ">
              <h2 className="mb-4 text-xl font-semibold font-poppins text-[#BC384A]">
                NEWSLETTER
              </h2>
              <h1 className="mb-4 text-4xl font-medium font-poppins text-[#333333]">
                Got A Project For Us?
              </h1>
              <p className="mb-4 text-base font-medium font-poppins text-[#272726]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias non quasi, tempore deleniti voluptatem
                obcaecati.dolore consequatur!
              </p>
            </div>

            <div className="col-span-4 lg:col-span-3 ">
              <Button name="Your Email Address" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
