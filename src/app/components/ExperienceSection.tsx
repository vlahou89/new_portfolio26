"use client";
import { AnimatedSection } from "./AnimatedSection";

const experiences = [
  {
    period: "2022 — Present",
    role: "Senior Frontend Engineer",
    company: "TechCorp Inc.",
    description:
      "Leading frontend development for a B2B SaaS platform. Architecting component systems, mentoring junior developers, and driving performance improvements across the product.",
    highlights: ["Led Vue → React migration", "35% bundle size reduction", "Established design system"],
  },
  {
    period: "2019 — Present",
    role: "Founder & Lead Developer",
    company: "Doe Digital",
    description:
      "Running a boutique web development studio specializing in high-performance WordPress sites and custom React applications for small businesses and startups.",
    highlights: ["15+ projects delivered", "100% client retention", "Full-stack ownership"],
  },
  {
    period: "2019 — 2022",
    role: "Frontend Developer",
    company: "StartupXYZ",
    description:
      "Built and maintained customer-facing features for a fintech startup, working closely with designers and product managers in a fast-paced agile environment.",
    highlights: ["20+ features shipped", "85% test coverage", "Design system contributor"],
  },
];

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
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
