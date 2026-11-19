---
name: "Parsons Design & Technology — Chance Operations Score"
description: "The dt.parsons.edu home page as an executed chance-op operations score printed on newsprint."
colors:
  ground: "#e4e2db"
  ink: "#14171a"
  ink-70: "rgba(20, 23, 26, 0.7)"
  ink-45: "rgba(20, 23, 26, 0.45)"
  ink-18: "rgba(20, 23, 26, 0.18)"
  red: "#c2255c"
  red-ink: "#a81e4c"
typography:
  display:
    fontFamily: "'Neue Display Random', 'Neue Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 7.8vw, 7.1rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "0"
  display-lead:
    fontFamily: "'Neue Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 3.6vw, 3.4rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Neue Display Wide', 'Neue Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.8rem, 4.4vw, 3.2rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0"
  action:
    fontFamily: "'Neue Display Wide', 'Neue Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.1rem, 3.6vw, 3.2rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0"
  action-foot:
    fontFamily: "'Neue Display Wide', 'Neue Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.8rem, 4.4vw, 3.2rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0"
  axis-number:
    fontFamily: "'Neue Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0"
  body-lead:
    fontFamily: "Neue, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Neue, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.9rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Neue, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.12em"
rounded:
  square: "0px"
spacing:
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  section-break: "clamp(3.5rem, 9vh, 6rem)"
  rule-inset: "2.25rem"
  frame-inset: "clamp(0.4rem, 1.4vw, 1rem)"
  spine-width: "clamp(1.9rem, 3vw, 2.9rem)"
components:
  action-apply:
    textColor: "{colors.red}"
    typography: "{typography.action}"
    rounded: "{rounded.square}"
    padding: "0"
  action-apply-hover:
    textColor: "{colors.ink}"
  action-apply-foot:
    textColor: "{colors.red}"
    typography: "{typography.action-foot}"
  link-body:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  link-body-hover:
    textColor: "{colors.red-ink}"
  link-lead:
    textColor: "{colors.red-ink}"
    typography: "{typography.body-lead}"
  recast-button:
    textColor: "{colors.red-ink}"
    typography: "{typography.body}"
    padding: "0"
  axis-year:
    textColor: "{colors.ink}"
    typography: "{typography.axis-number}"
  axis-year-hover:
    textColor: "{colors.red-ink}"
  folio-spine:
    textColor: "{colors.ink-70}"
    typography: "{typography.label}"
---

# Design System: Parsons Design & Technology — Chance Operations Score

## Overview

**Creative North Star: "The Executed Chance Score"**

This system is not a document about a program; it is a score that has been performed. The page is one sheet of newsprint (`#e4e2db`) carrying printed ink (`#14171a`), and the marks behind the type are drawn at load time by a chance operation: a 32-bit seed (`Date.now() ^ random32`) feeds an xorshift32 generator that decides every stroke on every layer and throws the page's three-coin I Ching cast (six lines, values 6–9), and the printed receipt — score number, seed hex, hexagram with its changing lines in red — sits at the bottom of the fold. The program's facts sit inside the score as printed instructions. The page demonstrates the program's own thesis ("critical about technology *with* technology", taught continuously since 1999) rather than describing it. Direction provenance: FORM position 2 of the seven grounded directions (Chance Operations Score), chosen from the pick card over the assigned roll, seed `8b08b090a2979c15`.

Everything is flat, ruled, and set by hand: no cards, no photography, no panels, no rounded corners, no shadows. Structure is carried by hairline rules, one solid ink rule per section heading, and a fixed reading measure. Two type voices only, both The New School's own: Neue Display (heavy capitals) for lettering, Neue for everything a reader reads. Depth exists only in the ground: three plotted canvas planes drifting at different parallax rates behind the sheet, plus a fixed sheet frame and a marginal folio spine that keeps the reader's place like printer's marks.

The system is deliberately un-repeatable per visit yet completely legible without it: all content is visible with JS absent, and `prefers-reduced-motion` prints the score complete at once instead of drawing it.

