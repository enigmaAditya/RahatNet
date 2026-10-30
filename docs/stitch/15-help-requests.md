# 15 Citizen Help Requests Triage Screen

### Purpose and Audience
Emergency response queue used by shelter volunteers and field dispatchers (on desktop terminals or mobile phones) to triage, dispatch, and track citizen calls for medical assistance, rescue, food, and shelter.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet volunteer help requests triage desk. Use the project design system. Layout top to bottom on a #F8FAFC canvas with 1px #E2E8F0 borders and #0F172A text. At the top, show a 56px staff header with "RahatNet Volunteer Desk", active Wi-Fi badge, and user "Rohan (Volunteer)". Below, render a horizontally scrollable status filter bar: "New (4)" (selected, blue), "In Progress (2)", "Resolved (8)", and an emergency type filter dropdown ("All Types"). Underneath, display stacked citizen request cards: 1) Card for "Request #RH-4092": citizen name "Aarav Sharma", status pill "New" (#DBEAFE bg, #1D4ED8 text), help type badge "Medical" (red accent), location "Ward 4, near Government School, Sector 2", people count "4 people", phone number "+91 98765 43210" (with tap-to-call button), details snippet "Elderly family member requires insulin and clean drinking water", timestamp "12 mins ago". Action buttons below: primary "Mark In Progress" (#1D4ED8) and outline "Add Note". 2) Second card for "Request #RH-4089": citizen "Sunita Devi", status pill "In Progress" (#FEF3C7 amber), type "Rescue", location "Ward 4 River Edge", with action button "Mark Resolved" (#15803D). Conclude with a bottom navigation bar: Requests, Alerts, and Sign Out.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet help requests triage console. Use the project design system. Layout with a 240px left sidebar, a central request table (width 600px), and a right detail inspector panel (width 440px) on a #F8FAFC canvas with #0F172A text and 1px #E2E8F0 borders. The sidebar shows "Help Requests" highlighted with counter badge "7". In the central area, display H1 "Citizen Assistance Requests", filter tabs (All, New, In progress, Resolved), and category filter chips (Medical, Food & water, Rescue, Shelter). Show a request list where the first item is selected: "Request #RH-4092" | Aarav Sharma | Medical | Ward 4 | Status pill "New" (blue) | "14 Oct 2026, 11:20 AM". In the right detail panel, display full intake details for Request #RH-4092: citizen name "Aarav Sharma", direct phone number "+91 98765 43210" (staff only visibility), location "Ward 4, near Government School, Sector 2", party size "4 people", full emergency description "Elderly family member requires insulin injections and clean drinking water immediately. Water reaching doorstep." Display quick action buttons: primary "Mark In Progress", success "Mark Resolved" (#15803D), and a volunteer dispatch notes log with input box, followed by local audit timestamp.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `#020617`, sidebar to `#0F172A`, request cards/table to `#0F172A`, and right detail panel to `#0F172A`.
* Status pills switch to dark variants: `New` uses `#1E3A8A` bg with `#93C5FD` text; `In Progress` uses `#451A03` bg with `#FCD34D` text; `Resolved` uses `#052E16` bg with `#4ADE80` text.
* Phone number text remains high-contrast `#F1F5F9` with a distinct phone icon.
* Selected table row displays `#1E293B` background with `#60A5FA` left border.
* Action buttons maintain legible text (`Mark Resolved` uses `#4ADE80` text or `#15803D` background with white text).

---

### Must Not
* Phone numbers must NEVER be visible to public unauthenticated users; only authenticated staff can view them on this screen.
* Must not use external telephony or SMS webhook status banners (all communications occur in-person or via local camp radio).
* Must not allow permanent deletion of emergency requests during active crisis phase (requests can only transition to Resolved).
* Must not use purple or violet anywhere in status pills or buttons.
