# 07 Not Found & Recovery Screen

### Purpose and Audience
Error recovery view for citizens encountering broken URLs, misdirected links, or outdated bookmarks on the local server. Reassures users and redirects them to verified safety categories.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet 404 page not found view. Use the project design system. Layout top to bottom on a background canvas with 1px border dividers and text typography. At the top, show the single 56px sticky header with "RahatNet" wordmark (no status dot) on the left, and on the right: search icon button, saved icon button, language button showing "हिंदी", and theme icon button, all as 44px touch targets with 8px gaps, fitting cleanly at 360px without page scroll. In the main content area, center a calm, friendly not-found card with Lucide Compass or FileQuestion icon in text-muted. Display H1 "Page Not Found", followed by reassuring copy: "The page or guide you are looking for is not stored on this local Wi-Fi server. You can search preloaded guides or return to safety categories." Display a primary 44px button "Go to Homepage" (with Home icon). Below the button, render a "Browse by Category" grid of four section cards showing 3 guides each: Emergency with Hindi subtitle "आपातकालीन सुरक्षा" (ShieldAlert), Health (HeartPulse), Agriculture (Sprout), and Education (BookOpen). Finish with the public footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet 404 page not found recovery view. Use the project design system. Layout top to bottom within a 1120px max-width container on a background canvas with text typography and 1px border dividers. At the top, render the standard sticky 64px header with "RahatNet" wordmark on the left, four category links in the center, and on the right: a 200px search field bounded by border-strong, a single language button showing "हिंदी", a theme icon button, and a "Saved" link with bookmark icon (no "Works without internet" badge in the header). In the central area, display a clean recovery panel featuring a 56px Lucide Compass icon in text-muted, Display heading "Page Not Found", and clear explanatory guidance: "This page address is not available on the local offline server. All life-safety guides, health protocols, and emergency assistance tools remain fully accessible below." Render a primary action button "Return to Homepage" alongside an outline button "Search Guides". Underneath, display a 4-column section card grid linking directly to Emergency (with Hindi subtitle "आपातकालीन सुरक्षा"), Health, Agriculture, and Education with 3 guides each. Conclude with the 3-column footer.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `background` and recovery panel surface shifts to `surface`.
* Compass icon shifts to `text-muted` without harsh contrast or glow.
* Four section cards retain their distinct category accent colors and borders.
* Primary button retains `primary` fill with on-primary text.
* Public header and footer maintain dark mode token specifications.

---

### Must Not
* Must not display technical HTTP error traces, stack traces, or server codes (avoid "Error 404 NGINX").
* Must not remove the standard public header or footer; users must always have access to search and section navigation.
* Must not use cartoon illustrations of broken cables, dead robots, or stranded people.
* Must not use purple or violet anywhere on this recovery screen.
* Must not use raw hex codes in prompts.
