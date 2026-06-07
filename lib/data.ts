export const SITE = {
  name: "Okafor Ogbonna Pascal",
  fullName: "Okafor Ogbonna Pascal",
  role: "Agentic AI Engineer",
  title: "Okafor Ogbonna Pascal — Agentic AI Engineer & Founder",
  description:
    "Agentic AI Engineer. Founder of SabiFlow Technologies. CTO at Hanify Solutions. Building multi-agent LLM systems, enterprise RAG, and end-to-end AI automation at scale.",
  url: "https://pascalokafor.dev",
  email: "okaforpascal40@gmail.com",
  phone: "+234 803 387 8681",
  location: "Abuja, Nigeria",
  sabiflow: "https://sabiflow.dev",
  social: {
    linkedin: "https://www.linkedin.com/in/pascal-okafor",
    github: "https://github.com/okaforpascal40",
  },
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#agent-governance", label: "Framework" },
  { href: "#contact", label: "Contact" },
] as const;

export const HERO = {
  tagline:
    "AGENTIC AI ENGINEER · FOUNDER · LLM SYSTEMS · MULTI-AGENT ORCHESTRATION",
  headlineTop: "Building AI Systems",
  headlineBottom: "That Actually Ship.",
  subheadline:
    "I'm Okafor Ogbonna Pascal — founder of SabiFlow Technologies. I architect multi-agent LLM pipelines, enterprise RAG systems, and end-to-end AI automation platforms — handling 500K+ autonomous actions per month across healthcare, legal, compliance, and commerce.",
  stats: [
    { value: 500000, suffix: "+", label: "Autonomous Actions/Month", format: "compact" as const },
    { value: 11, suffix: "+", label: "Production AI Systems" },
    { value: 5, suffix: "+", label: "Years Engineering" },
    { value: 3, suffix: "", label: "Continents Served" },
  ],
} as const;

export const ABOUT = {
  paragraphs: [
    "I'm Okafor Ogbonna Pascal — an Agentic AI Engineer and founder based in Abuja, Nigeria. I don't just integrate AI; I architect systems that operate autonomously at scale.",
    "My work sits at the intersection of LLM engineering, cloud infrastructure, and real business outcomes. I've shipped production AI across Nigerian oil & gas, healthcare, legal tech, biomedical research, compliance SaaS, and African language AI.",
    "I lead SabiFlow Technologies, serve as CTO at Hanify Solutions (Australia), and pioneered BaobabAI — a multilingual AI model for African languages, with v0.5 fine-tuned on Igbo, Hausa, Yoruba, and Nigerian Pidgin.",
  ],
  techTags: [
    "LangChain",
    "LangGraph",
    "CrewAI",
    "LlamaIndex",
    "OpenAI SDK",
    "Anthropic SDK",
    "Gemini API",
    "n8n",
    "Make.com",
    "Zapier",
    "FastAPI",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "AWS",
    "GCP",
    "Azure",
    "Google Cloud Run",
    "Docker",
    "Supabase",
    "Pinecone",
    "pgvector",
    "Weaviate",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Twilio",
    "Unsloth/QLoRA",
  ],
} as const;

