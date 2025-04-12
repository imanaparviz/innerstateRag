import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import type { RequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = ["en", "de", "sv", "es"];
export const defaultLocale = "en";

export default getRequestConfig(async ({ locale }): Promise<RequestConfig> => {
  // Validate that the incoming `locale` parameter is valid
  const validLocale = typeof locale === "string" ? locale : defaultLocale;

  if (!locales.includes(validLocale)) notFound();

  // TEMPORARY: Return hardcoded empty messages to test config loading
  // return {
  //   // messages: (await import(`./messages/${locale}.json`)).default
  //   messages: {},
  // };

  // Load messages for the specified locale
  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default,
  };
});
