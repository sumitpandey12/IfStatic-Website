import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Layout2 from "../Components/Layout2";
import Layout3 from "../Components/Layout3";
import Layout4 from "../Components/Layout4";
import img from "../assets/image-removebg-preview (7) 1.svg";
import img2 from "../assets/mobile app development 1.svg";
import Layout5 from "../Components/Layout5";

const MobileAppDevelopmentPage = () => {
  return (
    <>
      <Navbar />

      <Layout2
        head="Advanced Mobile App Development Using Latest Technologies"
        img={img}
        content="We offer modern android and IOS mobile app development services for your business. Fouses is the leading Mobile Application Development Company in India, delivering the smart and powerful mobile application with high performance and latest functionality."
      />
      <Layout3
        heading="Custom Mobile App Development Services"
        img={img2}
        content="Being one of the leading mobile app development companies in Lucknow, we believe in providing smart solutions for complex development issues. Our skilled mobile app development team covers the entire cycle of the app development and put 100% efforts to deliver you the best services and results. We adopt multiple operations, cross platforms, app development platforms and devices for developing scalable apps by providing better experiences. The expert team develops both android and IOS mobile application development for any business type like E-commerce apps, education apps, health care apps etc."
        content2="“We make sure to take your business idea from conception to most – loved app on Google Play and Apple store. “"
      />

      <Layout5
        heading="Apps For Various Operating Systems!"
        card1heading="Android App Development"
        cord1content="Right from designing to maintenance we look after every part in development. Android community is the largest and fastest growing platform for mobile apps. We have the best android development team in India, that build secure and responsive app with clean code. Fouses team stays up to date with the latest technologies, trends and tools to develop successful android applications."
        card2heading="IOS App Development"
        cord2content="We help you lead in the IOS community by developing better, smarter and seamless applications for IOS users. We deploy best development techniques and tools in and around IOS industry which help to drive better user experience to the clients. Fouses team stays up to date with the latest technologies, trends and tools to develop successful IOS mobile applications."
      />

      <Layout4 />

      <Footer />
    </>
  );
};

export default MobileAppDevelopmentPage;
