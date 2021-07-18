import React from "react";
import ReactDOM from "react-dom";

import GlobalStyle from "./assets/styles/globalStyle";
import LandingPage from "./page";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <LandingPage />
  </React.StrictMode>,
  document.getElementById("root")
);
