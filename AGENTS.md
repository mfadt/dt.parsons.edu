# Repository Guidelines

## Project Overview

Single hand-authored home page for **dt.parsons.edu** — the BFA/MFA Design & Technology programs at Parsons / The New School. The page is "The Executed Chance Score": a newsprint sheet whose background is procedurally drawn on canvas, seeded by an I Ching–style chance cast (hexagram, score number, seed hex) printed as a visible receipt. The page links out to degree pages, curriculum, and year thesis archives; it hosts no work itself.

Hard product constraints (from `PRODUCT.md`):
- **No invented content**: no people, claims, courses, thesis years, or rosters that aren't in `docs/content.md`. Missing content stays visibly pending ("list to come", red pencil) — never lorem or placeholder names.
- **Static HTML/CSS/JS only. No framework, no build step, no toolchain.** This is a binding user decision; do not add bundlers, transpilers, or dependencies.
- Scope is "a very basic home page with an elegant procedural, randomized, algorithmic animation as the background" — that constraint is binding.

## Architecture & Data Flow

Static site, three source planes:

1. **`docs/content.md` → `index.html`**: the content doc is the authority for all copy, faculty names, and links. HTML is hand-authored from it; there is no templating — keep them in sync manually and keep the links.
2. **Cast → visuals**: `js/score.js` seeds an `xorshift32` PRNG from `Date.now() ^ random32` (zero guarded to `0x5f3759df`), casts 6 lines × 3 coins, then uses that same `rnd()` to draw procedural ink marks on three parallax `<canvas>` planes and to fill the hexagram SVG, receipt (`#rec-score`, `#rec-seed`, `#rec-cast`), and spine score (`#spine-score`). Every load is nondeterministic by design; marks are tied to the cast seed.
3. **Scroll/resize → DOM**: rAF-throttled passive scroll handler drives canvas parallax (`translate3d(0, −y×rate, 0)`) and the spine folio (`#spine-folio`, last section whose top is above 42% viewport). Resize is debounced 220 ms. An `IntersectionObserver` (threshold 0.18) reveals the thesis axis with a 45 ms stagger.

Progressive-enhancement gate (critical pattern): inline head script adds `html.js`; JS adds `html.drawn` then `html.performed`. All entrance CSS is scoped under these classes, so **JS absent or `prefers-reduced-motion: reduce` ⇒ all content fully visible** (reduced motion draws the score synchronously in one pass via `printAll()`). Never gate text behind these classes; never animate content that isn't already visible without animation.

Layout: one `main.sheet` (max-width 74rem) over `canvas.layer--far|mid|near` (z 0–2), fixed `.sheet-frame` (z 3), fixed `.spine` (z 4), content z 5.

## Key Directories

| Path | Purpose |
|---|---|
| `index.html` | The whole page; sections `#lead`, `#faculty`, `#academics`, `#archive`, `#close`. Content hardcoded here. |
| `css/score.css` | Entire stylesheet: `@font-face` rules, tokens, layout, motion, media queries. |
| `js/score.js` | Entire script (352 lines): chance engine, canvas drawing, parallax, folio, axis reveal. |
| `docs/content.md` | Copy + link authority (faculty names, URLs, thesis years). |
| `PRODUCT.md` | Product spec: audience, principles, constraints. |
| `DESIGN.md` | Design contract: full token/component/motion specs. Source of truth for any visual change. |
| `.impeccable/` | Design-tool state (generated `design.json`, surface briefs, review screenshots). Not site code; `review/`, `questions/`, `mocks/` are self-ignored runtime state. Don't hand-edit. |

No `src/`, no tests, no CI, no `.github/`.

## Development Commands

No build, no package.json, no npm scripts. Serve statically and open `index.html`:

```sh
python3 -m http.server 8000        # node/npx also available; python3 preferred
```

Verify at 320, 390, 560, 980, 1440 px; check with JS disabled and with reduced motion emulated (reference screenshots: `.impeccable/review/*.png`). Git: branch `main`, remote `origin` → `https://github.com/profcarroll/dt.parsons.edu.git` (note: local dir is `mfadt.parsons.edu`). Commit style: plain descriptive sentence, no Conventional Commits prefix; body references `docs/content.md` and the surface brief.

## Code Conventions & Common Patterns

**JS (`js/score.js`)**
- ES5 only inside one IIFE with `"use strict"`: `var`, function expressions, per-iteration `(function(){…})()` closures. No `let`/`const`/arrows/modules/async — keep it that way.
- No third-party code, no `fetch`/storage/history APIs. `getElementById` for known ids, `querySelectorAll` for `.layer`.
- camelCase functions/vars (`planFar`, `sizeLayer`, `writeCast`), UPPER_CASE constants (`TRIGRAM`), terse single-letter locals.
- Error handling: guard clauses only (`if (!svg) return;`); no try/catch, no logging. Feature-detect (`"IntersectionObserver" in window`).
- Animation: rAF queue drained at ≤14 closures/frame; timers via `setTimeout`; DPR capped at 2 (drops to 1 above ~7M device pixels); canvas height = `vh×1.16 + (docH−vh)×rate` so layers cover parallax travel.

