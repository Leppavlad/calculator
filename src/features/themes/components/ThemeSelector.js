import React from "react";

import { ThemeConsumer, themes } from "../../context/theme";

export default function LanguageSelector() {
  return (
    <ThemeConsumer>
      {(data) => {
        return (
          <select
            onChange={(e) => data.setActive(e.target.value)}
            value={data.active}
          >
            {Object.keys(themes).map((item) => (
              <option key={item} value={item}>
                {item[0].toUpperCase() + item.slice(1)}
              </option>
            ))}
          </select>
        );
      }}
    </ThemeConsumer>
  );
}
