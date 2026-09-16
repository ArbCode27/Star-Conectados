import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Pricing } from "./components/Pricing";
import { SpeedTestSection } from "./components/SpeedTestModal";
import { Experiences } from "./components/Experiences";
import { Technology } from "./components/Technology";
import { Coverage } from "./components/Coverage";
import { BrandStory } from "./components/BrandStory";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { BackgroundGrid } from "./components/common/BackgroundGrid";

export function App() {
  return (
    <div className="relative min-h-screen bg-[#060A1D] text-slate-100 selection:bg-star-red/20 selection:text-white">
      {/* Background Star & Grid Ambiance */}
      <BackgroundGrid />

      {/* 1. Navbar */}
      <Navbar />

      <main className="relative z-10">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Trust / Beneficios */}
        <Benefits />

        {/* 4. Planes de Internet + Speed Test Simulator */}
        <Pricing />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpeedTestSection />
        </div>

        {/* 5. Experiencias (Gaming, Streaming, Trabajo, etc.) */}
        <Experiences />

        {/* 6. Tecnología / Infraestructura de Fibra Óptica */}
        <Technology />

        {/* 7. Cobertura Interactiva en Cordero y Táchira */}
        <Coverage />

        {/* 8. Brand Story / Narrativa del Astronauta */}
        <BrandStory />

        {/* 9. Testimonios Reales */}
        <Testimonials />

        {/* 10. FAQ (Preguntas Frecuentes) */}
        <FAQ />

        {/* 11. CTA Final */}
        <FinalCTA />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating Conversion Widget */}
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;
