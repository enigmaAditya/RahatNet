# RahatNet (राहतनेट) — Phase 1

> **Disaster-Ready Offline Intranet in a Box**  
> Hyperlocal emergency, health, agricultural, and educational knowledge delivered locally with zero runtime internet dependency during crises.

---

## 1. What is RahatNet?

RahatNet is an offline-first intranet appliance engineered for disaster zones and catastrophic connectivity failures. In scenarios where cellular towers are down, fiber backbones are severed, or power grids fail (e.g., following earthquakes, severe monsoons, or cyclones), RahatNet runs on a single local machine (such as a laptop or a Raspberry Pi) broadcasting a local Wi-Fi hotspot.

Citizens connect their mobile phones to this local Wi-Fi and open the portal directly in any standard browser to read verified emergency, health, agricultural, and educational advice.

### Key Architectural Constraints
- **Zero Runtime Internet Dependency**: Absolutely no CDNs, external scripts, remote stylesheets, analytics tracking, or external image links.
- **Locally Bundled Typography**: Inter Variable and Noto Sans Devanagari (weights 400 and 500) installed via `@fontsource` npm packages and bundled directly into local static media chunks.
- **Server Component First**: Entirely Server Components by default; client components are strictly restricted to interactive boundaries (`src/app/error.tsx`).
- **Data Access Abstraction**: Pages read articles exclusively through typed async functions in `src/features/content/lib/articles.ts` to allow a seamless swap to SQLite/Prisma in Phase 2.

---

## 2. Getting Started

### Prerequisites
- **Node.js**: v20+ or v22+
- **pnpm**: v9+ or v11+ (`corepack enable` if pnpm is not installed)

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd RahatNet

# Install dependencies strictly offline/local
pnpm install
```

### Running Locally

```bash
# Start the development server
pnpm dev

# Or build standalone bundle and start production server
pnpm build
pnpm start
```

### LAN / Wi-Fi Access for Stranded Citizens
To allow mobile phones and client devices connected to the machine's local Wi-Fi / hotspot to access RahatNet, start the standalone production server bound to all network interfaces:

```bash
HOSTNAME=0.0.0.0 PORT=3000 pnpm start
```

Then on any phone or tablet connected to the same Wi-Fi, open:
```text
http://<laptop-ip>:3000
```
*(e.g., `http://10.35.23.211:3000`)*

> **Offline Demonstration Mode**: You can disconnect your development machine completely from the Internet (turn off WAN Wi-Fi / unplug Ethernet) and run `pnpm start`. All fonts, icons, layouts, and articles render completely with zero external requests.

---

## 3. Project Structure

```
RahatNet/
├── content/                              # Markdown articles with frontmatter
│   ├── emergency/                        # Earthquake, flood, and first-aid safety
│   ├── health/                           # Safe drinking water, ORS, heat stroke
│   ├── agriculture/                      # Crop protection, livestock, field recovery
│   └── education/                        # Displacement learning, drills, family go-bag
├── public/                               # Local static assets
├── src/
│   ├── app/                              # Next.js App Router (thin routes only)
│   │   ├── (public)/                     # Route group sharing public layout
│   │   │   ├── layout.tsx                # Shared layout with SiteHeader & SiteFooter
│   │   │   ├── page.tsx                  # Home page (Hero, Helplines, Category grid, Latest)
│   │   │   └── [category]/
│   │   │       ├── layout.tsx            # Nested category layout with color band & breadcrumbs
│   │   │       ├── page.tsx              # Category guide listing (SSG)
│   │   │       └── [slug]/
│   │   │           └── page.tsx          # Article view with Markdown renderer & related links
│   │   ├── error.tsx                     # Client error boundary with retry action
│   │   ├── loading.tsx                   # Accessible skeleton loading state
│   │   ├── not-found.tsx                 # Friendly offline 404 handler
│   │   ├── globals.css                   # Tailwind v4 configuration & local @fontsource imports
│   │   └── layout.tsx                    # Root HTML layout & metadata template
│   ├── components/
│   │   ├── layout/                       # SiteHeader, SiteFooter
│   │   └── ui/                           # Button, Card, Badge, Container primitives
│   ├── config/
│   │   └── site.ts                       # Site branding, category config, India helplines
│   └── features/
│       └── content/
│           ├── components/               # ArticleCard, CategoryCard, EmergencyCard, MarkdownRenderer
│           ├── lib/                      # articles.ts (Typed async content access layer)
│           └── schemas/                  # article.schema.ts (Zod validation for frontmatter)
├── next.config.ts                        # Next.js config with output: 'standalone'
├── package.json                          # Dependencies & scripts
└── tsconfig.json                         # Strict TypeScript configuration
```

---

## 4. Content Layer & Validation

