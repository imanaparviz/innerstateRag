import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "de", "sv"];
export const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => {
  // Load messages from JSON file
  const messages = (await import(`./messages/${locale}.json`)).default;

  return {
    messages,
  };
});
