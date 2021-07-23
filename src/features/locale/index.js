import en from "./dictionaries/en.json";
import ru from "./dictionaries/ru.json";
import ua from "./dictionaries/ua.json";
import kz from "./dictionaries/kz.json";

export const dictionaries = { en, ru, ua, kz };

export const languageOptions = {
  en: "English",
  ru: "Russian",
  ua: "Український",
  kz: "Казахський",
};

export function getUserLang() {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return (
      navigator.userLanguage ||
      navigator.language ||
      navigator.browserLanguage ||
      "en"
    );
  }
}
