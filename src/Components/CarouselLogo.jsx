import { useEffect } from "react";
import Glide from "@glidejs/glide";
import img1 from "..//assets/Figure → Link → Quora.png.svg";
import img2 from "..//assets/Figure → Link → Google-Main.png.svg";
import img3 from "..//assets/Figure → Link → Instamojo.png.svg";
import img4 from "..//assets/Figure → Link → KN-official.png.svg";

import img5 from "..//assets/Figure → Link → PayPal.png.svg";
import img6 from "..//assets/Figure → Link → PayU.png.svg";
import img7 from "..//assets/Figure → Link → Razorpay-1.png.svg";
import img8 from "..//assets/Figure → Link → Reseller.png.svg";
import Partners from "./Partners";

import arrow1 from "../assets/arrowleft.svg";

import arrow2 from "../assets/arrowright.svg";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function CarouselLogo() {
  return (
    <div className="container mx-auto">
      <Partners name="Our Trusted Partner" />
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={4}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 mr-16 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <img src={arrow1} alt="" className="h-10 w-8" />
            </ButtonBack>

            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img1}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img2}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img3}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img4}
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img5}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img6}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img7}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img8}
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={9}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img8}
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={10}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img8}
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={11}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img8}
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={12}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img8}
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={13}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img8}
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={14}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img8}
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>

            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 ml-16 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <img src={arrow2} alt="" className="h-10 w-8" />
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <img src={arrow1} alt="" className="h-10 w-8" />
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img1}
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img2}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img3}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img4}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img5}
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img6}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img7}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img8}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img8}
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <img src={arrow2} alt="" className="h-10 w-8" />
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <img src={arrow1} alt="" className="h-8" />
            </ButtonBack>

            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img1}
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img2}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img3}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img4}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img5}
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img6}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img7}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img8}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img8}
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={9}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img8}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={10}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img8}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                  <Slide index={11}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img8}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>

            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 "
              id="next"
            >
              <img src={arrow2} alt="" className="h-8 " />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
