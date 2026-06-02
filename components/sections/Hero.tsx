"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { HERO } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 lg:pt-36"
    >
      <div
        aria-hidden
        className="dot-grid dot-grid-fade pointer-events-none absolute inset-0"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/[0.04] blur-[120px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
      />

      <div className="container-page relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 font-mono text-[11px] uppercase tracking-extra-wide text-amber sm:text-xs"
        >
          {HERO.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          {HERO.headlineTop}
          <br />
          <span className="text-gradient-amber">{HERO.headlineBottom}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12 max-w-2xl text-balance text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          {HERO.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Button href="#projects">
            See My Work
            <ArrowRight size={16} />
          </Button>
          <Button
            href="/resume.pdf"
            variant="secondary"
            aria-label="Download resume"
          >
            <Download size={16} />
            Download Resume
          </Button>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-12 sm:grid-cols-4"
        >
          {HERO.stats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-3xl font-bold tracking-tight text-amber sm:text-4xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  format={
                    "format" in stat && stat.format === "compact"
                      ? "compact"
                      : "default"
                  }
                />
              </dd>
              <dt className="mt-2 font-mono text-[11px] uppercase tracking-wider text-text-muted">
                {stat.label}
              </dt>
            </div>
          ))}
        </motion.dl>

        <p className="mt-4 text-xs text-text-muted sm:hidden">
          Nigeria · Australia · Canada
        </p>
      </div>
    </section>
  );
}
