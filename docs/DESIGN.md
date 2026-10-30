# RahatNet Design System Specification

> **Target Platform:** Google Stitch & Offline Web Implementation  
> **Classification:** Public-Service Digital Infrastructure  
> **Design Philosophy:** Calm, trustworthy, high-contrast, offline-first public utility

---

## 1. System Overview & Direction

RahatNet is a disaster-resilient, offline-first digital intranet designed for zero-connectivity crises. When cellular and internet infrastructure fails, a battery-backed local server (laptop or Raspberry Pi) broadcasts a local Wi-Fi network. Citizens connect using low-cost Android smartphones (360px–412px viewports) under adverse physical conditions: harsh outdoor sunlight, dim emergency tents, emotional stress, and varying literacy levels.

### 1.1 Aesthetic & Visual Direction
* **Government Help Desk, Not a Startup:** The interface communicates stability, authority, and safety. It avoids trendy consumer-tech aesthetics.
* **Plain Citizen Language:** Always use direct, reassuring vocabulary (e.g., *"Works without internet"*, never *"offline intranet node"* or *"mesh gateway"*).
* **Depth via Borders:** Depth is communicated through 1px solid high-contrast borders (`border` token).
* **Strict Shadow Restrictions:** Shadows are permitted **only** on the sticky navigation header (`0 1px 3px 0 rgb(0 0 0 / 0.1)`) and modal dialog backdrops/containers (`0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`). All cards, buttons, banners, and panels use zero drop-shadows.
* **Prohibited Visual Treatments:**
  * NO gradients or iridescent fills.
  * NO glow effects or neon highlights.
  * NO glassmorphism, background blurs, or translucent frosted glass.
  * NO pulsing or continuous loop animations.
  * NO decorative illustrations of people or generic stock photography.
  * **NO purple or violet anywhere in the entire design system.**

---

## 2. Colour System & Tokens

### 2.1 Theme Tokens

| Token Name | Light Mode Value | Dark Mode Value | Contrast Ratio (vs Background) | Role / Usage |
| :--- | :--- | :--- | :--- | :--- |
| `background` | `#F8FAFC` | `#020617` | Base canvas | Page canvas background |
| `surface` | `#FFFFFF` | `#0F172A` | Base surface | Card, modal, and panel background |
| `surface-muted`| `#F1F5F9` | `#1E293B` | Structural surface | Table headers, chip backgrounds, code blocks |
| `border` | `#E2E8F0` | `#334155` | 1.2:1 / 3.1:1 | Structural borders (cards, inputs, dividers) |
| `text` | `#0F172A` | `#F1F5F9` | > 14:1 (WCAG AAA) | Primary headings, body copy, form labels |
| `text-muted` | `#475569` | `#94A3B8` | > 5.5:1 (WCAG AA) | Secondary meta, timestamps, placeholder text |
| `primary` | `#1D4ED8` | `#60A5FA` | > 6.0:1 / > 8.0:1 | Primary actions, links, focus indicators |
| `on-primary` | `#FFFFFF` | `#020617` | > 6.0:1 / > 8.0:1 | Text and icons placed on top of `primary` |
| `emergency` | `#B91C1C` | `#F87171` | > 6.5:1 / > 7.0:1 | Emergency section, critical alert banners, danger |
| `health` | `#0F766E` | `#2DD4BF` | > 5.8:1 / > 7.5:1 | Health section badges, icons, section band |
| `agriculture`| `#15803D` | `#4ADE80` | > 5.6:1 / > 8.2:1 | Agriculture section, success confirmations |
| `education` | `#C2410C` | `#FB923C` | > 5.2:1 / > 7.1:1 | Education section guides, icons, section band |

### 2.2 Warning Pairing Token
* **Light Mode:** Text `#92400E` on Background `#FEF3C7` (Border `#FDE68A`, Contrast > 5.5:1).
* **Dark Mode:** Text `#FCD34D` on Background `#422006` (Border `#78350F`, Contrast > 7.0:1).

### 2.3 Focus Ring
* **Token:** `focus-ring`
* **Specification:** `2px solid var(--primary)` with `2px offset var(--background)`.
* Applied uniformly to all interactive controls (buttons, links, inputs, selects, radios, checkboxes).

