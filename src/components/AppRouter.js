import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import Layout from "./common/Layout";
import "./AppRouter.css";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
