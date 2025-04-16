import "./index.css";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//const tag = <strong>Olá react!</strong>;

root.render(
  <div>
    <App />
  </div>
);
