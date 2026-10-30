# 10 Staff Login Screen

### Purpose and Audience
Authentication gateway for disaster relief staff, camp coordinators, and system administrators to access dispatch management, broadcast alerts, and article editing consoles.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet staff login. Use the project design system. Layout top to bottom on a background canvas with 1px border dividers and text typography. At the top, show a minimal header with the "RahatNet" wordmark (no status dot) and a back link "← Back to Public Guides". In the center, display a 16px radius surface panel containing the staff sign-in form bounded by 1px border. At the top of the card, show a Lock icon in primary token, H1 "Staff Portal Login", and the advisory subtitle "For disaster relief volunteers and administrators only." Form fields include: 1) Staff Email input bounded by border-strong filled with "volunteer.desk@rahatnet.local" (15px text, height 44px, 8px radius), 2) Password input bounded by border-strong filled with masked dots and a show/hide password toggle, and 3) "Keep me signed in on this station" checkbox. Below, provide a 44px primary action button "Sign In to Relief Console". Include helper note: "Offline password recovery requires physical verification with the local system admin at the incident tent." Conclude with a minimal footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet staff portal login. Use the project design system. Layout centered vertically and horizontally within a 480px width card on a background canvas with text typography and 1px border dividers. At the top left of the screen, place a minimal navigation link "← Return to Public Knowledge Base". The centered login card features a 16px radius, surface background, and 1px border outline. Inside the card: 32px Lock icon in primary token, H1 "Staff & Volunteer Sign In", and the role scope notice "Restricted access: for verified volunteers and system administrators". Form controls include: 1) Work Email input bounded by border-strong filled with "admin@rahatnet.local", 2) Master Password input bounded by border-strong with show/hide toggle, and 3) "Remember this device" checkbox. Render a primary 48px action button "Sign In to Relief Console". At the bottom of the card, show security advisory note "Operates purely offline on local server storage; no external authentication server required." Finish with local server status.
```

---

### State Edits: Error State
Apply this edit instruction to a duplicate of the generated login screen to display the authentication failure state:

```text
Modify the generated staff login screen to display the authentication error state: above the form fields, insert an inline error banner with emergency background and emergency border featuring an AlertCircle icon and error message "Invalid staff credentials. Please check your relief email and password.", and update the password input border to emergency token.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `background` and login card surface shifts to `surface`.
* Input fields use `surface` background with `border-strong` border and `text` typography.
* Primary login button uses `primary` background with on-primary text and 2px focus ring.
* Reassurance and role scope text switch to `text-muted`.

---

### Must Not
* Must not display third-party social or OAuth sign-in options (e.g., "Sign in with Google" or "Apple ID"); the system has zero external internet connectivity.
* Must not link to external "Forgot password" email flows; recovery is handled locally by the server administrator.
* Must not use purple or violet anywhere in card borders or buttons.
* Must not use shadows on the login card (depth is created through 1px border).
* Must not use raw hex codes in prompts.
