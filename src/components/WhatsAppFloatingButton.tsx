import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { generateGeneralWhatsAppLink } from "@/data/plans";

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Card */}
      {isOpen && (
        <div className="mb-3 p-4 rounded-2xl bg-star-navy-900/95 backdrop-blur-xl border border-white/15 shadow-2xl max-w-xs text-left animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Asesor Star en Línea
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-300 font-light leading-relaxed mb-3">
            ¿Quieres saber si tenemos cobertura en tu calle de Cordero? Escríbenos ahora mismo.
          </p>
          <a
            href={generateGeneralWhatsAppLink("¡Hola! Me gustaría consultar disponibilidad de fibra en mi sector.")}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-2 px-3 text-center rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-lg transition-colors"
          >
            Abrir chat de WhatsApp
          </a>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 sm:p-4 rounded-2xl bg-emerald-600 text-white shadow-[0_4px_25px_rgba(16,185,129,0.45)] hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-star-red border-2 border-white animate-pulse" />
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};
