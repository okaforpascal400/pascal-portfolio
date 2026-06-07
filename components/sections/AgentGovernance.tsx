"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Box,
  ScrollText,
  UserCheck,
  KeyRound,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import {
  AGENT_GOVERNANCE,
  GOVERNANCE_PILLARS,
  type GovernanceGroup,
  type GovernancePillar,
} from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/components/FadeIn";
import { cn } from "@/lib/utils";

const PILLAR_ICONS: Record<number, LucideIcon> = {
  1: ShieldCheck,
  2: Box,
  3: ScrollText,
  4: UserCheck,
  5: KeyRound,
  6: BadgeCheck,
};

const GROUPS: GovernanceGroup[] = ["Technical Controls", "Governance Controls"];

type AgentGovernanceProps = {
  /** "section" renders as a homepage section (h2 + top divider); "page" renders as the standalone page hero (h1). */
  variant?: "section" | "page";
};

export function AgentGovernance({ variant = "section" }: AgentGovernanceProps) {
  const isPage = variant === "page";
  // On the standalone page the title is an <h1>, so group labels become <h2> to
  // keep a gap-free heading outline (h1 → h2 → h3). On the homepage the title is
  // an <h2>, so the labels stay plain <p> and cards (<h3>) follow it directly.
  const GroupHeading = isPage ? "h2" : "p";

  return (
    <section
      id={isPage ? undefined : "agent-governance"}
      className={cn(
        "relative",
        isPage ? "py-16 lg:py-24" : "scroll-mt-24 py-28 lg:py-32",
      )}
    >
      {!isPage && (
        <div aria-hidden className="divider-amber absolute inset-x-0 top-0" />
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/[0.04] blur-[120px]"
      />

      <div className="container-page">
        <SectionHeader
          eyebrow={AGENT_GOVERNANCE.eyebrow}
          title={AGENT_GOVERNANCE.headline}
          subtitle={AGENT_GOVERNANCE.subtitle}
          align="center"
          titleAs={isPage ? "h1" : "h2"}
        />

        <FrameworkDiagram eager={isPage} />

        <div className="mt-16 space-y-12">
          {GROUPS.map((group) => (
            <div key={group}>
              <GroupHeading className="mb-5 font-mono text-xs uppercase tracking-extra-wide text-amber">
                {group}
              </GroupHeading>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 gap-6 md:grid-cols-3"
              >
                {GOVERNANCE_PILLARS.filter((p) => p.group === group).map(
                  (pillar) => (
                    <motion.div key={pillar.number} variants={staggerItem}>
                      <PillarCard pillar={pillar} />
                    </motion.div>
                  ),
                )}
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-balance text-lg leading-relaxed text-text-secondary sm:text-xl">
            {AGENT_GOVERNANCE.closing}
          </p>
          <div className="mt-8">
            <Button href={AGENT_GOVERNANCE.cta.href}>
              {AGENT_GOVERNANCE.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FrameworkDiagram({ eager = false }: { eager?: boolean }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative mx-auto mt-4 w-full max-w-[720px]"
    >
      {/* Horizontally scrollable on small screens so labels stay legible; only
          this wrapper scrolls — the page never scrolls sideways. tabIndex makes
          the scroll region keyboard-operable (the full content is also in the
          cards below). */}
      <div
        role="group"
        aria-label="Agent governance framework diagram — scroll horizontally to view"
        tabIndex={0}
        className="overflow-x-auto rounded-lg pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {/* Vector SVG via <img> keeps the file's internal prefers-color-scheme
            <style> intact (inlining as JSX would strip it). Sharp on retina by
            nature; width:100% / height:auto scales it cleanly, min-width keeps
            text readable and triggers the scroll on narrow phones. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/agent-governance-framework.svg"
          alt={AGENT_GOVERNANCE.diagramAlt}
          width={680}
          height={480}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="block h-auto w-full min-w-[520px]"
        />
      </div>
      {/* Subtle edge fade hinting the diagram scrolls — only while it actually
          overflows (container drops below the 520px min-width at ~568px). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent min-[568px]:hidden"
      />
    </motion.figure>
  );
}

function PillarCard({ pillar }: { pillar: GovernancePillar }) {
  const Icon = PILLAR_ICONS[pillar.number];

  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-[3px] hover:border-amber/40">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-elevated">
          {Icon && <Icon className="h-4 w-4 text-amber" />}
        </div>
        <span className="font-mono text-sm text-text-secondary">
          {String(pillar.number).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold tracking-tight text-text-primary">
        {pillar.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-amber">{pillar.summary}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
        {pillar.description}
      </p>

      {/* PROOF POINT: add real Venzip/Alex example here */}
    </article>
  );
}
