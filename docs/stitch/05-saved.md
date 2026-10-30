# 05 Saved Offline Guides Screen

### Purpose and Audience
Personal offline storage locker for citizens. Allows users to quickly access essential survival guides bookmarked on their device without requiring continuous Wi-Fi connection to the local server.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet saved articles view. Use the project design system. Layout top to bottom on a background canvas with 1px border dividers and text typography. At the top, show the single 56px sticky header with "RahatNet" wordmark (no status dot) on the left, and on the right: search icon button, saved icon button (active with count "2"), language button showing "हिंदी", and theme icon button, all as 44px touch targets with 8px gaps, fitting cleanly at 360px without page scroll. Below header, show breadcrumb "Home / Saved Guides" and H1 "Saved Offline Guides". Under the title, show an info reassurance box with primary tint background and border explaining: "Saved guides stay stored on your phone even if you disconnect from this local Wi-Fi network." Display a list of saved article cards: 1) "Earthquake Safety and Survival Guide" (Emergency badge, updated 14 Oct 2026, 5 min read) with a 44px "Remove" button (trash icon), and 2) "Basic First Aid: Bleeding and Burn Management" (Health badge, 7 min read, Remove button). Conclude with the public footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet saved guides page. Use the project design system. Layout top to bottom within a 1120px max-width container on a background canvas with text typography and 1px border dividers. At the top, show the sticky 64px header with "RahatNet" wordmark, four category navigation links, a 200px search field bounded by border-strong, a single language button showing "हिंदी", a theme icon button, and an active "Saved (2)" link with bookmark icon (no "Works without internet" badge in the header). Below header, display breadcrumb "Home / Saved Guides" and H1 "Saved Offline Guides". Beside the heading, show a count badge "2 guides saved". Include an info banner with Info icon stating: "All saved guides remain cached locally on your device storage. You can read them anytime without an active connection." Render a 3-column grid of saved article cards: 1) "Earthquake Safety and Survival Guide" (Emergency badge) and 2) "Safe Drinking Water During Disasters" (Health badge), each featuring read time, en-IN date (14 Oct 2026), and a secondary "Remove" button. Conclude with the 3-column footer.
```

---

### State Edits: Empty Saved List
Apply this edit instruction to a duplicate of the generated saved screen to show the zero-saved guides state:

```text
Modify the generated saved guides screen to show the empty saved state: replace the saved article cards list with a centered empty-state card featuring a dashed border, a Bookmark icon in text-muted, H3 heading "No saved guides yet", explanatory body text "Tap the bookmark icon on any guide to save it to your phone for offline reference even when disconnected from local Wi-Fi", and a primary button "Browse Emergency Guides".
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `background` and saved article card surfaces to `surface`.
* Info reassurance banner shifts to dark primary tint with high-contrast text and border.
* Empty state dashed container retains clear visibility using `border`.
* Remove buttons display `text-muted` icon with hover state shifting to `emergency`.
* Bookmark active icons on cards show `primary` accent fill.

---

### Must Not
* Must not imply that saved guides require an account, email login, or cloud sync; guides are stored purely in client browser local storage.
* Must not use modal confirmations to confirm simple bookmark removals; a single tap with an undo toast is sufficient.
* Must not use purple or violet anywhere in badges or buttons.
* Must not use raw hex codes in prompts.
