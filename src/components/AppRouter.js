import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./AppRouter.css";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";

function AppRouter() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/*" element={<Navigate to="/" />} exact />
          <Route path="/" element={<HomePage />} index />
          <Route path="/products" element={<Shop />} />
          <Route path="/products/:id/details" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
