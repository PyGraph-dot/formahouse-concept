# FORMA House — Real Estate Portfolio Concept (v1.4.0)

FORMA House is a fictional, buyer-first residential developer concept set in Lagos, Nigeria. It is designed to demonstrate product thinking, real-estate conversion strategy, responsive UX and frontend implementation — not just a collection of attractive screens.

> **Portfolio disclosure:** FORMA House, its properties, prices, availability, dates, location descriptions, contact details and service claims are fictional sample content created for this portfolio concept. They do not represent real homes or a real estate company. Property imagery is remote illustrative imagery from Unsplash and must be replaced with approved, accurately captioned imagery for any live use.

## What is included

- **Home** — editorial brand introduction, home collection, buyer-first principles and buying journey.
- **Homes** — separate collection route with working search and filters for location, bedrooms, price and status.
- **Home detail** — three static-generated detail routes, photo gallery, specifications, features, an original schematic floor-plan component, a transparent cost-to-confirm worksheet, a document checklist and a payment-plan calculator.
- **Our approach** — distinct strategy page, four-stage purchase journey, due-diligence checklist and interactive FAQ accordion.
- **Field notes** — journal index and three separate long-form article routes, with one shared content source used by the index, article pages and sitemap.
- **Plan a visit** — validation-enabled form with different options for in-person, virtual or phone contact.
- **Contact** — separate contact experience and message form.
- **404 page** — designed recovery route.
- **Responsive navigation** — a purpose-built mobile menu instead of simply shrinking desktop navigation.

## Interactions

- Listing search and filters update results immediately; the open filter panel explicitly explains this behavior, and its “Done” action only closes the panel. Reset and empty-result states are included.
- Property detail pages share a reusable payment calculator. Deposit and tenure controls recalculate the displayed figures.
- The FAQ accordion opens and closes answers.
- Viewing and contact forms validate required fields and show a confirmation state. The demo intentionally does **not** save or transmit submitted contact information. The visit confirmation keeps only a non-personal summary (selected home, visit type and date) in temporary component state. No message is sent to a real sales team.
- Navigation, article anchors, property cards and CTAs route to dedicated pages rather than jumping between sections of a single landing page.

## Run locally

Requirements: Node.js 20.9+ (Node 22 or 24 recommended) and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production checks and start:

```bash
npm run check
npm run security:check
npm run start
```

`npm run security:check` runs `npm audit` at the high-severity threshold. It requires registry access. The project manifest pins React and React DOM to the patched `19.2.9` release. This archive does not include a `package-lock.json` because registry access returned `EAI_AGAIN` during packaging, so the real dependency tree could not be resolved. Run `npm install` in an environment with registry access, then retain the generated `package-lock.json` under version control; do not hand-author it.

The project uses Next.js App Router, React 19.2.9, TypeScript, CSS and Lucide icons. DM Sans is loaded with `next/font/google`, so Next.js downloads and serves it with the built application rather than requesting Google Fonts through a runtime CSS import. Next.js is pinned to 16.4.3, the current stable release listed by npm at this review date. It supports Node.js 20.9+ and has scripts for type checking, production builds, dependency auditing and a combined verification run (`npm run check`). It intentionally uses a custom CSS design system rather than a generic component theme so the spacing, type scale, layouts and breakpoints can be reasoned about and tuned in one place. Next.js image optimisation is enabled for the allowed Unsplash source. The project includes generated `sitemap.xml`, `robots.txt` and a custom 1200×630 social preview image.


## Updating an earlier FORMA House download

The safest option is to extract this complete archive into a **new folder** so no stale files from the earlier version remain. Open PowerShell in the new `formahouse-concept` folder and run `npm install`, then `npm run dev`. To confirm the source and production build, run `npm run check`. If you prefer to update the old folder, replace its source and configuration files with the contents of this archive, then run `npm install` once to align the pinned direct dependency versions.

## Before production use

This is a portfolio-ready front-end concept, not a finished property-sales platform. To make it a live business site:

1. Replace all fictional property data and remote illustrative imagery with verified listings and licensed assets.
2. Connect enquiry forms to a secure backend and CRM/email provider, then add server-side validation, rate limiting, spam protection and a clear privacy notice before accepting real enquiries.
3. Add authentication and role-protected administration if staff will manage properties and leads.
4. Have legal/real-estate professionals review claims, title language, privacy notices, payments and all property documentation.
5. Set `NEXT_PUBLIC_SITE_URL` to the deployed public URL (for example, in Vercel project environment variables). This controls the metadata base URL, generated sitemap and robots sitemap URL.
6. Run `npm audit`, review the resolved dependency tree, and keep the generated `package-lock.json` under version control.
7. Configure analytics consent, privacy notices and error monitoring before collecting any real visitor data.
8. Test on target devices and networks, including low-end Android, narrow screens, keyboard navigation, screen readers and reduced-motion settings.

## Project structure

```text
src/
  app/
    page.tsx                     Homepage
    homes/page.tsx               Listing explorer
    homes/[slug]/page.tsx        Property detail template
    approach/page.tsx            Trust and buying process
    journal/page.tsx             Journal index
    journal/[slug]/page.tsx       Article template
    visit/page.tsx               Viewing request
    contact/page.tsx             Contact page
    sitemap.ts                   Generated sitemap
    robots.ts                    Robots policy and sitemap reference
    globals.css                  Tokens, components and responsive rules
  components/                    Shared navigation, cards and interactions
  lib/properties.ts              Fictional property content and helpers
  lib/journal.ts                 Shared long-form article content
  lib/site.ts                    Canonical site-origin helper
```

## Accessibility and typography

- The central `--muted` token (`#5B6157`) is used for secondary text on light surfaces. A separate `--terracotta-text` token (`#B5583D`) gives large accent headings stronger contrast on tinted surfaces, while the original terracotta remains part of the visual identity. Keep ordinary text at WCAG AA 4.5:1 contrast or better; check text over photographs separately because its background varies.
- Functional metadata generally uses 10–12px minimum sizing; 8–9px is reserved for short decorative indices rather than instructions or required content.
- DM Sans is loaded through `next/font/google`, which self-hosts the required files in the build output. The first production build needs network access to fetch the font files.

## Brand system

- **Ink / `#212A23`** — considered, grounded, high contrast.
- **Warm paper / `#F3F0E8`** — editorial warmth and a calm reading surface.
- **Terracotta / `#CE684A`** — one deliberate action/accent colour, not decoration everywhere. Large CTA panels use the darker terracotta variant for readable light text; dark-surface accent headings are explicitly kept on the brighter terracotta where it has stronger contrast.
- **Moss / `#7B826D`** — a decorative secondary tone; small informational copy uses a darker accessible neutral instead.
- **Display type** — traditional serif stack for emotion, contrast and editorial character.
- **Interface type** — neutral sans-serif stack for navigation, data, forms and readability.

The visual direction avoids conventional black-and-gold “luxury real estate” tropes. It aims for architectural editorial confidence with enough warmth to suit a residential brand.
