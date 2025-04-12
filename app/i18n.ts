import { createTranslator } from "next-intl";

// Definiere die unterstützten Sprachen
export const locales = ["en", "de", "sv"];
export const defaultLocale = "en";

export async function getTranslations(locale?: string) {
  // Verwende die Standardsprache, wenn keine angegeben ist
  const resolvedLocale =
    locale && locales.includes(locale) ? locale : defaultLocale;

  try {
    // Laden der Übersetzungsdatei
    return (await import(`../messages/${resolvedLocale}.json`)).default;
  } catch (error) {
    console.error(
      `Fehler beim Laden der Übersetzungen für ${resolvedLocale}:`,
      error
    );
    return {};
  }
}

export async function getTranslator(locale?: string, namespace?: string) {
  const messages = await getTranslations(locale);
  return createTranslator({
    locale: locale || defaultLocale,
    messages,
    namespace,
  });
}
