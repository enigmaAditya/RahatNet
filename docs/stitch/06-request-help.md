# 06 Request Help Screen

### Purpose and Audience
Emergency intake interface for citizens facing distress during a disaster. Enables victims to submit critical requests for medical aid, food, rescue, or shelter directly to the local relief team without internet.

---

### Stitch Prompt: Mobile (390px)

```text
Design a 390px mobile screen for the RahatNet emergency help request form. Use the project design system. Layout top to bottom on a #F8FAFC canvas with 1px #E2E8F0 borders and #0F172A text. At the top, show the sticky 56px header with "RahatNet" logo, search icon, saved button, language toggle ("EN / हिंदी" showing "आपातकालीन"), and theme toggle. Below header, show breadcrumb "Home / Request Help" and H1 "Request Emergency Help". Prominently display a reassurance privacy callout (#EFF6FF background, #1E40AF text, border 1px #BFDBFE): "Only volunteers can see your request. Your phone number is never shown publicly." Render form fields: 1) Full Name input filled with "Aarav Sharma", 2) Area / Location input showing an inline validation error with red border #B91C1C and error message "Please provide your landmark or ward location", 3) Type of Help selectable as large 2x3 radio cards: Medical (selected, 2px blue border), Food & water, Shelter, Rescue, Missing person, Other, 4) Number of People input ("4"), 5) Details textarea ("Elderly family member requires insulin and clean drinking water near Ward 4"), and 6) Optional Phone input ("9876543210"). Below, provide an Emergency primary submit button "Send Help Request". Underneath, show a success confirmation card state for reference: green #DCFCE7 card with checkmark, reference code "Request #RH-4092", and advice "Volunteers at Sector 2 relief desk have received this", followed by the mobile footer.
```

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet emergency help request page. Use the project design system. Layout top to bottom within a 720px centered form container on a #F8FAFC canvas with #0F172A text and 1px #E2E8F0 borders. At the top, show the sticky 64px header with "RahatNet" logo, "Works without internet" badge, section links, search bar, language toggle ("EN / हिंदी" showing "आपातकालीन"), and theme toggle. Below, render breadcrumb "Home / Request Help" and page title H1 "Request Emergency Assistance". Display an info privacy banner stating: "Only verified relief volunteers can see your request. Your phone number is never shown publicly." Render form elements: 1) Full Name text field, 2) Area / Location input displaying an inline validation error in red (#B91C1C border, AlertCircle icon, "Location or landmark is required for dispatch"), 3) Type of Help displayed as a 6-option grid of large radio cards: Medical, Food & water, Shelter, Rescue, Missing person, Other (with Medical selected), 4) Number of People field, 5) Details textarea with character count, 6) Optional Phone Number input. Include a prominent primary button "Submit Help Request" (height 48px). Beside or below the form, illustrate the success confirmation dialog state displaying reference number "Request #RH-4092" and notice "Volunteer dispatch notified at Government School, Sector 2", followed by the 3-column footer.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Canvas switches to `#020617` and inputs use `#0F172A` background with `#334155` border.
* Privacy reassurance callout shifts to `#172554` background with `#93C5FD` text and `#1E40AF` border.
* Inline validation error border uses `#F87171` with `#FCA5A5` error text and icon.
* Selected help-type radio card displays `#1E293B` background with 2px `#60A5FA` border.
* Success confirmation card uses `#052E16` background, `#4ADE80` text, and `#15803D` border.

---

### Must Not
* Must not make the phone number field mandatory (citizens may have depleted batteries or lost SIM cards).
* Must not display submitted help requests publicly or expose citizen personal data.
* Must not use small, difficult-to-tap radio circles; help categories must be large, high-contrast cards.
* Must not use purple or violet anywhere in borders or button states.
