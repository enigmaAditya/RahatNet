# 03 Article Guide Reading Screen

### Purpose and Audience
Detailed guide reading view for citizens and emergency volunteers. Delivers clear, distraction-free life-safety instructions, survival steps, tables, offline file attachments, and local bookmarking capabilities.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet article reading view. Use the project design system. Layout top to bottom on a #F8FAFC canvas with 1px #E2E8F0 borders and #0F172A text. At the top, show the sticky 56px header with "RahatNet" logo, search icon, saved button, language toggle ("EN / हिंदी" showing "आपातकालीन"), and theme toggle. Below header, show a back link "← Back to Emergency guides" and breadcrumb "Home / Emergency / Flood Protocols". Next, display the red Emergency section badge and a "हिंदी उपलब्ध" (Hindi Available) badge. Render H1 "Flood Safety and Evacuation Protocols", a 17px summary paragraph, and a meta row showing updated date "14 Oct 2026", reading time "6 min read", source "NDMA", and a primary "Save Offline" bookmark button. Inside the 720px max-width body column (17px text, line-height 1.65, ~68 characters per line), display H2 "Immediate Actions", a bulleted safety protocol list, a highlighted amber caution box with border #FDE68A and text #92400E ("Never drive or walk through moving water — 15cm can knock you down"), and a simple 2-column data table "Flood Stage vs Evacuation Timing". Below the text, include an attachments box with downloadable offline PDF "Ward 4 Evacuation Map (1.2 MB)" and PNG image. Finish with "More in Emergency" article cards and the mobile footer.
```

---

### Stitch Prompt: Tablet (768px)

```text
Design a 768px tablet screen for the RahatNet article guide view. Use the project design system. Layout top to bottom on a #F8FAFC canvas with #0F172A text and 1px #E2E8F0 borders. At the top, show the 60px header with "RahatNet" wordmark, "Works without internet" pill, search bar, language toggle ("EN / हिंदी" showing "आपातकालीन सुरक्षा"), saved articles link, and theme switch. Below, render breadcrumb "Home / Emergency / Flood Protocols" and a back link. Show the Emergency category badge (ShieldAlert, #B91C1C) alongside a bilingual tag "हिंदी अनुवाद उपलब्ध". Display H1 "Flood Safety and Evacuation Protocols", a bold introductory summary, and an article meta bar (NDMA source, updated 14 Oct 2026, 6 min read) with a 44px "Save Offline" bookmark toggle button. The 720px centered reading column contains H2 "Evacuation and Safety Rules", a numbered emergency list, an amber warning callout card ("CAUTION: Avoid electrical poles and standing water"), and a 3-column table comparing flood depth to danger level. Below, display an attachments panel with "Ward 4 Evacuation Route Map (PDF, 1.2 MB)" and "First Response Checklist (PNG, 450 KB)". Finish with a 2-column "More in Emergency" card grid featuring "Earthquake Safety and Survival Guide" and "Basic First Aid: Bleeding and Burn Management", followed by the footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet article reading view. Use the project design system. Layout top to bottom on a #F8FAFC canvas with #0F172A text within a 1120px container with 1px #E2E8F0 borders. Sticky 64px header features the "RahatNet" wordmark, "Works without internet" badge, section links, 240px search bar, "EN / हिंदी" switch with Devanagari text "आपातकालीन", theme toggle, and saved link. Below header, show breadcrumb "Home / Emergency / Flood Protocols" and "← Back to Emergency". The article layout features a centered 720px reading column (~68 characters per line). At the top: Emergency category badge (ShieldAlert, #B91C1C), bilingual badge "हिंदी अनुवाद उपलब्ध", H1 "Flood Safety and Evacuation Protocols", leading summary, and a meta row (NDMA India, updated 14 Oct 2026, 6 min read, Save guide bookmark button). The body contains H2 "Critical Survival Instructions", an unordered list of immediate steps, a highlighted amber caution callout (#FEF3C7 background, #92400E text, #FDE68A border), and a 3-column responsive table "Water Depth vs Vehicle Hazard". Below the prose, render an attachments panel featuring file chips for "Ward 4 Evacuation Map (PDF, 1.2 MB)" and "Emergency Kit Checklist (PNG, 380 KB)". Finish with a 3-column "More in this section" card grid showing "Earthquake Safety and Survival Guide" and "Safe Drinking Water During Disasters", ending with the 3-column footer.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `#020617`, article body text switches to `#F1F5F9`, and text-muted metadata switches to `#94A3B8`.
* Caution callout box transitions to `#422006` background with `#FCD34D` text and `#78350F` border (WCAG AA compliant).
* Data table header displays `#1E293B` background with `#F1F5F9` text and `#334155` cell borders.
* Category badge for Emergency retains high contrast `#7F1D1D` background with `#FCA5A5` text.
* Attachment file chips use `#1E293B` surface with `#334155` borders and blue download action links.

---

### Must Not
* The article reading column must not exceed 720px width on desktop (must maintain ~68 characters per line).
* Must not use justified text alignment; text must be left-aligned (ragged right) for legibility.
* Must not display stock photos or unrelated decorative imagery inside emergency protocols.
* Must not make table horizontal overflow force the entire mobile browser page to scroll horizontally.
* Must not use purple or violet tones for badges or links.
