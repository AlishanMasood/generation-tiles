import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Skeleton from "./components/Skeleton";
// const Skeleton = React.lazy(()=>import("./components/Skeleton"))
const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const SubCategoriesPage = React.lazy(() => import("./pages/SubCategoriesPage"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/categorie/:subcategory"
            element={<SubCategoriesPage />}
          />
        </Routes>
      </Suspense>

      {/* <SingleProductPage /> */}
      {/* <LandingPage /> */}
    </BrowserRouter>
  );
}

export default App;
