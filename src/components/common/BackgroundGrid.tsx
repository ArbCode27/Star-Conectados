import React from "react";

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Top Hero Ambient Radial Glow */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-star-blue/20 via-star-navy-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Accent Red Comet Glow (Subtle and Sophisticated) */}
      <div className="absolute top-[25%] -right-[150px] w-[500px] h-[450px] bg-star-red/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Deep Cyber Cyan Glow (Lower screen) */}
      <div className="absolute top-[65%] -left-[150px] w-[500px] h-[500px] bg-star-blue-glow/10 rounded-full blur-[150px] pointer-events-none" />
    </div>
  );
};