export type Project = {
  name: string;
  category: string;
  description: string;
  stack: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
  privateDeployment?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "Venzip — AI Compliance OS",
    category: "Enterprise SaaS",
    description:
      "B2B compliance platform helping startups achieve SOC 2, ISO 27001, and AI governance. Features Trust Scan, Risk Management, AI Governance module, and Evidence tracking. Presented at Web Summit Vancouver 2026.",
    stack: ["Next.js 15", "Supabase", "OpenAI GPT-4o", "Vercel"],
    links: [{ label: "Live", href: "https://venzip.com" }],
    featured: true,
  },
  {
    name: "BaobabAI — African Language Model",
    category: "AI Research",
    description:
      "Multilingual LLM fine-tuned for Nigerian languages — Igbo, Hausa, Yoruba, and Nigerian Pidgin (5,000 pairs each). Built on Meta's Llama 3.1 8B with QLoRA fine-tuning. 20,510 curated conversational pairs.",
    stack: ["Unsloth", "QLoRA", "Llama 3.1 8B", "FastAPI", "Modal", "HuggingFace"],
    links: [
      { label: "Chat", href: "https://chat.baobabai.dev" },
      { label: "Model", href: "https://huggingface.co/okaforpascal40/BaobabAI-v0.5" },
      {
        label: "API",
        href: "https://okaforpascal40--baobabai-api-fastapi-app.modal.run",
      },
    ],
    featured: true,
  },
  {
    name: "MediSight — AI Medical Visual Assistant",
    category: "Healthcare AI",
    description:
      "Real-time voice and camera AI assistant for medication analysis, lab result explanation, and symptom assessment. Built for the Google Gemini Live Agent Challenge. 1,000+ active beta testers.",
    stack: ["Gemini 2.5 Flash", "FastAPI", "Google Cloud Run"],
    links: [
      {
        label: "Live",
        href: "https://medisight-563984701112.us-central1.run.app",
      },
    ],
  },
  {
    name: "LegalSight — Global AI Legal Assistant",
    category: "Legal Tech",
    description:
      "Real-time voice and camera AI assistant that explains contracts, detects dangerous clauses, and answers legal questions across multiple countries and languages — Igbo, Hausa, Yoruba, Pidgin, French, English.",
    stack: ["Gemini 2.5 Flash", "FastAPI", "Google Cloud Run"],
  },
  {
    name: "RigAI — Oil & Gas Report Automation",
    category: "Industrial AI",
    description:
      "Generates NUPRC/NMDPRA-compliant Daily Drilling Reports, HSE Reports, and Incident Reports in under 30 seconds. Targets 1,481 active wells across Nigeria.",
    stack: ["Next.js", "Claude AI", "Vercel"],
    links: [{ label: "Live", href: "https://rigai-9yyq.vercel.app" }],
  },
  {
    name: "BidPilot — RFP Response Automation",
    category: "Enterprise AI",
    description:
      "Multi-agent CrewAI platform automating RFP responses for B2B companies. Five specialized agents: RFP Analyst, Knowledge Retriever, Writer, Compliance Checker, and Win Probability Scorer.",
    stack: ["CrewAI", "LangChain", "Next.js", "FastAPI"],
  },
  {
    name: "Mr. Olofada & KM Foods — WhatsApp Commerce",
    category: "Commerce Automation",
    description:
      "Two production WhatsApp-native commerce platforms for Nigerian food businesses. Full order lifecycle automation: AI browsing → payment → rider dispatch → notifications. Zero manual intervention. 5+ orchestrated webhooks.",
    stack: [
      "n8n",
      "GPT-4o-mini",
      "Paystack",
      "WhatsApp Cloud API",
      "LangChain",
    ],
    privateDeployment: true,
  },
  {
    name: "NatureWellness — Biomedical Research Platform",
    category: "Biomedical AI",
    description:
      "Data pipeline integrating Open Targets, KEGG, CTD, and PubMed APIs. Searches millions of peer-reviewed publications, returns ranked food-disease evidence graded A/B/C. Supports 10,000+ diseases. Sub-60s response times.",
    stack: ["FastAPI", "Railway", "React", "TypeScript", "Supabase", "Vercel"],
  },
  {
    name: "RAG AI Pipeline — Support Automation",
    category: "Enterprise AI",
    description:
      "Production Retrieval-Augmented Generation pipeline that reduced client customer support tickets by 40% in the first month. Ingests knowledge base, converts to vector embeddings, retrieves context, generates accurate responses.",
    stack: ["LangChain", "Pinecone", "pgvector", "FastAPI"],
    privateDeployment: true,
  },
  {
    name: "Hanify Solutions — AI Products (Australia)",
    category: "CTO Partnership",
    description:
      "Technical partnership as CTO building AI automation products for Australian SMBs. Active projects include PlayUp (sports matchmaking) and ProduceMart SMS automation for Nigeria and South Africa.",
    stack: ["Next.js", "Python", "AI APIs", "SMS Automation"],
    links: [{ label: "Live", href: "https://hanifysolutions.com.au" }],
  },
];

