import React, { Suspense } from "react";
import Skeleton from "../components/Skeleton";

const Categories = React.lazy(() => import("../components/Categories"));
// const ProductList = React.lazy(() => import("./../components/ProductList"));
const Features = React.lazy(() => import("../components/Features"));
const Header = React.lazy(() => import("../components/Header"));
// const Promotions = React.lazy(() => import("../components/Promotions"));
// const AboutUs = React.lazy(() => import("../components/AboutUs"));
// const PartnerCompanies = React.lazy(() =>
//   import("../components/PartnerCompanies")
// );
const ClientTestmonials = React.lazy(() =>
  import("../components/ClientTestmonials")
);
const Footer = React.lazy(() => import("./../components/Footer"));
const ContactUS = React.lazy(() => import("../components/ContactUs"));
const LandingPage = () => {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Header />
        {/* <ProductList /> */}
        <Categories />
        {/* <Promotions /> */}
        {/* <AboutUs /> */}
        {/* <PartnerCompanies /> */}
        <ClientTestmonials />
        <ContactUS />
        <Features />
        <Footer />
      </Suspense>
    </>
  );
};

export default LandingPage;
