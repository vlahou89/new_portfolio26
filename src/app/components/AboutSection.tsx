"use client";
import { AnimatedSection } from "./AnimatedSection";
import { Code2, Layers, Zap, Users } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Architecture", desc: "Scalable component systems with clear separation of concerns and testable, maintainable code." },
  { icon: Zap, title: "Performance First", desc: "Core Web Vitals optimization, code splitting, and rendering strategies that keep interfaces fast." },
  { icon: Layers, title: "Design Systems", desc: "Building reusable component libraries that enforce consistency and accelerate product velocity." },
  { icon: Users, title: "Product Collaboration", desc: "Working cross-functionally with design, product, and backend teams to ship features that matter." },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">01 — About</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Engineering Philosophy
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed mb-16">
            I'm a frontend engineer with a product-first mindset. I build scalable, high-performance UIs
            using <span className="text-foreground font-medium">React, Vue, Next.js,</span> and{" "}
            <span className="text-foreground font-medium">TypeScript</span> — with deep focus on
            component architecture, accessibility, and performance. Remote-first, ownership-driven.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group p-6 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-all duration-300 hover:glow-sm h-full">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
