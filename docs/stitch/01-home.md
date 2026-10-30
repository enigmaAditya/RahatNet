# 01 Home & Crisis Overview Screen

### Purpose and Audience
Primary landing screen for citizens arriving on the local offline Wi-Fi network. Provides immediate access to active life-safety disaster alerts, emergency helpline numbers, four core knowledge sections, and recently updated emergency preparedness guides.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet homepage. Use the project design system. Layout top to bottom on a #F8FAFC canvas with 1px #E2E8F0 borders and #0F172A text. At the top, show a sticky 56px header with the "RahatNet" logo, search icon, saved guides bookmark button, segmented language toggle ("EN / हिंदी" showing Devanagari "आपातकालीन"), and theme toggle. Directly below the header, display a full-width horizontally scrollable row of four category chips: Emergency (#B91C1C, ShieldAlert), Health (#0F766E, HeartPulse), Agriculture (#15803D, Sprout), and Education (#C2410C, BookOpen). Below the navigation, display an active critical emergency banner with #FEF2F2 background and #B91C1C border stating: "Flood water rising in Ward 4 — move to Government School, Sector 2" (non-dismissible; note that in standard state with zero active alerts, this banner collapses completely). Beneath, render a concise hero banner with heading "Trusted safety information. Works without internet." Next, display the "In an emergency" helpline card with a 2px red border, advisory notice that phone calls require cellular mobile connectivity, and 44px tap-to-call buttons for 112 National Emergency, 108 Ambulance, 101 Fire, and 1078 NDMA Disaster Helpline. Follow with a vertical stack of four section cards showing guide counts (Emergency: 8 guides, Health: 14 guides). Finish with a "Recently updated" list of article cards: "Earthquake Safety and Survival Guide" and "Basic First Aid: Bleeding and Burn Management" with updated dates in en-IN format (14 Oct 2026), followed by the public footer with local Wi-Fi status.
```

---

### Stitch Prompt: Tablet (768px)

```text
Design a 768px tablet screen for the RahatNet homepage. Use the project design system. Layout top to bottom on a #F8FAFC background with #0F172A text and 1px #E2E8F0 borders. At the top, render a 60px sticky header featuring the "RahatNet" wordmark, "Works without internet" pill badge, search button, language switch ("EN / हिंदी" with Hindi script "आपातकालीन सुरक्षा"), saved articles link, and theme toggle. Directly below, show a top critical alert banner with red #FEF2F2 background, #B91C1C border, and AlertTriangle icon stating: "Flood water rising in Ward 4 — move to Government School, Sector 2". Note that when no alerts are active, this banner collapses completely. Underneath, present the hero block with H1 "Trusted safety information. Works without internet." and an action button "Request Emergency Help". Below the hero, place the "In an emergency" helpline card with red accent border, cellular call advisory, and large touch buttons for 112, 108, 101, and 1078. Next, render a 2x2 grid of section cards: Emergency (ShieldAlert, 8 guides), Health (HeartPulse, 14 guides), Agriculture (Sprout, 11 guides), and Education (BookOpen, 6 guides). Below the grid, show a 2-column layout of "Recently updated" article cards including "Flood Safety and Evacuation Protocols" and "Safe Drinking Water During Disasters" (both updated 14 Oct 2026), ending with the citizen footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet homepage. Use the project design system. Layout top to bottom within a 1120px max-width container on a #F8FAFC canvas with #0F172A text and 1px #E2E8F0 borders. Sticky 64px header features the "RahatNet" wordmark, "Works without internet" badge, section navigation links (Emergency, Health, Agriculture, Education), 240px search bar, segmented "EN / हिंदी" language toggle showing "आपातकालीन", theme switcher, and "Saved Guides" link. At the top of the main content, display an active critical alert banner in red #FEF2F2 with #B91C1C border reading: "Flood water rising in Ward 4 — move to Government School, Sector 2" (note the no-alert state where this collapses). Below, show a wide hero section with Display title "Trusted safety information. Works without internet.", reassurance body copy, and a primary button "Request Emergency Help". Next, render an "In an emergency" helpline panel with 2px #B91C1C border, cellular network disclaimer, and a 4-column grid of helpline buttons for 112, 108, 101, and 1078. Below, place a 4-column section card grid for Emergency, Health, Agriculture, and Education with icon badges and guide counts. Follow with a "Recently Updated Guides" 3-column card grid showing "Earthquake Safety and Survival Guide", "Flood Safety and Evacuation Protocols", and "Safe Drinking Water During Disasters" with en-IN dates (14 Oct 2026), and finish with the 3-column footer.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas background shifts to `#020617` and card surfaces shift to `#0F172A`.
* Critical alert banner shifts to `#450A0A` background with `#FCA5A5` text and `#991B1B` border.
* The helpline card maintains high visibility with `#F87171` border and `#0F172A` surface.
* Section cards show their dark accent icons and borders without bright halos or glows.
* Hero title and article titles switch to `#F1F5F9` with at least 14:1 contrast ratio.
* Devanagari script in the language toggle renders cleanly without text clipping.

---

### Must Not
* The mobile page must NEVER scroll sideways; only the top category chip row may overflow horizontally.
* Must not display technical jargon such as "Intranet Access Point", "SSID", or "IP Gateway".
* Must not use red color for non-emergency sections or general call-to-action buttons.
* Must not show stock photography or cartoon illustrations of disaster victims.
* Must not add drop shadows to section cards or article cards.
