# Google Stitch Prompt Suite for RahatNet

This directory contains the production-ready prompt suite for generating the complete RahatNet offline intranet user interface within [Google Stitch](https://stitch.withgoogle.com). Each screen file contains self-contained, ready-to-paste prompts tailored for specific device viewports, along with dark mode verification criteria and screen-specific constraints.

---

## 1. End-to-End Generation Workflow

Follow this standardized 5-step procedure to generate consistent, brand-aligned screens in Google Stitch:

```
+-------------------------------------------------------------+
| Step 1: Import Design System                                |
| Upload docs/DESIGN.md to initialize design tokens & rules   |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
| Step 2: Generate Anchor Component Sheet                     |
| Paste docs/stitch/00-components.md into 1280px canvas       |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
| Step 3: Generate Screens Sequentially                       |
| Run prompts 01 through 16 in exact numerical order          |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
| Step 4: Verify Dark Mode in Stitch Theme Editor             |
| Toggle theme and run the "Dark mode check" for each screen  |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
| Step 5: Export & Handover                                   |
| Download visual specifications, assets, and screen instances|
+-------------------------------------------------------------+
```

### Step 1: Import Design System
1. Open Google Stitch and create a new project named **"RahatNet Offline Intranet"**.
2. Navigate to **Design System** settings.
3. Import or upload `docs/DESIGN.md` as the authoritative source of truth. Stitch will extract the color tokens, typography scales (Inter & Noto Sans Devanagari), border radius rules, and layout constraints.

### Step 2: Generate Anchor Component Sheet
1. Create a **1280px Desktop** screen.
2. Copy and paste the prompt from `docs/stitch/00-components.md`.
3. Generate the screen. This anchors all atomic components (buttons, badges, inputs, banners, helpline cards, status pills) so subsequent screens maintain visual fidelity.

### Step 3: Generate Screens in Order
Generate screens in their defined numerical order. When generating each screen:
1. Select the target device canvas (**Mobile 390px**, **Tablet 768px**, or **Desktop 1280px**).
2. Copy the corresponding fenced code block prompt from the screen file.
3. Paste the prompt directly into Stitch. Every prompt is 100% self-contained and explicitly invokes: `"Use the project design system"`.

### Step 4: Validate Dark Mode in Theme Editor
1. In Stitch's screen inspector, switch the theme mode from **Light** to **Dark**.
2. Run through the **"Dark mode check"** checklist documented in each screen file:
   * Background switches to `#020617` and surface to `#0F172A`.
   * Section header bands (Emergency `#B91C1C`, Health `#0F766E`, Agriculture `#15803D`, Education `#C2410C`) **retain their solid light-mode background color with white text** in dark mode.
   * Text/surface contrast meets WCAG AA (minimum 4.5:1).
   * Alert banners remain legible without glow or washed-out backgrounds.
   * No purple or violet tones appear anywhere.

### Step 5: Export & Inspection
Export the generated screens and code specifications for integration into Next.js.

---

## 2. Screen & Device Coverage Checklist Matrix

| File | Screen Name | Target Audience | Device Frame | Light Mode Verified | Dark Mode Verified |
| :--- | :--- | :--- | :--- | :---: | :---: |
| `00-components.md` | Component System Sheet | Design Anchor | Desktop (1280px) | [ ] | [ ] |
| `01-home.md` | Home & Crisis Overview | Citizens | Mobile (390px) | [ ] | [ ] |
| `01-home.md` | Home & Crisis Overview | Citizens | Tablet (768px) | [ ] | [ ] |
| `01-home.md` | Home & Crisis Overview | Citizens | Desktop (1280px) | [ ] | [ ] |
| `02-section.md` | Category / Section Index | Citizens | Mobile (390px) | [ ] | [ ] |
| `02-section.md` | Category / Section Index | Citizens | Desktop (1280px) | [ ] | [ ] |
| `03-article.md` | Guide Reading View | Citizens | Mobile (390px) | [ ] | [ ] |
| `03-article.md` | Guide Reading View | Citizens | Tablet (768px) | [ ] | [ ] |
| `03-article.md` | Guide Reading View | Citizens | Desktop (1280px) | [ ] | [ ] |
| `04-search.md` | Search & Filter Results | Citizens | Mobile (390px) | [ ] | [ ] |
| `04-search.md` | Search & Filter Results | Citizens | Desktop (1280px) | [ ] | [ ] |
| `05-saved.md` | Saved Offline Guides | Citizens | Mobile (390px) | [ ] | [ ] |
| `05-saved.md` | Saved Offline Guides | Citizens | Desktop (1280px) | [ ] | [ ] |
| `06-request-help.md` | Request Emergency Help | Citizens | Mobile (390px) | [ ] | [ ] |
| `06-request-help.md` | Request Emergency Help | Citizens | Desktop (1280px) | [ ] | [ ] |
| `07-not-found.md` | 404 Recovery Screen | Citizens | Mobile (390px) | [ ] | [ ] |
| `07-not-found.md` | 404 Recovery Screen | Citizens | Desktop (1280px) | [ ] | [ ] |
| `10-login.md` | Staff Authentication | Staff & Admins | Mobile (390px) | [ ] | [ ] |
| `10-login.md` | Staff Authentication | Staff & Admins | Desktop (1280px) | [ ] | [ ] |
| `11-dashboard.md` | Staff Operational Hub | Staff & Admins | Desktop (1280px) | [ ] | [ ] |
| `12-articles-list.md`| Article Management Table| Staff & Admins | Desktop (1280px) | [ ] | [ ] |
| `13-article-editor.md`| Markdown Guide Editor | Staff & Admins | Desktop (1280px) | [ ] | [ ] |
| `14-alerts.md` | Broadcast Alerts Dispatch| Staff & Admins | Desktop (1280px) | [ ] | [ ] |
| `15-help-requests.md`| Citizen Triage Desk | Volunteers | Mobile (390px) | [ ] | [ ] |
| `15-help-requests.md`| Citizen Triage Desk | Volunteers | Desktop (1280px) | [ ] | [ ] |
| `16-users.md` | Staff Account Roster | Administrators | Desktop (1280px) | [ ] | [ ] |

**Total Screen Prompts:** 25 Prompts across 15 screen definitions + 1 component system sheet.
