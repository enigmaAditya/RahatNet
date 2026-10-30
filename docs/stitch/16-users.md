# 16 Staff & Users Administration Screen

### Purpose and Audience
System administration and identity management console for the lead incident commander or server administrator. Used to provision local volunteer accounts, manage access roles, and deactivate compromised credentials.

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet staff user administration console. Use the project design system. Layout with a 240px left sidebar and main administration workspace on a background canvas with text typography and 1px border dividers. The sidebar shows "Users" selected with "Admin Only" pill badge. In the main panel, display H1 "Staff & Volunteer Accounts", description "Manage authorized disaster response personnel and intake volunteers on this local server", and a primary action button "+ Invite Volunteer". Below, display a filter bar with a search input bounded by border-strong ("Search staff by name or email...") and a role filter dropdown bounded by border-strong ("All Roles"). Render the staff table: 1) Dr. Priya Verma | priya.verma@rahatnet.local | Role badge "Admin" (primary tint) | Status pill "Active" (agriculture token) | Actions (Edit, Deactivate), 2) Rohan Mehta | rohan.m@rahatnet.local | Role badge "Volunteer" (surface-muted) | Status "Active" | Actions, 3) Sunita Rao | sunita.r@rahatnet.local | Role "Volunteer" | Status "Active" | Actions, 4) Amit Kumar | amit.k@rahatnet.local | Role "Volunteer" | Status pill "Inactive" (text-muted) | Actions (Reactivate). In the foreground, show an active modal dialog "Invite New Volunteer": fields bounded by border-strong for Full Name ("Kavita Deshmukh"), Email ("kavita.d@rahatnet.local"), Temporary PIN/Password, Role selector (Volunteer / Admin radio cards), and footer buttons: outline "Cancel" and primary "Create Account". Beside the table, illustrate the destructive confirmation tooltip for "Deactivate Staff Member".
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `background` and administration table surface shifts to `surface`.
* Modal dialog uses `surface` background, `border` outline, and high-contrast backdrop.
* Form inputs in dialog and search bar maintain `border-strong` interactive boundaries.
* Role badges switch to dark tokens (`Admin` badge uses dark primary tint with high-contrast text).
* Destructive "Deactivate" action button or tooltip uses `emergency` token with high contrast.
* Active status pills display dark agriculture variant with high-contrast text.

---

### Must Not
* Must not display third-party identity providers, LDAP/Active Directory cloud sync status, or external SSO federations; identity is handled completely on local SQLite/encrypted storage.
* Non-admin staff members must never have access to this screen or its navigation link.
* Must not use purple or violet anywhere in role badges or dialog buttons.
* Must not use raw hex codes in prompts.
