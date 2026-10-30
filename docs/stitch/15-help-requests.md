# 15 Citizen Help Requests Triage Screen

### Purpose and Audience
Emergency response queue used by shelter volunteers and field dispatchers (on desktop terminals or mobile phones) to triage, dispatch, and track citizen calls for medical assistance, rescue, food, and shelter.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet volunteer help requests triage desk. Use the project design system. Layout top to bottom on a background canvas with 1px border dividers and text typography. At the top, show a 56px staff header with "RahatNet Volunteer Desk" and user "Rohan (Volunteer)". Below, render a horizontally scrollable status filter bar: "New (4)" (selected with primary token), "In Progress (2)", "Resolved (8)", and an emergency type filter dropdown bounded by border-strong ("All Types"). Underneath, display stacked citizen request cards: 1) Card for "Request #RH-4092": citizen name "Aarav Sharma", status pill "New" (primary tint), neutral help type badge in surface-muted with HeartPulse icon "Medical", location "Ward 4, near Government School, Sector 2", people count "4 people", phone number "+91 98765 43210" (with 44px tap-to-call button), details snippet "Elderly family member requires insulin and clean drinking water", timestamp "12 mins ago". Action button below: primary "Mark In Progress". 2) Second card for "Request #RH-4089": citizen "Sunita Devi", status pill "In Progress" (warning token), neutral type badge "Rescue" with LifeBuoy icon, location "Ward 4 River Edge", with action button "Mark Resolved" (agriculture token). Conclude with a bottom navigation bar: Requests, Alerts, and Sign Out.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet help requests triage console. Use the project design system. Layout with a 240px left sidebar, a central request table (width 600px), and a right detail inspector panel (width 440px) on a background canvas with text typography and 1px border dividers. The sidebar shows "Help Requests" highlighted with counter badge "7". In the central area, display H1 "Citizen Assistance Requests", filter tabs (All, New, In progress, Resolved), and category filter chips (Medical, Food & water, Rescue, Shelter). Show a request list where the first item is selected: "Request #RH-4092" | Aarav Sharma | Medical (neutral badge in surface-muted) | Ward 4 | Status pill "New" (primary tint) | "14 Oct 2026, 11:20 AM". In the right detail panel, display full intake details for Request #RH-4092: citizen name "Aarav Sharma", direct phone number "+91 98765 43210" (staff only visibility), location "Ward 4, near Government School, Sector 2", party size "4 people", full emergency description "Elderly family member requires insulin injections and clean drinking water immediately. Water reaching doorstep." Display quick action buttons: primary "Mark In Progress" and success "Mark Resolved" (agriculture token).
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `background`, sidebar to `surface`, request cards/table to `surface`, and right detail panel to `surface`.
* Status pills switch to dark variants (`New` uses dark primary tint; `In Progress` uses dark warning; `Resolved` uses dark agriculture).
* Help type badges display neutral `surface-muted` background with `text` typography.
* Phone number text remains high-contrast `text` with a distinct phone icon.
* Selected table row displays `surface-muted` background with `primary` left indicator.
* Action buttons maintain legible text (`Mark Resolved` uses `agriculture` token).

---

### Must Not
* Phone numbers must NEVER be visible to public unauthenticated users; only authenticated staff can view them on this screen.
* Must not use external telephony or SMS webhook status banners (all communications occur in-person or via local camp radio).
* Must not allow permanent deletion of emergency requests during active crisis phase (requests can only transition to Resolved).
* Must not use purple or violet anywhere in status pills or buttons.
* Must not use red emergency coloring for general Medical help type badges (keep badges neutral surface-muted).
* Must not include invented features like notes logs, "Add Note" buttons, Wi-Fi badges, or audit timestamps.
* Must not use raw hex codes in prompts.
