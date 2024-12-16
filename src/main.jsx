import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider } from "./components/ContextProvider/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </StrictMode>
  </Router>
);
