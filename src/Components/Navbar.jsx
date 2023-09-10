import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import logo from "../assets/Frame 1000002387.svg";
import Button from "./Button";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      {/*<!-- Component: Navbar with--> */}
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[6.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              <img src={logo} alt="" className="lg:h-10" />
            </a>

            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
            ${
              isToggleOpen
                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                : ""
            }
          `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>

            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <Link
                  to={"/LandingPage"}
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-4"
                  href="javascript:void(0)"
                >
                  <span>Home</span>
                </Link>
              </li>

              <li role="none" className="flex items-stretch">
                <div className="flex justify-center mt-6">
                  <div onMouseLeave={() => setOpen(false)} className="relative">
                    <button
                      onMouseOver={() => setOpen(true)}
                      className="flex   p-2 bg-white  rounded-md  items-center gap-2 py-4 text-[#333333] transition-colors duration-800 hover:text-emerald-600 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-1  lg:mt-0"
                    >
                      <span className="mr-2">Services</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>

                    <ul
                      className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
                        open ? "block" : "hidden"
                      }`}
                    >
                      <li className="flex w-full items-center px-3 py-4 text-sm hover:bg-gray-100">
                        <Link to={"/MobileAppDevlopment"}>
                          Mobile App Development
                        </Link>
                      </li>
                      <li className="flex w-full items-center px-3 py-4 text-sm hover:bg-gray-100">
                        <Link to={"/WebDevelopment"}>Web Development</Link>
                      </li>
                      <li className="flex w-full items-center px-3 py-4 text-sm hover:bg-gray-100">
                        <Link to={"/UxDevelopment"}> UI UX Design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li role="none" className="flex items-stretch">
                <div className="flex justify-center mt-6">
                  <div onMouseLeave={() => setOpen(false)} className="relative">
                    <button
                      onMouseOver={() => setOpen(true)}
                      className="flex   p-2 bg-white  rounded-md  items-center gap-2 py-4 text-[#333333] transition-colors duration-800 hover:text-emerald-600 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-1  lg:mt-0 "
                    >
                      <span className="mr-2">Company</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>

                    <ul
                      className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
                        open ? "block" : "hidden"
                      }`}
                    >
                      <li className="flex w-full items-center px-3 py-4 text-sm hover:bg-gray-100">
                        <Link to={"/AboutUsPage"}> About Us</Link>
                      </li>
                      <li className="flex w-full items-center px-3 py-4 text-sm hover:bg-gray-100">
                        <Link to={"/PrivacyPolicy"}>Privacy Policy</Link>
                      </li>
                      <li className="flex w-full items-center px-3 py-4 text-sm hover:bg-gray-100">
                        <Link to={"/PrivacyPolicy"}>Privacy Policy</Link>
                      </li>
                      <li className="flex w-full items-center px-3 py-4 text-sm hover:bg-gray-100">
                        <Link to={"/FeedBackPage"}> Feedback Form</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li role="none" className="flex items-stretch">
                <ScrollLink
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={900}
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 text-emerald-500 transition-colors duration-300 hover:text-emerald-600 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-4"
                >
                  <span>Portfolio</span>
                </ScrollLink>
              </li>

              <li role="none" className="flex items-stretch">
                <ScrollLink
                  to="testimonial"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={900}
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-4"
                >
                  <span>Testimonial</span>
                </ScrollLink>
              </li>

              <li role="none" className="flex items-stretch">
                <Link
                  to={"/ContactUs"}
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-"
                  href="javascript:void(0)"
                >
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>

            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <Button name="Get Started" />
            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar --> */}
    </>
  );
};

export default Navbar;
