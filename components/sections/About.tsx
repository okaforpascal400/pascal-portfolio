"use client";

import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { ABOUT, SITE } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/FadeIn";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 lg:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <FadeIn
            className="flex flex-col items-center gap-6 lg:order-2"
            delay={0.15}
          >
            <Image
              src="/pascal.png"
              alt="Okafor Ogbonna Pascal"
              width={256}
              height={256}
              priority
              className="h-64 w-64 rounded-full object-cover ring-2 ring-white/10"
            />
            <div className="w-full">
              <SabiFlowCard />
            </div>
          </FadeIn>

          <div className="lg:order-1">
            <SectionHeader
              eyebrow="About"
              title="Engineer. Founder. Operator."
              subtitle="Architecting autonomous AI systems from Abuja to Sydney."
            />

            <div className="space-y-6 text-base leading-relaxed text-text-secondary sm:text-lg">
              {ABOUT.paragraphs.map((p, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <p>{p}</p>
                </FadeIn>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {ABOUT.techTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md border border-border bg-surface px-3 py-1 text-sm text-text-secondary transition-colors duration-200 hover:border-border-hover hover:text-text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SabiFlowCard() {
  return (
    <div className="relative rounded-xl border border-border bg-surface p-8 transition-colors duration-300 hover:border-border-hover">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-extra-wide text-text-muted">
          Currently Leading
        </span>
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-amber">
            Active
          </span>
        </span>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-elevated">
          <Sparkles className="h-5 w-5 text-amber" />
        </div>
        <div>
          <h3 className="text-lg font-bold tracking-tight text-text-primary">
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

      <a
        href={SITE.sabiflow}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-amber transition-colors hover:text-amber-dark"
      >
        Visit sabiflow.dev
        <ArrowUpRight size={14} />
      </a>
    </div>
  );
}
