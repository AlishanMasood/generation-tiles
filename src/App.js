import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SingleProductPage from "./pages/SingleProductPage";
import SubCategoriesPage from "./pages/SubCategoriesPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/categorie/:subcategory" element={<SubCategoriesPage />} />
      </Routes>

      {/* <SingleProductPage /> */}
      {/* <LandingPage /> */}
    </BrowserRouter>
  );
}

export default App;
