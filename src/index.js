import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import HomePage from "./components/HomePage";
import ErrorBoundary from "./components/shared/ErrorBoundry/ErrorBoundry.js";
import "./style/reset.css";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App>
        <HomePage />
      </App>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("app")
);
