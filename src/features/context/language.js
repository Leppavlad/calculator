import { createContext } from "react";
import { dictionaries, languageOptions, getUserLang } from "../locale";

import WithContext from "./WithContext";

const defaultOption = getUserLang().split("-")[0] || "kz";
const LangSettings = {
  active: defaultOption,
  activeDataset: dictionaries[defaultOption],
  options: languageOptions,
};

export const LangContext = createContext(LangSettings);
export const LangConsumer = LangContext.Consumer;

export const LangProvider = WithContext(LangContext, dictionaries, {
  ...LangSettings,
  category: "language",
});
