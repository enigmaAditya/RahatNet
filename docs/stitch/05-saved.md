# 05 Saved Offline Guides Screen

### Purpose and Audience
Personal offline storage locker for citizens. Allows users to quickly access essential survival guides bookmarked on their device without requiring continuous Wi-Fi connection to the local server.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet saved articles view. Use the project design system. Layout top to bottom on a #F8FAFC canvas with 1px #E2E8F0 borders and #0F172A text. At the top, show the sticky 56px header with "RahatNet" logo, search icon, saved icon (active with counter badge "2"), language switch ("EN / हिंदी" with "आपातकालीन"), and theme toggle. Below header, show breadcrumb "Home / Saved Guides" and H1 "Saved Offline Guides". Under the title, show an info reassurance box (#EFF6FF background, #1E40AF text, 1px #BFDBFE border) explaining: "Saved guides stay stored on your phone even if you disconnect from this local Wi-Fi network." Display a list of saved article cards: 1) "Earthquake Safety and Survival Guide" (Emergency badge, updated 14 Oct 2026, 5 min read) with a 44px "Remove" button (trash icon), and 2) "Basic First Aid: Bleeding and Burn Management" (Health badge, 7 min read, Remove button). At the bottom, illustrate the alternate empty state layout: a dashed-border card with a Bookmark icon, heading "No saved guides yet", explanatory text "Tap the bookmark icon on any guide to save it to your phone for offline reference", and a primary button "Browse Emergency Guides", followed by the mobile footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet saved guides page. Use the project design system. Layout top to bottom within a 1120px max-width container on a #F8FAFC canvas with #0F172A text and 1px #E2E8F0 borders. At the top, show the sticky 64px header with "RahatNet" logo, "Works without internet" badge, section navigation links, 240px search bar, "EN / हिंदी" language switch showing "आपातकालीन", theme switch, and "Saved Guides (3)" active link. Below header, display breadcrumb "Home / Saved Guides" and H1 "Saved Offline Guides". Beside the heading, show a count badge "3 guides saved". Include an info banner with Info icon stating: "All saved guides remain cached locally on your device storage. You can read them anytime without an active connection." Render a 3-column grid of saved article cards: 1) "Earthquake Safety and Survival Guide" (Emergency), 2) "Safe Drinking Water During Disasters" (Health), and 3) "Preparing a Family Emergency Kit (Go-Bag)" (Emergency), each featuring category badge, read time, date (14 Oct 2026), and a secondary "Remove" button. Below, show the alternate empty state preview box with "No guides saved yet" and an action button "Explore Guides", followed by the 3-column footer.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `#020617` and saved article card surfaces to `#0F172A`.
* Info reassurance banner shifts to `#172554` background with `#93C5FD` text and `#1E40AF` border.
* Empty state dashed container retains clear visibility using `#334155` border.
* Remove buttons display `#94A3B8` icon with hover state shifting to emergency `#F87171`.
* Bookmark active icons on cards show `#60A5FA` primary accent fill.

---

### Must Not
* Must not imply that saved guides require an account, email login, or cloud sync; guides are stored purely in client browser local storage.
* Must not use modal confirmations to confirm simple bookmark removals; a single tap with an undo toast is sufficient.
* Must not use purple or violet anywhere in badges or buttons.
