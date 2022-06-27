import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "./store/configureStore";
import { Provider } from "react-redux";

import { Router } from "./Routes/Routes";
import Header from "./components/Header/";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = configureStore();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  </Provider>
);
