"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Workflow,
  ShieldCheck,
  Code2,
  type LucideIcon,
} from "lucide-react";
import { SKILL_QUADRANTS, LANGUAGES } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { staggerContainer, staggerItem } from "@/components/FadeIn";

const ICONS: Record<string, LucideIcon> = {
  "AI & LLM Engineering": Brain,
  "Cloud & Infrastructure": Cloud,
  "Automation & Integration": Workflow,
  "Security & Compliance": ShieldCheck,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 border-t border-border py-24 lg:py-32"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="Capabilities"
          title="Technical Arsenal"
          subtitle="Deep stack across AI engineering, cloud infrastructure, automation, and security."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {SKILL_QUADRANTS.map((q) => {
            const Icon = ICONS[q.title] ?? Brain;
            return (
              <motion.div
                key={q.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all duration-500 hover:border-amber/30"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber/0 blur-3xl transition-all duration-700 group-hover:bg-amber/10"
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber/10 ring-1 ring-amber/30">
                      <Icon className="h-5 w-5 text-amber" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-text-primary">
                      {q.title}
                    </h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {q.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-2xl border border-border bg-surface p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber/10 ring-1 ring-amber/30">
                <Code2 className="h-5 w-5 text-amber" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-text-primary">
                Languages
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {LANGUAGES.map((lang) => (
                <Tag key={lang}>{lang}</Tag>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
