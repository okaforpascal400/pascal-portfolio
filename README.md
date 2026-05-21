# Pascal Okafor — Portfolio

Production-grade personal portfolio for **Ogbonna Pascal Okafor** — Agentic AI Engineer, Founder of SabiFlow Technologies, CTO at Hanify Solutions.

## Stack

- **Next.js 15** (App Router) · **TypeScript** (strict)
- **Tailwind CSS v3** with custom dark/amber design system
- **Framer Motion** for scroll animations & staggered reveals
- **Geist** (sans + mono) via `next/font`
- **Resend** for the contact form (with `mailto:` fallback)

## Develop

```bash
pnpm install     # or npm / yarn
pnpm dev         # http://localhost:3000
```

## Production

```bash
pnpm build
pnpm start
```

## Editing content

All site content (bio, projects, experience, skills, certs, contact) lives in [`lib/data.ts`](./lib/data.ts). Update the exported constants and the UI refreshes automatically.

## Contact form

Set `RESEND_API_KEY` in `.env.local` to enable real email delivery. Without it, the form gracefully falls back to a `mailto:` link. See [`.env.example`](./.env.example).

## Deploy

Built for one-click deployment on Vercel. Push to GitHub, import the repo, add env vars, ship.

## File map

```
app/                  # App Router pages, layout, API, SEO
components/
  ui/                 # Button, Card, Badge, Tag, SectionHeader
  sections/           # Hero, About, Projects, Skills, Experience,
                      # Certifications, Contact, Footer
  Navbar.tsx
  FadeIn.tsx          # Scroll-in animation primitives
  AnimatedCounter.tsx
lib/
  data.ts             # All site content
  utils.ts            # cn(), formatCompact()
public/               # Static assets (resume.pdf, profile, og)
```

## Design tokens

| Token       | Value     | Use                  |
|-------------|-----------|----------------------|
| background  | `#080808` | Page background      |
| surface     | `#111111` | Cards, sections      |
| border      | `#1f1f1f` | Dividers             |
| amber       | `#f59e0b` | Primary accent       |
| amber-dark  | `#d97706` | Secondary accent     |
| text.primary | `#f5f5f5` | Headings, body       |
| text.secondary | `#a3a3a3` | Sub-copy            |
| text.muted  | `#525252` | Labels, footers      |

---

© 2026 Ogbonna Pascal Okafor · SabiFlow Technologies Limited
