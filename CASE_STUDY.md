# FORMA House — Portfolio Case Study

**Project type:** Self-initiated fictional concept  
**Industry:** Residential real estate / property development  
**Market context:** Lagos, Nigeria  
**Scope:** UX strategy, information architecture, responsive UI system, front-end implementation and conversion-flow prototype  
**Status:** Concept build — no real client or live business outcomes

## The problem to solve

A property website should not only make a building look desirable. It has to help a high-stakes buyer understand the home, the numbers, the developer's claims and the next step. The concept responds to a common trust gap in property journeys: people can be interested while still hesitating to enquire because important information is fragmented, unclear or available only after a sales conversation.

## Primary audiences

### The considered first-time buyer

- **Need:** Understand total commitment, layout, location and next steps without feeling rushed.
- **Hesitation:** Fear of hidden costs, a poor fit, unclear documentation or making an expensive mistake.
- **Design response:** Up-front sample prices, quick facts, clear specifications, a transparent due-diligence guide and low-pressure routes into a conversation.

### The diaspora / remote buyer

- **Need:** Feel able to investigate a property when they cannot immediately visit in person.
- **Hesitation:** Limited ability to inspect, verify claims or assess a seller remotely.
- **Design response:** Virtual walkthrough as a viewing option, explicit document-verification guidance, clear explanations and reminders to use independent professional advice.

### The sales team / developer

- **Need:** Receive better-informed enquiries and guide the buyer to the right next step.
- **Hesitation:** Time spent answering repeated basic questions and following up on low-intent messages.
- **Design response:** Property-specific routes, an indicative payment calculator, contextual CTAs and viewing-intent form fields. In a production build, these signals could be passed to a CRM and tied to a lead source.

## Information architecture

1. Home — orient the buyer and introduce the point of view.
2. Homes — search and narrow the collection.
3. Home detail — evaluate one property deeply.
4. Our approach — understand process and verification.
5. Field notes — learn before making a decision.
6. Field note detail — focused, readable buyer education.
7. Plan a visit — turn interest into a concrete next step.
8. Contact — ask a lower-commitment question.

These are dedicated routes. The homepage is not asked to do the work of every page.

## Key UX decisions

### 1. Clarity before persuasion

The interface discloses that the concept is fictional and uses an explicit sample-data note around property data. Trust-related content focuses on *what a buyer should verify*, rather than displaying invented “verified” badges, testimonials or outcome statistics.

### 2. Two useful conversion paths

The property detail page separates “Plan a visit” from a lower-commitment contact route. This supports people ready to view as well as people who still need an answer. The visit form then offers an in-person visit, virtual walkthrough or introductory call.

### 3. Pricing as a planning tool

A buyer can change deposit and tenure and see a simple illustrative split. The calculator states its assumptions: no interest or fees, equal payments, and no suggestion of approved financing. A real product would need pricing, legal and finance review before launch.

### 4. A deliberately small collection

Three sample homes are enough to demonstrate the listing experience, property detail route and filtering without pretending to be a real marketplace. The empty filter state gives users a clear way back rather than leaving a dead end.

### 5. Useful content is part of the sales journey

Buyer guides link back to the due-diligence and enquiry paths. This gives hesitant visitors a reason to keep engaging without forcing a sales form at every step.

## Responsive behavior is intentionally different by breakpoint

### Wide desktop (1100px+)

- Two-column, editorial hero lets brand message and architecture imagery have equal weight.
- Listing and comparison content uses two-column cards with secondary metadata on the same row.
- Type scales and secondary-copy contrast were refined so functional text remains readable without removing the editorial micro-labels that give the identity its architectural character.
- Each home detail route includes an original schematic floor-plan concept and a cost-to-confirm / due-diligence module. The plan is explicitly labelled not to scale; unknown fees and documents are described as not supplied rather than presented as verified facts.
- Detail views use a broad three-image gallery and persistent contextual enquiry panel.
- Footer uses a multi-column sitemap and separate brand statement.

### Tablet / compact desktop (701–1100px)

- Hero columns narrow and typography adjusts before the image becomes too small.
- Feature and values layouts reduce columns where content needs more reading width.
- Property detail switches to a tighter facts row and a slimmer side panel.
- Footer columns reduce without collapsing everything into a single vertical list prematurely.

### Mobile (700px and below)

- The hero becomes a clear sequence: message and CTA first, architecture image second, compact orientation line third.
- Main image moves to a full-width stage with inset gutters; image annotations are controlled carefully so that orientation remains legible without competing with the property imagery.
- Navigation becomes a dedicated full-width panel with numbered routes and a separate visit CTA.
- Filter controls open into a one-column panel suited to touch, with a visible reset action and a clearly labelled “Done” control; filtering updates immediately rather than waiting for an Apply step.
- Property details prioritize the title, price and main image, then stack gallery details and facts into a clear vertical rhythm.
- Calculators and forms switch to single-column controls; fields keep touch-friendly heights and labels remain visible.
- Article table-of-contents items become a two-column jump list, while the body stays one column for reading.

### Very narrow phones (380px and below)

- CTAs stack when a side-by-side row would cause awkward wrapping.
- Property prices move below names when the heading row gets too crowded.
- Calculator results stack vertically to avoid compressing currency values.
- Supporting navigation labels and metadata reduce before the important text does.

## Visual system and rationale

The direction is architectural-editorial rather than generic luxury: warm paper, near-black green, terracotta and moss. Serif headlines create a residential, magazine-like character; neutral sans-serif typography keeps forms, prices and navigation practical. Index numbers, restrained labels and hairline rules provide rhythm without relying on oversized gradients, glassmorphism or decorative cards everywhere.

The accent terracotta marks actions, important numbers and a small number of visual anchors. It is intentionally not used as a full-page decoration on every route. Imagery is treated as a setting and context, not as evidence of a real property listing.

## Prototype interactions

- Live property search and filters.
- Contextual detail routes for each sample listing.
- Price/deposit/term calculator.
- Interactive FAQ accordion.
- Validated visit and contact forms with confirmation states; the demo does not persist or transmit entered personal details.
- Generated sitemap and robots routes, responsive image optimisation, shared journal content for page/index/sitemap consistency, and a custom Open Graph social preview asset.
- Mobile navigation, article table of contents and cross-page CTA paths.

The forms do not save or transmit enquiry details. The visit confirmation retains only a non-personal summary (selected home, visit type and date) in temporary component state, solely to demonstrate the confirmation interface.

## Success metrics for a future live launch

No results are claimed because this concept has no live traffic. For a real deployment, the first measurement plan would include:

- Listing-to-detail click-through rate.
- Detail-page CTA click-through rate.
- Calculator interaction rate and CTA rate after interaction.
- Visit-form start-to-completion rate.
- Qualified enquiries per property page and per traffic source.
- Viewing bookings per qualified enquiry.
- Mobile page performance and form error rate.

Any conversion optimisation should be informed by observed behavior and qualitative feedback, not guessed numerical lifts.

## Next phase if commissioned

1. Stakeholder interviews and sales-process mapping.
2. Buyer interviews or usability tests to validate the trust and affordability assumptions.
3. Final content model and verified property data structure.
4. Backend, authentication, secure enquiry storage and CRM integration.
5. Analytics events, consent/privacy review and automated quality checks.
6. Accessibility and real-device performance testing before release.

**Disclosure:** This work is an independently created fictional portfolio exercise. No client relationship, live development, property verification, customer testimonial, sales result or business outcome is represented.