export type SkillQuadrant = {
  title: string;
  items: string[];
};

export const SKILL_QUADRANTS: SkillQuadrant[] = [
  {
    title: "AI & LLM Engineering",
    items: [
      "LangChain",
      "LangGraph",
      "CrewAI",
      "LlamaIndex",
      "OpenAI SDK",
      "Anthropic SDK",
      "Unsloth/QLoRA",
      "Prompt Engineering",
      "RAG Systems",
      "Multi-Agent Orchestration",
      "Tool-Calling",
      "Memory Systems",
      "LLMOps",
      "Gemini API",
      "HuggingFace Transformers",
    ],
  },
  {
    title: "Automation & Integration",
    items: [
      "n8n (Certified)",
      "Make.com",
      "Zapier",
      "REST APIs",
      "Webhook Orchestration",
      "Paystack",
      "WhatsApp Business API",
      "Glovo/Pandago",
      "Google Sheets API",
      "Resend",
      "Twilio",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      "AWS (EC2 · S3 · Fargate · Lightsail)",
      "Azure",
      "GCP",
      "Google Cloud Run",
      "Docker",
      "Vercel",
      "Railway",
      "Supabase",
      "FastAPI",
      "HuggingFace",
      "CI/CD",
      "Terraform",
    ],
  },
  {
    title: "Security & Compliance",
    items: [
      "Cloud Security Architecture",
      "OAuth2",
      "Threat Modeling",
      "Incident Response",
      "SAST/DAST",
      "AI Guardrails",
      "SOC 2",
      "ISO 27001",
      "AI Governance",
      "HIPAA-aware Infrastructure",
    ],
  },
  {
    title: "Languages & Frameworks",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "React",
      "Next.js",
      "FastAPI",
      "Vite",
      "Node.js",
    ],
  },
  {
    title: "Databases & Vector Stores",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Supabase",
      "Pinecone",
      "pgvector",
      "Weaviate",
      "Redis",
    ],
  },
];

export const LANGUAGES = [
  "Python",
  "TypeScript",
  "JavaScript",
  "SQL",
  "React",
  "Next.js",
  "FastAPI",
  "Vite",
  "Node.js",
];

export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Founder & CTO",
    company: "SabiFlow Technologies Limited",
    period: "Sep 2024 – Present",
    bullets: [
      "Architected and shipped 15+ production agentic AI systems, processing 500K+ autonomous actions/month",
      "Designed multi-agent orchestration workflows (LangGraph, CrewAI) cutting manual processing time by 70%",
      "Built scalable RAG pipelines across millions of documents achieving >90% response accuracy",
      "Delivered AI solutions reducing operational costs by 40% for clients in fintech, healthcare, and e-commerce",
    ],
  },
  {
    role: "CTO",
    company: "Hanify Solutions",
    location: "Australia",
    period: "2025 – Present",
    bullets: [
      "Leading technical strategy for AI automation products targeting Australian SMBs",
      "Active builds: PlayUp (sports matchmaking) and ProduceMart SMS automation",
    ],
  },
  {
    role: "AI / ML Infrastructure Engineer",
    company: "Libertas",
    location: "Contract",
    period: "Jul 2024 – Jun 2025",
    bullets: [
      "Designed low-latency LLM inference infrastructure on AWS and Azure",
      "Architected and optimized vector database solutions (Pinecone, Weaviate) for large-scale semantic search",
      "Secured AI APIs with OAuth2, rate limiting, anomaly detection, and cloud-native observability",
    ],
  },
  {
    role: "LLM Integration Specialist",
    company: "Upwork",
    location: "Freelance",
    period: "Mar 2022 – Jun 2024",
    bullets: [
      "Delivered 20+ custom LLM integrations for international clients, improving operational efficiency by 50%",
      "Built production AI assistants for customer support, content generation, and data analytics",
    ],
  },
  {
    role: "Cloud Security Engineer",
    company: "Gamblorium",
    period: "Feb 2020 – Feb 2022",
    bullets: [
      "Led cloud security across multi-cloud environments, reducing critical vulnerabilities via threat modeling",
      "Implemented SOC monitoring, incident response playbooks, and security observability patterns",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Professional Cloud Security Engineer",
    issuer: "Google Cloud",
  },
  {
    name: "Cloud Security Certification",
    issuer: "Cloud Security Alliance",
  },
  {
    name: "Cybersecurity Certification",
    issuer: "Cisco",
  },
  {
    name: "Workflow Automation Certified",
    issuer: "n8n",
  },
];

