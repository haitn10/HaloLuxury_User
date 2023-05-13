import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import "./AppRouter.css";
import Register from "./register";

function AppRouter() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
