"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/components/FadeIn";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 border-t border-border py-24 lg:py-32"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="Selected Work"
          title="Flagship Builds"
          subtitle="Production systems. Real clients. Real metrics."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.name} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:border-amber/40 hover:shadow-card-hover">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber/0 blur-3xl transition-all duration-700 group-hover:bg-amber/15"
      />

      <div className="relative flex items-start justify-between gap-4">
        <Badge>{project.category}</Badge>
        {project.featured && (
          <span className="font-mono text-[10px] uppercase tracking-extra-wide text-text-muted">
            Featured
          </span>
        )}
      </div>

      <h3 className="relative mt-5 text-xl font-bold tracking-tight text-text-primary transition-colors duration-300 group-hover:text-amber sm:text-2xl">
        {project.name}
      </h3>

      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="relative mt-6 flex items-center gap-4 border-t border-border pt-5">
          {project.links.map((link) => {
            const isGithub = link.label.toLowerCase().includes("github");
            const Icon = isGithub ? Github : ArrowUpRight;
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-text-secondary transition-colors hover:text-amber"
              >
                {link.label}
                <Icon size={14} />
              </a>
            );
          })}
        </div>
      )}
    </article>
  );
}
