import React from "react";
import { cn } from "@/lib/utils";

interface StarMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  glow?: boolean;
}

export const StarMark: React.FC<StarMarkProps> = ({
  size = 28,
  className,
  glow = false,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "inline-block shrink-0",
        glow && "filter drop-shadow-[0_0_12px_rgba(229,9,20,0.7)]",
        className
      )}
      {...props}
    >
      {/* Three Electric Blue Speed Streaks */}
      <path
        d="M52 24H86C88 24 89 22 87 21L70 14C68 13 65 14 63 16L52 24Z"
        fill="#36A3FF"
        opacity="0.9"
      />
      <path
        d="M62 29H92C94 29 95 27 93 26L79 21C77 20 74 21 72 23L62 29Z"
        fill="#36A3FF"
        opacity="0.75"
      />
      <path
        d="M68 34H96C98 34 98 33 97 32L87 28C85 27 83 28 81 29L68 34Z"
        fill="#174BFF"
        opacity="0.6"
      />

      {/* Five-pointed Red Star */}
      <path
        d="M50 8L62.5 33.5L90 37.5L70 57L74.7 84.5L50 71.5L25.3 84.5L30 57L10 37.5L37.5 33.5L50 8Z"
        fill="#E50914"
        stroke="#FF3848"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const StarLogoText: React.FC<{
  className?: string;
  showOffice?: boolean;
  light?: boolean;
}> = ({ className, showOffice = true, light = false }) => {
  return (
    <div className={cn("flex flex-col items-start leading-none select-none", className)}>
      <div className="flex items-center gap-1 font-heading font-extrabold tracking-tighter text-2xl sm:text-3xl">
        <span className={light ? "text-white" : "text-slate-100"}>ST</span>
        <StarMark size={26} glow className="mx-0.5 -mt-1 transform hover:rotate-12 transition-transform duration-300" />
        <span className={light ? "text-white" : "text-slate-100"}>R</span>
      </div>
      <div className="flex items-center gap-1.5 mt-0.5">
        <span className="font-heading font-bold italic tracking-wider text-xs sm:text-sm text-star-blue-light uppercase">
          CONECTADOS
        </span>
      </div>
      {showOffice && (
        <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-400 font-medium tracking-wider uppercase">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-star-red animate-pulse" />
          <span>Oficina Cordero · Táchira</span>
        </div>
      )}
    </div>
  );
};
