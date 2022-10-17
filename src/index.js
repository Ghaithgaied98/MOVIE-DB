import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>
);
