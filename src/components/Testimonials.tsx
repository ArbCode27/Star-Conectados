import React from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle, Zap } from "lucide-react";
import { TESTIMONIALS, Testimonial } from "@/data/testimonials";
import { StarMark } from "./common/StarMark";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="relative py-24 sm:py-32 bg-[#060A1D] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-star-blue/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4"
          >
            <StarMark size={16} glow />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
              Experiencias Reales
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading"
          >
            Ellos ya están conectados.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 font-light"
          >
            Descubre cómo hogares, profesionales y empresas en Cordero y el Táchira transformaron su
            manera de navegar y trabajar.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((item: Testimonial, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-3xl p-8 bg-star-navy-900/70 border border-white/10 hover:border-star-blue/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Top Row: Stars & Ping badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Ping {item.ping}</span>
                  </div>
                </div>

                {/* Highlight Tag */}
                <span className="inline-block text-xs font-semibold text-star-blue-light uppercase tracking-wider mb-3">
                  "{item.highlight}"
                </span>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom Customer Info */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-star-blue to-star-navy-600 border border-white/20 flex items-center justify-center font-heading font-bold text-white text-sm shadow-md">
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-white flex items-center gap-1.5">
                      {item.name}
                      <CheckCircle className="w-3.5 h-3.5 text-star-blue-light" />
                    </h4>
                    <span className="text-xs text-slate-400 block">{item.role}</span>
                    <span className="text-[11px] text-slate-500 block font-light">
                      📍 {item.sector}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-mono text-slate-400 block">Plan Activo</span>
                  <span className="text-xs font-semibold text-white">{item.speed}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
