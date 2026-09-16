import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-star-blue/60 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-star-blue text-white shadow-lg shadow-star-blue/25 hover:bg-blue-600 hover:shadow-star-blue/40",
        destructive:
          "bg-star-red text-white shadow-md shadow-star-red/25 hover:bg-star-red-hover",
        outline:
          "border border-white/15 bg-white/[0.03] backdrop-blur-md text-white hover:bg-white/[0.08] hover:border-white/30",
        secondary:
          "bg-star-navy-700 text-slate-100 hover:bg-star-navy-600 border border-white/10",
        ghost:
          "text-slate-300 hover:text-white hover:bg-white/[0.06]",
        link:
          "text-star-blue-light underline-offset-4 hover:underline",
        hero:
          "relative overflow-hidden bg-gradient-to-r from-blue-600 via-star-blue to-indigo-600 text-white font-semibold shadow-xl shadow-star-blue/35 hover:shadow-star-blue/60 hover:brightness-110 border border-white/20",
        red:
          "relative overflow-hidden bg-gradient-to-r from-star-red to-red-600 text-white font-semibold shadow-lg shadow-star-red/30 hover:shadow-star-red/50 hover:brightness-110 border border-red-400/30",
        glow:
          "bg-star-navy-800 text-white border border-star-blue/40 hover:border-star-blue shadow-[0_0_20px_rgba(23,75,255,0.25)] hover:shadow-[0_0_25px_rgba(54,163,255,0.5)]",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-13 rounded-2xl px-8 text-base tracking-wide font-medium",
        xl: "h-14 rounded-2xl px-9 text-base tracking-wide font-semibold",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
