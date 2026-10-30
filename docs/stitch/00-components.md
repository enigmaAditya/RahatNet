# 00 Components System Sheet

### Purpose and Audience
Visual design token verification sheet displaying all atomic components and composite UI patterns in light mode. Used by designers and developers to anchor design consistency across all RahatNet screen generations.

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen displaying the RahatNet component system sheet. Use the project design system. Layout top to bottom on a background canvas with text typography and 1px border dividers. At the top, show the public header with "RahatNet" wordmark, four category links with Emergency underlined as active, a 200px search field bounded by border-strong, a single language button showing "हिंदी", a theme icon button, and a "Saved" link with bookmark icon. Below, render an alert banner section showing Critical (emergency token background and border, non-dismissible: "Flood water rising in Ward 4 — move to Government School, Sector 2"), Warning (warning token, dismissible), and Info (primary tint, dismissible) banners. Next, display button rows: Primary, Secondary, Outline, Ghost, and Emergency across Default, Hover, Focus (2px primary ring), and Disabled states. Beside buttons, show form controls bounded by border-strong: text input with inline error "Name is required", select dropdown, textarea, radio card group, and file upload zone. Next, render a 4-column section card grid for Emergency (ShieldAlert, emergency token), Health (HeartPulse, health token), Agriculture (Sprout, agriculture token), and Education (BookOpen, education token) with guide counts. Below, show an article card for "Recognising and Treating Heat Stroke" (updated 14 Oct 2026, 4 min read), an Emergency Helpline card (112, 108, 101, 1078) with cellular network warning, a 3-row data table with status pills (New, In progress, Resolved), stat cards, breadcrumb, tags, badges, a sample confirmation dialog, and the public footer.
```

---

### Dark Mode Check
When switching this sheet to dark mode in the Stitch theme editor, verify:
* Canvas background shifts to `background`, surfaces to `surface`, and muted surfaces to `surface-muted`.
* All structural borders shift to `border` while form boundaries maintain `border-strong` without loss of visual hierarchy.
* Body and heading typography switch to high-contrast `text`.
* Section cards maintain their exact semantic identity: Emergency (`emergency`), Health (`health`), Agriculture (`agriculture`), Education (`education`).
* Critical alert banner uses emergency background with on-emergency contrast and emergency border.
* Warning alert uses warning background with warning text.
* Zero purple or violet tones appear in any component state.

---

### Must Not
* Must not use shadows on cards, buttons, badges, or inputs (shadows permitted only on the sticky header, dialog, and toast).
* Must not use rounded corners larger than 8px for controls, 12px for cards, 16px for dialogs/banners, or full for pills.
* Must not display decorative gradients, glows, blur filters, or glassmorphism.
* Must not use emergency red for generic buttons or non-critical components.
* Must not use raw hex codes in prompts; all styling must reference design system semantic tokens.
