"use client";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics platform for a B2B SaaS product with complex data visualizations, role-based access control, and optimized rendering pipeline.",
    tags: ["React", "TypeScript", "React Query", "Recharts"],
    achievements: [
      "40% faster initial load via code splitting and lazy routes",
      "Built reusable chart component library used across 4 products",
      "Real-time data updates via WebSocket with optimistic UI",
    ],
    demo: "#",
    github: "#",
  },
  {
    title: "Component Library & Design System",
    description:
      "Production-grade design system with 50+ accessible, themeable components. Full documentation, visual regression testing, and automated release pipeline.",
    tags: ["React", "Storybook", "TypeScript", "Radix UI"],
    achievements: [
      "50+ accessible components with full keyboard navigation",
      "99% test coverage with Playwright visual regression",
      "Adopted by 3 product teams, reducing dev time by 30%",
    ],
    demo: "#",
    github: "#",
  },
  {
    title: "High-Performance WordPress Build",
    description:
      "Custom WordPress theme achieving perfect Lighthouse scores through modern frontend tooling, headless architecture patterns, and aggressive optimization.",
    tags: ["WordPress", "PHP", "Vite", "Tailwind CSS"],
    achievements: [
      "100/100 Lighthouse performance score across all pages",
      "Custom Gutenberg blocks with live preview editing",
      "3x faster than previous theme with 60% smaller bundle",
    ],
    demo: "#",
    github: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">03 — Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">
            Featured Work
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid md:grid-cols-[1.2fr_1fr] gap-8 p-6 md:p-8 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-all duration-500 hover:glow-sm"
            >
              {/* Screenshot placeholder */}
              <div className="aspect-[16/10] rounded-xl bg-muted/50 border border-border flex items-center justify-center overflow-hidden group-hover:border-primary/20 transition-colors">
                <div className="text-muted-foreground/30 font-mono text-xs tracking-wider">
                  PREVIEW
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-6">
                  {project.achievements.map((a) => (
                    <li key={a} className="text-sm text-muted-foreground flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-2" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <Button asChild size="sm" className="rounded-full text-xs font-medium text-black">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1.5" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="ghost" className="rounded-full text-xs font-medium text-muted-foreground hover:text-primary">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1.5" />
                      Source
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
