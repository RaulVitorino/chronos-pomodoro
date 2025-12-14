import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppFuncIncial from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppFuncIncial />
    <h1>Ola mundo</h1>
  </StrictMode>
);
