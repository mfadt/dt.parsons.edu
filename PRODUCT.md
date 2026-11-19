# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS. No framework, no build step, chosen by the user (greenfield repo; user picked plain static over Astro and over "your recommendation"). One hand-authored home page that a department can edit and host anywhere.

## Users

Mixed audience on one front door:

- Prospective BFA/MFA students deciding whether Design & Technology is the program for them, and needing a credible route to apply.
- Faculty, industry, and alumni looking for program facts: who teaches, what the curriculum is, where past thesis work lives.

Job to be done in one visit: understand what DT is, recognize whose program it is (the named faculty), and reach an action — apply, curriculum, or thesis archive.

## Product Purpose

Home page for dt.parsons.edu: the entrance to Parsons' BFA and MFA Design & Technology programs. It states what the program is, names the people who run it, and routes visitors to application, curriculum, and the thesis archive. Success is a visitor leaving with the program's position understood and one real action taken.

## Positioning

"Critical about technology with technology" — a program that has taught making and critique of computational media continuously since 1999. The claim is history plus practice: an archive of two decades of student thesis work (2011–2026, public) and a named full-time faculty who work in the medium. A sister program could copy the course list; it cannot copy the archive or the faculty record.

## Operating Context

- Content authority lives in `docs/content.md`; the page must stay close to it and keep its links.
- Degree pages, application, and curriculum resolve to existing newschool.edu URLs; thesis archives to parsons.edu/dt-YYYY and mfadt.parsons.edu/YYYY year pages.
- The programs are physically in D12 (the university's downtown building); "come visit us on D12" is factual visit guidance.
- The department maintains year-by-year thesis sites, not this page; the page links out rather than hosting work.

## Capabilities and Constraints

- Requested scope: a very basic home page with an elegant procedural, randomized, algorithmic animation as the background. That constraint is binding.
- No part-time faculty list yet: content doc carries "list T/K" — must not be invented. Omit or mark pending until supplied.
- `[Curriculum]` link text has no BFA/MFA target of its own beyond the two curriculum URLs in the content doc.
- No Parsons/New School brand kit or logo file is in the repo; nothing in the brand is fabricated. Type is the university's official Neue / Neue Display, loaded from the university font host `fonts.newschool.edu` (owner decision: dt.parsons.edu is in the same family of sites), not copied into the repo.

## Brand Commitments

- Name: Design & Technology (DT); BFA and MFA degree programs at Parsons / The New School.
- Typeface: The New School's Neue and Neue Display, served from `fonts.newschool.edu`. No logo, wordmark, or color assets supplied; no other binding brand constraints beyond the name and link destinations.

## Evidence on Hand

- `docs/content.md` — all page copy and links: about line, apply links, 13 full-time faculty names (two emeritus), curriculum links, thesis archive years 2011–2026 with URLs.
- Real thesis archive URLs for 2011–2026; no images, no case studies, no testimonials on hand. Nothing of the kind may be invented.

## Product Principles

1. The archive is the proof; the home page's job is to hand visitors to it.
2. Names carry weight — the full-time faculty list is program substance, not filler.
3. Keep the page small and honest: no invented claims, no invented people, no invented work.
4. Program identity is computational and critical; the page may demonstrate that rather than describe it.
5. Editable by the department: plain static files, readable source, no toolchain.

## Accessibility & Inclusion

No formal standard was mandated. Baseline: content readable with the animation disabled or absent, no motion that blocks reading, WCAG-level contrast for text over the animated background, and reduced-motion respect.
