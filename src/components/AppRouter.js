import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./AppRouter.css";
import HomePage from "../pages/Home";
import Shop from "../pages/Shop";

function AppRouter() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
