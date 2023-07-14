import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Home: "Home",
      About: "About",
      Login: "Login",
      Copyright: "© 2023 FoodBook - All Rights Reserved",
      GitPlug: "Brought to you by",
    },
  },
  bm: {
    translation: {
      Home: "Utama",
      About: "Maklumat",
      Login: "Log Masuk",
      Copyright: "© 2023 FoodBook - Hak Cipta Terpelihara",
      GitPlug: "Hak cipta oleh",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({ resources, lng: "en", interpolation: { escapeValue: false } });

export default i18n;
