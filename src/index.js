import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./Routes/Routes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
