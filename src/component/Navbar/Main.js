import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
// import Home from "./Home";
// import About from "./About";
import Banner from "./Banner1";
import TopOfferSection from "./TopOfferSection";
import ProductsSection from "./ProductSection";
import BookAppointment from "./Demo";
import Trending from "./Trending";
import TrendingAndNewArrivals from "./Toptranding";
import Footer from "./Footer";
// import Services from "./Services";
// import Pricing from "./Pricing";
// import Contact from "./Contact";

const Main = () => {
  return (
    <Router>
      <Navbar />
      <Banner />
      <TopOfferSection />
      <ProductsSection />
      <BookAppointment />
      <Trending />
      <TrendingAndNewArrivals />
      <Footer />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services/service1" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default Main;