### 2.4 Strict Colour Usage Rules
1. **Red Exclusivity:** Emergency red (`#B91C1C` / `#F87171`) is strictly reserved for life-safety emergency content, active critical disaster alerts, and destructive staff actions (e.g., deactivating user, deleting broadcast). Red must NEVER be used as a general decorative accent.
2. **Section Identity Binding:** Each section color always appears strictly paired with its respective category icon and section name:
   * **Emergency:** Red (`#B91C1C` / `#F87171`) + `ShieldAlert` icon + "Emergency"
   * **Health:** Teal (`#0F766E` / `#2DD4BF`) + `HeartPulse` icon + "Health"
   * **Agriculture:** Forest Green (`#15803D` / `#4ADE80`) + `Sprout` icon + "Agriculture"
   * **Education:** Amber Orange (`#C2410C` / `#FB923C`) + `BookOpen` icon + "Education"
3. **Section Header Bands (Theme Exception):** Section banner header bands use the **light-mode shade with `#FFFFFF` text in BOTH Light and Dark themes**:
   * Emergency Band: `#B91C1C` background with `#FFFFFF` text.
   * Health Band: `#0F766E` background with `#FFFFFF` text.
   * Agriculture Band: `#15803D` background with `#FFFFFF` text.
   * Education Band: `#C2410C` background with `#FFFFFF` text.
4. **Universal Accessibility:** Every text-on-background pairing satisfies WCAG 2.1 AA requirements (minimum 4.5:1 for body copy; minimum 3:1 for large display text and form input borders).

---

## 3. Typography Specification

### 3.1 Typefaces
* **Latin / English Script:** `Inter`, with system fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. Bundled locally on the intranet server.
* **Devanagari / Hindi Script:** `Noto Sans Devanagari`, with fallback `sans-serif`. Bundled locally on the intranet server.

### 3.2 Font Weights
Only three weights are permitted across all screens:
* **400 (Regular):** Body text, metadata, input content, descriptions.
* **600 (Semi-Bold):** Subheadings, table headers, button labels, section titles, card headers.
* **700 (Bold):** Display titles, H1 page headings, critical alert headers, stat card numbers.

### 3.3 Type Scale (Mobile 360–390px → Desktop 1280px)

| Level | Mobile Size / Line-Height | Desktop Size / Line-Height | Weight | Tracking | Primary Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | 32px / 1.20 (38.4px) | 48px / 1.15 (55.2px) | 700 | -0.02em | Hero headline on Home screen |
| **H1** | 28px / 1.25 (35.0px) | 36px / 1.20 (43.2px) | 700 | -0.015em | Page title, article title |
| **H2** | 22px / 1.30 (28.6px) | 28px / 1.25 (35.0px) | 600 | -0.01em | Article section heading, card group heading |
| **H3** | 18px / 1.35 (24.3px) | 20px / 1.30 (26.0px) | 600 | 0 | Sub-section headers, card titles, modal titles |
| **Body** | 17px / 1.65 (28.0px) | 17px / 1.65 (28.0px) | 400 | 0 | Article reading paragraphs, help request form instructions |
| **Small** | 15px / 1.50 (22.5px) | 15px / 1.50 (22.5px) | 400 / 600 | 0 | Navigation links, table content, form labels, buttons |
| **Caption** | 13px / 1.40 (18.2px) | 13px / 1.40 (18.2px) | 400 | +0.01em | Timestamps, read times, helper text, breadcrumbs |

### 3.4 Hindi / Devanagari Leading Adjustment
Devanagari upper and lower vowel markers (*matras*) require additional vertical clearance. All line-heights applied to Hindi content must be multiplied by **1.15×**:
* Hindi Body: 17px / line-height ~1.90 (32.3px).
* Hindi Headings: H1 line-height 1.40; H2 line-height 1.45.

### 3.5 Reading Measure (Optimal Line Length)
Article prose text is strictly constrained to a maximum width of **720px** (~68 characters per line) to maintain reading comfort under fatigue or distraction.

---

## 4. Spacing, Grid, and Layout

### 4.1 Spacing Scale (4px Grid)
`4px` (space-1), `8px` (space-2), `12px` (space-3), `16px` (space-4), `20px` (space-5), `24px` (space-6), `32px` (space-8), `40px` (space-10), `48px` (space-12), `64px` (space-16).

