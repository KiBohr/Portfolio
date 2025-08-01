import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import de from "./locales/de.json";
import en from "./locales/en.json";

i18n
  .use(LanguageDetector) // Language Detector hinzufügen
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
    },
    fallbackLng: "en", // Fallback-Sprache
    interpolation: { escapeValue: false },
    detection: {
      // Optionen für den Language Detector (optional)
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"], // Sprache in localStorage speichern
    },
  });

export default i18n;
