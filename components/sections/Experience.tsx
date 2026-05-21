"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/components/FadeIn";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 border-t border-border py-24 lg:py-32"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="Career"
          title="Experience"
          subtitle="Five years engineering AI, cloud, and security systems in production."
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mx-auto max-w-3xl"
        >
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-amber/60 via-border to-transparent md:left-[11px]"
          />

          {EXPERIENCE.map((item) => (
            <motion.li
              key={`${item.company}-${item.role}`}
              variants={staggerItem}
              className="relative pl-10 pb-12 last:pb-0 md:pl-14"
            >
              <span
                aria-hidden
                className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center md:h-6 md:w-6"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/40 opacity-50" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-amber ring-4 ring-background md:h-3.5 md:w-3.5" />
              </span>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-text-primary sm:text-xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-amber">
                    {item.company}
                    {item.location && (
                      <span className="text-text-muted">
                        {" · "}
                        {item.location}
                      </span>
                    )}
                  </p>
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  {item.period}
                </p>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-text-secondary">
                {item.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-amber/60"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
