import { getRequestConfig } from "next-intl/server";
import type { RequestConfig } from "next-intl/server";

// Lade die gemeinsamen Einstellungen
const locales = ["en", "de", "sv"];
const defaultLocale = "en";

export default getRequestConfig(async ({ locale }): Promise<RequestConfig> => {
  // Verwende standardmäßig die Standardsprache, wenn locale undefiniert ist
  const resolvedLocale =
    typeof locale === "string" && locales.includes(locale)
      ? locale
      : defaultLocale;

  try {
    // Laden der Übersetzungsdatei
    const messages = (await import(`../messages/${resolvedLocale}.json`))
      .default;
    return {
      locale: resolvedLocale,
      messages,
    };
  } catch (error) {
    console.error(
      `Fehler beim Laden der Übersetzungen für ${resolvedLocale}:`,
      error
    );
    // Fallback auf ein leeres Objekt im Fehlerfall
    return {
      locale: resolvedLocale,
      messages: {},
    };
  }
});
