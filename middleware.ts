import createMiddleware from "next-intl/middleware";

// Definiere die unterstützten Sprachen explizit
const locales = ["en", "de", "sv", "es"];
const defaultLocale = "en";

// Erstelle die Middleware
export default createMiddleware({
  // Unterstützte Sprachen
  locales,
  // Standardsprache
  defaultLocale,
  // "as-needed" bedeutet, dass die Root-URL ohne Sprachpräfix funktioniert
  localePrefix: "as-needed",
});

// Konfiguriere die Pfade, auf die die Middleware angewendet werden soll
export const config = {
  // Anwenden auf alle Pfade außer spezifische Ausnahmen
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
