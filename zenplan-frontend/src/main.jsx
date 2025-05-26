import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { DataContextProvider } from "./context/DataContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DataContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
