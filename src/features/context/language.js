import { createContext } from "react";
import { dictionaries, getUserLang } from "../locale";

import WithContext from "./WithContext";

const category = "language";
const defaultOption =
  window.localStorage.getItem(category) || getUserLang().split("-")[0] || "en";

const initialSettings = {
  category,
  active: defaultOption,
  activeDataset: dictionaries[defaultOption],
};

export const LangContext = createContext();
export const LangConsumer = LangContext.Consumer;

export const LangProvider = WithContext(
  LangContext,
  dictionaries,
  initialSettings
);
