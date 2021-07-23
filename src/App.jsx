import React from "react";
import Calculator from "./features/calculator/components/calculator/Calculator";
import Header from "./ui/header/Header";

import { ThemeConsumer } from "./features/context/theme";

const App = () => {
  return (
    <ThemeConsumer>
      {({ activeDataset: { foreground, background } }) => {
        return (
          <div
            style={{
              backgroundColor: foreground,
              color: background,
              height: "100vh",
            }}
          >
            <Header />
            <Calculator />
          </div>
        );
      }}
    </ThemeConsumer>
  );
};

export default App;
