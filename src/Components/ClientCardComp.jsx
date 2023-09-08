// import React from 'react'
import Cards from "./Cards";
import clientimg from "../assets/Oval.svg";
import Partners from "./Partners";

const ClientCardComp = () => {
  return (
    <>

 
      <section className="mt-16">
      <Partners name='What Our Clients Saying?'/>
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4">
              <Cards
                roundedimg={clientimg}
                heading="Alan Marti"
                stars="**********"
                content="Outsource your digital marketing efforts, instead of handling in house. They can provide your business with a variety."
              />
            </div>
            <div className="col-span-4">
              <Cards
                roundedimg={clientimg}
                heading="Alan Marti"
                stars="**********"
                content="Outsource your digital marketing efforts, instead of handling in house. They can provide your business with a variety."
              />
            </div>
            <div className="col-span-4">
              <Cards
                roundedimg={clientimg}
                heading="Alan Marti"
                stars="**********"
                content="Outsource your digital marketing efforts, instead of handling in house. They can provide your business with a variety."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientCardComp;
