# 04 Search & Filter Results Screen

### Purpose and Audience
Enables stressed citizens and relief workers to rapidly query all preloaded offline guides by keyword, filter results by emergency domain, and find critical procedures within seconds.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet offline search results view. Use the project design system. Layout top to bottom on a background canvas with 1px border dividers and text typography. At the top, show the single 56px sticky header with "RahatNet" wordmark (no status dot) on the left, and on the right: search icon button, saved icon button, language button showing "हिंदी", and theme icon button, all as 44px touch targets with 8px gaps, fitting cleanly at 360px without page scroll. Directly below, render an active 44px search input bounded by border-strong filled with the query "water", featuring a clear "X" button. Below the input, display a horizontally scrollable chip filter row: "All (3)" (selected with primary token), "Emergency (0)", "Health (2)", and "Agriculture (1)". Underneath, show the result count text: "3 offline guides found for \"water\"". Render a vertical list of search result cards: 1) "Safe Drinking Water During Disasters" (Health badge, snippet with "drinking water purification using boiling and chlorine tablets" highlighted using bold text, 14 Oct 2026), 2) "Preventing Diarrhoea and Dehydration with ORS" (Health badge, snippet mentioning clean water for oral rehydration salts), and 3) "Recovering Agricultural Fields After Waterlogging" (Agriculture badge, silt drainage). Conclude with the public footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet offline search page. Use the project design system. Layout top to bottom within a 1120px max-width container on a background canvas with text typography and 1px border dividers. At the top, show the sticky 64px header with "RahatNet" wordmark, four category navigation links, a 200px search field bounded by border-strong, a single language button showing "हिंदी", a theme icon button, and a "Saved" link with bookmark icon (no "Works without internet" badge in the header). Below, render a prominent search area with breadcrumb "Home / Search" and a 56px high search input bounded by border-strong containing query "water", with search icon and clear "X" button. Next, provide category filter pills: "All (3)" (active, solid primary background), "Emergency (0)", "Health (2)", and "Agriculture (1)". Display result summary text: "3 guides available offline matching \"water\"". Below, present search result cards in a stacked layout: 1) "Safe Drinking Water During Disasters" (Health badge, NDMA source, snippet with keyword "water" highlighted using bold text), 2) "Preventing Diarrhoea and Dehydration with ORS" (Health badge, snippet highlighting safe water preparation), 3) "Recovering Agricultural Fields After Waterlogging" (Agriculture badge, silt and drainage guidance). Conclude with the 3-column footer.
```

---

### State Edits: No Results
Apply this edit instruction to a duplicate of the generated search screen to show the zero-results state:

```text
Modify the generated search screen to show the no-results state: replace the search input query with "satellite phone", update the count to "0 guides found for 'satellite phone'", and replace the results list with a centered empty-state card featuring a Search icon in text-muted, H3 heading "No guides found for 'satellite phone'", descriptive text "Try searching with broader terms or choose from common topics below:", and clickable suggestion chips for "clean water", "first aid", and "evacuation".
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Search input background shifts to `surface` with `border-strong` border and `text` typography.
* Highlighted search terms remain clearly visible using bold `text` or subtle warning highlight.
* Category filter chips in selected state switch to `primary` background with on-primary text.
* Result card summaries maintain `text-muted` color with clear separation.
* All interactive borders maintain `border-strong` (≥3:1 contrast against surface).

---

### Must Not
* Must not trigger network loader spinners or "fetching from cloud" states; search operates entirely against local offline memory.
* Must not display generic web search suggestions (e.g., Google or Wikipedia queries).
* Must not remove the clear input "X" button when the search box contains text.
* Must not use purple or violet anywhere in chips or highlights.
* Must not use raw hex codes in prompts.
