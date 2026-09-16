import React from "react";
import { Check, Sparkles, ArrowRight, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InternetPlan, generateWhatsAppPlanLink } from "@/data/plans";

interface PricingCardProps {
  plan: InternetPlan;
  isAnnual?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const isPopular = plan.popular;

  return (
    <div
      className={`relative rounded-3xl transition-all duration-500 flex flex-col justify-between overflow-hidden ${
        isPopular
          ? "bg-gradient-to-b from-[#131E56] to-[#0A1033] border-2 border-star-blue/60 shadow-[0_0_40px_rgba(23,75,255,0.3)] lg:-translate-y-3"
          : "bg-star-navy-900/70 border border-white/10 hover:border-white/25 hover:bg-star-navy-800/80 shadow-xl"
      }`}
    >
      {/* Popular Plan Top Banner Glow */}
      {isPopular && (
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-star-blue via-star-blue-glow to-star-red" />
      )}

      {/* Internal Padding */}
      <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Top Row: Name and Badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-star-blue-light font-semibold">
              {plan.technology}
            </span>
            {plan.badge && (
              <Badge
                variant={isPopular ? "default" : "secondary"}
                className={`text-[11px] font-bold tracking-wider ${
                  isPopular
                    ? "bg-star-blue text-white shadow-star-glow border-star-blue-light"
                    : ""
                }`}
              >
                {isPopular && <Sparkles className="w-3 h-3 mr-1 text-yellow-300" />}
                {plan.badge}
              </Badge>
            )}
          </div>

          {/* Plan Title & Tagline */}
          <h3 className="text-2xl font-heading font-extrabold text-white mb-2 tracking-tight">
            {plan.name}
          </h3>
          <p className="text-sm text-slate-400 font-light mb-6 min-h-[40px]">
            {plan.tagline}
          </p>

          {/* Speed Indicator Block */}
          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 mb-6">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-slate-400 font-medium">Velocidad Simétrica</span>
              <span className="text-xs text-emerald-400 font-mono font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Fibra Directa
              </span>
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-4xl sm:text-5xl font-heading font-black text-white tracking-tight">
                {plan.speed}
              </span>
              <span className="text-lg font-bold text-star-blue-light font-heading">
                Mbps
              </span>
            </div>
            <div className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
              <Wifi className="w-3.5 h-3.5 text-star-blue-light shrink-0" />
              <span>{plan.wifiRouter}</span>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-3 mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
              Incluye en tu servicio:
            </span>
            {plan.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-star-blue/15 border border-star-blue/30 flex items-center justify-center shrink-0 mt-0.5 text-star-blue-light">
                  <Check className="w-3 h-3 text-star-blue-light" />
                </div>
                <span className="text-sm text-slate-300 font-light leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Button */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex items-baseline justify-between mb-5">
            <div>
              <span className="text-xs text-slate-400 block font-light">Inversión mensual</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
                  ${plan.priceUsd}
                </span>
                <span className="text-xs text-slate-400 font-normal">/{plan.period}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block">Tasa oficial BCV</span>
              <span className="text-xs text-emerald-400 font-medium">Pago Móvil / Zelle</span>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            variant={isPopular ? "hero" : "outline"}
            className="w-full text-sm font-semibold tracking-wide justify-center group shadow-md"
          >
            <a
              href={generateWhatsAppPlanLink(plan.name, plan.speed)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <span>Contratar {plan.name}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <p className="text-[11px] text-center text-slate-500 mt-3 font-light">
            Instalación rápida en Cordero · Sin cláusula de permanencia forzosa
          </p>
        </div>
      </div>
    </div>
  );
};
