"use client";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Vue", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    title: "Architecture & Performance",
    skills: ["Component Systems", "State Management", "API Integration", "Performance Optimisation", "Accessibility"],
  },
  {
    title: "Tooling",
    skills: ["Git", "CI/CD", "Jest / RTL", "Playwright", "Storybook"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">02 — Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">
            Tools & Technologies
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">{group.title}</h3>
              <div className="h-px bg-border" />
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center gap-3 group">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 group-hover:glow-sm transition-shadow" />
                    <span className="group-hover:text-foreground transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
