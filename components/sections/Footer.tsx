import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-text-muted">
          © 2026 {SITE.fullName} ·{" "}
          <span className="text-text-secondary">
            SabiFlow Technologies Limited
          </span>
        </p>

        <div className="flex items-center gap-3">
          <Link
            href={SITE.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-300 hover:border-amber/60 hover:text-amber"
          >
            <Linkedin size={16} />
          </Link>
          <Link
            href={SITE.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-300 hover:border-amber/60 hover:text-amber"
          >
            <Github size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
