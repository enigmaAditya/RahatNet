# 11 Staff Dashboard Screen

### Purpose and Audience
Central management dashboard for disaster relief coordinators, shelter managers, and system administrators. Provides immediate visibility into incoming citizen help requests, active emergency broadcasts, content metrics, and quick response triggers.

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet staff operational dashboard. Use the project design system. Layout as a two-column staff portal: a 240px fixed left sidebar and a flexible main content area on a background canvas with text typography and 1px border dividers. The left sidebar contains "RahatNet Staff Console" and navigation links: Dashboard (active with primary accent indicator), Help Requests (badge "7"), Alerts (badge "1"), Articles ("12"), and Users (admin only). At the sidebar bottom, show user profile "Dr. Priya Verma" with "Admin" pill badge and sign-out icon. In the main header, display H1 "Operations Overview" and quick action buttons: emergency action "Post Alert" (emergency token) and secondary action "New Article". Below, render four stat cards: 1) "Open Help Requests": 7 (subtext: "4 new"), 2) "Active Alerts": 1 (critical flood broadcast), 3) "Published Articles": 12, 4) "Staff accounts": 6. Below the stats, show two columns: on the left, an "Active Alerts" panel showing the critical emergency banner "Flood water rising in Ward 4 — move to Government School, Sector 2" with "End Alert" button; on the right, a "Recent Help Requests" table displaying citizen name "Aarav Sharma", area "Ward 4", category "Medical", status pill "New" (primary tint), and "View details" button.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `background`, sidebar to `surface`, and stat cards to `surface`.
* Structural borders and column dividers use `border`.
* Sidebar active link uses `primary` indicator and `surface-muted` hover state.
* Stat card numbers remain bold `text` with `text-muted` labels.
* Active critical alert card in the left column uses dark emergency background with high-contrast text and emergency border.
* Status pills switch to dark variants (`New` uses dark primary tint with high-contrast text).

---

### Must Not
* Must not display third-party cloud analytics graphs, line charts, or network latency ping meters.
* Must not use animated pulsing radar icons or decorative neon accents.
* Must not make navigation items hidden inside nested burger menus on desktop.
* Must not use purple or violet anywhere in sidebar items, stat cards, or status pills.
* Must not use raw hex codes in prompts.
* Must not include invented copy such as "Local Server Online", "all synced locally", or "offline sync status".
