"use client";
import { AnimatedSection } from "./AnimatedSection";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:margvlahou@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mvlachou89/" },
  { icon: Github, label: "GitHub", href: "https://github.com/vlahou89" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-mono text-sm tracking-widest uppercase">05 — Contact</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Let's build something
              <br />
              <span className="text-gradient glow-text">together.</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-12 leading-relaxed">
              Currently open to remote product engineering roles. If you're
              building something ambitious and need a frontend engineer who
              cares about craft, let's talk.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex justify-center gap-6 flex-wrap">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Footer */}
          <div className="mt-32 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground/60 font-mono">
              © {new Date().getFullYear()} Rita Vlachou | Built with Next.js, Tailwind CSS, and a lot of ☕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
