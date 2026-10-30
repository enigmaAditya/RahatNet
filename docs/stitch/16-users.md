# 16 Staff & Users Administration Screen

### Purpose and Audience
System administration and identity management console for the lead incident commander or server administrator. Used to provision local volunteer accounts, manage access roles, and deactivate compromised credentials.

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet staff user administration console. Use the project design system. Layout with a 240px left sidebar and main administration workspace on a #F8FAFC canvas with #0F172A text and 1px #E2E8F0 borders. The sidebar shows "Users" selected with "Admin Only" pill badge. In the main panel, display H1 "Staff & Volunteer Accounts", description "Manage authorized disaster response personnel and intake volunteers on this local server", and a primary action button "+ Invite Volunteer" (#1D4ED8). Below, display a filter bar with a search input ("Search staff by name or email...") and a role filter dropdown ("All Roles"). Render the staff table: 1) Dr. Priya Verma | priya.verma@rahatnet.local | Role badge "Admin" (blue) | Status pill "Active" (green) | Actions (Edit, Deactivate), 2) Rohan Mehta | rohan.m@rahatnet.local | Role badge "Volunteer" (gray) | Status "Active" | Actions, 3) Sunita Rao | sunita.r@rahatnet.local | Role "Volunteer" | Status "Active" | Actions, 4) Amit Kumar | amit.k@rahatnet.local | Role "Volunteer" | Status pill "Inactive" (muted gray) | Actions (Reactivate). In the foreground, show an active modal dialog "Invite New Volunteer": fields for Full Name ("Kavita Deshmukh"), Email ("kavita.d@rahatnet.local"), Temporary PIN/Password, Role selector (Volunteer / Admin radio cards), and footer buttons: outline "Cancel" and primary "Create Account". Beside the table, illustrate the red destructive confirmation tooltip for "Deactivate Staff Member".
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `#020617` and administration table surface shifts to `#0F172A`.
* Modal dialog uses `#0F172A` background, `#334155` border, and high-contrast backdrop `rgba(2, 6, 23, 0.75)`.
* Role badges switch to dark tokens (`Admin` badge uses `#1E3A8A` background with `#93C5FD` text).
* Destructive "Deactivate" action button or dialog uses `#F87171` text or `#B91C1C` button background with white text.
* Active status pills display `#052E16` background with `#4ADE80` text.

---

### Must Not
* Must not display third-party identity providers, LDAP/Active Directory cloud sync status, or external SSO federations; identity is handled completely on local SQLite/encrypted storage.
* Non-admin staff members must never have access to this screen or its navigation link.
* Must not use purple or violet anywhere in role badges or dialog buttons.
