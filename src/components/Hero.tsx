import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Zap,
  ShieldCheck,
  Wifi,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "./HeroBackground";
import { StarMark } from "./common/StarMark";
import { generateGeneralWhatsAppLink } from "@/data/plans";

export const Hero: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 22;
    const y = (clientY / innerHeight - 0.5) * 22;
    setMouseOffset({ x, y });
  }, []);

  const handleScrollToPlans = () => {
    const el = document.getElementById("planes");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#060A1D]"
    >
      {/* Background with Grid & Canvas Interactive Nodes */}
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(90vh-6rem)]">
          
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-6 lg:pt-0">
            
            {/* Top Micro-badge */}
            <motion.div
              initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-inner mb-6 hover:border-star-blue/40 transition-colors">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-slate-200 tracking-wide uppercase">
                  Fibra Óptica Pura · Cordero, Táchira
                </span>
                <span className="text-star-blue-light text-xs font-bold">FTTH</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 font-heading"
            >
              Conecta con todo.
              <br />
              <span className="relative inline-block mt-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-star-blue-light to-star-blue">
                  Sin límites.
                </span>
                {/* Subtle underglow line */}
                <span className="absolute -bottom-2 left-0 w-32 sm:w-48 h-1 bg-gradient-to-r from-star-red via-star-blue to-transparent rounded-full" />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-8 sm:mb-10"
            >
              Internet de alta velocidad y latencia ultrabaja para tu hogar y tu negocio.
              Estabilidad garantizada por fibra óptica directa, respaldada con soporte humano local en Cordero.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Button
                size="xl"
                variant="hero"
                onClick={handleScrollToPlans}
                className="group shadow-star-glow text-base px-8"
              >
                <span>Ver planes de fibra</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1.5" />
              </Button>

              <Button
                asChild
                size="xl"
                variant="outline"
                className="group border-white/20 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-base"
              >
                <a
                  href={generateGeneralWhatsAppLink("¡Hola! Me gustaría consultar planes de internet para mi sector.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>Hablar por WhatsApp</span>
                </a>
              </Button>
            </motion.div>

            {/* Trust Micro-Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-white/10 w-full grid grid-cols-3 gap-4 sm:gap-8 max-w-xl"
            >
              <div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-star-blue-light" />
                  <span className="font-heading font-bold text-2xl sm:text-3xl text-white">
                    800<span className="text-star-blue-light text-base font-normal">Mbps</span>
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Velocidad máxima</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-4 h-4 text-star-red-glow" />
                  <span className="font-heading font-bold text-2xl sm:text-3xl text-white">
                    &lt;14<span className="text-star-red-glow text-base font-normal">ms</span>
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Ping ultra bajo</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="font-heading font-bold text-2xl sm:text-3xl text-white">
                    99.9<span className="text-emerald-400 text-base font-normal">%</span>
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Disponibilidad real</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: High-Tech Integrated Astronaut Narrative Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[460px] sm:max-w-[520px] aspect-[4/5] flex items-center justify-center"
            >
              {/* Back Cosmic Glow Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-star-blue/35 via-star-navy-600/20 to-star-red/20 blur-[60px] transform scale-90 pointer-events-none" />

              {/* Glowing Concentric Orbital Rings */}
              <div className="absolute w-[95%] h-[95%] rounded-full border border-white/10 [animation:spin_40s_linear_infinite]" />
              <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-star-blue/20 [animation:spin_25s_linear_infinite_reverse]" />

              {/* Astronaut Visual with Parallax & Subtle Floating */}
              <motion.div
                animate={{
                  x: mouseOffset.x * 0.8,
                  y: mouseOffset.y * 0.8 - 6,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <div className="relative w-full h-full flex items-center justify-center group">
                  
                  {/* Subtle Top Fiber Light Pulse */}
                  <div className="absolute top-8 right-6 w-24 h-24 bg-star-red/25 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-16 left-6 w-32 h-32 bg-star-blue/30 rounded-full blur-3xl animate-pulse" />

                  {/* High Quality Mascot Hero Render */}
                  <img
                    src="/images/astronaut-hero-space.png"
                    alt="Astronauta Star Conectados explorador de alta tecnología"
                    className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(23,75,255,0.35)] select-none pointer-events-none transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Floating Hologram Chip 1: Ping / Latencia */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      x: mouseOffset.x * -0.5,
                    }}
                    transition={{
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      x: { type: "spring", stiffness: 150, damping: 20 },
                    }}
                    className="absolute top-12 -left-2 sm:-left-6 z-20 bg-star-navy-900/90 backdrop-blur-xl border border-white/15 px-4 py-2.5 rounded-2xl shadow-2xl shadow-star-blue/30 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-star-blue/20 border border-star-blue/30 flex items-center justify-center text-star-blue-light">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                        Latencia Táchira
                      </div>
                      <div className="text-sm font-heading font-bold text-white flex items-center gap-1.5">
                        <span>14 ms</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Hologram Chip 2: Fibra Pura Simétrica */}
                  <motion.div
                    animate={{
                      y: [0, 9, 0],
                      x: mouseOffset.x * -0.6,
                    }}
                    transition={{
                      y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                      x: { type: "spring", stiffness: 150, damping: 20 },
                    }}
                    className="absolute bottom-12 -right-2 sm:-right-4 z-20 bg-star-navy-900/90 backdrop-blur-xl border border-star-red/30 px-4 py-2.5 rounded-2xl shadow-2xl shadow-star-red/20 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-star-red/20 border border-star-red/30 flex items-center justify-center text-star-red-glow">
                      <StarMark size={18} glow />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                        Tecnología Red
                      </div>
                      <div className="text-sm font-heading font-bold text-white">
                        100% Fibra FTTH
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Hologram Chip 3: Soporte Cordero */}
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    }}
                    className="hidden sm:flex absolute -bottom-3 left-10 z-20 bg-star-navy-800/80 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full items-center gap-2 text-xs text-slate-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-star-red" />
                    <span>Oficina en Cordero abierta para ti</span>
                  </motion.div>

                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">EXPLORAR</span>
        <ChevronDown className="w-4 h-4 text-slate-400 animate-bounce" />
      </div>
    </section>
  );
};
