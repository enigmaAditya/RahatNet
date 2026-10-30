# 03 Article Guide Reading Screen

### Purpose and Audience
Detailed guide reading view for citizens and emergency volunteers. Delivers clear, distraction-free life-safety instructions, survival steps, tables, offline file attachments, and local bookmarking capabilities.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet article reading view. Use the project design system. Layout top to bottom on a background canvas with 1px border dividers and text typography. At the top, show the single 56px sticky header with "RahatNet" wordmark (no status dot) on the left, and on the right: search icon button, saved icon button, language button showing "हिंदी", and theme icon button, all as 44px touch targets with 8px gaps, fitting cleanly at 360px without page scroll. Below header, show a back link "← Back to Health guides" and breadcrumb "Home / Health / Heat Stroke". Next, display the Health section badge alongside a bilingual badge "हिंदी उपलब्ध". Render H1 "Recognising and Treating Heat Stroke", a 17px summary paragraph, and a meta row showing updated date "14 Oct 2026", reading time "4 min read", source "NDMA National Heatwave Action Plan", and a primary "Save Offline" bookmark button. Inside the 720px max-width body column, display H2 "Heat Exhaustion vs. Heat Stroke", a comparison table (Skin Condition, Body Temperature, Mental State, Pulse), a highlighted caution box with warning background and warning text ("Confusion, slurred speech or collapse in the heat is the key danger sign. Treat it as heat stroke even if the person is sweating."), and H2 "First Aid for Heat Stroke" with a numbered cooling protocol. Below, show an attachments box for "Heatwave-Action-Plan.pdf (1.2 MB)" and "More in Health" article cards, followed by the public footer.
```

---

### Stitch Prompt: Tablet (768px)

```text
Design a 768px tablet screen for the RahatNet article reading view. Use the project design system. Layout top to bottom on a background canvas with text typography and 1px border dividers. At the top, render a 56px sticky header featuring the "RahatNet" wordmark (no status dot), a 240px search field bounded by border-strong, a language button showing "हिंदी", a theme icon button, and a saved icon button. Directly below the top bar, display a second full-width row of four category chips: Emergency, Health (active), Agriculture, and Education. Below navigation, render breadcrumb "Home / Health / Heat Stroke" and back link "← Back to Health". Show the Health category badge alongside a bilingual badge "हिंदी उपलब्ध". Display H1 "Recognising and Treating Heat Stroke", an introductory summary, and an article meta row (NDMA source, updated 14 Oct 2026, 4 min read) with a 44px "Save Offline" bookmark button. Inside the 720px centered reading column, present H2 "Heat Exhaustion vs. Heat Stroke", the real comparison table distinguishing heat exhaustion from emergency heat stroke across skin, temperature, mental state, and pulse. Follow with an amber caution callout using warning background and text ("Confusion or slurred speech is the key danger sign"), and H2 "First Aid for Heat Stroke" listing immediate cooling steps. Below prose, display an attachments card for "Heatwave-Action-Plan.pdf (1.2 MB)" and a 2-column "More in Health" grid, followed by the footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet article reading view. Use the project design system. Layout top to bottom on a background canvas with text typography within a 1120px container with 1px border dividers. Sticky 64px header features the "RahatNet" wordmark on the left, four section links with "Health" underlined as active in the center, and on the right: a 200px search field bounded by border-strong, a single language button showing "हिंदी", a theme icon button, and a "Saved" link with bookmark icon (no "Works without internet" badge in the header). Below header, show breadcrumb "Home / Health / Heat Stroke" and "← Back to Health". The article layout features a centered 720px reading column (~68 characters per line). At the top: Health category badge, bilingual badge "हिंदी उपलब्ध", H1 "Recognising and Treating Heat Stroke", leading summary, and a meta row (NDMA source, updated 14 Oct 2026, 4 min read, Save guide bookmark button). The body contains H2 "Heat Exhaustion vs. Heat Stroke", a 3-column data table comparing Heat Exhaustion against Heat Stroke (Skin, Body Temperature, Mental State, Pulse), a highlighted caution callout using warning token background and text ("Treat confusion or delirium as medical emergency heat stroke"), and H2 "First Aid for Heat Stroke" with numbered steps: Move to Shade, Loosen Clothing, Active Rapid Cooling. Below, show an attachments card for "Heatwave-Action-Plan.pdf (1.2 MB)" and a 3-column "More in this section" grid, ending with the 3-column footer.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `background`, article body text switches to `text`, and metadata switches to `text-muted`.
* Caution callout box transitions to dark warning background with warning text and border (WCAG AA compliant).
* Data table header displays `surface-muted` background with `text` headings and `border` cell dividers.
* Category badge for Health retains high contrast in dark mode (`health` token accent).
* Attachment file chips use `surface-muted` with `border` and primary download action links.

---

### Must Not
* The article reading column must not exceed 720px width on desktop (must maintain ~68 characters per line).
* Must not use justified text alignment; text must be left-aligned (ragged right) for legibility.
* Must not display stock photos or unrelated decorative imagery inside emergency protocols.
* Must not make table horizontal overflow force the entire mobile browser page to scroll horizontally.
* Must not use purple or violet tones for badges or links.
* Must not use raw hex codes in prompts.
