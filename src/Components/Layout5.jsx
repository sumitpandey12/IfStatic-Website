import React from "react";

const Layout5 = (props) => {
  return (
    <>
      {/*<!-- Component: One column even layout --> */}
      <section>
        <div className="container px-6 m-auto bg-gradient-to-b from-[#642B73] via-[#db91ed] to-white">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-12 text-center py-10 ">
              <h1 className="text-4xl font-bold text-[#ffffff] pb-9">
                {props.heading}
              </h1>
              <div className="container lg:px-6 m-auto">
                <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                  <div className="col-span-4 lg:col-span-6">
                    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                      <div className="p-6">
                        <h3 className="mb-4 text-xl text-black font-semibold ">
                          {props.card1heading}
                        </h3>
                        <p className="text-black">{props.cord1content}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 lg:col-span-6">
                    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                      <div className="p-6">
                        <h3 className="mb-4 text-xl text-black font-semibold ">
                          {props.card2heading}
                        </h3>
                        <p className="text-black">{props.cord2content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End One column even layout --> */}
    </>
  );
};

export default Layout5;
