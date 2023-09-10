import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import img from "../assets/hero 1.svg";
import Layout2 from "../Components/Layout2";
import Layout3 from "../Components/Layout3";
import img2 from "..//assets/out (5) 1.svg";

import Layout4 from "../Components/Layout4";
import Layout5 from "../Components/Layout5";

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
        heading="Have a Business? Want a cool website? Weve got it all covered!"
        img={img2}
        content="We understand how important it is these days to have an online presence of your business and that’s where fouses helps you out, by designing smart and functional website design which would help you attract potential clients in the industry. We believe that websites are the key boosters to the business these days and so our experts make sure to deliver the best creative design that would suit your business type and target potential customers."
        content2="Whether it’s a small blog, an E-Commerce website, a boost for your start-up or a large business empire, FOUSES fulfills each and every need of your Web Design and Development."
      />

      <Layout5
        heading="What we Provide"
        card1heading="SEO"
        cord1content="The Fouses development team develops SEO friendly website which helps the clients to attract potential customers and ultimately drive sales. Our team works with passion to deliver the best outcomes for your business. We also prioritize our clients by providing complete support and attending them based upon their queries appropriately and quickly."
        card2heading="Enhanced Security"
        cord2content="Our talented team will assist you to create a full secured website. We have security for DDoS attack, SOLi injection and Xss attack. Also, we offer customized web development solutions based on client’s demand. We develop responsive websites with a motive to help our clients grow their business and get top-class recognition in industry."
      />
      <Layout4 />
    

      <Footer />
    </>
  );
};

export default WebDevelopmentPage;
