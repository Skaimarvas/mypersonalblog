import React, { createContext, useState } from "react";
import useAxios from "../hooks/useAxios";

export const ContextObject = createContext();

const languages = [
  { name: "Türkçe", value: "tr" },
  { name: "English", value: "en" },
];

const storage = localStorage.getItem("initialLang");
const browseLanguage = Intl.DateTimeFormat().resolvedOptions().locale;
const selectedLang = languages.find((lang) =>
  browseLanguage.includes(lang.value)
);
const initialLanguage = storage
  ? storage
  : selectedLang
  ? selectedLang.value
  : "tr";

export default function ContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState(initialLanguage);
  const [data] = useAxios();
  const { darkmodeswitch, lightmode } = data;
  const toggleDarkMode = () => {
    localStorage.setItem("darktheme", !darkMode);

    setDarkMode(!darkMode);

    const html = document.querySelector("html");
    html.classList.toggle("dark", !darkMode);
  };
  const toggleLangMode = () => {
    const newLanguage = language === "tr" ? "en" : "tr";
    setLanguage(newLanguage);
    localStorage.setItem("initialLang", newLanguage);

    /* NOT: 
    Aşağıdaki kodda state asenkron bir işlem olduğu için localstorage değişimi algılamayabiliyor.
    setLanguage(language === "tr" ? "en" : "tr");
    localStorage.setItem("initialLang", language);*/
  };

  const initialModeDedection = () => {
    const localTheme = localStorage.getItem("darktheme");
    const html = document.querySelector("html");

    if (
      JSON.parse(localTheme) === true ||
      (localTheme === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      html.classList.add("dark");
    } else {
      setDarkMode(false);
      html.classList.remove("dark");
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches }) => {
        if (matches) {
          setDarkMode(true);
          html.classList.add("dark");
        } else {
          setDarkMode(false);
          html.classList.remove("dark");
        }
      });
  };

  const isTurkish = language === "tr";
  const isEnglish = language === "en";

  const reverseDark = !darkMode;

  const mode =
    reverseDark && isEnglish
      ? darkmodeswitch.english
      : reverseDark && isTurkish
      ? darkmodeswitch.turkish
      : !reverseDark && isEnglish
      ? lightmode.english
      : !reverseDark && isTurkish
      ? lightmode.turkish
      : "";

  const conObject = {
    darkMode,
    setDarkMode,
    language,
    setLanguage,
    toggleDarkMode,
    toggleLangMode,
    initialModeDedection,
    isEnglish,
    isTurkish,
    mode,
  };

  return (
    <ContextObject.Provider value={conObject}>
      {children}
    </ContextObject.Provider>
  );
}
