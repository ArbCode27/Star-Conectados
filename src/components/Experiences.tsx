import React from "react";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Tv,
  Laptop,
  Home,
  Store,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { EXPERIENCES, ExperienceItem } from "@/data/experiences";
import { StarMark } from "./common/StarMark";

const ICON_MAP: Record<string, React.ElementType> = {
  Gamepad2,
  Tv,
  Laptop,
  Home,
  Store,
  GraduationCap,
};

export const Experiences: React.FC = () => {
  return (
    <section id="experiencias" className="relative py-24 sm:py-32 bg-[#060A1D] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 -left-[200px] w-[600px] h-[600px] bg-star-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4"
          >
            <StarMark size={16} glow />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
              Casos de uso optimizados
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading"
          >
            ¿Qué quieres hacer hoy?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 font-light"
          >
            Nuestra red está calibrada para brindarte máxima fluidez y prioridad en cada una de tus
            actividades cotidianas y profesionales.
          </motion.p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXPERIENCES.map((exp: ExperienceItem, idx: number) => {
            const Icon = ICON_MAP[exp.iconName] || Sparkles;
            const isRedAccent = exp.accent === "red";
            const isCyanAccent = exp.accent === "cyan";

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-3xl p-7 sm:p-8 bg-star-navy-900/60 border border-white/10 hover:border-star-blue/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(23,75,255,0.2)] flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Hover Gradient Flare */}
                <div
                  className={`absolute -right-16 -top-16 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none ${
                    isRedAccent
                      ? "bg-star-red"
                      : isCyanAccent
                      ? "bg-cyan-400"
                      : "bg-star-blue"
                  }`}
                />

                <div>
                  {/* Top Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-13 h-13 rounded-2xl flex items-center justify-center transition-all duration-300 p-3 border ${
                        isRedAccent
                          ? "bg-star-red/10 border-star-red/30 text-star-red-glow group-hover:scale-110"
                          : isCyanAccent
                          ? "bg-cyan-500/10 border-cyan-400/30 text-cyan-300 group-hover:scale-110"
                          : "bg-star-blue/10 border-star-blue/30 text-star-blue-light group-hover:scale-110"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                      {exp.badge}
                    </span>
                  </div>

                  {/* Category & Title */}
                  <span className="text-xs font-mono uppercase tracking-widest text-star-blue-light font-semibold block mb-1">
                    {exp.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {exp.title}
                  </h3>
                  <h4 className="text-sm font-medium text-slate-200 mb-3">
                    {exp.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Bottom Metric & Interaction */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-heading font-extrabold text-white">
                      {exp.metric}
                    </span>
                    <span className="text-xs text-slate-400 block font-light">
                      {exp.metricLabel}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-star-blue group-hover:border-star-blue/50 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
