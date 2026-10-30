# 10 Staff Login Screen

### Purpose and Audience
Authentication gateway for disaster relief staff, camp coordinators, and system administrators to access dispatch management, broadcast alerts, and article editing consoles.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet staff login. Use the project design system. Layout top to bottom on a #F8FAFC canvas with 1px #E2E8F0 borders and #0F172A text. At the top, show a minimal header with the "RahatNet" logo, "Works without internet" badge, and a back link "← Back to Public Guides". In the center, display a 16px rounded card containing the staff sign-in form. At the top of the card, show a Lock icon (24px, #1D4ED8), H1 "Staff Portal Login", and the advisory subtitle "For disaster relief volunteers and administrators only." Directly below the heading, show an active inline error alert (#FEF2F2 background, #B91C1C border, AlertCircle icon): "Invalid staff credentials. Please check your relief email and password." Form fields include: 1) Staff Email input filled with "volunteer.desk@rahatnet.local" (15px text, height 44px, 8px radius), 2) Password input filled with masked dots, and 3) "Keep me signed in on this station" checkbox. Below, provide a 44px primary button "Sign In to Relief Console". Include helper note: "Offline password recovery requires physical verification with the local system admin at the incident tent." Conclude with a minimal footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet staff portal login. Use the project design system. Layout centered vertically and horizontally within a 480px width card on a #F8FAFC canvas with #0F172A text and 1px #E2E8F0 borders. At the top left of the screen, place a minimal navigation link "← Return to Public Knowledge Base". The centered login card features a 16px radius, #FFFFFF surface, and 1px #E2E8F0 border. Inside the card: 32px Shield or Lock icon in primary blue (#1D4ED8), H1 "Staff & Volunteer Sign In", and the role scope notice "Restricted access: for verified volunteers and system administrators". Show an active red error notification banner (#FEF2F2 background, #B91C1C border) stating "Invalid credentials. Contact the station administrator if your password was reset." Form controls include: 1) Work Email input filled with "admin@rahatnet.local", 2) Master Password input with show/hide password toggle, and 3) "Remember this device" checkbox. Render a primary 48px action button "Sign In to Relief Console". At the bottom of the card, show security advisory note "Operates purely offline on local server storage; no external authentication server required." Finish with local server status.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `#020617` and login card surface shifts to `#0F172A`.
* Input fields use `#1E293B` background with `#334155` border and `#F1F5F9` text.
* Authentication error banner switches to `#450A0A` background with `#FCA5A5` text and `#991B1B` border.
* Primary login button uses `#60A5FA` background with `#020617` text and 2px focus ring.
* Reassurance and role scope text switch to `#94A3B8`.

---

### Must Not
* Must not display third-party social or OAuth sign-in options (e.g., "Sign in with Google" or "Apple ID"); the system has zero external internet connectivity.
* Must not link to external "Forgot password" email flows; recovery is handled locally by the server administrator.
* Must not use purple or violet anywhere in card borders or buttons.
* Must not use shadows on the login card (depth is created through 1px border).
