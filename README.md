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

# Or build and start the standalone production server
pnpm build
pnpm start
```

Visit [http://localhost:3000](http://localhost:3000) on your device.

> **Offline Demonstration Mode**: You can disconnect your development machine from the Internet (disable Wi-Fi / unplug Ethernet) and run `pnpm start`. All fonts, icons, layouts, and articles render completely with zero failed network requests.

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

Academic evaluation mapping for **INT252 (ReactJS)** and **INT257 (Next.js)**:

| Feature | Where in code | INT252 unit | INT257 unit |
| :--- | :--- | :--- | :--- |
| **Component Hierarchy & Atomic UI Primitives** | [Button.tsx](file:///Users/adii/Development/RahatNet/src/components/ui/Button.tsx), [Card.tsx](file:///Users/adii/Development/RahatNet/src/components/ui/Card.tsx), [Badge.tsx](file:///Users/adii/Development/RahatNet/src/components/ui/Badge.tsx), [Container.tsx](file:///Users/adii/Development/RahatNet/src/components/ui/Container.tsx) | **Unit 1**: React Component Architecture, Props & Children Composition | **Unit 1**: Reusable Component Libraries in Modern Frameworks |
| **Server Components & Zero-Client-JS Markdown** | [MarkdownRenderer.tsx](file:///Users/adii/Development/RahatNet/src/features/content/components/MarkdownRenderer.tsx), [page.tsx](file:///Users/adii/Development/RahatNet/src/app/(public)/[category]/[slug]/page.tsx) | **Unit 2**: Pure Component Rendering & Unidirectional Data Flow | **Unit 2**: React 19 Server Components (RSC) Architecture |
| **Client Error Boundaries & Interactive Fallback** | [error.tsx](file:///Users/adii/Development/RahatNet/src/app/error.tsx) | **Unit 4**: Error Boundaries, Lifecycle & Client Error Recovery | **Unit 3**: Next.js App Router Error Handling & `error.tsx` Convention |
| **Static Site Generation (SSG) with `generateStaticParams`** | [page.tsx](file:///Users/adii/Development/RahatNet/src/app/(public)/[category]/page.tsx), [slug/page.tsx](file:///Users/adii/Development/RahatNet/src/app/(public)/[category]/[slug]/page.tsx) | **Unit 5**: Asynchronous Data Fetching & Async/Await in React | **Unit 2**: Static Pre-rendering & `dynamicParams = false` |
| **Route Groups & Nested Layouts** | [layout.tsx](file:///Users/adii/Development/RahatNet/src/app/(public)/layout.tsx), [category/layout.tsx](file:///Users/adii/Development/RahatNet/src/app/(public)/[category]/layout.tsx) | **Unit 1**: Component Layout Patterns & View Slots | **Unit 1**: App Router Nested Layouts & Route Groups `(public)` |
| **Dynamic Feedback (Loading & 404 Handlers)** | [loading.tsx](file:///Users/adii/Development/RahatNet/src/app/loading.tsx), [not-found.tsx](file:///Users/adii/Development/RahatNet/src/app/not-found.tsx) | **Unit 3**: Conditional Rendering & Fallback UI States | **Unit 3**: Next.js File Conventions (`loading.tsx`, `not-found.tsx`) |
| **Metadata API & SEO Prerendering** | [layout.tsx](file:///Users/adii/Development/RahatNet/src/app/layout.tsx), `generateMetadata` in category & article pages | **Unit 2**: Document Head Management & Declarative Metadata | **Unit 4**: Next.js Metadata API (`generateMetadata` & Root Template) |
| **Frontmatter Validation & Runtime Schemas** | [article.schema.ts](file:///Users/adii/Development/RahatNet/src/features/content/schemas/article.schema.ts), [articles.ts](file:///Users/adii/Development/RahatNet/src/features/content/lib/articles.ts) | **Unit 5**: Data Validation, Prop Types & Runtime Safety | **Unit 5**: TypeScript Integration & Content Layer Abstraction |
| **Zero-Internet Asset Bundling & Standalone Output** | [next.config.ts](file:///Users/adii/Development/RahatNet/next.config.ts), [globals.css](file:///Users/adii/Development/RahatNet/src/app/globals.css) | **Unit 1**: Local Asset Management & Offline CSS Architecture | **Unit 6**: Standalone Production Deployment & Zero-Dependency Optimization |

---

## 6. Preloaded Emergency Helplines (India)

- **112**: National Unified Emergency Helpline (Police, Fire, Ambulance)
- **108**: Disaster Medical Transit & Ambulance
- **101**: Fire & Rescue Services
- **1078**: National Disaster Management Authority (NDMA) Control Room

*Notice: Voice calls require a cellular network connection. RahatNet delivers digital information over local Wi-Fi without active mobile service.*
