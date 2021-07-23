import { createContext } from "react";
import WithContext from "./WithContext";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const category = "theme";
const defaultOption = window.localStorage.getItem(category) || "light";

const initialSettings = {
  category,
  active: defaultOption,
  activeDataset: themes[defaultOption],
};

export const ThemeContext = createContext();
export const ThemeConsumer = ThemeContext.Consumer;

export const ThemeProvider = WithContext(ThemeContext, themes, initialSettings);
