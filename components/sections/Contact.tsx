"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send, Check } from "lucide-react";
import { SITE } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        fallback?: boolean;
        error?: string;
      };

      if (data.fallback) {
        const subject = encodeURIComponent(`Portfolio inquiry from ${payload.name}`);
        const body = encodeURIComponent(
          `${payload.message}\n\n— ${payload.name}\n${payload.email}`,
        );
        window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
        setStatus("success");
        form.reset();
        return;
      }

      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-28 lg:py-32"
    >
      <div aria-hidden className="divider-amber absolute inset-x-0 top-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/[0.04] blur-[120px]"
      />

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-extra-wide text-amber">
            Contact
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something.
          </h2>
          <p className="mt-5 text-balance text-base text-text-secondary sm:text-lg">
            Open to AI engineering contracts, technical partnerships, and
            founding opportunities.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 lg:col-span-2"
          >
            <ContactItem
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={SITE.email}
              href={`mailto:${SITE.email}`}
            />
            <ContactItem
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value={SITE.phone}
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            />
            <ContactItem
              icon={<MapPin className="h-4 w-4" />}
              label="Location"
              value={SITE.location}
            />
            <ContactItem
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              value="Connect on LinkedIn"
              href={SITE.social.linkedin}
              external
            />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={onSubmit}
            className="space-y-4 rounded-xl border border-border bg-surface p-8 lg:col-span-3"
          >
            <Field label="Name" name="name" type="text" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Message" name="message" textarea required />

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto"
              >
                {status === "success" ? (
                  <>
                    <Check size={16} />
                    Sent
                  </>
                ) : status === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </Button>

              {status === "error" && (
                <p className="text-sm text-red-400">{errorMsg}</p>
              )}
              {status === "success" && (
                <p className="text-sm text-amber">
                  Thanks — I&apos;ll reply within 24 hours.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-[3px] hover:border-amber/40">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-elevated text-amber">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
          {label}
        </p>
        <p className="truncate text-sm text-text-primary transition-colors group-hover:text-amber">
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) return content;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
};

function Field({ label, name, type = "text", textarea, required }: FieldProps) {
  const className = cn(
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder-text-muted transition-colors duration-300 focus:border-amber/60 focus:outline-none focus:ring-2 focus:ring-amber/20",
  );
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-text-muted">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          className={cn(className, "resize-none")}
          placeholder="Tell me about your project..."
        />
      ) : (
        <input type={type} name={name} required={required} className={className} />
      )}
    </label>
  );
}
