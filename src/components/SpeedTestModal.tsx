import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SpeedTestSection: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [ping, setPing] = useState(14);
  const [jitter, setJitter] = useState(1);

  const handleStartTest = () => {
    setIsRunning(true);
    setIsCompleted(false);
    setSpeed(0);
    setUploadSpeed(0);

    const targetSpeed = 300;
    const targetUpload = 300;
    let current = 0;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 22) + 12;
      if (current >= targetSpeed) {
        current = targetSpeed;
        setSpeed(targetSpeed);
        setUploadSpeed(targetUpload);
        clearInterval(interval);
        setIsRunning(false);
        setIsCompleted(true);

        try {
          confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.8 },
            colors: ["#174BFF", "#36A3FF", "#E50914", "#FFFFFF"],
          });
        } catch {
          // ignore if canvas not ready
        }
      } else {
        setSpeed(current);
        setUploadSpeed(Math.floor(current * 0.98));
        setPing(Math.floor(Math.random() * 3) + 13);
        setJitter(Math.floor(Math.random() * 2) + 1);
      }
    }, 80);
  };

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-star-navy-800/60 to-star-navy-950/90 border border-white/10 p-6 sm:p-10 backdrop-blur-xl overflow-hidden max-w-4xl mx-auto shadow-2xl my-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6 mb-8">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-star-blue-light font-semibold block">
            Simulador Interactivo de Conexión
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-1">
            Comprueba la estabilidad de la red Star Conectados
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-light mt-0.5">
            Compara la simetría y latencia de nuestra fibra frente a conexiones tradicionales.
          </p>
        </div>

        <Button
          onClick={handleStartTest}
          disabled={isRunning}
          variant="hero"
          size="default"
          className="shrink-0 shadow-star-glow"
        >
          {isRunning ? (
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              Midiendo paquetes...
            </span>
          ) : isCompleted ? (
            <span className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4" />
              Repetir prueba
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Play className="w-4 h-4 fill-white" />
              Iniciar simulación
            </span>
          )}
        </Button>
      </div>

      {/* Speedometer Gauges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {/* Download */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
          <span className="text-xs text-slate-400 font-medium block mb-1">Descarga</span>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-3xl sm:text-4xl font-heading font-black text-white">
              {speed}
            </span>
            <span className="text-xs font-semibold text-star-blue-light font-mono">Mbps</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono mt-1 block">
            {isRunning ? "Calculando..." : isCompleted ? "Simétrica 1:1" : "En espera"}
          </span>
        </div>

        {/* Upload */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
          <span className="text-xs text-slate-400 font-medium block mb-1">Subida</span>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-3xl sm:text-4xl font-heading font-black text-white">
              {uploadSpeed}
            </span>
            <span className="text-xs font-semibold text-star-blue-light font-mono">Mbps</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono mt-1 block">
            {isRunning ? "Calculando..." : isCompleted ? "Simétrica 1:1" : "En espera"}
          </span>
        </div>

        {/* Ping Latency */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
          <span className="text-xs text-slate-400 font-medium block mb-1">Latencia (Ping)</span>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-3xl sm:text-4xl font-heading font-black text-emerald-400">
              {isCompleted || isRunning ? ping : 0}
            </span>
            <span className="text-xs font-semibold text-slate-400 font-mono">ms</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono mt-1 block">
            Servidores Florida / Miami
          </span>
        </div>

        {/* Jitter */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
          <span className="text-xs text-slate-400 font-medium block mb-1">Jitter (Variación)</span>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-3xl sm:text-4xl font-heading font-black text-white">
              {isCompleted || isRunning ? jitter : 0}
            </span>
            <span className="text-xs font-semibold text-slate-400 font-mono">ms</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono mt-1 block">
            0% Pérdida de paquetes
          </span>
        </div>
      </div>
    </div>
  );
};
