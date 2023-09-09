import React from "react";
import PortfolioCard from "./PortfolioCard";
import img1 from "../assets/portfolio1.bca87c8712f9c1a48c3e.webp.svg";
import Partners from "./Partners";
import Button from "./Button";
import circle from "../assets/image-removebg-preview - 2023-02-19T191726.svg";

const PortfolioComp = () => {
  return (
    <>
      <section className=" flex flex-col justify-center items-center mt-16 mb-10 px-11">
        <Partners name="Portfolio, We Proud Of" />
        <div className="container px-6 m-auto ">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-11 lg:content-center   py-20 ">
            <div className="col-span-4 lg:col-span-4 ">
              <PortfolioCard
                heading="Expanse Tracker App"
                img={img1}
                content="Expense Tracker App is a mobile or web-based tool that allows users to track their expenses, manage their budgets, and view their spending habits in one place. It helps users monitor their cash flow and make informed financial decisions."
              />
            </div>

            <div className="col-span-4 lg:col-span-4">
              <PortfolioCard
                heading="Expanse Tracker App2"
                img={img1}
                content="Expense Tracker App is a mobile or web-based tool that allows users to track their expenses, manage their budgets, and view their spending habits in one place. It helps users monitor their cash flow and make informed financial decisions."
              />
            </div>
          </div>

          <div className=" flex justify-center items-center mt-10">
            <Button name="View More" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioComp;
