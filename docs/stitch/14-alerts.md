# 14 Broadcast Alerts Dispatch Screen

### Purpose and Audience
Incident dispatch interface for camp coordinators and emergency administrators to broadcast real-time critical disaster warnings and advisories across the local offline network.

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet staff alert broadcast dispatch. Use the project design system. Layout with a 240px left sidebar and main operational area on a #F8FAFC canvas with #0F172A text and 1px #E2E8F0 borders. The sidebar shows "Alerts" active with red indicator badge "1". In the main panel, show H1 "Disaster Broadcast Alerts" and subtitle "Instant live alerts pinned to the top of all citizen screens on this Wi-Fi network". The top half features the "Create Broadcast Alert" form in a 16px panel: 1) Severity radio cards: Critical (selected, red #B91C1C border, non-dismissible), Warning (amber, dismissible), and Info (blue, dismissible), 2) Alert Title input filled with "Flood water rising in Ward 4 — move to Government School, Sector 2", 3) Affected Area input ("Ward 4, Sector 2 relief camp"), 4) Message textarea ("Water level at river bridge has breached danger mark. Evacuate low-lying homes immediately"), 5) Expiration Select ("Active for 6 hours"), and 6) Primary Emergency button "Broadcast Alert Immediately" (#B91C1C). The bottom half displays the "Active and Past Broadcasts" table: 1) Active Critical Alert (Ward 4 flood, red badge, "Broadcast 42 mins ago", with primary red button "End Alert Now"), 2) Active Warning Alert ("Boil water notice for Sector 3", amber badge, "End Alert"), and 3) Expired Info Alert ("Relief distribution schedule", gray muted badge, status "Expired"). Finish with active broadcast telemetry.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `#020617` and alert creation card surface shifts to `#0F172A`.
* Critical severity selection card displays `#450A0A` background with `#F87171` border and `#FCA5A5` text.
* Warning selection card uses `#422006` background with `#FCD34D` text.
* The active critical broadcast row displays `#450A0A` background with `#991B1B` border.
* "End Alert Now" destructive action button displays `#B91C1C` background with `#FFFFFF` text and clear focus ring.

---

### Must Not
* Must not allow critical alerts to have a dismissible close ("X") button on public screens; critical broadcasts are strictly non-dismissible until ended by staff.
* Must not use red color for Info or Warning severity selectors.
* Must not trigger noisy audio autoplay or flashing animations that induce panic or disorientation.
* Must not use purple or violet anywhere in badges or buttons.
