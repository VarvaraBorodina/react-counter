import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./Routes/Routes";
import Header from "./components/Header/";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Header />
    <Router />
  </BrowserRouter>
);
