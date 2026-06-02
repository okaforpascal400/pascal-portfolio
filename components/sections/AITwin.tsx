"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AITwin() {
  return (
    <section
      id="ai-twin"
      className="relative scroll-mt-24 py-28 lg:py-32"
    >
      <div aria-hidden className="divider-amber absolute inset-x-0 top-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/[0.04] blur-[120px]"
      />

      <div className="container-page">
        <SectionHeader
          eyebrow="Ask Anything"
          title="Talk to my AI Twin"
          subtitle="A conversational agent trained on my work, experience, and ideas. Ask about projects, hiring, or architecture decisions — it answers in real time."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative overflow-hidden rounded-xl border border-border bg-surface"
        >
          <iframe
            src="https://okafor-digital-twin.onrender.com"
            title="Okafor Pascal — AI Twin"
            loading="eager"
            allow="microphone; clipboard-write"
            className="block h-[600px] w-full border-0 sm:h-[700px]"
          />
        </motion.div>

        <p className="mt-4 text-center font-mono text-xs text-text-muted sm:text-[13px]">
          First load may take a few seconds while the model wakes up.
        </p>
      </div>
    </section>
  );
}
