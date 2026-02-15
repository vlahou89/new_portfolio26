"use client";
import { AnimatedSection } from "./AnimatedSection";

const experiences = [
  {
    period: "Feb 2024 — Present",
    role: "Frontend Engineer",
    company: "TheIdol.com",
    description:
      "Frontend development and UX improvements for high-traffic insurance and travel comparison platforms, delivering seamless experiences for real customers.",
  },
  {
    period: "Oct 2023 — Jan 2024",
    role: "Frontend Engineer",
    company: "MadeBySauce",
    description:
      "Contributed to the development and enhancement of industry‑leading insurance software solutions, supporting multiple high‑visibility insurance platforms used by brokers and carriers across the UK.",
  },
  {
    period: "Feb 2023 — Sep 2023",
    role: "Frontend Engineer",
    company: "CodeComputerLove Digital Agency",
    description:
      "Frontend development of a greenfield project, translating design concepts into accessible, responsive, and high-performance interfaces.",
  },
  {
    period: "Aug 2022 — Jan 2023",
    role: "Frontend Engineer",
    company: "TotalMobile",
    description:
      "Delivered scalable, maintainable frontend features for a utility-focused SaaS platform, improving customer workflows and platform reliability."
  },
  {
    period: "Oct 2021 - Aug 2022",
    role: "Frontend Engineer",
    company: "Fuuse",
    description:
      "Delivered scalable, maintainable frontend features for a utility-focused SaaS platform, improving customer workflows and platform reliability."
  },
   {
    period: "Mar 2021 — Oct 2021",
    role: "Web Developer",
    company: "Few and Far Digital Agency",
    description:
      "Maintained and enhanced features for an EV platform, driving improved product stability, performance, and user engagement."
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">04 — Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">
            Where I've Worked
          </h2>
        </AnimatedSection>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group grid md:grid-cols-[180px_1fr] gap-6 md:gap-12">
                <div>
                  <p className="text-xs font-mono text-muted-foreground tracking-wider">{exp.period}</p>
                </div>
                <div className="border-l border-border pl-6 group-hover:border-primary/40 transition-colors">
                  <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
