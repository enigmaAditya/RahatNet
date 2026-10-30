# 02 Section & Category View Screen

### Purpose and Audience
Displays all offline guides and protocols within a specific topic section (Emergency, Health, Agriculture, or Education). Used by citizens and community volunteers to explore specialized disaster recovery instructions.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet category section page. Use the project design system. Layout top to bottom on a #F8FAFC canvas with 1px #E2E8F0 borders and #0F172A text. At the top, show the sticky 56px public mobile header with "RahatNet" logo, search icon, saved guides icon, language toggle ("EN / हिंदी" showing "आपातकालीन"), and theme toggle. Directly below, show the full-width Health section header band styled with a solid #0F766E background and #FFFFFF text (note: this colored band stays #0F766E with white text in both light and dark themes). Inside the band, display the HeartPulse icon (24px), section title "Health", short description "Essential first aid, disease prevention, and hygiene guides", and guide count badge "8 guides available offline". Underneath, provide a search/filter input to filter within this section. Below, display a vertical stack of article cards: "Basic First Aid: Bleeding and Burn Management", "Safe Drinking Water During Disasters", "Preventing Diarrhoea and Dehydration with ORS", and "Recognising and Treating Heat Stroke", each with updated dates (14 Oct 2026), reading time, and bookmark save icon. At the bottom, illustrate the alternate empty state box showing "No guides match this filter" with a reset button, followed by the mobile footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet category section page. Use the project design system. Layout top to bottom within a 1120px max-width container on a #F8FAFC canvas with #0F172A text and 1px #E2E8F0 borders. At the top, render the sticky 64px header with "RahatNet" wordmark, "Works without internet" badge, category navigation links with "Health" underlined as active, search bar, "EN / हिंदी" language switch showing "आपातकालीन सुरक्षा", and theme toggle. Below, render a prominent Health section banner band featuring a solid #0F766E background and #FFFFFF text (note: this band stays #0F766E with white text in both light and dark themes). Inside the band, display the 32px HeartPulse icon, H1 "Health Guides", description "Essential first aid protocols, safe sanitation, and preventive care during crises", and guide count pill "8 guides available offline". Below the banner, show breadcrumb "Home / Health" and a search/sort filter bar. Display a 3-column grid of article cards: "Basic First Aid: Bleeding and Burn Management", "Safe Drinking Water During Disasters", "Preventing Diarrhoea and Dehydration with ORS", and "Recognising and Treating Heat Stroke" with en-IN dates (14 Oct 2026) and bookmark actions. At the bottom, note the empty state container when 0 results match, ending with the 3-column footer.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* The section header band strictly maintains its light-mode background color (`#0F766E` for Health) with `#FFFFFF` text. It must NOT be replaced with a dark surface.
* Main page canvas switches to `#020617` and article card surfaces to `#0F172A`.
* Article card borders use `#334155` with `#F1F5F9` titles and `#94A3B8` summaries.
* Empty state dashed border and icon remain clearly visible against the dark canvas.
* Category filter chips in active state show `#60A5FA` border and `#0F172A` background.

---

### Must Not
* Must not alter the section header band background to a dark tone; the band color rule requires light-mode shade with white text in both themes.
* Must not display pagination numbers if content fits on a single continuous scrolling list.
* Must not use horizontal carousel scrolling for the main article cards on mobile.
* Must not use purple or violet anywhere in tags, badges, or buttons.
