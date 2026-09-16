import React from "react";
import { ArrowRight, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarMark } from "./common/StarMark";
import { generateGeneralWhatsAppLink } from "@/data/plans";

export const FinalCTA: React.FC = () => {
  const handleScrollToPlans = () => {
    const el = document.getElementById("planes");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#040714] overflow-hidden">
      {/* Background Deep Cosmic & Glowing Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Massive Glowing Center Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[550px] bg-gradient-to-tr from-star-blue/25 via-blue-600/15 to-star-red/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card Container */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-star-navy-800/90 via-star-navy-900/95 to-[#060A1D] p-8 sm:p-16 lg:p-20 overflow-hidden shadow-2xl backdrop-blur-2xl">
          
          {/* Subtle Top Red & Blue Edge Highlight */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-star-blue via-star-blue-light to-star-red" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: CTA Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-6 backdrop-blur-md">
                <StarMark size={16} glow />
                <span className="text-xs font-semibold text-slate-200 uppercase tracking-widest">
                  El futuro empieza hoy
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.1] mb-6">
                ¿Listo para estar
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-star-blue-light to-star-blue">
                  verdaderamente conectado?
                </span>
              </h2>

              <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-xl mb-10">
                Da el siguiente paso. Disfruta de la velocidad de la fibra óptica simétrica,
                baja latencia y la atención de un equipo humano listo para acompañarte en todo momento.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="hero"
                  onClick={handleScrollToPlans}
                  className="group shadow-star-glow text-base px-9"
                >
                  <span>Ver todos los planes</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1.5" />
                </Button>

                <Button
                  asChild
                  size="xl"
                  variant="outline"
                  className="group border-white/20 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-base"
                >
                  <a
                    href={generateGeneralWhatsAppLink("¡Hola Star Conectados! Quiero solicitar información para contratar internet en mi hogar o empresa.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>Hablar con nosotros</span>
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Sin cláusulas sorpresa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-star-blue-light" />
                  <span>Instalación técnica en 24-48h</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-star-red animate-ping" />
                  <span>Atención personalizada y cobertura nacional</span>
                </div>
              </div>

            </div>

            {/* Right Column: Integrated Mascot Advisor Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
                
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-star-blue/30 via-star-navy-600/20 to-star-red/20 blur-3xl" />

                {/* Astronaut Support Advisor Render */}
                <img
                  src="/images/astronaut-support-desk.png"
                  alt="Asesor Star Conectados listo para atenderte"
                  className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(23,75,255,0.35)] transform hover:scale-105 transition-transform duration-500"
                />

                {/* Micro badge */}
                <div className="absolute -bottom-2 right-4 z-20 px-3.5 py-1.5 rounded-full bg-star-navy-950/90 backdrop-blur-md border border-white/15 text-xs text-slate-200 flex items-center gap-2 shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-semibold">Asesoría Inmediata</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
