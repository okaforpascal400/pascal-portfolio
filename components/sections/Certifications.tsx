"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/components/FadeIn";

export function Certifications() {
  return (
    <section className="relative border-t border-border py-20 lg:py-24">
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
              className="group relative overflow-hidden rounded-xl border border-border bg-surface p-5 transition-all duration-500 hover:border-amber/40 hover:shadow-amber-glow"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber/10 ring-1 ring-amber/30 transition-all duration-500 group-hover:bg-amber/20">
                  <Award className="h-5 w-5 text-amber" />
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
