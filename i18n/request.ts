import { getRequestConfig } from "next-intl/server";

// Lade die gemeinsamen Einstellungen
const locales = ["en", "de", "sv"];
const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => {
  // Verwende standardmäßig die Standardsprache, wenn locale undefiniert ist
  const resolvedLocale = locales.includes(locale as any)
    ? locale
    : defaultLocale;

  try {
    // Laden der Übersetzungsdatei
    const messages = (await import(`../messages/${resolvedLocale}.json`))
      .default;
    return {
      locale: resolvedLocale,
      messages,
      timeZone: "Europe/Berlin",
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
      timeZone: "Europe/Berlin",
    };
  }
});
