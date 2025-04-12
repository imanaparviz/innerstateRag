export const metadata = {
  title: "RAG Consulting API",
  description: "Access RAG Consulting Services programmatically via our API",
};

export default function ApiLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
