import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./AppRouter.css";
import HomePage from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";

function AppRouter() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
