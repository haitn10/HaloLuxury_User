import * as ReactDOM from "react-dom/client";
import "./styles/index.css";
import AppRouter from "./components/AppRouter";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
