# 12 Articles Management Table Screen

### Purpose and Audience
Administrative catalog and publishing console for disaster content coordinators and medical/agricultural specialists to manage, review, and organize preloaded offline instructional articles.

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet staff article management console. Use the project design system. Layout with a 240px left sidebar and main content workspace on a background canvas with text typography and 1px border dividers. The sidebar shows "RahatNet Staff Console", navigation links with "Articles" highlighted as active, and logged-in user "Dr. Priya Verma (Admin)". In the main panel, display H1 "Knowledge Base Guides", description "Manage and deploy offline guides across emergency, health, agriculture, and education", and a primary button "+ New Article". Below, show a filter bar with a 280px search input bounded by border-strong ("Filter guides by title or keyword..."), category dropdown bounded by border-strong ("All Sections"), and status filter ("All Statuses"). Beneath, render a data table: 1) "Recognising and Treating Heat Stroke" | Health badge | Status pill "Published" (green) | 14 Oct 2026 | Dr. Priya Verma | Actions (Edit, Preview, Archive), 2) "Flood Safety and Evacuation Protocols" | Emergency badge | Status pill "Published" (green) | 14 Oct 2026 | NDMA Team | Actions, 3) "Preventing Diarrhoea and Dehydration with ORS" | Health badge | Status pill "Published" (green) | 12 Oct 2026 | Health Cell | Actions, 4) "Protecting Crops and Seed Stock Before Floods" | Agriculture badge | Status pill "Draft" (amber) | 10 Oct 2026 | Agri Officer | Actions. Show pagination row at the table bottom with "Showing 1–4 of 12 guides".
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Table surface switches to `surface` and table header row background shifts to `surface-muted`.
* Table cell dividers use `border` with high-contrast text.
* Status pill for "Published" uses dark green variant with high-contrast text.
* Status pill for "Draft" uses dark amber variant with warning text.
* Row action icon buttons (Edit, Preview, Archive) switch to `text-muted` with hover highlights.
* Search and filter inputs use `surface` background with `border-strong` borders.

---

### Must Not
* Must not use alternating multi-color zebra table striping; differentiate rows strictly with 1px border dividers.
* Must not display cloud sync loaders or AWS/Google Cloud deployment terminology.
* Must not use destructive red buttons for standard edit or preview actions.
* Must not use purple or violet anywhere in table tags, buttons, or hover states.
* Must not use raw hex codes in prompts.
