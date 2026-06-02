"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/components/FadeIn";

export function Certifications() {
  return (
    <section className="relative py-24 lg:py-28">
      <div aria-hidden className="divider-amber absolute inset-x-0 top-0" />
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-mono text-xs uppercase tracking-extra-wide text-amber"
        >
          Credentials
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.name}
              variants={staggerItem}
              className="group relative rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-[3px] hover:border-amber/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-elevated">
                  <Award className="h-4 w-4 text-amber" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-text-primary">
                    {cert.name}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
