# datHere Design System

A design system for **[datHere](https://dathere.com)** — a data-infrastructure
company that builds tools for publishing, validating, wrangling, and discovering
tabular data. This repo collects the visual foundations, brand assets, content
guidance, and UI-kit recreations a design agent needs to mock or build
products that look and feel like datHere.

> **TL;DR for designers** — datHere is built on top of the **IBM Carbon
> Design System** ("white" theme) with a tightly-scoped brand-blue accent.
> If you're making a datHere artifact, default to: Carbon-style square
> rectangles, **IBM Plex Sans / Mono**, generous whitespace, the brand blue
> `#0F62FE` for action, navy `#001D6C` for moments of brand weight.

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
| **Water Data Practice** | Sector-specific portals (e.g. [catalog.newmexicowaterdata.org](https://catalog.newmexicowaterdata.org), Boerne TX) built on the datHere CKAN distribution. |

The audience is **data engineers, open-data publishers, civic-tech teams, and
analysts** — practitioners who care about correctness, performance, and FAIR
principles, not flashy marketing surfaces. The visual register reflects that:
serious, dense, square, blue.

## Sources used

Everything here was derived from materials the project owner provided:

- **Logo** — `uploads/logo.datHere.primary.dark_.bg_ (1).png`
- **Design system reference** — [`carbon-design-system/carbon`](https://github.com/carbon-design-system/carbon) (Apache-2.0).
  We pulled the `white` theme tokens (`packages/themes/src/white.js`) and
  remapped them to `--dh-*` CSS vars in `colors_and_type.css`. Carbon is the
  inferred system of record because the wordmark blue exactly matches Carbon's
  `blue60` (`#0F62FE`) and the icon navy matches `blue90` (`#001D6C`).
- **datHere repos browsed for product context**:
  - `dathere/qsv` — flagship Rust CLI (README + docs/)
  - `dathere/nmwd-theme` — CKAN theme for New Mexico Water Data
  - `dathere/ckanext-boernetx_theme` — CKAN theme for Boerne TX
  - `a5dur/de-intern-guide` — Docusaurus intern guide (where the canonical
    `datHere-logo.png` / `datHere-logo-dark.png` PNGs live)
  - `dathere/qsv-pro-releases` — desktop GUI release notes
- Pull from these repos directly if you need more material — they are public
  on github.com/dathere and github.com/a5dur (the org's primary maintainer).

> ⚠️ If you have access to a Figma file, a brand-book PDF, or production
> screenshots of `qsv pro`, please attach them — the kit fidelity goes up
> sharply when we can read the real component code rather than reconstruct
> from CKAN themes and Carbon defaults.

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
│   ├── icons/                 ← topical SVG icons pulled from CKAN themes
│   ├── images/                ← hero/photographic background assets
│   └── screenshots/           ← qsv pro + qsv.dathere.com captures (reference only)
├── preview/                   ← small HTML cards registered as Design System tab assets
├── ui_kits/
│   ├── marketing/             ← marketing-site UI kit (datHere.com style)
│   └── ckan-portal/           ← public CKAN data-portal UI kit
└── fonts/                     ← (empty — see "Type" below)
```

---

## CONTENT FUNDAMENTALS

How datHere writes copy, derived from `qsv` README, the intern guide, and the
CKAN theme microcopy.

**Voice — direct, technical, lightly playful.** Writers assume the reader
already knows what a CSV is. Sentences are short and load-bearing. Capabilities
are described with concrete verbs (*"slice"*, *"sniff"*, *"behead"*, *"dedup"*,
*"safenames"*) — most qsv command names are themselves the docs.

**Person — second-person + product-as-actor.** Marketing copy says *"you"* and
*"your data"*. Documentation uses imperative mood (*"Run `qsv stats`…"*).
First-person plural (*"we"*) appears only in the about-us / sponsor / footer
contexts.

**Casing — Title Case for nav and section headers; sentence case for body;
**lowercase** for the wordmark itself**. The brand word is always written
**datHere** — lowercase `d`, lowercase `at`, capital `H`, lowercase `ere`.
Never *DatHere*, *Dathere*, or *DATHERE*. The wordmark logo only renders
the `dat` glyphs; the full word appears in the inline text version.

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

**Emoji are used as iconography, not as decoration.** The qsv command tables
use them as glyphs for feature flags (`🐻‍❄️` = polars-accelerated, `📇` = uses
an index, `🤖` = AI). They are functional. **Do not** sprinkle emoji into
hero headers, button labels, or marketing taglines.

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
> *"Powering data hubs and data portals."* (CKAN positioning, paraphrased)

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
saturated blue for action. CKAN themes do break this rule (full navy footers,
blue masthead bars) but those are heavier marketing-portal contexts, not core
product UI.

**Gradients** — used sparingly, never in core product UI. The CKAN AI-chat
surface has a very gentle blue-tinted aura (Carbon's experimental AI tokens),
but that's the only place. No marketing-bro purple-blue gradients.

### Type

- **Sans (UI and body)** — **IBM Plex Sans**. Weights used: 300, 400, 500, 600, 700.
- **Mono (code, command names, data tables)** — **IBM Plex Mono**.
- **Serif (rare — long-form editorial only)** — **IBM Plex Serif**.

The codebases observed actually use a *mixture* of Helvetica Neue / Montserrat /
Mulish / Poppins in different CKAN themes — that's because each CKAN deployment
is a customer instance, not the corporate brand. For the corporate brand we
follow Carbon and ship **IBM Plex** as the canonical type. See the substitution
note below.

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
- **Pills (`--dh-radius-pill`, 999 px)** are reserved for *tag/chip* surfaces
  in CKAN's dataset listing — never for buttons.
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
- **Hero imagery** when present is **photographic, on-location, daylight**
  (e.g. the NMWD elvado.jpeg — a real reservoir at El Vado, NM). Cool tones.
  Slight desaturation. No grain, no Instagram filters. Often overlaid with a
  blue or navy 60% opacity scrim for text legibility.
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

**Fallback (substitute): Lucide.** When Carbon icons can't be used,
[Lucide](https://lucide.dev) is the closest free alternative — same outlined
geometric register, 1.5 px stroke, mono-color. **⚠ Flag this as a substitution**
in any deliverable that uses Lucide instead of Carbon.

**Domain-specific topical icons** (water-quality, climate, energy glyphs from the
NMWD CKAN theme) are **not** in this folder — they are customer-instance icons,
not the corporate icon system.

**Emoji as icons** — only in command tables / feature legends, the way qsv's
README uses them (`📇 indexed`, `🚀 multithreaded`, `🤖 AI`, `🐻‍❄️ polars`,
`🪄 automagical`). Never in hero headers or buttons.

**Emoji as icons** — only in command tables / feature legends, the way qsv's
README uses them (`📇 indexed`, `🚀 multithreaded`, `🤖 AI`, `🐻‍❄️ polars`,
`🪄 automagical`). Never in hero headers or buttons.

**Unicode characters as glyphs** — okay for arrows (`→`, `←`, `↗`) and math
operators in dense data UIs (`±`, `≈`, `∑`). Not for decoration.

**Logo files (in `assets/`)**
- `logo-datHere-primary-dark-bg.png` — primary mark on dark backgrounds
  (wordmark blue + dark-navy hex icon).
- `logo-datHere-light.png` — for light backgrounds.
- `logo-datHere-dark.png` — single-color dark.
- `logo-datHere-white.png` — single-color white (for use on `--dh-blue-90`
  navy footer bars etc).
- `favicon.ico` — 16/32 favicon, the hex-icon glyph only.

---

## Font availability and substitution flag

> ⚠ **Substitution flag:** This kit does **not** ship local IBM Plex
> Sans/Mono/Serif TTF/WOFF2 files. `colors_and_type.css` loads them from
> Google Fonts at runtime instead. For production work, please drop the
> official Plex font files in `fonts/` and the system will pick them up
> automatically (override the `@import` at the top of
> `colors_and_type.css`). IBM Plex is open-sourced under the OFL —
> [github.com/IBM/plex](https://github.com/IBM/plex).

If `IBM Plex Sans` fails to load entirely, the stack falls back to
`-apple-system → BlinkMacSystemFont → Helvetica Neue → Helvetica → Arial`
which is close in proportion (the original NMWD theme also fell back to
Helvetica Neue, so this is consistent with historical datHere CSS).

---

## INDEX — what's in this folder

- `colors_and_type.css` — load this first in any HTML you create.
- `assets/` — every brand image, logo variant, and topical icon.
- `preview/` — small spec cards that render in the project's Design System
  tab. Browse `preview/index.html` if you want them all on one page.
- `ui_kits/marketing/` — `index.html` plus JSX components for the corporate
  marketing site style (hero, features grid, footer).
- `ui_kits/ckan-portal/` — `index.html` plus JSX components for a CKAN data
  portal (search, dataset cards, dataset detail, organization list).
- `SKILL.md` — manifest that lets this folder be packaged as a Claude
  Skill for use in Claude Code or Agent SDK contexts.

---

## Iterate with us

If you have **Figma URLs, screenshots of qsv pro at full resolution, a brand
guidelines PDF, or production CSS for `dathere.com` proper** — please attach
them. The kit gets dramatically better when it can mimic real components
instead of reasoning from CKAN theme remnants and Carbon defaults.
