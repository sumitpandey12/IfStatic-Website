import React from "react";
import PortfolioCard from "./PortfolioCard";
import img1 from "../assets/portfolio1.bca87c8712f9c1a48c3e.webp.svg";
import Partners from "./Partners";
import Button from "./Button";

const PortfolioComp = () => {
  return (
    <>
      <Partners name="Portfolio, We Proud Of" />
      <section className="mt-10 flex flex-col">
        <div className="container px-6 m-auto flex flex-col justify-center">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12  ">
            <div className="col-span-4 lg:col-span-6">
              <PortfolioCard
                heading="Expanse Tracker App"
                img={img1}
                content="Expense Tracker App is a mobile or web-based tool that allows users to track their expenses, manage their budgets, and view their spending habits in one place. It helps users monitor their cash flow and make informed financial decisions."
              />
            </div>

            <div className="col-span-4 lg:col-span-6">
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
