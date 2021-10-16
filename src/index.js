import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundry.js";
import "./style/reset.css";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("app")
);
