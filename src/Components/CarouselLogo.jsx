import { useEffect } from "react";
import Glide from "@glidejs/glide";
import img1 from "..//assets/Figure → Link → Quora.png.svg";
import img2 from "..//assets/Figure → Link → Google-Main.png.svg"
import img3 from "..//assets/Figure → Link → Instamojo.png.svg"
import img4 from "..//assets/Figure → Link → KN-official.png.svg"

import img5 from "..//assets/Figure → Link → PayPal.png.svg"
import img6 from "..//assets/Figure → Link → PayU.png.svg"
import img7 from "..//assets/Figure → Link → Razorpay-1.png.svg"
import img8 from "..//assets/Figure → Link → Reseller.png.svg"
import Partners from "./Partners";

export default function CarouselLogo() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 9,
      classes: {
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
          gap: 36,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
     
      <div className="glide-09 relative  mt-36 ">
      <Partners name="Our Trusted Partner" />
        <div data-glide-el="track" className="">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex  overflow-hidden p-0  ">
            <li>
              <img
                src={img1}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src={img2}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src={img3}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src={img4}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src={img5}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src={img6}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src={img7}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src={img8}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
}
