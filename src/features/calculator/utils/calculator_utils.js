export const unitTypes = {
  c: {
    ru: "Цельсий",
    en: "Celsius",
    ua: "Украинский Цельсий",
    kz: "Казахский Цельсий",
  },
  f: {
    ru: "Фаренгейт",
    en: "Fahrenheit",
    ua: "Украинский Фаренгейт",
    kz: "Казахский Фаренгейт",
  },
  k: {
    ru: "Кельвин",
    en: "Kelvin",
    ua: "Украинский Кельвин",
    kz: "Казахский Кельвин",
  },
};

export const unitConversion = {
  c: {
    f: (value) => +value * 1.8 + 32,
    k: (value) => +value + 273.15,
  },
  f: {
    c: (value) => ((+value - 32) * 5) / 9,
    k: (value) => ((+value - 32) * 5) / 9 - 273.15,
  },
  k: {
    c: (value) => +value - 273.15,
    f: (value) => (+value + 273.15) * 1.8 + 32,
  },
};

export const convert =
  ({ from, to }) =>
  (value) => {
    const result = unitConversion[from][to](value);
    return Math.round(result * 1000) / 1000;
  };