**Key Characteristics:**
- Newsprint ground with real ink dilution (`ink-70` / `ink-45` / `ink-18`), never a gray palette.
- Two voices, both the university's: Neue Display 900 (Black, Wide, and Random cuts) for uppercase lettering and Neue 400/700 for all reading text, served from `fonts.newschool.edu`.
- Red appears twice and each has one job: `red` for the display-size action and printed red-pencil marks; `red-ink` for every red at text size.
- Rules, not containers: 1px hairlines, dotted leaders, one 1px solid ink rule above each section heading with a 2.25rem inset.
- One authored performance (score draws itself, sections enter, archive axis draws in as ink dries); content visible by default.
- The cast receipt is content, not decoration: score number, seed hex, upper-over-lower trigram names, changing-line count.

## Colors

Newsprint, black ink, red pencil. The palette is three pigments on one paper; every "gray" in the build is the same ink diluted as it would be in a second print, not a separate neutral ramp. Measured contrast against the shipped ground `#e4e2db`:

### Primary
- **Red Pencil** (`#c2255c`, `--red`): the display-size Apply word only, plus the red-pencil marks that are not words — the 2px rule above the instruction block, the 2px underline of the premise links, the tick before each name row, and the selection background (`ground` reversed on it, 4.36:1). On `ground` it measures 4.36:1, which clears the 3:1 large-text floor, and it never ships below the large-text boundary: APPLY is `clamp(1.9rem, 3.2vw, 2.8rem)`, overridden under 560px to `clamp(1.7rem, 8vw, 2.4rem)` (27.2px floor), and the footer variant is `clamp(1.6rem, 4vw, 2.9rem)` (25.6px floor) at weight 800.
- **Red Typescript** (`#a81e4c`, `--red-ink`): every red that is smaller than a poster — premise links, the re-cast control, the "list to come" pending row, the 1999 origin item on the archive axis, the word "Score" on the folio spine, changing lines in the hexagram, `D12` in the closing line, link/axis hover states, and the 2px `:focus-visible` outline. 5.48:1 on `ground` (7.11:1 against white), which clears AA at every size it ships. Because the score marks show through behind the sheet, red items sit on a locally darkened field at times; the shipped ink coverage keeps that legible (see Elevation & Depth), and it is the reason no red is placed at small size over a dense band by choice.

### Neutral
- **Newsprint** (`#e4e2db`, `--ground`): the single paper of the system — `html`, `body`, and the reversed text of `::selection`. Not a background choice to revisit: it is the named material of the world.
- **Ink** (`#14171a`, `--ink`): all body and lettering text, solid section rules, hairline marks on the canvas layers. 13.88:1 on `ground`.
- **Ink, second impression** (`rgba(20,23,26,0.7)`, `--ink-70`): the working secondary text tone — nameplate, folio spine, instruction subline, cast record, roster subsection heads, axis captions, ledger links, footer record. Composited on paper it is `#525454` at 5.88:1, so it is a text tone, not a border tone.
- **Ink, third impression** (`rgba(20,23,26,0.45)`, `--ink-45`): the dotted leader in the academics ledger only. Composited 2.79:1 — a rule tone. Do not use it for text.
- **Ink, hairline** (`rgba(20,23,26,0.18)`, `--ink-18`): the hairline every list row and the sheet frame are drawn with (via `--rule`). Decorative line weight, never text.

### Named Rules
**The Red-Pencil Rule.** Red is a pencil, not a paint. It marks the instruction, the action, and the parts of the record that chance decided (changing lines, the origin year, a list that has not arrived yet). If red appears on a surface, a card, a heading, or a hover fill, it has stopped being a pencil.

**The Two Reds Rule.** `red` exists for display-size lettering and marks; `red-ink` exists for text size. Never let `red` drop to body size, never let `red-ink` be the poster word.

**The Printed-Impression Rule.** Mid-tones are ink diluted, not grays: `ink-70` is text, `ink-45` is a rule, `ink-18` is a hairline. A new neutral hex is a defect in this system, not an extension of it.

