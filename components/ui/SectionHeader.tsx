"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  titleAs?: "h1" | "h2";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
  titleAs = "h2",
}: SectionHeaderProps) {
  const Heading = titleAs;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 font-mono text-xs uppercase tracking-extra-wide text-amber">
          {eyebrow}
        </p>
      )}
      <Heading className="text-balance text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-4 text-balance text-base text-text-secondary sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
