"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/components/FadeIn";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 py-28 lg:py-32"
    >
      <div aria-hidden className="divider-amber absolute inset-x-0 top-0" />
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
            className="absolute left-[5px] top-2 bottom-2 w-px bg-border md:left-[7px]"
          />

          {EXPERIENCE.map((item) => (
            <motion.li
              key={`${item.company}-${item.role}`}
              variants={staggerItem}
              className="relative pl-10 pb-12 last:pb-0 md:pl-12"
            >
              <span
                aria-hidden
                className="absolute left-0 top-2 inline-flex h-2.5 w-2.5 rounded-full bg-amber ring-4 ring-background md:h-3 md:w-3"
              />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-text-primary sm:text-xl">
                    {item.company}
                    {item.location && (
                      <span className="text-text-muted font-normal">
                        {" · "}
                        {item.location}
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-amber">
                    {item.role}
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
                      className="mt-2.5 inline-block h-1 w-1 shrink-0 rounded-full bg-border-hover"
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
