import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import img from "../assets/hero 1.svg";
import Layout2 from "../Components/Layout2";
import Layout3 from "../Components/Layout3";
import img2 from "..//assets/out (5) 1.svg";
import NewsLetter from "../Components/NewsLetter";
import Layout4 from "../Components/Layout4";

const WebDevelopmentPage = () => {
  return (
    <>
      <Navbar />
      <Layout2
        head="Web Development Company in India - Web Solutions Provider"
        img={img}
        content="Leading Web Development Company in India specializes in developing potential, compatible and customized websites based on your requirements."
      />
      <Layout3
        head="Have a Business? Want a cool website? Weve got it all covered!"
        img={img2}
        content="We understand how important it is these days to have an online presence of your business and that’s where fouses helps you out, by designing smart and functional website design which would help you attract potential clients in the industry. We believe that websites are the key boosters to the business these days and so our experts make sure to deliver the best creative design that would suit your business type and target potential customers."
        content2="Whether it’s a small blog, an E-Commerce website, a boost for your start-up or a large business empire, FOUSES fulfills each and every need of your Web Design and Development."
      />
      <Layout4/>
      {/* <NewsLetter/> */}

      <Footer />
    </>
  );
};

export default WebDevelopmentPage;
