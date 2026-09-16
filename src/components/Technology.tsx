import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Globe,
  Radio,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { StarMark } from "./common/StarMark";

const ARCHITECTURE_STEPS = [
  {
    step: "01",
    title: "Tu Dispositivo",
    subtitle: "Hogar & Empresa",
    icon: Cpu,
    desc: "Dispositivos Wi-Fi 6 de baja interferencia y puertos Gigabit para una experiencia ultra fluida.",
  },
  {
    step: "02",
    title: "Red Óptica FTTH",
    subtitle: "Tendido 100% Fibra",
    icon: Radio,
    desc: "Hilos de fibra pura resistentes a interferencias climáticas y electromagnéticas.",
  },
  {
    step: "03",
    title: "Nodo Central Star",
    subtitle: "Datacenter & Backbone",
    icon: Server,
    desc: "Enrutamiento perimetral con fuentes de poder ininterrumpidas (UPS industriales) y respaldo autónomo.",
  },
  {
    step: "04",
    title: "Internet Global",
    subtitle: "Peering Internacional",
    icon: Globe,
    desc: "Salidas redundantes hacia los principales carriers mundiales de Miami, Bogotá y São Paulo.",
  },
];

export const Technology: React.FC = () => {
  return (
    <section id="tecnologia" className="relative py-24 sm:py-32 bg-[#040714] overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[700px] bg-star-blue/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[500px] h-[500px] bg-star-red/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4"
          >
            <StarMark size={16} glow />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
              Infraestructura Crítica
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading"
          >
            Una red diseñada
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-star-blue-light to-star-blue">
              para avanzar sin interrupciones.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 font-light"
          >
            Conectamos más que dispositivos: construimos autopistas de luz con tecnología FTTH
            directa desde nuestro nodo central hasta tu sala u oficina.
          </motion.p>
        </div>

        {/* 2-Column Showcase: Interactive Topology + Datacenter Mascot Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Datacenter Fiber Astronaut Asset */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-star-navy-900/80 shadow-2xl p-4 sm:p-6 group">
              {/* Inner Glow Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-star-blue/20 via-transparent to-star-red/15 opacity-60 pointer-events-none" />

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-star-navy-950 flex items-center justify-center">
                <img
                  src="/images/astronaut-fiber-rack.png"
                  alt="Mascota Star Conectados gestionando fibra óptica en Datacenter"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay live status telemetry */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-star-navy-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        Nodo Central de Red
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">
                      Fibra Monomodo G.657 · 10Gbps Uplink
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold font-mono text-emerald-400">99.9%</span>
                    <span className="text-[10px] text-slate-400 block">Uptime</span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Star Badge */}
              <div className="absolute top-8 right-8 w-10 h-10 rounded-2xl bg-star-red/20 border border-star-red/40 flex items-center justify-center backdrop-blur-md">
                <StarMark size={20} glow />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Topology Diagram */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="space-y-4">
              {ARCHITECTURE_STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="relative rounded-2xl p-5 sm:p-6 bg-star-navy-900/60 border border-white/10 hover:border-star-blue/40 backdrop-blur-md transition-all duration-300 group flex items-start gap-4 sm:gap-6"
                  >
                    {/* Step Number & Icon */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:bg-star-blue group-hover:border-star-blue/60 group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-star-blue-light mt-2">
                        {step.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-lg font-heading font-bold text-white group-hover:text-star-blue-light transition-colors">
                          {step.title}
                        </h4>
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded-full border border-white/5">
                          {step.subtitle}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    {/* Traveling Data Pulse Arrow */}
                    <div className="hidden sm:flex items-center self-center text-slate-600 group-hover:text-star-blue-light group-hover:translate-x-1 transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Key Technical Highlights */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Simetría 1:1 real</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-star-blue-light shrink-0" />
                <span>Cero microcortes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-star-red-glow shrink-0" />
                <span>Respaldo energético</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
