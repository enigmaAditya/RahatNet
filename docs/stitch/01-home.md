# 01 Home & Crisis Overview Screen

### Purpose and Audience
Primary landing screen for citizens arriving on the local offline Wi-Fi network. Provides immediate access to active life-safety disaster alerts, emergency helpline numbers, four core knowledge sections, and recently updated emergency preparedness guides.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet homepage. Use the project design system. Layout top to bottom on a background canvas with 1px border dividers and text typography. At the top, show a single 56px sticky header with the "RahatNet" wordmark (no status dot) on the left, and on the right: search icon button, saved icon button, language button showing "हिंदी", and theme icon button, all as 44px touch targets with 8px gaps, fitting cleanly at 360px without page scroll. Below the header, display an active critical emergency banner with emergency background and emergency border stating: "Flood water rising in Ward 4 — move to Government School, Sector 2" (non-dismissible). Beneath, render a concise hero section with heading "Trusted safety information. Works without internet.", explanatory reassurance copy, and a primary action button labeled "Request help". Next, display the "In an emergency" helpline card with a 2px emergency border, advisory notice that voice calls require cellular mobile network connectivity, and 44px tap-to-call buttons for 112 National Emergency, 108 Ambulance, 101 Fire, and 1078 NDMA Disaster Helpline. Follow with a vertical stack of four section cards showing 3 guides each: Emergency with Hindi subtitle "आपातकालीन सुरक्षा" (ShieldAlert, emergency token), Health (HeartPulse, health token), Agriculture (Sprout, agriculture token), and Education (BookOpen, education token). Finish with a "Recently updated" list of article cards: "Earthquake Safety and Survival Guide" and "Basic First Aid: Bleeding and Burn Management" with en-IN dates (14 Oct 2026), followed by the public footer.
```

---

### Stitch Prompt: Tablet (768px)

```text
Design a 768px tablet screen for the RahatNet homepage. Use the project design system. Layout top to bottom on a background canvas with text typography and 1px border dividers. At the top, render a 56px sticky header featuring the "RahatNet" wordmark (no status dot), a 240px search field bounded by border-strong, a language button showing "हिंदी", a theme icon button, and a saved icon button. Directly below the top bar, display a second full-width row containing four section chips: Emergency, Health, Agriculture, and Education. Below navigation, show an active critical alert banner with emergency token background and emergency border stating: "Flood water rising in Ward 4 — move to Government School, Sector 2". Underneath, present the hero block with Display heading "Trusted safety information. Works without internet.", reassuring body text, and a primary action button labeled "Request help". Below the hero, place the "In an emergency" helpline card with a 2px emergency border, cellular call advisory, and large touch buttons for 112, 108, 101, and 1078. Next, render a 2x2 grid of section cards showing 3 guides each: Emergency with Hindi subtitle "आपातकालीन सुरक्षा" (ShieldAlert), Health (HeartPulse), Agriculture (Sprout), and Education (BookOpen). Below the grid, show a 2-column layout of recently updated article cards including "Flood Safety and Evacuation Protocols" and "Safe Drinking Water During Disasters" (both updated 14 Oct 2026), ending with the public footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet homepage. Use the project design system. Layout top to bottom within a 1120px max-width container on a background canvas with text typography and 1px border dividers. Sticky 64px header features the "RahatNet" wordmark on the left, four section links (Emergency, Health, Agriculture, Education) with active underline in the center, and on the right: a 200px search field bounded by border-strong, a single language button showing "हिंदी", a theme icon button, and a "Saved" link with bookmark icon (no "Works without internet" badge in the header). At the top of the main content, display an active critical alert banner with emergency background and emergency border reading: "Flood water rising in Ward 4 — move to Government School, Sector 2". Below, show a wide hero section with Display title "Trusted safety information. Works without internet.", reassurance body copy, and a primary action button labeled "Request help". Next, render an "In an emergency" helpline panel with 2px emergency border, cellular network disclaimer, and a 4-column grid of helpline buttons for 112, 108, 101, and 1078. Below, place a 4-column section card grid showing 3 guides each: Emergency with Hindi subtitle "आपातकालीन सुरक्षा", Health, Agriculture, and Education with icon badges. Follow with a "Recently Updated Guides" 3-column card grid showing "Earthquake Safety and Survival Guide", "Flood Safety and Evacuation Protocols", and "Safe Drinking Water During Disasters" with en-IN dates (14 Oct 2026), and finish with the 3-column footer.
```

---

### State Edits: No Active Alert
Apply this edit instruction to a duplicate of the generated home screen to display the calm state when no emergency broadcast is in effect:

```text
Modify the generated home screen to show the no-alert state: remove the top critical emergency alert banner completely so that the hero section sits directly below the header with standard spacing, with all other sections unchanged.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas background shifts to `background` and card surfaces shift to `surface`.
* Critical alert banner shifts to emergency background with high-contrast text and emergency border.
* The helpline card maintains high visibility with emergency border and `surface` background.
* Section cards show their dark accent icons and borders without bright halos or glows.
* Hero title and article titles switch to `text` with at least 14:1 contrast ratio.
* Devanagari script "आपातकालीन सुरक्षा" renders cleanly without clipping.

---

### Must Not
* The mobile page must NEVER scroll sideways; header controls and content fit within 360px viewport.
* Must not display technical jargon such as "Intranet Access Point", "SSID", or "IP Gateway".
* Must not use emergency red for non-emergency sections or general call-to-action buttons.
* Must not show stock photography or cartoon illustrations of disaster victims.
* Must not add drop shadows to section cards or article cards.
* Must not include "Works without internet" badge in the header bar.
