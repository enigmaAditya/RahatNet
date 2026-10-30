# 06 Request Help Screen

### Purpose and Audience
Emergency intake interface for citizens facing distress during a disaster. Enables victims to submit critical requests for medical aid, food, rescue, or shelter directly to the local relief team without internet.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet emergency help request form. Use the project design system. Layout top to bottom on a background canvas with 1px border dividers and text typography. At the top, show the single 56px sticky header with "RahatNet" wordmark (no status dot) on the left, and on the right: search icon button, saved icon button, language button showing "हिंदी", and theme icon button, all as 44px touch targets with 8px gaps, fitting cleanly at 360px without page scroll. Below header, show breadcrumb "Home / Request Help" and H1 "Request Emergency Help". Prominently display a reassurance privacy callout with primary tint background and border: "Only volunteers can see your request. Your phone number is never shown publicly." Render form fields: 1) Full Name input bounded by border-strong filled with "Aarav Sharma", 2) Area / Location input bounded by border-strong showing an inline validation error with emergency token border and error text "Please provide your landmark or ward location", 3) Type of Help selectable as large 2x3 radio cards bounded by border-strong: Medical (selected with 2px primary border), Food & water, Shelter, Rescue, Missing person, Other, 4) Number of People input bounded by border-strong ("4"), 5) Details textarea bounded by border-strong ("Elderly family member requires insulin and clean drinking water near Ward 4"), and 6) Optional Phone input bounded by border-strong ("9876543210"). Below, provide an Emergency primary submit button "Send Help Request", followed by the mobile footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet emergency help request page. Use the project design system. Layout top to bottom within a 720px centered form container on a background canvas with text typography and 1px border dividers. At the top, show the sticky 64px header with "RahatNet" wordmark, four category links, a 200px search field bounded by border-strong, a single language button showing "हिंदी", a theme icon button, and a "Saved" link with bookmark icon (no "Works without internet" badge in the header). Below, render breadcrumb "Home / Request Help" and page title H1 "Request Emergency Assistance". Display an info privacy banner stating: "Only verified relief volunteers can see your request. Your phone number is never shown publicly." Render form elements: 1) Full Name text field bounded by border-strong, 2) Area / Location input displaying an inline validation error with emergency token border, AlertCircle icon, and error message "Location or landmark is required for dispatch", 3) Type of Help displayed as a 6-option grid of large radio cards bounded by border-strong: Medical (selected with 2px primary border), Food & water, Shelter, Rescue, Missing person, Other, 4) Number of People field, 5) Details textarea with character count bounded by border-strong, 6) Optional Phone Number input. Include a prominent primary button "Submit Help Request" (height 48px), followed by the 3-column footer.
```

---

### State Edits: Success Confirmation
Apply this edit instruction to a duplicate of the generated help request screen to show the submitted state:

```text
Modify the generated help request screen to display the success confirmation state: replace the form card with a centered confirmation card featuring a green agriculture token border, a CheckCircle icon, H2 heading "Request Submitted", reference code badge "Reference: RH-4092", honest confirmation message "Your request has been saved. Volunteers at this help point will see it. Reference: RH-4092. If someone's life is in danger, call 112 if you have mobile signal.", and a primary button "Return to Homepage".
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `background` and inputs use `surface` background with `border-strong` border.
* Privacy reassurance callout shifts to dark primary tint with high contrast text.
* Inline validation error border uses `emergency` with high-contrast error text and icon.
* Selected help-type radio card displays `surface-muted` background with 2px `primary` border.
* Interactive form boundaries maintain `border-strong` for clear tactile visibility.

---

### Must Not
* Must not make the phone number field mandatory (citizens may have depleted batteries or lost SIM cards).
* Must not display submitted help requests publicly or expose citizen personal data.
* Must not use small, difficult-to-tap radio circles; help categories must be large, high-contrast cards.
* Must not use purple or violet anywhere in borders or button states.
* Must not make unrealistic promises like "Volunteer dispatch notified immediately" in success copy.
* Must not use raw hex codes in prompts.