export const AGENT_GOVERNANCE = {
  eyebrow: "Agent Governance",
  headline: "Building an agent is easy now. Deploying one safely isn't.",
  subtitle:
    "Six controls that make autonomous agents safe to deploy — the line between a demo that impresses and a system an enterprise can actually run.",
  diagramAlt:
    "The Agent Governance Framework: six controls for deploying autonomous AI agents safely — least-privilege, sandboxed execution, audit trails, human-in-the-loop checkpoints, secrets management, and output verification.",
  closing:
    "When building is nearly free, trust is the scarce skill. This is the layer that provides it.",
  cta: {
    href: "https://cal.com/okaforpascal/discovery",
    label: "Deploying autonomous agents? Let's talk.",
  },
} as const;

export type GovernanceGroup = "Technical Controls" | "Governance Controls";

export type GovernancePillar = {
  number: number;
  group: GovernanceGroup;
  title: string;
  summary: string;
  description: string;
  // Real, in-production evidence. The card renders this as a distinct "In
  // production" accent block; the "In production" label is added by the card, so
  // store only the evidence sentence here. Omit to show nothing.
  proofPoint?: string;
};

export const GOVERNANCE_PILLARS: GovernancePillar[] = [
  {
    number: 1,
    group: "Technical Controls",
    title: "Least-privilege",
    summary: "Narrowest scope per agent.",
    description:
      "Every agent gets only the permissions its task requires — scoped keys, no shared god-tokens. A compromised agent can't reach what it was never granted.",
    proofPoint:
      "Alex, my outbound calling agent, can reach only the calendar and call system — never customer records or billing. A scoped agent can't leak what it can't touch.",
  },
  {
    number: 2,
    group: "Technical Controls",
    title: "Sandboxed execution",
    summary: "Hard limits on blast radius.",
    description:
      "Agents run in isolated environments with egress allowlists and resource caps. When one misbehaves, the damage is contained by design — not by hope.",
    // PROOF POINT: add real Venzip/Alex example here (set `proofPoint`)
  },
  {
    number: 3,
    group: "Technical Controls",
    title: "Audit trails for agent-to-agent actions",
    summary: "Immutable, replayable decision logs.",
    description:
      "Every tool call and hand-off is logged immutably, so any autonomous action can be reconstructed after the fact: who did what, why, and on whose behalf.",
    proofPoint:
      "Venzip, a compliance OS running with live beta users, records every user action with who, what, and when — so any change can be reconstructed and accounted for.",
  },
  {
    number: 4,
    group: "Governance Controls",
    title: "Human-in-the-loop checkpoints",
    summary: "Approval gates on risky moves.",
    description:
      "High-stakes actions — payments, deletions, outbound messages — pause for human sign-off. Autonomy where it's safe, a checkpoint where it isn't.",
    proofPoint:
      "Alex hands the call to a human the moment a lead asks to speak to a real person — no agent improvising past its remit.",
  },
  {
    number: 5,
    group: "Governance Controls",
    title: "Secrets management for BYOK systems",
    summary: "Customer keys, encrypted and scoped.",
    description:
      "In bring-your-own-key systems, credentials are encrypted at rest, scoped per tenant, never written to logs, and rotatable on demand. Trust that survives an audit.",
    proofPoint:
      "Venzip encrypts customer data with per-customer key isolation, so one tenant's credentials can never unlock another's.",
  },
  {
    number: 6,
    group: "Governance Controls",
    title: "Output verification at scale",
    summary: "A review layer the volume can't outrun.",
    description:
      "Agent output passes policy checks and evaluation gates before it ships — catching hallucinations and violations automatically when human review can't keep pace.",
    // PROOF POINT: add real Venzip/Alex example here (set `proofPoint`)
  },
];
