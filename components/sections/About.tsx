"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ABOUT } from "@/lib/data";
import { Tag } from "@/components/ui/Tag";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn, staggerContainer, staggerItem } from "@/components/FadeIn";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="About"
          title="Engineer. Founder. Operator."
          subtitle="Architecting autonomous AI systems from Abuja to Sydney."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="space-y-6 text-base leading-relaxed text-text-secondary sm:text-lg">
              {ABOUT.paragraphs.map((p, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <p>{p}</p>
                </FadeIn>
              ))}
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {ABOUT.techTags.map((tag) => (
                <motion.div key={tag} variants={staggerItem}>
                  <Tag>{tag}</Tag>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <FadeIn className="lg:col-span-2" delay={0.15}>
            <SabiFlowCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function SabiFlowCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8">
      <div
        aria-hidden
        className="grid-bg pointer-events-none absolute inset-0 opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber/20 blur-3xl"
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-extra-wide text-text-muted">
            Currently Leading
          </span>
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-amber">
              Active
            </span>
          </span>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber/10 ring-1 ring-amber/30">
            <Sparkles className="h-6 w-6 text-amber" />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-text-primary">
              SabiFlow Technologies
            </h3>
            <p className="font-mono text-xs text-text-muted">
              Founder · CEO · Lead Engineer
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-text-secondary">
          Building production-grade agentic AI systems for clients across
          healthcare, legal, compliance, oil &amp; gas, and African commerce.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
              HQ
            </p>
            <p className="mt-1 text-sm text-text-primary">Abuja, Nigeria</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
              Founded
            </p>
            <p className="mt-1 text-sm text-text-primary">2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
