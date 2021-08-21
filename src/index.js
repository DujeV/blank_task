import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./utils/index";
import { Suspense } from "react";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
