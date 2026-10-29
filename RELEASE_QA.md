# FORMA House v1.4.0 — Release QA

This checklist is intentionally separate from the concept case study. Complete it before describing the project as build-verified or deploying it.

## 1. Install and verify dependencies

Run with Node.js 22 or 24 and network access to the npm registry:

```powershell
npm install
npm run check
npm run security:check
npm ls next react react-dom
```

This archive has no lockfile because the npm registry could not be resolved in the packaging environment. Generate it using `npm install` when registry access is available, and keep that generated `package-lock.json` under version control. Do not hand-author a lockfile: it must represent the real resolved dependency graph. React and React DOM are pinned to `19.2.9`; Next.js is pinned to `16.4.3`. DM Sans is configured through `next/font/google`; allow network access during the first clean build so the font can be fetched and self-hosted. Check official security advisories again before any later release.

## 2. Responsive browser checks

In Chrome DevTools, inspect these widths: `360`, `390`, `430`, `768`, `1024`, `1280`, and `1440` CSS pixels. On each relevant page, check: no horizontal overflow; headlines wrap intentionally; hero captions remain legible over their image; image subjects stay framed well; listing filters fit the screen; property floor plans can be inspected horizontally on narrow screens; cost tables remain readable; and forms are usable without zooming.

Test keyboard operation for the mobile menu, listing filters, FAQ controls, form validation, and all calls to action. Check visible focus, 200% browser zoom, reduced-motion settings, and contrast on both plain surfaces and image overlays. Ordinary text should meet WCAG AA 4.5:1 contrast, with at least 3:1 reserved for qualifying large text. Use the central `--muted` token for secondary text on light surfaces unless a contrast check supports another colour. The central `--muted` token (`#5B6157`) measures at least 4.61:1 against the configured pale/tinted surface tokens. The separate `--terracotta-text` accent (`#B5583D`) measures at least 3.43:1 against those surfaces and is reserved for large headings; the brighter `--terracotta` remains for decorative accents and dark-surface heading overrides. Smaller terracotta text uses the darker `--terracotta-dark` (`#9A432D`). Any new hard-coded neutral or text over photography should be contrast-checked before release.

## 3. Functional smoke test

- Use a listing search query, combine filters, reset filters and confirm the announced result count matches the visible cards. Confirm “Done” closes the filter panel without implying a staged Apply action.
- Open each property detail route; inspect the illustrative floor plan, cost worksheet, calculator and documentation checklist.
- Open all journal articles; check sidebar sticky behavior below the site header on desktop and non-sticky contents links at narrower widths.
- Submit demo viewing/contact forms with invalid and valid input. Confirm the UI shows only a demo confirmation and does not persist or transmit the submitted contact information.
- Check unknown property and article URLs return the designed not-found page.

## 4. Deployment

Set `NEXT_PUBLIC_SITE_URL` to the exact HTTPS origin that will serve the website. Verify page metadata, social preview image, `robots.txt`, and `sitemap.xml` after deployment. Re-run a visual pass on the deployed output; remote Unsplash assets need network access and should be replaced with licensed, approved assets for a live commercial project.

## Scope note

The project is a fictional frontend portfolio concept. The form flow is a demo, not a live enquiry system; there is no persistent lead database, staff authentication, or CRM integration.
