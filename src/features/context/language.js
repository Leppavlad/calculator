import { createContext } from "react";
import { dictionaries, languageOptions, getUserLang } from "../locale";

import WithContext from "./WithContext";

const defaultOption =
  window.localStorage.getItem("language") ||
  getUserLang().split("-")[0] ||
  "en";
const LangSettings = {
  category: "language",
  active: defaultOption,
  activeDataset: dictionaries[defaultOption],
  options: languageOptions,
};

export const LangContext = createContext();
export const LangConsumer = LangContext.Consumer;

export const LangProvider = WithContext(
  LangContext,
  dictionaries,
  LangSettings
);
