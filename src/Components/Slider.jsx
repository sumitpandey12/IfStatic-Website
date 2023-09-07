// import React from 'react'
import arrow1 from "../assets/arrowleft.svg";
import arrow2 from "../assets/arrowright.svg";
import partnerbrandname from "..//assets/Figure → Link → Quora.png.svg";

const Slider = () => {
  return (
    <div className="h-[150px] w-[100vw]  flex justify-between items-center">
      <div className="shadow-xl h-7 w-7">
        <img src={arrow1} alt="" />
      </div>

      <div className="flex gap-12  h-16 w-[80vw]  justify-center">
        <img src={partnerbrandname} alt="" />
        <img src={partnerbrandname} alt="" />
        <img src={partnerbrandname} alt="" />
        <img src={partnerbrandname} alt="" />
        <img src={partnerbrandname} alt="" />
        <img src={partnerbrandname} alt="" />
        <img src={partnerbrandname} alt="" />
        <img src={partnerbrandname} alt="" />
        <img src={partnerbrandname} alt="" />
        
      </div>
      <div className="shadow-xl h-7 w-7">
        <img src={arrow2} alt="" />
      </div>
    </div>
  );
};

export default Slider;






import React from 'react'

// const Slider = () => {
//   return (
//     <div className="h-[150px] w-[100vw] bg-orange-400 mt-10 ">





//     </div>
//   )
// }

// export default Slider
