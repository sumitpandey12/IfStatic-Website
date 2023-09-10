import hero from "../assets/Hero.svg";
// import { Routes, Route } from "react-router-dom";

import humanimg from "../assets/human.svg";
import Button from "../Components/Button";
import reviewimg from "../assets/block.svg";
import thred from "../assets/thread.svg";
import circle from "../assets/image-removebg-preview - 2023-02-19T191726.svg";
import Blockimg from "../Components/Blockimg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CarouselLogo from "../Components/CarouselLogo";
import Services from "../Components/Services";
import PortfolioComp from "../Components/PortfolioComp";
import ClientCardComp from "../Components/ClientCardComp";
import CompanyStatBar from "../Components/CompanyStatBar";
import NewsLetter from "../Components/NewsLetter";

const LandingPage = () => {
  return (
    // <>
    //   <div className="  w-[100vw] relative  overflow-x-clip container ">
    //     <div className="absolute z-[-1] h-[100vh] w-[100vw]">
    //       <img className="" src={hero} alt="heroimg" />
    //     </div>

    //     <div className=" w-[100vw] h-[90vh] font-poppins ">
    //       <div className="w-[1000px] absolute top-20 left-14 h-[180px]">
    //         <h1 className="text-[#022252] text-[80px] leading-[85px] font-semibold">
    //           Creating Software <br />& Digital Excellence.
    //         </h1>
    //       </div>

    //       <div className=" w-[1000px] absolute top-72 left-14 h-[115px]">
    //         <p className=" text-lg font-medium font-[#10121dcd] ">
    //           Lorem ipsum dolor sit amet consectetur. Faucibus porttitor non mi
    //           enim <br />
    //           sapien integer integer. Iaculis nec vitae ut vel non neque cras
    //           turpis facilisis. <br />
    //           Leo enim faucibus consequat orci vestibulum at ac sed. Nisl donec
    //           molestie <br /> eget dictum et donec pharetra tristique semper.
    //         </p>
    //       </div>

    //       <div className="h-[600px] w-[300px]  absolute left-[75%] bottom-[123px] ">
    //         <img className="h-[650px] " src={humanimg} alt="" />
    //       </div>

    //       <div>
    //         <div className=" h-fit w-fit absolute left-24 top-[400px]">
    //           <Button name="Get Started" />
    //         </div>

    //         <div className=" h-[100px] w-[400px]  absolute left-60  top-[410px]">
    //           <img
    //             className="h-[139px] w-[245px] object-contain -rotate-12"
    //             src={thred}
    //             alt=""
    //           />
    //         </div>
    //         {/* isko component banana he yaad se */}

    //         <div>
    //           <Blockimg />
    //         </div>
    //       </div>

    //       <div className="absolute top-[550px] left-[1px]">
    //         <img className="h-[200px] " src={circle} alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <Navbar />

      <section>
        <div className="relative overflow-hidden bg-cover bg-no-repeat flex h-full lg:mb-14">
          <img src={hero} alt="" />
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
            <div className="flex h-full ">
              <div className="px-6 text-center text-white md:px-12">
                <section>
                  <div className="container px-6 m-auto">
                    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                      <div className="col-span-4 lg:col-span-7 flex flex-col text-start lg:mt-16 mt-4 ">
                        <h1 className=" md:text-2xl  text-base lg:text-5xl font-semibold tracking-tight xl:text-7xl text-[#022252]">
                          Creating Software <br /> & Digital Excellence.
                        </h1>
                        <p className=" font-medium text-[5px] w-40 lg:w-full tracking-tight md:text-sm xl:text-sm text-[#0D0E13C2] lg:text-base">
                          Lorem ipsum dolor sit amet consectetur. Faucibus
                          porttitor non mi enim sapien integer integer. Iaculis
                          nec vitae ut vel non neque cras turpis facilisis. Leo
                          enim faucibus consequat orci vestibulum at ac sed.
                          Nisl donec molestie eget dictum et donec pharetra
                          tristique semper.
                        </p>
                        <div className="">
                          <Button name="Get Started" />
                        </div>
                      </div>

                      <div className="absolute lg:left-[600px] lg:w-60 lg:ml-36 bg-orange-500 ">
                        <img
                          src={humanimg}
                          alt=""
                          className="aspect-auto  lg:h-96 absolute top-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[150px] md:w-[100px] lg:w-72 lg:h-40">
                    <img
                      src={thred}
                      alt=""
                      className="absolute rotate-[-7deg] h-2 lg:h-70 lg:w-64 lg:top-[100px] lg:right-[0px] "
                    />

                    <div className="absolute lg:right-[370px] lg:top-96 lg:left-96 left-40">
                      <img
                        src={reviewimg}
                        alt=""
                        className=" lg:h-28 lg:w-72 h-14 w-28"
                      />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CarouselLogo />
      <Services />
      <PortfolioComp />

      <ClientCardComp />

      <CompanyStatBar />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default LandingPage;
