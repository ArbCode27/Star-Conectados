import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import { StarMark } from "./common/StarMark";
import { generateGeneralWhatsAppLink } from "@/data/plans";

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#02050E] text-slate-400 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-star-blue/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand & Location Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md flex items-center justify-center shadow-md">
                <StarMark size={26} glow />
              </div>
              <div>
                <span className="font-heading font-extrabold text-white text-lg tracking-tight block">
                  STAR CONECTADOS
                </span>
                <span className="text-[11px] text-slate-400 font-mono tracking-wider uppercase block">
                  El futuro de la conectividad empieza aquí
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-md mb-6">
              Empresa proveedora de internet de alta velocidad y servicios de telecomunicaciones por
              fibra óptica pura (FTTH) con infraestructura y cobertura a nivel nacional.
            </p>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-star-red shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Presencia y Cobertura:</strong> Despliegue de red y atención comercial en todo el territorio nacional, Venezuela.
              </span>
            </div>

            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Red troncal 100% operativa a nivel nacional</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-white transition-colors">
                  Planes Residenciales
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-white transition-colors">
                  Planes Pymes y Empresas
                </a>
              </li>
              <li>
                <a href="#experiencias" className="hover:text-white transition-colors">
                  Experiencias (Gaming / Stream)
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-white transition-colors">
                  Tecnología de Red
                </a>
              </li>
            </ul>
          </div>

          {/* Coverage & Support */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4">
              Cobertura & Ayuda
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#cobertura" className="hover:text-white transition-colors">
                  Consultar Cobertura
                </a>
              </li>
              <li>
                <a href="#cobertura" className="hover:text-white transition-colors">
                  Zonas y Ciudades
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-white transition-colors">
                  Clientes Conectados
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/584147573880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Soporte WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact Direct */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4">
              Canales Directos
            </h4>
            <p className="text-xs text-slate-400 font-light mb-4">
              Atención presencial en oficina o en línea a través de nuestros canales oficiales.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-star-red hover:border-star-red transition-all"
                aria-label="Instagram Star Conectados"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-star-blue hover:border-star-blue transition-all"
                aria-label="Facebook Star Conectados"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={generateGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all"
                aria-label="WhatsApp Star Conectados"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>+58 414-7573880</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>contacto@starconectados.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} STAR CONECTADOS. Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Venezuela · Cobertura Nacional</span>
            
            <button
              onClick={handleScrollToTop}
              className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-star-blue transition-colors flex items-center gap-1.5"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
