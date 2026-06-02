"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/components/FadeIn";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 py-28 lg:py-32"
    >
      <div aria-hidden className="divider-amber absolute inset-x-0 top-0" />
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
    <article className="group relative flex h-full flex-col rounded-xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-[3px] hover:border-amber/40">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex items-center rounded-md bg-border px-2.5 py-1 text-xs text-text-secondary">
          {project.category}
        </span>
        {project.featured && (
          <span className="font-mono text-[10px] uppercase tracking-extra-wide text-text-muted">
            Featured
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
        {project.name}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md bg-surface-elevated px-2 py-0.5 font-mono text-[11px] text-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.links?.length || project.privateDeployment) && (
        <div className="mt-6 flex items-center gap-5 border-t border-border pt-5">
          {project.privateDeployment && (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-border px-2 py-1 text-[11px] text-text-secondary">
              <Lock size={12} />
              Private Deployment
            </span>
          )}
          {project.links?.map((link) => {
            const isGithub = link.label.toLowerCase().includes("github");
            const Icon = isGithub ? Github : ArrowUpRight;
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-amber transition-colors hover:text-amber-dark"
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
