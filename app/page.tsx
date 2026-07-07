import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CtaSection from "@/components/CtaSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Values />
        <Services />
        <Process />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
