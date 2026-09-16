import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarMark } from "./common/StarMark";
import { generateGeneralWhatsAppLink } from "@/data/plans";

const NAV_LINKS = [
  { name: "Inicio", href: "#hero" },
  { name: "Beneficios", href: "#beneficios" },
  { name: "Planes", href: "#planes" },
  { name: "Experiencias", href: "#experiencias" },
  { name: "Tecnología", href: "#tecnologia" },
  { name: "Cobertura", href: "#cobertura" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "FAQ", href: "#faq" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060A1D]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-star-blue rounded-xl"
            aria-label="Star Conectados Inicio"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-star-red/50 group-hover:bg-star-red/10 group-hover:shadow-[0_0_20px_rgba(229,9,20,0.35)]">
              <StarMark size={26} glow className="transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5 leading-none">
                STAR CONECTADOS
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-star-red animate-ping" />
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-1">
                Cobertura Nacional
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.08] transition-all duration-200 tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/584147573880"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-white/[0.05] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Soporte</span>
            </a>

            <Button
              asChild
              variant="hero"
              size="sm"
              className="group shadow-star-glow"
            >
              <a
                href={generateGeneralWhatsAppLink("¡Hola! Quiero contratar Star Conectados para mi hogar o negocio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-300 transition-transform group-hover:rotate-12" />
                <span>Quiero conectarme</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              asChild
              variant="hero"
              size="sm"
              className="text-xs px-3 py-1.5 h-8"
            >
              <a
                href={generateGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conectarme
              </a>
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-star-blue"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-star-navy-900/95 backdrop-blur-2xl border-b border-white/15 px-6 py-8 shadow-2xl transition-all">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-base font-medium text-slate-200 hover:text-star-blue-light py-2 px-3 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Red 100% Operativa a Nivel Nacional</span>
              </div>

              <Button
                asChild
                variant="hero"
                size="lg"
                className="w-full justify-center"
              >
                <a
                  href={generateGeneralWhatsAppLink("¡Hola Star Conectados! Quiero contratar internet para mi zona.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Quiero conectarme ahora</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