**CSS (`css/score.css`)**
- Hand-written kebab-case semantic classes (`.ledger`, `.names`, `.sheet-frame`); `--` modifier suffix only on `.layer--*`; state classes on `html` (`.js`, `.drawn`, `.performed`). No BEM/utility framework. Sections marked `/* ── name ── */`.
- All color/spacing via `:root` tokens: `--ground #e4e2db`, `--ink #14171a`, `--ink-70/-45/-18` alphas, `--red #c2255c`, `--red-ink #a81e4c`, `--rule`, `--gutter clamp(1rem,4vw,3.5rem)`, `--step-sec clamp(3.5rem,9vh,6rem)`.

**Design rules that bind changes** (full text in `DESIGN.md`; treat these as lint rules):
- Two-Voice Rule: text only in The New School's Neue Display (lettering, 900, uppercase: Random cut on the masthead line at tracking 0 — any letter-spacing kills its ligature alternates; Wide for h2/APPLY; Black for PARSONS and axis years) or Neue 400/700 (reading text). Five `@font-face` declarations are the whole type system. No italic, no synthesized weight (`font-synthesis: none`).
- Red-Pencil / Two Reds Rule: `red` only at display size or as mark/rule/selection; `red-ink` for every red at text size. Text tones are `--ink` and `--ink-70` only; `ink-45`/`ink-18` are rules, never text. New neutral hex = defect.
- Flat Sheet Rule: no `box-shadow`, `text-shadow`, blur, `border-radius`, cards, fills, or gradients anywhere. Structure from hairlines + a solid ink rule per section heading.
- Measures: premise 30em, ledger 46rem, cast record 34em, footer record 40em. Breakpoints: 980px and 560px only.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` everywhere. Receipt Rule: any chance output shown must carry its provenance (seed, cast).
- Don't change `--ground` to a whiter paper; don't put a label line above a section heading; anchor text = degree/destination words, never URLs or "click here".

**Content patterns**: `data-keep` marks content regions in `index.html` (manual keep markers; not read by code). Links mirror `docs/content.md` exactly; year archives link out (`parsons.edu/dt-YYYY` for 2020–2026, `mfadt.parsons.edu/YYYY` for 2013–2019, `amt.parsons.edu` for 2011–2012).

## Important Files

- `index.html` — entry point; inline `html.js` gate in `<head>`, `js/score.js` at end of `<body>`.
- `css/score.css` — tokens at top (`:root`), then cascade order: fonts → base → frame/spine → layers → lead/cast → sections → motion → reduced-motion → media queries.
- `js/score.js` — cast engine (`rnd`, `cast`, `TRIGRAM`, `drawHexagram`), drawing (`planFar/planMid/planNear`, `liveMark`, `frame`, `perform`, `printAll`), scroll (`onScroll`).
- `docs/content.md`, `PRODUCT.md`, `DESIGN.md` — read all three before any content or visual change.

## Runtime/Tooling Preferences

- No runtime required to build (none exists). Serve with `python3 -m http.server`; `node`/`npm`/`npx` are on the box but add nothing to the project — do not introduce a package.json.
- `bun`, `deno`, `php` absent; no package manager, no lockfile, no lint/format config — match existing file style by hand (2-space indent, double quotes in JS).
- Fonts load from the university font host `https://fonts.newschool.edu/fonts/` (owner decision; same family of sites as newschool.edu). Do not copy the font files into the repo — they are commercial Typotheque faces licensed to The New School. No other CDNs, web fonts, analytics, or external resources.

## Testing & QA

No test framework, linter, or CI exists — do not add one; the no-toolchain constraint covers it. Verification is manual and visual:
- Repro/serve the page; check no horizontal overflow at 320/390/560/980/1440.
- Load with JS disabled: all content visible, no layout break.
- Emulate `prefers-reduced-motion`: score prints complete, content static and readable.
- Contrast: ink text ≥ WCAG AA over the darkest near-plane stroke; keep token alphas fixed.
- After content edits: diff against `docs/content.md` (14 full-time faculty names verbatim; part-time roster stays "list to come"; 1999 origin cell is not a link).

Known content bug to confirm with the owner before "fixing": `docs/content.md` lists MFADT 2019 with text `mfadt.parsons.edu/2019` but href `https://mfadt.parsons.edu/`; `index.html:104` uses `/2019/`. `PRODUCT.md` says 13 faculty; `docs/content.md` (authoritative) lists 14.
