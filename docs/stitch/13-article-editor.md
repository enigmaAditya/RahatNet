# 13 Article Markdown Editor Screen

### Purpose and Audience
Authoring and publishing studio for emergency officials, medical specialists, and relief coordinators to draft, edit, and publish verified offline instructions and safety guides.

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet Markdown article editor. Use the project design system. Layout with a 240px left sidebar and full-width editing canvas on a #F8FAFC background with #0F172A text and 1px #E2E8F0 borders. At top right, display action buttons: outline "Save Draft", outline "Preview", and primary "Publish to Local Intranet" (#1D4ED8). In the main workspace, present an edit form: 1) Title input filled with "Livestock Care and Shelter During Disasters", 2) Slug field showing an inline validation error in red (#B91C1C border, AlertCircle icon, "Slug must contain only lowercase letters, numbers, and hyphens") with current text "livestock_care_shelter!", 3) Section select dropdown with "Agriculture" chosen, 4) Summary textarea (2-line clamp description of livestock evacuation procedures), 5) Tags input showing chips: "livestock", "cattle", "feed", "floods", 6) Source credit input ("Ministry of Agriculture"). Below metadata, provide a dual-mode Markdown body editor (height 400px) with toolbar (Bold, Italic, H2, List, Table, Warning Box callout) containing real content: "## Emergency Evacuation of Cattle\nMove dairy herds to elevated embankment pens before water exceeds 0.5 meters..." Beside or below, show an attachments upload zone with uploaded file chips: "Emergency-Fodder-Rationing.pdf (640 KB)" and "Shelter-Layout.png (1.1 MB)" with remove buttons. Finish with local autosave timestamp.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Main editor canvas switches to `#020617` and card surfaces to `#0F172A`.
* Markdown textarea and toolbar display `#1E293B` background with `#334155` border.
* Monospace or markdown code blocks inside editor show `#020617` background with `#F1F5F9` text.
* Inline validation error border uses `#F87171` with `#FCA5A5` error description.
* Tag pills use `#1E293B` background with `#334155` borders and `#F1F5F9` text.
* Attachment file chips use `#1E293B` surface with `#334155` borders.

---

### Must Not
* Must not display external CMS media libraries (e.g. Unsplash, AWS S3 buckets); all files are stored locally on the server filesystem.
* Must not use rich WYSIWYG editors with complex HTML injection; keep to clean structured Markdown and plain text.
* Must not use purple or violet anywhere in formatting toolbars or buttons.
