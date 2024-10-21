import React from "react";
import Header from "./../components/Header";
import Features from "../components/Features";
import ProductList from "./../components/ProductList";
import Categories from "../components/Categories";
// import Promotions from "./../components/Promotions";
// import AboutUs from "./../components/AboutUs";
import PartnerCompanies from "./../components/PartnerCompanies";
import ClientTestmonials from "./../components/ClientTestmonials";
import ContactUS from "../components/ContactUs";
import Footer from "./../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Features />
      <ProductList />
      <Categories />
      {/* <Promotions /> */}
      {/* <AboutUs /> */}
      <PartnerCompanies />
      <ClientTestmonials />
      <ContactUS />
      <Footer />
    </>
  );
};

export default LandingPage;
