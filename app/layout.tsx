import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SITE } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Okafor Ogbonna Pascal",
    "Pascal Okafor",
    "Ogbonna Pascal Okafor",
    "Agentic AI Engineer",
    "SabiFlow Technologies",
    "Hanify Solutions",
    "LLM Engineer",
    "RAG Systems",
    "Multi-Agent Orchestration",
    "AI Engineer Nigeria",
    "LangChain",
    "LangGraph",
    "CrewAI",
  ],
  authors: [{ name: SITE.fullName }],
  creator: SITE.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    creator: "@okaforpascal40",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="relative font-sans">
        <Image
          src="/pascal.png"
          alt=""
          width={600}
          height={600}
          priority
          unoptimized
          aria-hidden
          className="pointer-events-none fixed left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 object-cover object-top opacity-[0.12]"
        />
        {children}
      </body>
    </html>
  );
}
