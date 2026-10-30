# 00 Components System Sheet

### Purpose and Audience
Visual design token verification sheet displaying all atomic components and composite UI patterns in light mode. Used by designers and developers to anchor design consistency across all RahatNet screen generations.

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen displaying the RahatNet component system sheet. Use the project design system. Layout top to bottom on a #F8FAFC canvas with #0F172A text and 1px #E2E8F0 borders. At the top, show the public header with "RahatNet" wordmark, "Works without internet" badge, navigation links with active state, search input, segmented EN/हिंदी language toggle showing Devanagari text, and Light/Dark/System theme toggle. Below, render an alert banner section showing Critical (red #FEF2F2, non-dismissible: "Flood water rising in Ward 4 — move to Government School, Sector 2"), Warning (amber, dismissible), and Info (blue) banners. Next, display button rows: Primary (#1D4ED8), Secondary, Outline, Ghost, and Emergency (#B91C1C) across Default, Hover, Focus (2px blue ring), and Disabled states. Beside buttons, show form controls: text input with inline error "Name is required", select dropdown, textarea, radio card group, and file upload zone. Next, render a 4-column section card grid for Emergency (ShieldAlert, #B91C1C), Health (HeartPulse, #0F766E), Agriculture (Sprout, #15803D), and Education (BookOpen, #C2410C) with guide counts. Below, show an article card for "Earthquake Safety and Survival Guide" (updated 14 Oct 2026, 5 min read), an Emergency Helpline card (112, 108, 101, 1078) with cellular network warning, a 3-row data table with status pills (New, In progress, Resolved), stat cards, breadcrumb, tags, badges, a sample confirmation dialog, and the public footer.
```

---

### Dark Mode Check
When switching this sheet to dark mode in the Stitch theme editor, verify:
* Canvas background shifts to `#020617`, surfaces to `#0F172A`, and muted surfaces to `#1E293B`.
* All structural borders shift to `#334155` without loss of visual hierarchy.
* Body and heading typography switch to high-contrast `#F1F5F9`.
* Section cards maintain their exact semantic identity: Emergency red (`#F87171`), Health teal (`#2DD4BF`), Agriculture green (`#4ADE80`), Education orange (`#FB923C`).
* Critical alert banner uses `#450A0A` background with `#FCA5A5` text and `#991B1B` border.
* Warning alert uses `#422006` background with `#FCD34D` text.
* Zero purple or violet tones appear in any component state.

---

### Must Not
* Must not use shadows on cards, buttons, badges, or inputs (shadows permitted only on the sticky header and dialog).
* Must not use rounded corners larger than 8px for controls, 12px for cards, 16px for dialogs/banners, or full for pills.
* Must not display decorative gradients, glows, blur filters, or glassmorphism.
* Must not use emergency red for generic buttons or non-critical components.