Each article in `content/<category>/<slug>.md` contains YAML frontmatter validated via a strict **Zod** schema (`src/features/content/schemas/article.schema.ts`):

```yaml
---
title: "Earthquake Safety and Survival Guide"
slug: "earthquake-safety"
summary: "Essential actions to protect yourself before, during, and immediately after a sudden earthquake tremor."
category: "emergency"
updatedAt: "2026-10-20"
tags:
  - "earthquake"
  - "safety"
  - "survival"
  - "evacuation"
readingMinutes: 4
source: "NDMA Earthquake Guidelines"
---
```

**Build-Time Safety**: If any article contains invalid, missing, or malformed frontmatter, the build immediately aborts with an informative error identifying the exact file and invalid properties.

---

## 5. Syllabus Coverage

Academic evaluation mapping for **INT252 (ReactJS)** and **INT257 (Next.js)** based on the official syllabi:

| Feature | Where in code | INT252 unit | INT257 unit |
| :--- | :--- | :--- | :--- |
| **Feature-Based Folder Structure & ES6+ Architecture** | `src/app/`, `src/features/`, `src/components/`, `src/config/` | **Unit I**: ES6+/immutability, React fundamentals, feature-based folder structure, JSX | **Unit I**: Next.js fundamentals, App Router structure |
| **Component Design, Props Composition & Accessible UI** | [`Button.tsx`](src/components/ui/Button.tsx), [`Card.tsx`](src/components/ui/Card.tsx), [`Badge.tsx`](src/components/ui/Badge.tsx), [`Container.tsx`](src/components/ui/Container.tsx) | **Unit II**: Component design (props, composition, conditional rendering, lifting state) | **Unit I**: App Router reusable components & primitives |
| **Tailwind Styling, Responsive Breakpoints & Semantic HTML** | [`globals.css`](src/app/globals.css), [`SiteHeader.tsx`](src/components/layout/SiteHeader.tsx), [`SiteFooter.tsx`](src/components/layout/SiteFooter.tsx) | **Unit II**: Styling (Tailwind, responsive breakpoints, accessibility, semantic HTML) | **Unit I**: App Router layouts and semantic UI design |
| **Client Error Boundaries & Interactive Lifecycle Recovery** | [`error.tsx`](src/app/error.tsx) | **Unit III**: State/events + hooks (`useEffect`, interactive retry handler) | **Unit I**: Error and loading UI (`error.tsx` convention) |
| **Frontmatter Validation & Runtime Type Safety** | [`article.schema.ts`](src/features/content/schemas/article.schema.ts), [`articles.ts`](src/features/content/lib/articles.ts) | **Unit IV**: Forms + validation with Zod | **Unit VI**: Industry practices (architecture, integrity checks) |
| **Static Site Generation (SSG) & Content Layer Abstraction** | [`[category]/page.tsx`](src/app/(public)/[category]/page.tsx), [`[slug]/page.tsx`](src/app/(public)/[category]/[slug]/page.tsx), [`articles.ts`](src/features/content/lib/articles.ts) | **Unit II**: Conditional & static component rendering | **Unit II**: Rendering strategies (SSG via `generateStaticParams`, `dynamicParams = false`) |
| **Route Groups & Dynamic Nested Layouts** | [`(public)/layout.tsx`](src/app/(public)/layout.tsx), [`[category]/layout.tsx`](src/app/(public)/[category]/layout.tsx) | **Unit II**: Component design (composition, view slots) | **Unit I**: Routing (file-based, dynamic, nested layouts, route groups `(public)`) |
| **Fallback States (Loading & Friendly 404 Handlers)** | [`loading.tsx`](src/app/loading.tsx), [`not-found.tsx`](src/app/not-found.tsx) | **Unit II**: Conditional rendering & fallback presentation | **Unit I**: App Router special files (`loading.tsx`, `not-found.tsx`) |
| **Metadata API & Prerendered Head Management** | [`layout.tsx`](src/app/layout.tsx), `generateMetadata` in category & article pages | — | **Unit V**: Performance & SEO (Metadata API & root template) |
| **Zero-Internet Local Asset Bundling & Standalone Deployment** | [`next.config.ts`](next.config.ts), [`scripts/prepare-standalone.mjs`](scripts/prepare-standalone.mjs) | — | **Unit V**: Deployment (standalone production build & execution) |

---

## 6. Preloaded Emergency Helplines (India)

- **112**: National Unified Emergency Helpline (Police, Fire, Ambulance)
- **108**: Disaster Medical Transit & Ambulance
- **101**: Fire & Rescue Services
- **1078**: National Disaster Management Authority (NDMA) Control Room

*Notice: Voice calls require a cellular network connection. RahatNet delivers digital information over local Wi-Fi without active mobile service.*
