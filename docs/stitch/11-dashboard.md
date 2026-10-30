# 11 Staff Dashboard Screen

### Purpose and Audience
Central management dashboard for disaster relief coordinators, shelter managers, and system administrators. Provides immediate visibility into incoming citizen help requests, active emergency broadcasts, content metrics, and quick response triggers.

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet staff operational dashboard. Use the project design system. Layout as a two-column staff portal: a 240px fixed left sidebar and a flexible main content area on a #F8FAFC canvas with #0F172A text and 1px #E2E8F0 borders. The left sidebar contains "RahatNet Staff Console", "Local Server Online" indicator, and navigation links: Dashboard (active, #1D4ED8 text with blue left indicator), Help Requests (badge "7"), Alerts (badge "1"), Articles ("24"), and Users (admin only). At the sidebar bottom, show user profile "Dr. Priya Verma" with "Admin" pill badge and sign-out icon. In the main header, display H1 "Operations Overview" and quick action buttons: primary "Post Alert" (red #B91C1C) and secondary "New Article". Below, render four stat cards: 1) "Open Help Requests": 7 (subtext: "3 urgent medical"), 2) "Active Alerts": 1 (critical flood broadcast), 3) "Published Articles": 24 (all synced locally), 4) "Volunteers On Duty": 12. Below the stats, show two columns: on the left, an "Active Alerts" panel showing the critical banner "Flood water rising in Ward 4 — move to Government School, Sector 2" with "End Alert" button; on the right, a "Recent Help Requests" table displaying citizen name "Aarav Sharma", area "Ward 4", category "Medical", status pill "New" (#DBEAFE), and "View details" button. Finish with offline sync status.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `#020617`, sidebar to `#0F172A`, and stat cards to `#0F172A`.
* Structural borders and column dividers use `#334155`.
* Sidebar active link uses `#60A5FA` indicator and `#1E293B` hover state.
* Stat card numbers remain bold `#F1F5F9` with `#94A3B8` labels.
* Active critical alert card in the left column uses dark emergency `#450A0A` background with `#FCA5A5` text and `#991B1B` border.
* Status pills switch to dark variants (`New` uses `#1E3A8A` background with `#93C5FD` text).

---

### Must Not
* Must not display third-party cloud analytics graphs, line charts, or network latency ping meters.
* Must not use animated pulsing radar icons or decorative neon accents.
* Must not make navigation items hidden inside nested burger menus on desktop.
* Must not use purple or violet anywhere in sidebar items, stat cards, or status pills.