### 4.2 Breakpoints & Frame Targets
* **Mobile (base):** `390px` frame width (must cleanly fit `360px` with 0 horizontal overflow).
* **Tablet:** `768px` frame width (`sm`: 640px, `md`: 768px).
* **Desktop:** `1280px` frame width (`lg`: 1024px, `xl`: 1280px).
* **Max Container Width:** `1120px` (centered with automatic horizontal margins).
* **Article Content Column:** Max width `720px`.

### 4.3 Corner Radii Tokens
* `radius-control`: `8px` (buttons, text inputs, selects, textareas).
* `radius-card`: `12px` (article cards, section cards, helpline cards, stat cards).
* `radius-panel`: `16px` (modal dialogs, alert banners, side draw panels, sticky trays).
* `radius-pill`: `9999px` / Full (category tags, status pills, filter chips).

### 4.4 Tap Targets & Accessibility
* Interactive elements (buttons, nav chips, form inputs, toggles) possess a **minimum target footprint of 44px × 44px**.
* Horizontal gap between adjacent touch targets: minimum `8px`.

### 4.5 Iconography
* **Icon Set:** Lucide icons, outline style.
* **Sizes:** `20px` (inline controls, breadcrumbs, table actions) and `24px` (section headers, category cards, navigation).
* **Stroke Width:** Exactly `1.75px` across all sizes.

### 4.6 Motion Principles
* Transitions are purely functional: `150ms ease-out` for border color and background shifts.
* Fully respects `@media (prefers-reduced-motion: reduce)` with instantaneous zero-duration transitions.

---

## 5. Component Specifications & State Matrix

### 5.1 App Header
* **Mobile (390px):**
  * Top bar (height 56px, background `surface`, border-bottom `border`, subtle shadow `0 1px 3px 0 rgb(0 0 0 / 0.1)`): Left: "RahatNet" wordmark (700 weight, 20px, text `text` with green wifi/signal dot); Right: search icon button (44px target), saved guides icon button (with badge count if > 0), language toggle ("EN / हिंदी"), theme toggle (Sun/Moon).
  * Sub-bar: Horizontally scrollable row of 4 category chips (Emergency, Health, Agriculture, Education) with icons. Container never scrolls horizontally; only the chip row overflows cleanly with edge fade.
* **Desktop (1280px):**
  * Single bar (height 64px, max-width 1120px centered): Left: "RahatNet" wordmark + "Works without internet" badge (`surface-muted`); Center: Category links with active border underline; Right: inline search field (width 240px), language toggle ("EN / हिंदी"), theme toggle (Light / Dark / System), Saved Articles link with bookmark icon.

### 5.2 Section Nav
* Horizontal pill chips with icon + label + guide count.
* **States:**
  * *Default:* Background `surface-muted`, border 1px `border`, text `text-muted`.
  * *Hover:* Background `surface`, border 1px `primary`, text `text`.
  * *Active/Current:* Background `primary`, border 1px `primary`, text `on-primary`.
  * *Focus:* Focus ring (2px primary, 2px offset).

### 5.3 Theme Toggle (Light / Dark / System)
* Segmented pill control or icon dropdown.
* Shows current selection with solid background `surface` (light mode) or `surface-muted` (dark mode) and 1px `border`. Focus indicator on active state.

### 5.4 Language Toggle (EN / हिंदी)
* Compact segmented control (44px height).
* Options: "EN" and "हिंदी". Active language displayed in bold (600) with `surface` background and `primary` text.
* Must cleanly render Devanagari script (e.g. "हिंदी", "आपातकालीन") without vertical clipping.

### 5.5 Search Field
* Height: 44px. Left Lucide `Search` icon (20px, `text-muted`). Clear `X` button on right when non-empty.
* **States:**
  * *Default:* Background `surface`, border 1px `border`, text `text`, placeholder `text-muted`.
  * *Hover:* Border 1px `text-muted`.
  * *Focus:* Border 1px `primary`, focus ring (2px primary, 2px offset).
  * *Disabled:* Background `surface-muted`, text `text-muted`, cursor not-allowed.

