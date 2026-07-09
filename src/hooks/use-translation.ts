import { useLanguage } from "./use-language";

export function useTranslation<
  T extends Record<string, unknown>,
>(translations: T) {
  const lang = useLanguage();

  return translations[lang as keyof T];
}