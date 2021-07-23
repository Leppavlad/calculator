import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./App.css";

import { LangProvider } from "./features/context/language";

ReactDOM.render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
