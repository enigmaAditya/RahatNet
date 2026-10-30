# 13 Article Markdown Editor Screen

### Purpose and Audience
Authoring and publishing studio for emergency officials, medical specialists, and relief coordinators to draft, edit, and publish verified offline instructions and safety guides.

---

### Stitch Prompt: Desktop (1280px)

```text
Design a 1280px desktop screen for the RahatNet Markdown article editor. Use the project design system. Layout with a 240px left sidebar and editing canvas on a background canvas with text typography and 1px border dividers. At top right, display buttons: outline "Save Draft", outline "Preview", and primary "Publish to Local Intranet". In the workspace, present an edit form: 1) Title input bounded by border-strong filled with "Livestock Care and Shelter During Disasters", 2) Slug field bounded by border-strong showing an inline error with emergency border and AlertCircle icon ("Slug must contain only lowercase letters and hyphens"), 3) Section select dropdown bounded by border-strong with "Agriculture" chosen, 4) Summary textarea bounded by border-strong, 5) Tags input with chips: "livestock", "cattle", "fodder", 6) Source credit input ("Department of Animal Husbandry & NDMA Guidelines"). Below, provide a Markdown body editor (height 360px) with toolbar limited to Bold, H2, List, Link, plus a Write/Preview toggle. The editor displays real Markdown: "## Protecting Animals During Extreme Weather\nFarm animals, cattle, goats, and poultry represent irreplaceable working assets and food security for rural families. During floods, cyclones, and landslides, domestic animals are highly vulnerable if kept confined.\n\n## 1. Golden Rule: Never Leave Animals Tied Up\nWhen a flash flood warning is issued, untie livestock from stationary stakes or sheds." Below, show an attachments zone bounded by dashed border-strong with chips: "Emergency-Fodder-Rationing.pdf (640 KB)" and "Shelter-Layout.png (1.1 MB)" with remove buttons.
```

---

### Dark Mode Check
When switching this screen to dark mode in the Stitch theme editor, verify:
* Main editor canvas switches to `background` and card surfaces to `surface`.
* Markdown textarea and toolbar display `surface-muted` background with `border-strong` border.
* Monospace or markdown code blocks inside editor show `background` with high-contrast text.
* Inline validation error border uses `emergency` with high-contrast error description.
* Tag pills use `surface-muted` background with `border` and `text` typography.
* Attachment file chips use `surface-muted` with `border`.

---

### Must Not
* Must not display external CMS media libraries (e.g. Unsplash, AWS S3 buckets); all files are stored locally on the server filesystem.
* Must not use rich WYSIWYG editors with complex HTML injection; keep to clean structured Markdown and plain text.
* Must not use purple or violet anywhere in formatting toolbars or buttons.
* Must not include invented copy such as "local autosave timestamp".
* Must not use raw hex codes in prompts.