### 5.6 Buttons
* Minimum height 44px, padding 10px 20px, radius 8px (`radius-control`), font-weight 600, font-size 15px.
* **Variants:**
  * **Primary:** Background `primary`, text `on-primary`, border 1px transparent. Hover: 10% darker/lighter. Focus: focus ring. Disabled: opacity 50%, cursor not-allowed.
  * **Secondary:** Background `surface-muted`, text `text`, border 1px `border`. Hover: background `border`. Focus: focus ring.
  * **Outline:** Background transparent, text `text`, border 1px `border`. Hover: background `surface-muted`. Focus: focus ring.
  * **Ghost:** Background transparent, text `primary`, border 1px transparent. Hover: background `surface-muted`. Focus: focus ring.
  * **Emergency:** Background `emergency`, text `#FFFFFF`, border 1px transparent. Hover: darkened red. Focus: focus ring with emergency color. Strictly reserved for urgent help and critical triggers.

### 5.7 Section Card
* Container: Background `surface`, border 1px `border`, radius 12px (`radius-card`), padding 20px.
* Elements: Section icon (24px) in colored circular badge (44px), section title (H3, 18-20px), description (Body, 15px, `text-muted`), guide count badge (e.g., "12 guides").
* States: Default (border `border`), Hover (border `text-muted`, slight background shift to `surface-muted`), Focus (focus ring).

### 5.8 Article Card
* Container: Background `surface`, border 1px `border`, radius 12px (`radius-card`), padding 16px to 20px.
* Elements: Category pill (e.g., Health in teal), article title (18px, weight 600), summary snippet (15px, `text-muted`, 2-line clamp), metadata footer (updated date in en-IN format e.g. "14 Oct 2026", reading time e.g. "4 min read", bookmark save icon button).
* States: Default, Hover (border `primary`), Focus (focus ring).

### 5.9 Alert Banner
* Radius 16px (`radius-panel`), padding 16px, border 1px solid, Lucide alert icon (24px).
* **Severity Levels:**
  * **Critical:** Background `#FEF2F2` (Light) / `#450A0A` (Dark), border `#F87171` (Light) / `#991B1B` (Dark), text `#991B1B` (Light) / `#FCA5A5` (Dark), icon Lucide `AlertTriangle`. **NOT dismissible.**
  * **Warning:** Background `#FEF3C7` (Light) / `#422006` (Dark), border `#FDE68A` (Light) / `#78350F` (Dark), text `#92400E` (Light) / `#FCD34D` (Dark), icon Lucide `AlertCircle`. Dismissible (`X` icon button).
  * **Info:** Background `#EFF6FF` (Light) / `#172554` (Dark), border `#BFDBFE` (Light) / `#1E40AF` (Dark), text `#1E40AF` (Light) / `#93C5FD` (Dark), icon Lucide `Info`. Dismissible.

### 5.10 Emergency Helpline Card
* Container: Background `surface`, border 2px solid `emergency` (`#B91C1C` / `#F87171`), radius 12px (`radius-card`), padding 20px.
* Header: `ShieldAlert` icon in red, Title "Emergency Helplines".
* Mandatory Advisory Note: *"Voice and SMS calls require cellular mobile network connectivity, which this local Wi-Fi unit cannot provide."*
* Grid of tap-to-call numbers: 112 (National Emergency), 108 (Disaster Medical & Ambulance), 101 (Fire), 1078 (NDMA Helpline). Large 18px bold numbers with 44px tap targets (`tel:` links).

### 5.11 Breadcrumb
* Layout: Inline horizontal list, font-size 13px (`caption`), text `text-muted`.
* Separator: Lucide `ChevronRight` (16px, `text-muted`).
* Last item: Current page title in `text` (font-weight 600, non-linked). Focus ring on active links.

### 5.12 Tag & Badge
* **Tag:** Small interactive pill, radius `radius-pill`, padding 4px 10px, font-size 13px, font-weight 600, border 1px `border`.
* **Badge:** Non-interactive status or category indicator.
  * *Emergency Badge:* Red background `#FEE2E2` / `#7F1D1D`, text `#991B1B` / `#FCA5A5`.
  * *Health Badge:* Teal background `#CCFBF1` / `#134E4A`, text `#0F766E` / `#5EEAD4`.
  * *Agriculture Badge:* Green background `#DCFCE7` / `#14532D`, text `#15803D` / `#86EFAC`.
  * *Education Badge:* Orange background `#FFEDD5` / `#7C2D12`, text `#C2410C` / `#FDBA74`.

