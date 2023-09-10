import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Layout2 from '../Components/Layout2'
import img from "..//assets/image-removebg-preview (8).svg";
import NewsLetter from '../Components/NewsLetter';
import Layout3 from '../Components/Layout3';
import img2 from "..//assets/out (6).svg"

const UXDesignPage = () => {
  return (
    <>
    <Navbar/>
    <Layout2 head='We provide UI/UX related all services' img={img} content='Leading online portals development company for the transaction of goods and services online in India. we provide modern and attractive designs for your company growth with reasonable cost.'/>
    <Layout3 head='Have a good sevice' img={img2} content='Main goal of Focuses Education is to come up with a cost-effective solution according to your business objectives. If you are in search of any professional help for your company growth  then you are at the right place.'/>
    
    <NewsLetter/>
    <Footer/>
    
    
    </>
  )
}

export default UXDesignPage