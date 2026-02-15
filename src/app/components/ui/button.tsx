"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "outline" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
};

export const Button = React.forwardRef<any, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp: any = asChild ? Slot : "button";

    const base =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variants: Record<string, string> = {
      default: "bg-primary text-white hover:bg-primary/90",
      ghost: "bg-transparent hover:bg-accent/10",
      outline: "border border-border",
      link: "underline underline-offset-4 text-primary",
    };

    const sizes: Record<string, string> = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3",
      lg: "h-11 px-6",
      icon: "h-10 w-10 p-0",
    };

    return <Comp ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />;
  }
);

Button.displayName = "Button";

export default Button;
