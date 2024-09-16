import AboutUs from "./components/AboutUs";
import Categories from "./components/Categories";
import ClientTestmonials from "./components/ClientTestmonials";
import ContactUS from "./components/ContactUs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PartnerCompanies from "./components/PartnerCompanies";
import ProductList from "./components/ProductList";
import Promotions from "./components/Promotions";
function App() {
  return (
    <div className="App">
      <Header />

      <Features />
      <ProductList />
      <Categories />
      <Promotions />
      <AboutUs />
      <PartnerCompanies />
      <ClientTestmonials />
      <ContactUS />
      <Footer />
    </div>
  );
}

export default App;
