/* eslint-disable react/prop-types */
// import React from 'react'

import line from "../assets/Line.svg";

const Partners = (props) => {
  return (
    <>
      <section>
        <div className="container px-6 m-auto pb-10 flex justify-center">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-12 flex flex-col items-center">
              <h1 className="text-[4vw] font-bold font-general text-black">
                {props.name}
              </h1>
              <img className="w-[25vw] lg:w-48" src={line} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;





// Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium accusamus officiis architecto molestias voluptatum modi vel labore dolorem odio commodi quos debitis beatae numquam cum at ipsam, tenetur nobis!Loremlore
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi deleniti, nam reiciendis iste explicabo eos consequatur consectetur ipsa neque quos similique! Impedit debitis, a provident corporis fugiat cupiditate ratione?Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima et at voluptates dignissimos iste ipsum molestias nesciunt. Quibusdam nemo atque iste beatae dolor commodi eum cum suscipit quod debitis!