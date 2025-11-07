import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Updated Import to be able to render the correct CSS file
import "./App.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