### 5.13 Form Fields (Text, Textarea, Select, Radio Group, File Upload)
* Labels: Font-size 15px, weight 600, text `text`, mandatory asterisk indicator where required.
* Inputs / Selects / Textareas: Height 44px (min 100px for textareas), radius 8px (`radius-control`), background `surface`, border 1px `border`, padding 10px 14px, font-size 15px.
* **States:**
  * *Default:* Border 1px `border`.
  * *Hover:* Border 1px `text-muted`.
  * *Focus:* Border 1px `primary`, focus ring (2px primary, 2px offset).
  * *Error:* Border 1px `emergency` (`#B91C1C` / `#F87171`), focus ring in emergency red.
  * *Disabled:* Background `surface-muted`, cursor not-allowed.
* Inline Error Message: Placed directly below input, font-size 13px, font-weight 600, text `emergency`, with leading Lucide `AlertCircle` (16px).
* **Radio Group (Card Variant):** Large selectable cards (min height 48px), radius 8px, border 1px `border`. When selected: border 2px `primary`, background `surface-muted` or tint.
* **File Upload:** Dashed 1px `border`, radius 8px, background `surface-muted`, padding 24px, file chips showing filename + size + remove button.

### 5.14 Empty State
* Container: Centered alignment, padding 48px 24px, border 1px dashed `border`, radius 12px, background `surface`.
* Elements: Lucide icon (48px, `text-muted`), Heading (H3, 18-20px, weight 600), Description (Body 15px, `text-muted`), Action button (Primary or Outline).

### 5.15 Toast Notification
* Fixed position: Top-right (Desktop) or Top-center (Mobile), z-index 100.
* Container: Background `surface`, border 1px `border`, radius 8px, padding 12px 16px, shadow `0 4px 6px -1px rgb(0 0 0 / 0.1)`.
* Variants: Success (Green icon), Error (Red icon), Info (Blue icon). Dismiss button included.

### 5.16 Status Pill (New / In progress / Resolved)
* Radius `radius-pill`, padding 4px 12px, font-size 13px, font-weight 600.
* **New:** Blue background `#DBEAFE` / `#1E3A8A`, text `#1D4ED8` / `#93C5FD`.
* **In progress:** Amber background `#FEF3C7` / `#451A03`, text `#92400E` / `#FCD34D`.
* **Resolved:** Green background `#DCFCE7` / `#052E16`, text `#15803D` / `#4ADE80`.

### 5.17 Data Table
* Container: Border 1px `border`, radius 12px, overflow-x auto (never breaks page container).
* Header Row: Background `surface-muted`, text 13px uppercase, weight 600, text `text-muted`, border-bottom 1px `border`, height 44px.
* Data Rows: Background `surface`, text 15px `text`, border-bottom 1px `border`, height 52px. Hover row: background `surface-muted`.

### 5.18 Stat Card
* Container: Background `surface`, border 1px `border`, radius 12px, padding 20px.
* Elements: Stat title (13px uppercase, weight 600, `text-muted`), Large numerical count (32px Bold `text`), trend/context note (13px, e.g. "3 urgent").

### 5.19 Modal Dialog
* Backdrop: `rgba(2, 6, 23, 0.7)` in dark mode / `rgba(15, 23, 42, 0.5)` in light mode.
* Dialog Container: Max width 520px, background `surface`, border 1px `border`, radius 16px (`radius-panel`), padding 24px, shadow `0 10px 15px -3px rgb(0 0 0 / 0.1)`.
* Elements: Header with title (H3) and close `X` button (44px target), dialog body, footer actions (Cancel Outline + Confirm Primary).

### 5.20 Footer
* Container: Border-top 1px `border`, background `surface`, padding 32px 16px, text-align center on mobile / 3-column grid on desktop.
* Content: "RahatNet — Disaster-Ready Offline Intranet", "Works without internet", server uptime / local storage indicator, Quick section links, Admin/Volunteer staff login link.
