import React from "react";
import { NetworkAnimation } from "./NetworkAnimation";

export const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Deep Space Radial Gradient */}
      <div className="absolute inset-0 bg-radial-vignette opacity-90" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)]" />

      {/* Luminous Core Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[500px] bg-gradient-to-tr from-star-blue/25 via-blue-600/15 to-transparent rounded-full blur-[140px]" />
      
      {/* Red Star Comet Flare Accent */}
      <div className="absolute top-1/3 right-[10%] w-[350px] h-[350px] bg-star-red/15 rounded-full blur-[110px]" />

      {/* Cyan Speed Accent */}
      <div className="absolute top-1/2 left-[5%] w-[300px] h-[300px] bg-star-blue-cyan/10 rounded-full blur-[120px]" />

      {/* Dynamic Interactive Node Network */}
      <div className="absolute inset-0 opacity-40">
        <NetworkAnimation interactive={true} />
      </div>

      {/* Subtle Bottom Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060A1D] to-transparent pointer-events-none" />
    </div>
  );
};
