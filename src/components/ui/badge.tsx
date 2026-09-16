import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-star-blue/40 bg-star-blue/15 text-star-blue-light backdrop-blur-md shadow-[0_0_12px_rgba(23,75,255,0.2)]",
        secondary:
          "border border-white/10 bg-white/[0.05] text-slate-300 backdrop-blur-md",
        destructive:
          "border border-star-red/40 bg-star-red/15 text-red-300 shadow-[0_0_12px_rgba(229,9,20,0.25)]",
        outline:
          "border border-white/20 text-slate-200",
        pill:
          "border border-white/15 bg-slate-900/80 text-slate-200 px-3.5 py-1.5 shadow-sm",
        glow:
          "border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 shadow-[0_0_15px_rgba(0,242,255,0.25)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
};

export { Badge, badgeVariants };
