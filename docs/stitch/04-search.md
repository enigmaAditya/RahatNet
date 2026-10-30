# 04 Search & Filter Results Screen

### Purpose and Audience
Enables stressed citizens and relief workers to rapidly query all preloaded offline guides by keyword, filter results by emergency domain, and find critical procedures within seconds.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet offline search results view. Use the project design system. Layout top to bottom on a #F8FAFC canvas with 1px #E2E8F0 borders and #0F172A text. At the top, show the sticky 56px header with "RahatNet" logo, search button, saved guides icon, language toggle ("EN / हिंदी" showing "आपातकालीन"), and theme toggle. Directly below, render an active 44px search input filled with the query "water", featuring a clear "X" button. Below the input, display a horizontally scrollable chip filter row: "All (3)" (selected, #1D4ED8), "Emergency (0)", "Health (2)", and "Agriculture (1)". Underneath, show the result count text: "3 offline guides found for \"water\"". Render a vertical list of search result cards: 1) "Safe Drinking Water During Disasters" (Health badge, snippet with "drinking <mark>water</mark> purification using boiling and chlorine tablets" highlighted, 14 Oct 2026), 2) "Preventing Diarrhoea and Dehydration with ORS" (Health badge, snippet mentioning "clean <mark>water</mark> for oral rehydration salts"), and 3) "Recovering Agricultural Fields After Waterlogging" (Agriculture badge). At the bottom of the screen, illustrate an alternate empty state container showing "No guides found for \"satellite phone\"" with helpful suggested searches ("first aid", "evacuation", "clean water"), followed by the mobile footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet offline search page. Use the project design system. Layout top to bottom within a 1120px max-width container on a #F8FAFC canvas with #0F172A text and 1px #E2E8F0 borders. At the top, show the sticky 64px header with "RahatNet" logo, "Works without internet" pill, section nav, language toggle ("EN / हिंदी" showing "आपातकालीन"), theme toggle, and saved guides link. Below, render a prominent search section with a 56px high search input containing query "water", with search icon, clear button, and breadcrumb "Home / Search". Next, provide category filter pills: "All (3)" (active, solid blue), "Emergency (0)", "Health (2)", and "Agriculture (1)". Display result summary text: "3 guides available offline matching \"water\"". Below, present search result cards in a stacked layout: 1) "Safe Drinking Water During Disasters" (Health, NDMA, snippet with keyword "<mark>water</mark>" highlighted), 2) "Preventing Diarrhoea and Dehydration with ORS" (Health, snippet highlighting safe <mark>water</mark> preparation), 3) "Recovering Agricultural Fields After Waterlogging" (Agriculture, silt drainage). Below the active results list, illustrate the zero-result fallback box: "No guides found for \"plasma cutter\"" with suggestion tags for "water", "ORS", "burns", and "flood", followed by the 3-column footer.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Search input background shifts to `#0F172A` with `#334155` border and `#F1F5F9` text.
* Highlighted search terms use subtle amber highlight `#422006` with `#FCD34D` bold text or font-weight 700 with high contrast.
* Category filter chips in selected state switch to `#60A5FA` background with `#020617` on-primary text.
* No-results empty container uses `#1E293B` background with `#334155` dashed border.
* Result card summaries maintain `#94A3B8` muted text color with clear separation.

---

### Must Not
* Must not trigger network loader spinners or "fetching from cloud" states; search operates entirely against local offline memory.
* Must not display generic web search suggestions (e.g., Google or Wikipedia queries).
* Must not remove the clear input "X" button when the search box contains text.
* Must not use purple or violet anywhere in chips or highlights.
