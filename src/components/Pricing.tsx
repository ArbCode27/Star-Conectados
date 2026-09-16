import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PricingCard } from "./PricingCard";
import { INTERNET_PLANS, generateGeneralWhatsAppLink } from "@/data/plans";
import { StarMark } from "./common/StarMark";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const Pricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"residencial" | "empresarial">("residencial");

  const filteredPlans = INTERNET_PLANS.filter(
    (plan) => plan.category === selectedCategory
  );

  return (
    <section id="planes" className="relative py-24 sm:py-32 bg-[#060A1D] overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-star-blue/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-star-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4"
          >
            <StarMark size={16} glow />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
              Planes de Fibra Óptica
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading"
          >
            Encuentra la velocidad
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-star-blue-light to-star-blue">
              para tu mundo.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 font-light"
          >
            Sin letras pequeñas. Todos los planes incluyen velocidad simétrica,
            equipamiento Wi-Fi y soporte técnico presencial en Cordero, Táchira.
          </motion.p>

          {/* Category Toggle Tabs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex justify-center"
          >
            <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
              <button
                onClick={() => setSelectedCategory("residencial")}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === "residencial"
                    ? "bg-star-blue text-white shadow-lg shadow-star-blue/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Hogares & Familias
              </button>
              <button
                onClick={() => setSelectedCategory("empresarial")}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === "empresarial"
                    ? "bg-star-blue text-white shadow-lg shadow-star-blue/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Empresas & Negocios
              </button>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`grid gap-8 items-stretch ${
              filteredPlans.length === 2
                ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
            }`}
          >
            {filteredPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Banner for Custom Dedicated Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-star-navy-800/80 via-star-navy-700/60 to-star-navy-800/80 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-star-red/20 border border-star-red/30 flex items-center justify-center shrink-0">
              <StarMark size={24} glow />
            </div>
            <div>
              <h4 className="text-lg font-heading font-bold text-white">
                ¿Necesitas un enlace dedicado para una gran empresa o institución?
              </h4>
              <p className="text-sm text-slate-400 font-light mt-0.5">
                Diseñamos troncales de fibra a la medida con IP fija y SLA personalizado para el Táchira.
              </p>
            </div>
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 hover:border-star-blue text-sm shrink-0"
          >
            <a
              href={generateGeneralWhatsAppLink("¡Hola! Me interesa solicitar una cotización para un enlace dedicado corporativo en el Táchira.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Cotizar Enlace Dedicado</span>
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};
