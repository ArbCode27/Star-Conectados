import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Heart,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { StarMark } from "./common/StarMark";
import { Button } from "@/components/ui/button";
import { generateGeneralWhatsAppLink } from "@/data/plans";

const STORY_PILLARS = [
  {
    icon: Compass,
    title: "Nacidos en Cordero",
    subtitle: "Compromiso Local Táchira",
    desc: "No somos una corporación anónima a miles de kilómetros. Operamos desde nuestra oficina comercial en Cordero, viviendo las mismas necesidades y superándolas con ingeniería de vanguardia.",
  },
  {
    icon: Lightbulb,
    title: "Innovación & Autonomía",
    subtitle: "Infraestructura Propia",
    desc: "Invertimos constantemente en tendido óptico, equipamiento de última generación y fuentes de respaldo energético para asegurar que tu conexión nunca te deje a oscuras.",
  },
  {
    icon: Heart,
    title: "Atención Humana Real",
    subtitle: "Cero Burocracia",
    desc: "Creemos en la cercanía: técnicos calificados que te saludan por tu nombre, resuelven tus dudas en el acto y te tratan como parte de nuestra familia de exploradores.",
  },
];

export const BrandStory: React.FC = () => {
  return (
    <section id="nosotros" className="relative py-24 sm:py-32 bg-[#040714] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-star-blue/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-star-red/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Visual Narrative + Story Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Astronaut Constellation Narrative Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-star-navy-800/80 via-star-navy-900/90 to-star-navy-950 border border-white/15 backdrop-blur-2xl shadow-2xl overflow-hidden group">
              
              {/* Radial Aura behind mascot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-star-blue/25 rounded-full blur-[90px] pointer-events-none" />

              {/* Constellation Network Line Graphic */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src="/images/astronaut-constellation.png"
                  alt="Mascota Star Conectados explorador con red de constelaciones"
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(23,75,255,0.3)] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Micro Brand badge floating */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-star-navy-950/80 backdrop-blur-md border border-white/10 text-xs text-slate-200">
                  <StarMark size={16} glow />
                  <span className="font-semibold">Exploración & Conexión</span>
                </div>

                {/* Bottom Quote Overlay */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-star-navy-950/90 backdrop-blur-md border border-white/10">
                  <p className="text-xs sm:text-sm text-slate-200 font-light italic leading-relaxed">
                    "La tecnología no se trata solo de cables y megabits, sino de acercar a las familias, potenciar a los estudiantes e impulsar a cada emprendedor tachirense."
                  </p>
                  <span className="text-[11px] font-heading font-semibold text-star-blue-light mt-2 block">
                    — Manifiesto Star Conectados
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story Copy & Pillars */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4"
            >
              <StarMark size={16} glow />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
                Nuestra Historia & Misión
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading leading-tight mb-6"
            >
              Exploramos nuevas formas
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-star-blue-light to-star-blue">
                de conectarte con el futuro.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8"
            >
              En <strong className="text-white font-semibold">Star Conectados</strong> creemos
              que una conexión de internet confiable no es un lujo, sino el puente que te une a las
              personas, empleos globales, entretenimiento y oportunidades que hacen avanzar tu vida.
            </motion.p>

            {/* Pillars */}
            <div className="space-y-6 w-full mb-10">
              {STORY_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-star-blue/15 border border-star-blue/30 flex items-center justify-center shrink-0 text-star-blue-light mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-base font-heading font-bold text-white">
                          {pillar.title}
                        </h4>
                        <span className="text-[11px] font-mono text-slate-400">
                          · {pillar.subtitle}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 font-light mt-1 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Action */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button asChild variant="hero" size="lg" className="shadow-star-glow">
                <a
                  href={generateGeneralWhatsAppLink("¡Hola! Quiero conocer más sobre Star Conectados y agendar una visita a la oficina.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Conoce nuestra oficina en Cordero</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
