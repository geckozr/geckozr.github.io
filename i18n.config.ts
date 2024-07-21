import en from "~/assets/i18n/en.json";
import it from "~/assets/i18n/it.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    it,
  },
}));
