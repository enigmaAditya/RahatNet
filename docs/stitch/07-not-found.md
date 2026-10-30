# 07 Not Found & Recovery Screen

### Purpose and Audience
Error recovery view for citizens encountering broken URLs, misdirected links, or outdated bookmarks on the local server. Reassures users and redirects them to verified safety categories.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet 404 page not found view. Use the project design system. Layout top to bottom on a #F8FAFC canvas with 1px #E2E8F0 borders and #0F172A text. At the top, show the standard sticky 56px header with "RahatNet" logo, search button, saved guides icon, language toggle ("EN / हिंदी" showing "आपातकालीन"), and theme toggle, with the 4-category scrollable chip row directly below. In the main content area, center a calm, friendly not-found card with Lucide Compass or FileQuestion icon (48px, #475569). Display H1 "Page Not Found", followed by reassuring copy: "The page or guide you are looking for is not stored on this local Wi-Fi server. You can search preloaded guides or return to safety categories." Display a primary 44px button "Go to Homepage" (with Home icon). Below the button, render a "Browse by Category" grid of 4 section cards: Emergency (ShieldAlert, #B91C1C), Health (HeartPulse, #0F766E), Agriculture (Sprout, #15803D), and Education (BookOpen, #C2410C), each with guide counts. Finish with an emergency assistance reminder and the standard mobile footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet 404 page not found recovery view. Use the project design system. Layout top to bottom within a 1120px max-width container on a #F8FAFC canvas with #0F172A text and 1px #E2E8F0 borders. At the top, render the standard sticky 64px header with "RahatNet" wordmark, "Works without internet" badge, section navigation links, 240px search bar, "EN / हिंदी" language switch showing "आपातकालीन", theme switch, and saved guides link. In the central area, display a clean recovery panel featuring a 56px Lucide Compass icon (#475569), Display heading "Page Not Found", and clear explanatory guidance: "This page address is not available on the local offline server. All life-safety guides, health protocols, and emergency assistance tools remain fully accessible below." Render a primary action button "Return to Homepage" alongside an outline button "Search Guides". Underneath, display a 4-column section card grid linking directly to Emergency (ShieldAlert), Health (HeartPulse), Agriculture (Sprout), and Education (BookOpen) with guide counts. Conclude with the standard 3-column public footer.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `#020617` and recovery panel surface shifts to `#0F172A`.
* Compass icon shifts to `#94A3B8` without harsh contrast or glow.
* Four section cards retain their distinct category accent colors and borders.
* Primary button retains `#60A5FA` fill with `#020617` text.
* Public header and footer maintain dark mode token specifications.

---

### Must Not
* Must not display technical HTTP error traces, stack traces, or server codes (avoid "Error 404 NGINX").
* Must not remove the standard public header or footer; users must always have access to search and section navigation.
* Must not use cartoon illustrations of broken cables, dead robots, or stranded people.
* Must not use purple or violet anywhere on this recovery screen.
