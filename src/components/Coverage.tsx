import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Search,
  CheckCircle2,
  Clock,
  ArrowRight,
  MessageCircle,
  Radio,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COVERAGE_ZONES, CoverageZone } from "@/data/coverage";
import { WHATSAPP_PHONE } from "@/data/plans";

export const Coverage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState<CoverageZone | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase().trim();
    const matched = COVERAGE_ZONES.find(
      (z) =>
        z.name.toLowerCase().includes(query) ||
        z.region.toLowerCase().includes(query) ||
        z.description.toLowerCase().includes(query)
    );

    setSelectedZone(matched || null);
    setHasSearched(true);
  };

  const handleZoneSelect = (zone: CoverageZone) => {
    setSelectedZone(zone);
    setSearchQuery(zone.name);
    setHasSearched(true);
  };

  const generateCoverageWhatsAppLink = (zoneName?: string) => {
    const text = encodeURIComponent(
      `¡Hola Star Conectados! 📍 Deseo consultar factibilidad técnica de instalación en: *${
        zoneName || searchQuery || "mi zona o ciudad"
      }*. ¿Tienen cobertura y puertos disponibles?`
    );
    return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
  };

  return (
    <section id="cobertura" className="relative py-24 sm:py-32 bg-[#060A1D] overflow-hidden">
      {/* Background radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-star-blue/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4"
          >
            <MapPin className="w-4 h-4 text-star-red" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
              Despliegue a Nivel Nacional
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading"
          >
            ¿Ya llegamos hasta ti?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 font-light"
          >
            Nuestra red troncal de fibra óptica de alta capacidad se despliega estratégicamente a nivel
            nacional, conectando hogares, comercios y empresas con máxima velocidad y estabilidad.
          </motion.p>
        </div>

        {/* Interactive Search Tool Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <form
            onSubmit={handleSearch}
            className="relative flex flex-col sm:flex-row items-center gap-3 p-2 sm:p-2.5 rounded-3xl bg-star-navy-900/90 border border-white/15 backdrop-blur-2xl shadow-2xl focus-within:border-star-blue/60 transition-colors"
          >
            <div className="flex items-center gap-3 pl-4 w-full">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ingresa tu ciudad, estado o zona (Ej: Caracas, Valencia, San Cristóbal, Maracaibo...)"
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none py-3"
              />
            </div>
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full sm:w-auto shrink-0 shadow-star-glow"
            >
              <span>Consultar cobertura</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          {/* Quick Clickable Suggestions */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-slate-400">
            <span className="font-medium text-slate-500">Zonas frecuentes:</span>
            {["Gran Caracas", "Valencia", "San Cristóbal", "Maracaibo", "Lechería", "Puerto Ordaz"].map(
              (sector) => (
                <button
                  key={sector}
                  type="button"
                  onClick={() => {
                    const match = COVERAGE_ZONES.find((z) => z.name.includes(sector));
                    if (match) handleZoneSelect(match);
                  }}
                  className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 hover:border-star-blue hover:text-white transition-all text-[11px]"
                >
                  {sector}
                </button>
              )
            )}
          </div>
        </motion.div>

        {/* Search Result Feedback Notification */}
        <AnimatePresence>
          {hasSearched && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-2xl mx-auto mb-12 overflow-hidden"
            >
              {selectedZone ? (
                <div className="rounded-2xl p-6 bg-gradient-to-r from-emerald-950/40 via-star-navy-900 to-star-navy-900 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-5 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-white text-lg">
                          ¡Cobertura disponible en {selectedZone.name}!
                        </span>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                          {selectedZone.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1">
                        {selectedZone.description} Instalación estimada en {selectedZone.avgInstallationHours} horas.
                      </p>
                    </div>
                  </div>

                  <Button asChild variant="hero" size="sm" className="shrink-0 w-full sm:w-auto">
                    <a
                      href={generateCoverageWhatsAppLink(selectedZone.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-300" />
                      <span>Agendar instalación</span>
                    </a>
                  </Button>
                </div>
              ) : (
                <div className="rounded-2xl p-6 bg-star-navy-900/90 border border-star-red/30 flex flex-col sm:flex-row items-center justify-between gap-5 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-star-red/20 border border-star-red/40 flex items-center justify-center shrink-0 text-star-red-glow">
                      <Radio className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-white text-base">
                        Verificación técnica personalizada
                      </span>
                      <p className="text-xs text-slate-300 mt-1">
                        Escríbenos tu dirección exacta para revisar la caja NAP más cercana a tu vivienda o local.
                      </p>
                    </div>
                  </div>

                  <Button asChild variant="outline" size="sm" className="shrink-0 w-full sm:w-auto">
                    <a
                      href={generateCoverageWhatsAppLink(searchQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Consultar en WhatsApp</span>
                    </a>
                  </Button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Styled Interactive Coverage Grid Map / Node Visual */}
        <div className="rounded-3xl border border-white/15 bg-star-navy-900/70 p-6 sm:p-8 backdrop-blur-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <span>Mapa de Nodos Activos</span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light mt-0.5">
                Selecciona tu sector para revisar factibilidad y velocidad máxima admitida.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                Fibra Activa
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-star-blue-light shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                En Expansión
              </span>
            </div>
          </div>

          {/* Zones Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COVERAGE_ZONES.map((zone) => {
              const isAvailable = zone.status === "disponible";
              return (
                <div
                  key={zone.id}
                  onClick={() => handleZoneSelect(zone)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                    selectedZone?.id === zone.id
                      ? "bg-star-blue/20 border-star-blue shadow-[0_0_25px_rgba(23,75,255,0.3)]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.04]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        {zone.region}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                          isAvailable
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                            : "bg-star-blue/10 text-star-blue-light border-star-blue/30"
                        }`}
                      >
                        {zone.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-heading font-bold text-white mb-1.5">
                      {zone.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {zone.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{zone.avgInstallationHours}h instal.</span>
                    </span>
                    <span className="text-star-blue-light font-medium group-hover:underline">
                      Consultar &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
