# FORMA House refinement pass

## What changed

- Raised functional type sizes across navigation, cards, property details, articles and forms while keeping tiny labels only where they are decorative metadata.
- Darkened secondary text colours and improved the contrast of light-on-dark labels and button hover states.
- Enabled Next.js image optimisation and AVIF/WebP delivery for allowed Unsplash imagery.
- Removed browser `localStorage` persistence from both enquiry forms. The portfolio demo now only shows an in-session confirmation and does not store or transmit submitted personal details.
- Corrected the minimum selectable viewing date to use local time rather than a UTC-derived date.
- Added an original SVG floor-plan schematic component to every property detail page. It is labelled as a concept, not a measured architectural plan.
- Added a cost-to-confirm worksheet and due-diligence document checklist. Unknown charges are not guessed; documents are not represented as verified.
- Added a branded Open Graph image, generated sitemap and robots routes, plus `NEXT_PUBLIC_SITE_URL`-based metadata configuration.
- Updated the README and case study to describe the refined behavior accurately.

## Verification notes

- TypeScript/TSX source files passed a syntax-transpilation check.
- CSS brace balance passed.
- A complete `npm run typecheck` and `npm run build` could not be run here because dependency installation timed out. Run both commands in the local project after merging the update before treating it as production-ready.


## Portfolio quality pass (v1.2.0)

- Centralised journal article content so the journal index, article routes and sitemap use one source of truth.
- Added active route states to the main navigation; mobile navigation now closes on route changes and Escape, with explicit control relationships.
- Added accessible relationships to filter controls and FAQ accordion controls, plus an announced results count.
- Removed personal fields from the viewing confirmation state; only property/visit/date summary data is retained temporarily. Updated all copy to consistently state that demo forms neither save nor send enquiries.
- Made the viewing date minimum local-time aware after hydration and respected reduced-motion preferences for the post-submit scroll.
- Improved canonical-origin fallback behavior for Vercel previews and added social-card metadata.
- Completed a final typography pass, including small metadata, labels, forms, navigation and property-cost copy; retained the square-corner editorial design.
- Added a combined `npm run check` command and pinned Node.js engine expectations in package metadata.


## Finishing pass (v1.3.0)

- Updated React and React DOM to `19.2.9`, the patched release identified in the React Server Components advisory published on 14 October 2026. Kept Next.js at `16.4.3`, above the patched `16.4.1` baseline and the stable release listed on npm at this review date.
- Added `npm run security:check` to run the high-severity `npm audit` check.
- Consolidated the duplicated muted/terracotta tokens into the original `:root` token block, removed the duplicate reduced-motion block, and removed 283 superseded declarations plus 88 empty CSS rules that were left by the previous cascade pass. This reduced `globals.css` from 105.4 KB / 1,400 lines to approximately 97.6 KB / 1,300 lines while preserving later winning declarations in the same selector/condition scope.
- Fixed search and form placeholder contrast by using the central muted-text token.
- Corrected sticky offsets for the article contents sidebar and property contact card so they sit below the 82px sticky site header.
- Clarified the listing-filter interaction: results update immediately, the panel explains that behavior, and the button is now labelled “Done” with a check icon because it closes the panel instead of applying a staged filter set.
- Increased microcopy sizing for the narrowest hero image caption so it remains readable on small phones.
- Added release QA instructions covering dependency auditing, local lockfile generation, viewport testing and canonical site URL verification.

## Verification status

- Source-level changes and archive structure were checked in this environment.
- The npm registry was unreachable during this finishing pass, so a full dependency install, generated npm lockfile, TypeScript check and production build could not be completed here. Run `npm install`, retain its generated `package-lock.json`, then run `npm run check` and `npm run security:check` on a machine with registry access before deployment.


## Final accessibility and font-delivery pass (v1.4.0)

- Removed the runtime Google Fonts CSS `@import` and moved DM Sans to `next/font/google`, allowing Next.js to fetch, optimise and serve font assets with the built app. A build environment with registry/network access is required for the first font fetch.
- Applied the central `--muted` token to remaining low-contrast informational text on light surfaces, including page-hero annotations, property metadata, the search shortcut, visit timing, and confirmation labels.
- Increased meaningful microcopy for listing filters, property detail status, article metadata, mobile navigation annotations and visit timing; tiny text is now reserved more intentionally for decorative indices.
- Added restrained dark translucent plates behind image annotations to protect text legibility over variable photography while preserving the square-corner editorial system.
- Changed broad CTA panels to the existing dark terracotta token and separated copy rules for dark surfaces from muted copy on light surfaces, preventing low-contrast foreground/background combinations.
- Updated release documentation for contrast validation and font delivery.


- Set a darker neutral `--muted` token that passes WCAG AA contrast against the principal light and tinted surface colours (minimum calculated ratio 4.61:1).
- Added a separate `--terracotta-text` variant for large accent headings on light surfaces (minimum calculated ratio 3.43:1 across configured surfaces), while retaining the existing brighter terracotta on dark sections where its contrast is stronger.
- Updated original component declarations for calculator, location and property-aside copy so the source rules themselves match the final accessible type scale.
- Raised the source defaults for footer annotations and the deployed metadata styles; retained 10px only for compact supporting labels where the specific layout supports it.

## Verification status (v1.4.0)

- Source edits and static syntax/import checks were performed in the packaging environment.
- Full Next.js build, font fetch, browser screenshots, runtime accessibility testing and `npm audit` still require a working npm/network environment. Do not describe these checks as passed until they have completed locally or in CI.