## Typography

**Source:** The New School's institutional typefaces — Neue and Neue Display (Typotheque, 2014; Neue is a customised Typotheque Irma made exclusively for The New School). They are not copied into this repo: `css/score.css` declares its own five `@font-face` rules pointing at the university font host, `https://fonts.newschool.edu/fonts/` (woff2, woff fallback), the same files newschool.edu itself loads. The host answers `Access-Control-Allow-Origin: *` and `Cache-Control: immutable`. `index.html` preconnects to it and preloads the two faces the first viewport needs (Neue Display Random, Neue Regular). If the host is unreachable every role falls back to `"Helvetica Neue", Helvetica, Arial, sans-serif` with `font-display: swap`.

**Display Font:** Neue Display, three cuts, each registered at weight 900 under its own family name — `Neue Display` (Black, normal width), `Neue Display Wide` (expanded; caps 0.70em tall against 0.80em for the others, so Wide roles are sized up to match), and `Neue Display Random` (the identity's chance cut: contextual `liga` alternates swap letters between normal and wide widths). Capitals only; figures are proportional (no `tnum`).
**Body Font:** Neue 400 and 700 (`neue-Regular`, `neue-Bold`).
**Label Font:** none distinct — labels are Neue 400 at 0.7–0.75rem, uppercase, tracked +0.12em.

**Character:** The New School's own lettering at poster weight over its own text face. The Random cut is the house's built-in chance operation, so the masthead's letter widths are not a style choice made here but the face performing; the rest of the lettering stays straight so that one line carries it. Neue Display shouts the program's name, the section heads, and the one instruction; Neue sets everything a reader actually reads.

At 1440×900 the ramp measures: masthead second line 112.3px (Random, 7.8vw, line-height 0.9, tracking 0) under "PARSONS" at 51.8px (Black); section headings 51.2px (Wide); APPLY 51.2px (Wide); axis years 25.6px (Black); premise 23px on a 30em measure; body 18px at line-height 1.5 (16px floor); captions 12–14px.

### Hierarchy
- **Display** (Neue Display Random 900, `clamp(2.5rem, 7.8vw, 7.1rem)`, lh 0.9, tracking 0): "DESIGN & TECHNOLOGY" — the masthead's dominant line. Random's alternates make "TECHNOLOGY" 9.28em wide, so the cap (7.1rem) is what keeps it inside the 74rem sheet; 9vw under 560px (`clamp(1.85rem, 9vw, 3.4rem)`).
- **Display lead** (Neue Display Black 900, `clamp(1.6rem, 3.6vw, 3.4rem)`, −0.01em; `clamp(1.15rem, 5vw, 1.6rem)` under 560px): "PARSONS", the masthead's small first line. The masthead is two stacked block lines.
- **Headline** (Neue Display Wide 900, `clamp(1.8rem, 4.4vw, 3.2rem)`, lh 1): section headings — Faculty, Academics, Thesis Archive, and the closing Apply heading.
- **Action** (Neue Display Wide 900, `clamp(2.1rem, 3.6vw, 3.2rem)`; `clamp(1.9rem, 9vw, 2.6rem)` under 560px): the one word APPLY, in red pencil, underlined by a 3px wipe of its own color on hover/focus.
- **Axis number** (Neue Display Black 900, `clamp(1.15rem, 2.2vw, 1.6rem)`): years on the thesis axis and nothing else.
- **Body lead** (Neue 400, `clamp(1.125rem, 1.6vw, 1.5rem)`, lh 1.4, `text-wrap: pretty`): the premise line, capped at 30em.
- **Body** (Neue 400, `clamp(1rem, 0.9rem + 0.25vw, 1.125rem)`, lh 1.5): all reading text and lists; the cast record and footer record at 0.875rem.
- **Label** (Neue 400/700, 0.7–0.75rem, uppercase, +0.12em): nameplate, folio spine, roster subsection heads, axis captions.

### Named Rules
**The Two-Voice Rule.** Two families ship, and they are the whole voice palette: Neue Display for lettering, Neue for every string that is read. Every element on the page is set in one of the five `@font-face` declarations in `css/score.css` (Neue 400, Neue 700, Neue Display, Neue Display Wide, Neue Display Random), all served from `fonts.newschool.edu`; other cuts on that host (Ultra, Thin, Light, Black text, italics, the variable TTF) are not part of this system.

**The Random-Is-Untracked Rule.** Neue Display Random only performs with ligatures on, and browsers switch optional ligatures off under any non-zero `letter-spacing`. Its tracking stays exactly 0, and it is used once, on the masthead line.

**The Upright Rule.** Every face ships upright only, and `html` sets `font-synthesis: none`. Emphasis comes from weight (Neue 700), tracking, and rules; italic and faux bold never appear.

**The Reading Measure Rule.** Reading text is set on a fixed measure: premise 30em max, ledger 46rem max, cast record 34em, footer record 40em. Widening a column is a layout decision, not a responsive accident.

## Layout

One sheet, one gutter, ruled rhythm. `.sheet` is the page body: `max-width: 74rem`, padding `0 var(--gutter)` with `--gutter: clamp(1rem, 4vw, 3.5rem)` (56px at 1440, 16px floor), bottom padding `clamp(2rem, 8vh, 5rem)`; under 560px the padding is overridden to `clamp(1rem, 5vw, 1.75rem)` (16–19.5px on phones). No page background bands, no cards: the sheet is the paper.

**The lead** is a `100svh` grid, not a hero: `minmax(0,1fr)` premise column × `minmax(10rem,14rem)` instruction margin, rows `auto auto minmax(0,1fr) auto` — nameplate rule, masthead, premise + instruction (both `align-self: center`, same visual weight), cast receipt across the bottom. Column gap `clamp(1.5rem, 4vw, 4rem)`, row gap `clamp(1.4rem, 4vh, 2.75rem)`, block padding `clamp(2.5rem, 9vh, 6rem) 0 clamp(2rem, 6vh, 4rem)`.

**Sections** break with a rule, not a container: `margin-top: var(--step-sec)` = `clamp(3.5rem, 9vh, 6rem)`, then `padding-top: 2.25rem` under a 1px solid ink rule. The `<footer>` uses the same treatment, so the page has one cadence from Faculty to the closing Apply.

**Marginalia are fixed:** `.sheet-frame` is a 1px hairline inset `clamp(0.4rem, 1.4vw, 1rem)` from the viewport on all sides (`pointer-events: none`), and `.spine` is a fixed folio column `clamp(1.9rem, 3vw, 2.9rem)` wide, ruled on its right, holding three vertical-rl items — the mark, the current score (the word "Score" in `red-ink`, its four-digit number in ink 700), and the current section word. Below 980px the spine disappears; the frame does not.

**Responsive:** at 980px the lead collapses to a single column (`min-height: auto`), the faculty grid to one column, and the spine is hidden. At 560px the gutter tightens to `clamp(1rem, 5vw, 1.75rem)`, name columns drop to one, "PARSONS" drops to `clamp(1.15rem, 5vw, 1.6rem)`, masthead line 2 becomes `clamp(1.85rem, 9vw, 3.4rem)`, and APPLY becomes `clamp(1.9rem, 9vw, 2.6rem)`. Verified with no element past the viewport edge at 320/390/560/980/1440.

**Spacing rhythm** is clamp-based and viewport-linked, not a fixed scale: gutters and gaps scale 4vw-ish, section breaks 9vh-ish, and row paddings sit at 0.34rem (name rows), 0.5rem (ledger and axis rows).

## Elevation & Depth

There are no shadows in this system — no `box-shadow`, no `text-shadow`, no blur anywhere. Depth is entirely in the ground: three procedural canvas planes behind the sheet, each drifting at its own parallax rate, and the print stack in front of them. The stacking order is fixed and documented: far plane `z-index: 0` (at `opacity: 0.5`), mid plane `1`, near plane `2`, sheet hairline frame `3`, folio spine `4`, the readable sheet itself `5`. Text always sits above the ink: over the darkest single shipped stroke (a near-plane segment at alpha 0.50, compositing to `#7c7c7a`), body ink still reads 4.30:1; the far plane is dimmed to 0.5 opacity, so its strokes composite to at most `#c3c2bc` (ink 10.08:1). Where the near plane's wandering path crosses itself the field darkens further, which is why the inked ground is verified by coverage rather than by a single-stroke calculation: measured full-page ink coverage 10.2%, every height band between 6.8% and 10.3%, with legibility confirmed in the review captures (`.impeccable/review/desktop-full.png`, `reduced-motion.png`).

### Depth Vocabulary (the only elevation in the system)
- **Far plane** (`.layer--far`, parallax rate `0.05`, opacity 0.5): 30–45 density-scaled long strokes (25–95% of the canvas dimension), 32% vertical and the rest horizontal, each tilted no more than ±0.045 rad, alpha 0.16–0.32, weight 1.2 — the paper's grain.
- **Mid plane** (`.layer--mid`, rate `0.13`): 24–35 density-scaled arcs and 3–5-vertex polylines, radius `12 + (0–0.16 × min side)`, alpha 0.20–0.38, weight 1.3 — the plotted construction.
- **Near plane** (`.layer--near`, rate `0.24`): one wandering conductor's path of 40–59 density-scaled quadratic segments, step 30–160px, alpha 0.30–0.50, weight 1.4 — the performer's line.
- **Printed plane** (`z-index` 3–5): frame, spine, sheet. Never moves relative to the viewport.

### Named Rules
**The Flat Sheet Rule.** Nothing in the reading layer lifts, casts, or floats. Depth that isn't ink on paper doesn't belong here.

**The Full-Sheet Ink Rule.** Every canvas spans the viewport *plus* its own parallax travel (`height = vh × 1.16 + (docH − vh) × rate`), so no band of a long document is left without score marks. Measured shipped coverage: 10.2% of the full page inked, every height band 6.8–10.3%.

## Shapes

Square by construction: no `border-radius` is declared anywhere in the stylesheet, and clipping is rectangular throughout. Form language is ruled geometry — 1px hairlines (`--rule: 1px solid var(--ink-18)`), 1px solid ink section rules, 1px dotted leaders (`--ink-45`) that flex to fill a row, 2px red pencil rules, a 3px action underline that wipes in from the left (`transform: scaleX(0) → scaleX(1)`). Corners are the sheet corners: the fixed frame inset and the section rules. The one non-typographic ornament is the hexagram itself: six rows of 6px-tall bars in a 96×110 viewBox, yang bars solid, yin bars split (4–38 / 58–34), changing lines painted in `currentColor` of `red-ink` and static lines outlined at 2px.

**The Rule-Not-Container Rule.** Structure is drawn with lines. A bordered box with fill, radius, or padding-as-frame is a card, and cards are refused by the world (OWN-WORLD: "No cards, no photography, no gray mid-tones except printed ink").

## Components

### The Apply action (`apply-primary`)
The one red display word. Neue Display Wide 900, uppercase, `clamp(2.1rem, 3.6vw, 3.2rem)`, in `red`; the instruction block carries a 2px `red` top rule with 0.9rem of air below it. Hover/focus shifts the word to ink and wipes a 3px bar of its own color in under 0.45s (`cubic-bezier(0.16, 1, 0.3, 1)`). No button chrome, no background, no radius.
- **Footer variant** (`apply-foot`): same link at headline size (`clamp(1.8rem, 4.4vw, 3.2rem)`) as the closing heading itself, plus the line "Come visit us on **D12** · dt.parsons.edu" (1.125rem) with `D12` in `red-ink`.
- **Sub-instruction** (`.visit`): 1rem, `ink-70`, with the building name in ink.

### Body and lead links
Body links inherit their text color and underline at 1px with `text-underline-offset: 0.22em`; hover sets them to `red-ink` (never `red`). The premise's two links are the exception written into the build: `red-ink` text on a 2px `red` underline, hover darkening the underline to the text color. Anchor text is the degree word (BFA / MFA), never the URL or "click here".

### Roster rows (`.names`)
Two newspaper columns (`columns: 2`, column-rule `--rule`, gap `clamp(1.5rem,4vw,3rem)`, single column under 560px). Each row: 0.34rem vertical padding, hairline bottom rule, and a 0.45em `red` tick at 0.95em down the left gutter. Qualifiers ("emeritus") set inline at 0.85em in `ink-70`. Names are verbatim from `docs/content.md`; 14 shipped, including two emeritus.
- **Pending roster**: the part-time column ships an h3 plus a `.pending` line reading "list to come" in `red-ink` on the same hairline rhythm. The pending line is the honest state; the list is never invented.

### Ledger rows (`.ledger`)
Academics as a typeset contents line: flex row on baseline, label, a flexing 1px dotted leader in `ink-45` lifted `translateY(-0.25em)`, then a small `ink-70` link (0.875em, +0.02em tracking, hairline rule under each row) that goes `red-ink` on hover. Measure capped at 46rem. The destination is written as its domain text, not as a button.

### Thesis axis (`.axis`)
The archive as one time axis: `grid-template-columns: repeat(auto-fill, minmax(9.5rem, 1fr))`, column gap `clamp(1rem,3vw,2.5rem)`, one hairline under each cell, each cell a baseline pair — Neue Display year left, small tracked caption right (DT for 2026–2020, MFADT for 2019–2011). The 1999 origin cell is not a link and is set entirely in `red-ink`; hover turns a year `red-ink` too. 17 cells, all real external archive URLs — the page links out rather than hosting year sites.

### Folio spine and sheet frame
Fixed print furniture, `pointer-events: none`: the spine is 0.7rem uppercase Neue at +0.12em in `ink-70`, with the score number in ink 700 and the word "Score" in `red-ink`; the mark item is `rotate(180deg)` so it reads bottom-up, and the sheet frame is the same hairline running round the viewport. The folio word is the last section whose top sits above the point 42% down the viewport (Lead / Faculty / Academics / Thesis / Apply), rewritten on scroll only when it changes.

### The cast block and Re-cast control
The printed receipt at the bottom of the fold: hexagram SVG (`viewBox 0 0 96 110`, `role="img"`, its own hidden accessible title describing the throw) beside a record in 0.875rem `ink-70` — `Score` + four digits, `· seed` + uppercase hex, then the line `cast: {upper trigram} over {lower trigram} · N changing line(s)`, and the note that the marks are a chance score being performed now (`Reload, or re-cast, for a different one.`). `re-cast` is a plain underlined text button in `red-ink` (`border: 0`, `background: none`, `font: inherit`) that re-seeds, rewrites the cast line, redraws the hexagram, and re-performs; hover sends it to ink. It is a control, not a card.

### The chance engine (mechanism, documented for reuse)
Seed = `Date.now() ^ random32` (re-seeded on every re-cast; guarded to `0x5f3759df` if it lands on zero), and `xorshift32(seed)` drives everything downstream — the layer plans, the live marks, and the I Ching throw itself. Six lines × three coins (each coin 2 or 3) give I Ching values 6–9, with 6 and 9 as changing lines; the score number is `1000 + |seed| % 9000` and the seed prints as uppercase hex in both the spine and the receipt. Plans are stroke-counted and queued per layer, then 14–23 live marks (small arcs and short horizontal runs, alpha 0.20–0.44) are appended onto the mid and near planes after the first pass, at 900–2700ms intervals, with the queue budgeted at 14 strokes per animation frame. Canvases cap at DPR 2 and drop to DPR 1 above ~7M device pixels; a resize re-sizes and re-performs after a 220ms debounce. Under reduced motion every plan is drawn synchronously in a single pass instead.

### Motion discipline
One authored performance, all entrances gated behind state classes on `<html>`: `html.js` (inline in `<head>`, hides the far plane and the nameplate/masthead) → `html.drawn` (far plane to 0.5 over 0.9s, nameplate/masthead in over 0.7s) → `html.performed` (the axis list, tagged `.ax-drawn`, rises in with a 45ms per-item stagger over 0.5s when it crosses an IntersectionObserver at threshold 0.18). One easing throughout: `cubic-bezier(0.16, 1, 0.3, 1)` (axis opacity uses `ease-out`). Parallax is a single rAF-throttled `translate3d(0, −y×rate, 0)` on a passive scroll listener, skipped entirely under reduced motion. `prefers-reduced-motion: reduce` forces every gated element visible, clamps transition/animation durations to 0.01ms, and prints the score complete. With JS absent, everything is visible and the score simply isn't drawn — the page reads as a printed sheet.

### Named Rules
**The Receipt Rule.** Any chance output shown to the user carries its provenance: score number, seed hex, cast reading. A generated background without a printed cast is decoration.

**The Pending Row Rule.** Missing content stays visibly missing in the red pencil ("list to come"). No placeholder names, no lorem, no invented roster.

## Do's and Don'ts

### Do:
- **Do** keep the shipped palette exactly: `#e4e2db` ground, `#14171a` ink with rgba dilution at 0.7 / 0.45 / 0.18, and the two reds `#c2255c` / `#a81e4c`. Text tones are `ink` and `ink-70` only.
- **Do** use `red-ink` (5.48:1 on the ground) for red at text size and `red` (4.36:1, clears the 3:1 large-text floor) only at display size or as a mark, rule, or selection fill.
- **Do** set lettering in Neue Display 900, uppercase: Random for the masthead line at tracking 0, Black for "PARSONS" and the axis years, Wide for section headings and APPLY. Set all reading text in Neue 400/700 at 1.5 line-height (1.4 for the premise lead).
- **Do** put every reading column on a measure: 30em for the premise, 46rem for the ledger, 40em for the footer record.
- **Do** build structure from rules and space: hairline `--rule` rows, a 1px solid ink rule above each section heading with 2.25rem of padding below it, `--step-sec` between sections.
- **Do** keep every generated mark tied to the cast seed, and keep canvases sized to viewport + parallax travel so the whole document is inked.
- **Do** keep content readable with JS absent and with reduced motion: gate entrances behind `html.js` / `html.drawn` / `html.performed` and let the reduced-motion query force them visible.
- **Do** source all copy from `docs/content.md` and keep its links (degree pages, curriculum, courses, and the 2011–2026 year URLs); link out to year archives rather than hosting them here.
- **Do** mark genuinely absent content in the red pencil, as with the part-time roster's "list to come".

### Don't:
- **Don't** invent names, courses, claims, thesis years, or a part-time roster — the content authority is `docs/content.md` and the page stays within it.
- **Don't** add cards, photo panels, fills, rounded corners, shadows, blurs, or gradient surfaces to the reading layer.
- **Don't** set text in a face outside the five shipped `@font-face` declarations (Neue 400 and 700; Neue Display, Neue Display Wide, Neue Display Random at 900), **don't** copy the font files into this repo or load them from anywhere but `fonts.newschool.edu`, and **don't** fake italic or synthesize weight.
- **Don't** use `red` on body-size text, on backgrounds, or on headings; don't use `ink-45` or `ink-18` for text (2.79:1 and 1.45:1 on the ground, rule tones only).
- **Don't** put a label line above a section heading: headings sit directly on their own 1px ink rule with 2.25rem of air, and the sheet's only standing label row is the nameplate rule at the top of the lead.
- **Don't** animate content that isn't already visible without it: entrances may fade and rise (0.5–0.9s, `cubic-bezier(0.16, 1, 0.3, 1)`), never gate the text itself.
- **Don't** change the ground to a whiter paper to satisfy a palette warning: `#e4e2db` is the named newsprint of the world and the finish review kept it by decision.
