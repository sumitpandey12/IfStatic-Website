import React from "react";
import Button from "./Button";

const NewsLetter = () => {
  return (
    <div>
    <div className=" h-[250px] w-screen  flex justify-center items-center flex-wrap">
      <div className="w-[60vw] h-[230px] flex flex-col font-poppins justify-center">
        <h2 className="text-[#BD3752] ml-52 text-[20px] font-bold">NEWSLETTER</h2>
        <h1 className="text-3xl ml-52 font-medium">Got A Project For Us?</h1>
        <p className="w-[540px] ml-52 font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          non quasi, tempore deleniti voluptatem obcaecati.dolore consequatur!
        </p>
      </div>
      <div className=" w-[40vw] h-[230px]  flex justify-center items-center md:flex-wrap ">
        <Button name="Your Email Address" />
      </div>
    </div>
    </div>
  );
};

export default NewsLetter;
