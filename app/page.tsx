import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { UseCases } from "@/components/sections/use-cases";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta-section";
import Footer from "@/components/footer";
import { MarketStats } from "@/components/sections/market-stats";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <MarketStats />
      <WhyChooseUs />
      <UseCases />
      <Process />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}
