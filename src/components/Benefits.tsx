import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, HeartHandshake, Cpu } from "lucide-react";
import { SpotlightCard } from "./common/SpotlightCard";
import { StarMark } from "./common/StarMark";

const BENEFITS = [
  {
    icon: Zap,
    title: "Alta Velocidad Simétrica",
    badge: "Fibra FTTH Pura",
    description:
      "Descarga y sube archivos pesados a la misma velocidad. Desde 150 hasta 800 Mbps reales sin caídas ni restricciones de consumo.",
    stats: "Hasta 800 Mbps",
    statsLabel: "Velocidad constante",
    accentColor: "rgba(54, 163, 255, 0.25)",
    borderColor: "rgba(54, 163, 255, 0.5)",
  },
  {
    icon: ShieldCheck,
    title: "Conexión Ultra Estable",
    badge: "99.9% Disponibilidad",
    description:
      "Trazados de fibra de alta resistencia y servidores enrutados para garantizar un ping inferior a 15ms en gaming, streaming y videollamadas.",
    stats: "<14 ms",
    statsLabel: "Latencia ultra baja",
    accentColor: "rgba(0, 242, 255, 0.25)",
    borderColor: "rgba(0, 242, 255, 0.5)",
  },
  {
    icon: HeartHandshake,
    title: "Soporte Humano y Cercano",
    badge: "Soporte 24/7",
    description:
      "Nuestra gente te atiende de tú a tú. Un equipo técnico y humano calificado listo para responder a cualquier requerimiento en minutos.",
    stats: "24/7",
    statsLabel: "Monitoreo & WhatsApp",
    accentColor: "rgba(229, 9, 20, 0.25)",
    borderColor: "rgba(229, 9, 20, 0.5)",
  },
  {
    icon: Cpu,
    title: "Tecnología de Vanguardia",
    badge: "Wi-Fi 6 Gigabit",
    description:
      "Equipamiento de última generación con routers ONT Gigabit que garantizan cobertura total en tu inmueble y soporte para decenas de dispositivos.",
    stats: "Wi-Fi 6",
    statsLabel: "Doble banda de alta potencia",
    accentColor: "rgba(23, 75, 255, 0.3)",
    borderColor: "rgba(54, 163, 255, 0.4)",
  },
];

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="relative py-24 sm:py-32 bg-[#060A1D] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-star-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4"
          >
            <StarMark size={16} glow />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
              Por qué elegirnos
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading"
          >
            Más que internet.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-star-blue-light to-star-blue">
              Una conexión que te acompaña.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 font-light"
          >
            Diseñamos una infraestructura robusta y moderna pensada para responder a las exigencias
            de entretenimiento, trabajo y productividad del mundo actual.
          </motion.p>
        </div>

        {/* Benefits Grid with Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <SpotlightCard
                  spotlightColor={benefit.accentColor}
                  borderColor={benefit.borderColor}
                  className="h-full flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div>
                    {/* Top Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:text-star-blue-light transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/5">
                        {benefit.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-star-blue-light transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Bottom Metric */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-baseline justify-between">
                    <div>
                      <span className="block text-xl font-heading font-extrabold text-white">
                        {benefit.stats}
                      </span>
                      <span className="text-xs text-slate-400">
                        {benefit.statsLabel}
                      </span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-star-blue-light opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all" />
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
