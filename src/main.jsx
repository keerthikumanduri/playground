import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Accordian from "./components/accordion/index.jsx";
import BgChanger from "./components/accordion/bgChanger/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Accordian /> */}
    <BgChanger />
  </StrictMode>
);
