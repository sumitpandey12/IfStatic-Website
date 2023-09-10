import React from "react";
import Button from "./Button";

const Layout4 = () => {
  return (
    <>
      <section>
        <div className="container lg:px-6 m-auto py-10 ">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 xl:content-center">
            <div className="col-span-4 md:col-span-8 lg:col-span-12 flex lg:justify-between items-center lg:mx-20 mx-5 flex-col">
              <div className="col-span-4 lg:col-span-6 lg:text-5xl text-2xl font-semibold">
                Let s Discuss Your Project
              </div>
              <div className="col-span-4 lg:col-span-6">
                <Button name="Contact Us" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout4;
