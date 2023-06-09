import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter as Router } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/css/grid.css";
import "./assets/css/grid-revert.css";
import "./assets/css/navigation.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
