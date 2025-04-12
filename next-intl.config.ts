import { getRequestConfig } from "next-intl/server";
import type { RequestConfig } from "next-intl/server";

export const locales = ["en", "de", "sv"];
export const defaultLocale = "en";

export default getRequestConfig(async ({ locale }): Promise<RequestConfig> => {
  // Ensure locale is a string
  const validLocale =
    typeof locale === "string" && locales.includes(locale)
      ? locale
      : defaultLocale;

  // Load messages from JSON file
  const messages = (await import(`./messages/${validLocale}.json`)).default;

  return {
    locale: validLocale,
    messages,
  };
});
