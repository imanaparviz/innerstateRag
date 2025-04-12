import { redirect } from "next/navigation";
import { defaultLocale } from "./i18n";

// Root page - redirect to the default locale
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
