import React from "react";
import ReactDOM from "react-dom";
import "./styles/global-style.css";

import { Home } from "./components/templates/home";

ReactDOM.render(
  <React.StrictMode>
    <Home numberToIncrement={2} />
  </React.StrictMode>,
  document.getElementById("root")
);
