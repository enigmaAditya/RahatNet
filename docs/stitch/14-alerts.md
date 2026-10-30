# 14 Broadcast Alerts Dispatch Screen

### Purpose and Audience
Incident dispatch interface for camp coordinators and emergency administrators to broadcast real-time critical disaster warnings and advisories across the local offline network.

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet staff alert broadcast dispatch. Use the project design system. Layout with a 240px left sidebar and main operational area on a background canvas with text typography and 1px border dividers. The sidebar shows "Alerts" active with red indicator badge "1". In the main panel, show H1 "Disaster Broadcast Alerts" and subtitle "Shown at the top of every citizen's screen on this network within about 30 seconds." The top half features the "Create Broadcast Alert" form in a 16px panel: 1) Severity radio cards bounded by border-strong: Critical (selected, emergency border, non-dismissible), Warning (warning token, dismissible), and Info (primary tint, dismissible), 2) Alert Title input bounded by border-strong filled with "Flood water rising in Ward 4 — move to Government School, Sector 2", 3) Affected Area input bounded by border-strong ("Ward 4, Sector 2 relief camp"), 4) Message textarea bounded by border-strong ("Water level at river bridge has breached danger mark. Evacuate low-lying homes immediately"), 5) Expiration Select bounded by border-strong ("Active for 6 hours"), and 6) Primary Emergency action button "Broadcast Alert Immediately". The bottom half displays the "Active and Past Broadcasts" table: 1) Active Critical Alert (Ward 4 flood, emergency badge, "Broadcast 42 mins ago", with primary emergency action button "End Alert Now"), 2) Active Warning Alert ("Boil water notice for Sector 3", warning badge, "End Alert"), and 3) Expired Info Alert ("Relief distribution schedule", muted badge, status "Expired").
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `background` and alert creation card surface shifts to `surface`.
* Critical severity selection card displays dark emergency background with emergency border and high-contrast text.
* Warning selection card uses dark warning background with warning text.
* The active critical broadcast row displays dark emergency background with emergency border.
* "End Alert Now" destructive action button displays emergency background with white text and clear focus ring.

---

### Must Not
* Must not allow critical alerts to have a dismissible close ("X") button on public screens; critical broadcasts are strictly non-dismissible until ended by staff.
* Must not use red color for Info or Warning severity selectors.
* Must not trigger noisy audio autoplay or flashing animations that induce panic or disorientation.
* Must not use purple or violet anywhere in badges or buttons.
* Must not include invented copy such as "active broadcast telemetry".
* Must not use raw hex codes in prompts.
