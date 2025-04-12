import Link from "next/link";

// Navigation-Links in drei Spalten wie im Luma-Footer
const footerLinks = [
  {
    title: "Solutions",
    links: [
      { label: "Inner State RAG", href: "/inner-state-rag" },
      { label: "Inner State", href: "/inner-state" },
      { label: "RAG Technology", href: "/rag" },
      { label: "API", href: "/api" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Learning Hub", href: "/learning" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact Us", href: "#contact" },
      { label: "Our Team", href: "/teams" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

// Navigationslinks für die obere Leiste
const topNavLinks = [{ label: "Join Us", href: "#contact" }];

const Footer = () => {
  // Holt das aktuelle Jahr für das Copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Hintergrund-Container mit schwarzem Hintergrund */}
      <div className="absolute inset-0 w-full h-full bg-black"></div>

      {/* Hintergrundbild als separates Div mit absoluter Positionierung und kleinerer Größe */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center scale-110 overflow-hidden">
        <div
          className="w-4/5 h-4/5 relative"
          style={{
            backgroundImage: "url('/footerBg.png')",
            backgroundSize: "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            opacity: 1,
            transform: "translateX(20%)",
          }}
        >
          {/* Verstärkter Gradient-Overlay für den Fade-Effekt an den Rändern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(
                  ellipse at center, 
                  transparent 70%, 
                  rgba(0,0,0,0.7) 85%,
                  rgba(0,0,0,1) 100%
                )
              `,
              mixBlendMode: "multiply",
            }}
          ></div>

          {/* Zusätzlicher horizontaler Gradient für stärkere Seiten-Fades */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(
                  to right,
                  rgba(0,0,0,0.8) 0%,
                  transparent 10%,
                  transparent 90%,
                  rgba(0,0,0,0.8) 100%
                )
              `,
              mixBlendMode: "multiply",
            }}
          ></div>

          {/* Zusätzlicher vertikaler Gradient für stärkeren Boden-Fade */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  transparent 70%,
                  rgba(0,0,0,0.8) 100%
                )
              `,
              mixBlendMode: "multiply",
            }}
          ></div>
        </div>
      </div>

      {/* Haupt-Footer-Inhalt */}
      <div className="relative z-10 w-full h-full container mx-auto px-4 py-8 flex flex-col">
        {/* Obere Navigationsleiste - Wie im Luma-Design */}
        <div className="flex items-center justify-between mb-20 pt-4">
          {/* Logo links */}
          <Link href="/" className="text-white text-3xl font-bold">
            Inner State RAG
          </Link>

          {/* Rechte Navigation */}
          <div className="flex items-center gap-8">
            {/* Standard-Navigationslinks */}
            {topNavLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Try Now Button */}
            <Link
              href="#contact"
              className="bg-gray-200 hover:bg-white text-black py-4 px-12 rounded-full text-lg font-medium transition-colors whitespace-nowrap min-w-[180px] text-center"
            >
              Try Now
            </Link>
          </div>
        </div>

        {/* Großes LUMA-ähnliches Branding */}
        <div className="mb-16">
          <h1 className="font-bold tracking-tighter leading-none text-white flex items-end">
            <span className="text-[8rem] sm:text-[10rem] md:text-[16rem]">
              RAG
            </span>
            <span className="text-[20px] mb-8 ml-1">SYS</span>
          </h1>
        </div>

        {/* Angepasstes Layout: [Features Community] links, [Legal] rechts */}
        <div className="flex flex-col md:flex-row justify-between mt-16">
          {/* Gruppe für Features und Community */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 mb-12 md:mb-0">
            {/* Features */}
            <div className="w-full md:w-auto">
              <h3 className="text-xl font-semibold mb-6 text-white">
                {footerLinks[0].title}
              </h3>
              <ul className="space-y-4">
                {footerLinks[0].links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div className="w-full md:w-auto">
              <h3 className="text-xl font-semibold mb-6 text-white">
                {footerLinks[1].title}
              </h3>
              <ul className="space-y-4">
                {footerLinks[1].links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Section - separat */}
          <div className="w-full md:w-auto mb-12 md:mb-0">
            <h3 className="text-xl font-semibold mb-6 text-white">
              {footerLinks[2].title}
            </h3>
            <ul className="space-y-4">
              {footerLinks[2].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright-Hinweis */}
        <div className="mt-auto pt-8 text-sm text-gray-400 text-center">
          &copy; {currentYear} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
