import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SignUpPage from "./pages/signup-page/SignUpPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <SignUpPage />
  </StrictMode>
);
