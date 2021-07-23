import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./App.css";

import { LangProvider } from "./features/context/language";
import { ThemeProvider } from "./features/context/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
