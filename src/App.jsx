// import React from "react";

import { Routes, Route } from "react-router-dom";

import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import FeedBackPage from "./Pages/FeedBackPage";
import LandingPage from "./Pages/LandingPage";
import MobileAppDevelopmentPage from "./Pages/MobileAppDevelopmentPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfServices from "./Pages/TermsOfServices";
import UXDesignPage from "./Pages/UXDesignPage";
import WebDevelopmentPage from "./Pages/WebDevelopmentPage";
import ClientCardComp from "./Components/ClientCardComp";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/Testimonial" element={<ClientCardComp />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
        <Route path="/FeedBackPage" element={<FeedBackPage />} />
        <Route
          path="/MobileAppDevlopment"
          element={<MobileAppDevelopmentPage />}
        />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsofServices" element={<TermsOfServices />} />
        <Route path="/UxDevelopment" element={<UXDesignPage />} />
        <Route path="/WebDevelopment" element={<WebDevelopmentPage />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
      </Routes>
    </>
  );
};

export default App;
