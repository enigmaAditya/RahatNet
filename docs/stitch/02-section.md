# 02 Section & Category View Screen

### Purpose and Audience
Displays all offline guides and protocols within a specific topic section (Emergency, Health, Agriculture, or Education). Used by citizens and community volunteers to explore specialized disaster recovery instructions.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet category section page. Use the project design system. Layout top to bottom on a background canvas with 1px border dividers and text typography. At the top, show the single 56px sticky header with "RahatNet" wordmark (no status dot) on the left, and on the right: search icon button, saved icon button, language button showing "हिंदी", and theme icon button, all as 44px touch targets with 8px gaps, fitting cleanly at 360px without page scroll. Directly below, show the full-width Health section header band styled with a solid health token background and white text in both light and dark themes. Inside the band, display the HeartPulse icon, section title "Health", short description "Clean water, hydration and heat illness guides", and guide count badge "3 guides available offline". Underneath, provide a search field bounded by border-strong to filter within this section. Below, display a vertical stack of article cards: "Preventing Diarrhoea and Dehydration with ORS", "Safe Drinking Water During Disasters", and "Recognising and Treating Heat Stroke", each with updated dates in en-IN format (14 Oct 2026), reading times, and bookmark save icon buttons. Conclude with the public footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet category section page. Use the project design system. Layout top to bottom within a 1120px max-width container on a background canvas with text typography and 1px border dividers. At the top, render the sticky 64px header with "RahatNet" wordmark, four category navigation links with "Health" underlined as active, a 200px search field bounded by border-strong, a single language button showing "हिंदी", a theme icon button, and a "Saved" link with bookmark icon (no "Works without internet" badge in the header). Below, render a prominent Health section banner band featuring a solid health token background and white text in both light and dark themes. Inside the band, display the 32px HeartPulse icon, H1 "Health Guides", description "Clean water, hydration and heat illness guides", and guide count pill "3 guides available offline". Below the banner, show breadcrumb "Home / Health" and a sort filter bar. Display a 3-column grid of article cards: "Preventing Diarrhoea and Dehydration with ORS", "Safe Drinking Water During Disasters", and "Recognising and Treating Heat Stroke" with en-IN dates (14 Oct 2026) and bookmark actions, ending with the 3-column footer.
```

---

### State Edits: Empty Section
Apply this edit instruction to a duplicate of the generated section screen to display the zero-article empty state:

```text
Modify the generated category section screen to display the empty section state: replace the article card grid with a centered empty-state card featuring a dashed border, a Lucide FileText icon in text-muted, H3 heading "No guides in this section yet", descriptive text "Guides for this topic are being prepared and will appear during the next local update", and a primary button "Return to Homepage".
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* The section header band strictly maintains its light-mode background color (`health` shade) with white text. It must NOT be replaced with a dark surface.
* Main page canvas switches to `background` and article card surfaces to `surface`.
* Article card borders use `border` with `text` headings and `text-muted` summaries.
* Search and filter boundaries use `border-strong` for clear interactive contrast.
* Category filter chips in active state show primary border and `surface` background.

---

### Must Not
* Must not alter the section header band background to a dark tone; the band color rule requires light-mode shade with white text in both themes.
* Must not display pagination numbers if content fits on a single continuous scrolling list.
* Must not use horizontal carousel scrolling for the main article cards on mobile.
* Must not use purple or violet anywhere in tags, badges, or buttons.
* Must not use raw hex codes in prompts.
