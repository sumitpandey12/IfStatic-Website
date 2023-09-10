import React from "react";
import reviewimg from "../assets/block.svg";

const Blockimg = () => {
  return (
    <div
      className="h-[100px] w-[400px] absolute top-[475px] rounded-3xl left-[527px] flex
           justify-center items-center"
    >
      <img className="h-[190px] w-[400px] " src={reviewimg} alt="" />
    </div>
  );
};

export default Blockimg;
