import React from "react";
import Button from "./Button";

const Layout4 = () => {
  return (
    <>
      <section>
        <div className="container px-6 m-auto  h-36 mt-10 items-center mobile:h-[50vh]">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 xl:content-center">
            <div className="col-span-4 md:col-span-8 lg:col-span-12 flex justify-between items-center mx-20">
              <div className="col-span-4 lg:col-span-6 text-5xl font-semibold">
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
