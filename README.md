# datHere Design System

A design system for **[datHere](https://dathere.com)** — a data-infrastructure
company that builds tools for publishing, validating, wrangling, and discovering
tabular data. This repo collects the visual foundations, brand assets, content
guidance, and UI-kit references a designer or agent needs to build products that
look and feel like datHere.

> **TL;DR** — datHere is built on the **IBM Carbon Design System** ("white" theme)
> with a tightly-scoped brand-blue accent. Default to: Carbon-style square
> rectangles, **IBM Plex Sans / Mono**, generous whitespace, brand blue `#0F62FE`
> for action, navy `#001D6C` for brand weight.

---

## About datHere

datHere builds the plumbing for open-data ecosystems. Their product surface
covers the full data lifecycle:

| Product | What it is |
|---|---|
| **datHere CKAN DMS** | A managed/hardened distribution of [CKAN](https://ckan.org) — the open-source data management system that powers `data.gov`, `data.humdata.org`, `open.canada.ca/data`, and hundreds of municipal/state portals. |
| **qsv** ([github](https://github.com/dathere/qsv)) | A blazing-fast Rust-based CLI for querying, slicing, joining, validating, and FAIRifying CSV / Excel / Parquet / JSONL data. |
| **qsv pro** ([qsvpro.dathere.com](https://qsvpro.dathere.com)) | A desktop GUI wrapped around qsv — drop a spreadsheet, get instant stats, type-inference, validation, and an LLM-powered describegpt workflow. |
| **datHere AI Chatbot** | A natural-language layer on top of a CKAN portal — ask questions, get back grounded SQL/CSV answers. |
| **AI-Ready Data** | Consulting + tooling around making messy public datasets actually usable by LLMs (schema inference, validation, tag vocabularies). |
| **Water Data Practice** | Sector-specific portals built on the datHere CKAN distribution. |

The audience is **data engineers, open-data publishers, civic-tech teams, and
analysts** — practitioners who care about correctness, performance, and FAIR
principles, not flashy marketing surfaces. The visual register reflects that:
serious, dense, square, blue.

---

## Repository map

```
.
├── README.md                  ← you are here
├── SKILL.md                   ← skill manifest (Claude Skills compatible)
├── colors_and_type.css        ← all CSS variables (color, type, spacing, motion)
├── assets/
│   ├── logo-*.png             ← brand marks (light/dark/primary/white)
│   ├── favicon.ico
│   ├── icons/carbon/          ← full Carbon icon set (2,764 SVGs, all 4 sizes)
│   ├── icons/carbon-motion/   ← 148 Carbon animated icons (CSS keyframe bundles)
│   ├── images/                ← hero/photographic background assets (empty — add yours)
│   └── screenshots/           ← product screenshots for reference (empty — add yours)
├── preview/                   ← design system browser (open preview/index.html)
├── ui_kits/
│   ├── marketing/             ← ⚠ FLAGGED FOR REVIEW — see ui_kits/marketing/README.md
│   └── ckan-portal/           ← ⚠ FLAGGED FOR REVIEW — see ui_kits/ckan-portal/README.md
└── fonts/                     ← (empty — see "Type" below)
```

---

## CONTENT FUNDAMENTALS

How datHere writes copy.

**Voice — direct, technical, lightly playful.** Writers assume the reader
already knows what a CSV is. Sentences are short and load-bearing. Capabilities
are described with concrete verbs (*"slice"*, *"sniff"*, *"behead"*, *"dedup"*,
*"safenames"*).

**Person — second-person + product-as-actor.** Marketing copy says *"you"* and
*"your data"*. Documentation uses imperative mood (*"Run `qsv stats`…"*).
First-person plural (*"we"*) appears only in the about-us / sponsor / footer
contexts.

**Casing — Title Case for nav and section headers; sentence case for body;
**lowercase** for the wordmark itself**. The brand word is always written
**datHere** — lowercase `d`, lowercase `at`, capital `H`, lowercase `ere`.
Never *DatHere*, *Dathere*, or *DATHERE*.

**Numbers and metrics are flexed often.** *"11.87 seconds for a 15 GB, 28M-row
NYC 311 dataset"* — comparative speed numbers, file sizes, row counts. These
are part of the brand's credibility surface. Numbers are formatted with
thousands separators (`1,000,000`) or scientific shorthand (`28M`, `15 GB`).

**Code is first-class copy.** Inline `code spans`, ```` ```bash blocks ```` ,
and command names are scattered through prose, not relegated to docs. Use
`IBM Plex Mono` and never *italicise* code.

**Tone is enthusiast / "engineer-to-engineer".** It's okay to say
*"blazing-fast"*, *"ludicrous speed"*, *"FAIRify"*, or drop an emoji on a
status row (`🚀 multithreaded`, `📇 indexed`) — but only in **lists / tables /
legends**, never inside paragraphs of marketing copy. Body prose stays sober.

**Emoji are used as iconography, not as decoration.** They are functional glyphs
in command tables and feature legends. **Do not** sprinkle emoji into hero
headers, button labels, or marketing taglines.

**Acronyms and jargon are explained inline on first use** — *"FAIR (Findable,
Accessible, Interoperable, Reusable)"*, *"DMS (Data Management System)"*,
*"NLP"*. After that, just use the short form.

**Examples of copy in the wild**

> *"qsv is a data-wrangling toolkit for querying, slicing, sorting, analyzing,
> filtering, enriching, transforming, validating, joining, formatting,
> converting, chatting, FAIRifying & documenting tabular data."*
>
> *"Blazing-fast Data-Wrangling toolkit"* (tagline)
>
> *"Hi-ho 'Quicksilver' away!"* (under the qsv logo — wink to the brand name)
>
> *"Powering data hubs and data portals."* (CKAN positioning)

---

## VISUAL FOUNDATIONS

**The system of record is IBM Carbon — `white` theme.** Everything below maps
to a Carbon token; the corresponding CSS variable is in `colors_and_type.css`.

### Color

| Role | Token | Hex |
|---|---|---|
| Brand primary | `--dh-blue-60` | `#0F62FE` |
| Brand navy (logo icon) | `--dh-blue-90` | `#001D6C` |
| Hover on brand | `--dh-blue-70` | `#0043CE` |
| Bright accent | `--dh-blue-50` | `#4589FF` |
| Highlight (selection bg) | `--dh-blue-20` | `#D0E2FF` |
| Background | `--dh-background` (white) | `#FFFFFF` |
| Body text | `--dh-text-primary` | `#161616` |
| Secondary text | `--dh-text-secondary` | `#525252` |
| Subtle border | `--dh-border-subtle-01` | `#C6C6C6` |
| Layer (cards) | `--dh-layer-01` | `#F4F4F4` |
| Success / error / warn | `#24A148` / `#DA1E28` / `#F1C21B` | |

**Use of color** — color is *not* decoration. Brand blue appears on
interactive elements (links, primary buttons, focus rings, active tabs) and as
the icon-mark navy on logos/large brand moments. Everything else is grayscale.
Avoid using brand blue for headers or large filled surfaces — Carbon reserves
saturated blue for action.

**Gradients** — used sparingly, never in core product UI. AI surfaces may use
a very gentle blue-tinted aura (Carbon's experimental AI tokens). No
marketing-bro purple-blue gradients.

### Type

- **Sans (UI and body)** — **IBM Plex Sans**. Weights used: 300, 400, 500, 600, 700.
- **Mono (code, command names, data tables)** — **IBM Plex Mono**.
- **Serif (rare — long-form editorial only)** — **IBM Plex Serif**.

- **Productive scale** (dense UI) — `--dh-type-body-short-01` (14/18), heading-01
  through heading-07. Use these in tables, forms, side panels.
- **Expressive scale** (marketing, hero) — `--dh-type-expressive-*`. Same
  family, larger sizes, often 300 weight for display.
- **Line-height is tight in headings** (1.1–1.2) and **comfortable in body**
  (1.4–1.5). Carbon's productive `body-long-01` is 14/20.

### Layout, spacing & grid

- **8-point grid** with smaller increments at the start (2, 4, 8, 12, 16, 24,
  32, 40, 48, 64, 80, 96, 160 — `--dh-spacing-01` through `--dh-spacing-13`).
- **Generous whitespace**. Carbon products feel airy. Default page gutter is
  32 px, section spacing is 64–96 px.
- **Container max widths** at 640 / 768 / 1056 / 1312 / 1584 px.
- **Alignment is strict.** Things line up to the grid. Don't center-align body
  copy in marketing pages; left-align with a wide column to the left margin
  and let the right rag.

### Shape — corners & borders

- **Carbon is famously square.** Default border-radius for cards, inputs,
  buttons, modals is **0**. We expose `--dh-radius-sm` (2 px) for badges and
  `--dh-radius-md` (4 px) for the occasional marketing tile.
- **Pills (`--dh-radius-pill`, 999 px)** are reserved for tag/chip surfaces — never for buttons.
- **1 px borders** in `--dh-border-subtle-01`. Cards are bordered, not
  shadowed. When a card is interactive, a 2 px left border in `--dh-blue-60`
  appears on hover/selected (Carbon "tile" pattern).

### Elevation & shadow

- **Flat by default.** Carbon avoids ambient shadows; depth is communicated
  with borders, layering (gray-10 inside white), or the `--dh-layer-*` ramps.
- **Subtle drop shadows** (`--dh-shadow-sm`, ~`0 1px 2px rgba(0,0,0,.08)`)
  appear on overlays, modals, dropdowns. No glow, no inner-shadow.
- **Marketing tiles** may use `--dh-shadow-md` on hover.

### Backgrounds & imagery

- **Solid white is the default page background.** Inverted dark sections use
  `--dh-gray-80` or `--dh-blue-90` (the brand navy).
- **Hero imagery** when present is **photographic, on-location, daylight**.
  Cool tones. Slight desaturation. No grain, no Instagram filters. Often
  overlaid with a blue or navy 60% opacity scrim for text legibility.
- **No hand-drawn illustrations, no repeating patterns, no isometric scenes,
  no 3D blob art.** This is a serious-products brand.
- **Charts and tables are themselves the artwork.** Showcase the data UI
  instead of trying to invent decorative graphics.

### Buttons & interactive states

- **Primary button** — filled `--dh-blue-60`, white text, no radius, no
  shadow. Hover → `--dh-blue-70`. Active → `--dh-blue-80`. Focus → 2 px outer
  `--dh-blue-60` outline with 2 px white inset.
- **Secondary button** — filled `--dh-gray-80`, white text. Hover →
  `--dh-gray-100`.
- **Tertiary / ghost** — transparent fill, 1 px `--dh-blue-60` border, blue
  text. Hover → fill `--dh-blue-60` translucent 12%.
- **Danger** — filled `--dh-red-60`, white text.
- **Disabled** — `--dh-gray-30` fill, `--dh-text-disabled` (rgba(22,22,22,.25))
  text, *no* opacity dimming.

**Hover state pattern**: color shift to one step darker on the scale (not
opacity, not lightening). Always animate with `--dh-motion-fast-02` (110 ms)
on `--dh-ease-productive-standard`.

**Press / active state**: color shifts another step darker; no scale, no
shrink. Carbon never animates with transform on interactive elements.

### Transparency & blur

- Used minimally. Overlay scrims (`--dh-overlay`, 60% black) for modal /
  drawer backdrops. Background hover on icon buttons is rgba(141,141,141,.12).
- No `backdrop-filter: blur()` — Carbon UI is opaque.

### Motion

- **Fast and unbouncy.** Durations 70–240 ms for productive UI, 400 ms for
  expressive entries.
- **Easing** uses Carbon's productive cubic-beziers (see `--dh-ease-*` tokens).
  Roughly: `cubic-bezier(0.2, 0, 0.38, 0.9)` for standard transitions. No
  spring physics. No overshoot. No `ease-in-out`.
- **Page transitions** are crossfade or none. Carbon avoids slides/wipes.

### Iconography

See **[ICONOGRAPHY](#iconography)** below.

---

## ICONOGRAPHY

datHere/Carbon's icon language is **outlined, geometric, 1.5-stroke, 16/20/24/32
sizes, mono-color.** The full Carbon icon set (**2,528 icons**) is bundled locally
in `assets/icons/carbon/` — all four sizes, committed to the repo.

**Using local icons:**
```html
<!-- img tag (opaque, no currentColor) -->
<img src="assets/icons/carbon/32/search.svg" width="24" height="24" alt="search">

<!-- inline SVG (inherits currentColor — preferred for interactive states) -->
<!-- fetch + inject the SVG source, then set fill="currentColor" -->
```

Reference path: `assets/icons/carbon/{size}/{name}.svg`
Sizes available: `16` (68 icons) · `20` (9 icons) · `24` (8 icons) · `32` (2,528 icons — use this as default).

Browse and search the full icon set at `preview/brand-iconography.html`.

**Stroke weight:** 1.5 px on a 16-grid (32-grid in display sizes). Color inherited from `currentColor`.

**Animated icons:** 148 CSS keyframe-animated icons are in `assets/icons/carbon-motion/`.
Browse at `preview/motion-iconography.html`. Trigger via `data-animating` attribute on the wrapper div.

**Fallback (substitute): Lucide.** When Carbon icons can't be used,
[Lucide](https://lucide.dev) is the closest free alternative — same outlined
geometric register, 1.5 px stroke, mono-color. **⚠ Flag this as a substitution**
in any deliverable that uses Lucide instead of Carbon.

**Emoji as icons** — only in command tables / feature legends. Never in hero headers or buttons.

**Unicode characters as glyphs** — okay for arrows (`→`, `←`, `↗`) and math
operators in dense data UIs (`±`, `≈`, `∑`). Not for decoration.

**Logo files (in `assets/`)**
- `logo-datHere-primary-dark-bg.png` — primary mark on dark backgrounds.
- `logo-datHere-light.png` — for light backgrounds.
- `logo-datHere-dark.png` — single-color dark.
- `logo-datHere-white.png` — single-color white (for navy footer bars etc).
- `favicon.ico` — 16/32 favicon, the hex-icon glyph only.

---

## Font availability and substitution flag

> ⚠ **Substitution flag:** This kit does **not** ship local IBM Plex
> Sans/Mono/Serif TTF/WOFF2 files. `colors_and_type.css` loads them from
> Google Fonts at runtime instead. For production work, drop the official Plex
> font files in `fonts/` and override the `@import` at the top of
> `colors_and_type.css`. IBM Plex is open-sourced under the OFL —
> [github.com/IBM/plex](https://github.com/IBM/plex).

If `IBM Plex Sans` fails to load, the stack falls back to
`-apple-system → BlinkMacSystemFont → Helvetica Neue → Helvetica → Arial`.

---

## INDEX — what's in this folder

- `colors_and_type.css` — load this first in any HTML you create.
- `assets/` — every brand image, logo variant, and icon set.
- `preview/` — design system browser. Open `preview/index.html`.
- `ui_kits/marketing/` — ⚠ **FLAGGED FOR REVIEW** — do not use as canonical reference.
- `ui_kits/ckan-portal/` — ⚠ **FLAGGED FOR REVIEW** — do not use as canonical reference.
- `scripts/` — build scripts (e.g. `build-motion-icons.js` to regenerate animated icon assets).
- `SKILL.md` — manifest for use as a Claude Skill.

---

## Credits

Built on the [IBM Carbon Design System](https://carbondesignsystem.com) — Apache-2.0.
Animated icons from [carbon-design-system/icons-motion](https://github.com/carbon-design-system/icons-motion) — Apache-2.0.
