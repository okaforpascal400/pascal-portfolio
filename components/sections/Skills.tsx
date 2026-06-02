"use client";

import { motion } from "framer-motion";
import { SKILL_QUADRANTS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/components/FadeIn";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 py-32 lg:py-40"
    >
      <div aria-hidden className="divider-amber absolute inset-x-0 top-0" />
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
          className="space-y-12"
        >
          {SKILL_QUADRANTS.map((q) => (
            <motion.div
              key={q.title}
              variants={staggerItem}
              className="border-l-2 border-amber/60 pl-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {q.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {q.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-md border border-[#2a2a3a] bg-[#1e1e2e] px-4 py-2 text-sm text-[#e5e7eb] transition-colors duration-200 hover:border-amber/50 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
