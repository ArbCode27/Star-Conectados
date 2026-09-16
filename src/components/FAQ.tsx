import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/data/faq";
import { MessageCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateGeneralWhatsAppLink } from "@/data/plans";

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#060A1D] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-10 left-1/3 w-[650px] h-[400px] bg-star-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4"
          >
            <HelpCircle className="w-4 h-4 text-star-blue-light" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
              Preguntas Frecuentes
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading"
          >
            Resolvemos tus dudas al instante.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 font-light"
          >
            Todo lo que necesitas saber sobre nuestra fibra óptica, formas de pago,
            tiempos de instalación y atención técnica a nivel nacional.
          </motion.p>
        </div>

        {/* Accordion Component */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible defaultValue="faq-1" className="w-full">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* WhatsApp Help Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 rounded-3xl bg-star-navy-900/60 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-left">
            <h4 className="text-lg font-heading font-bold text-white">
              ¿Tienes alguna otra consulta o caso especial?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
              Nuestro equipo de soporte y atención al cliente te responde directamente sin demoras.
            </p>
          </div>

          <Button asChild variant="outline" size="lg" className="border-white/20 hover:border-emerald-500 text-sm shrink-0">
            <a
              href={generateGeneralWhatsAppLink("¡Hola! Tengo una pregunta sobre el servicio de Star Conectados:")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chatear con un asesor</span>
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};
