import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./AppRouter.css";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import History from "../pages/History";

function AppRouter() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Navigate to="/" />} exact />
          <Route path="/" element={<HomePage />} index />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id/details" element={<ProductDetails />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
