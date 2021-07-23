import React from "react";

import { languageOptions } from "../../locale/index";
import { LangConsumer } from "../../context/language";

export default function LanguageSelector() {
  return (
    <LangConsumer>
      {(data) => {
        return (
          <select
            onChange={(e) => data.setActive(e.target.value)}
            value={data.active}
          >
            {Object.keys(languageOptions).map((item) => (
              <option key={item} value={item}>
                {languageOptions[item]}
              </option>
            ))}
          </select>
        );
      }}
    </LangConsumer>
  );
}
