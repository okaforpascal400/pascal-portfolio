import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AgentGovernance } from "@/components/sections/AgentGovernance";
import { Footer } from "@/components/sections/Footer";
import { AGENT_GOVERNANCE, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Agent Governance Framework",
  description: AGENT_GOVERNANCE.diagramAlt,
  alternates: { canonical: "/agent-governance" },
  openGraph: {
    type: "article",
    url: `${SITE.url}/agent-governance`,
    title: `Agent Governance Framework — ${SITE.name}`,
    description: AGENT_GOVERNANCE.diagramAlt,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `Agent Governance Framework — ${SITE.name}`,
    description: AGENT_GOVERNANCE.diagramAlt,
  },
};

export default function AgentGovernancePage() {
  return (
    <main className="relative z-10 min-h-screen overflow-x-hidden">
      <Navbar />

      <div className="container-page pt-28 lg:pt-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-extra-wide text-text-secondary transition-colors hover:text-amber"
        >
          <ArrowLeft size={14} aria-hidden />
          Back to portfolio
        </Link>
      </div>

      <AgentGovernance variant="page" />

      <Footer />
    </main>
  );
}
