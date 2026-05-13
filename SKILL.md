---
name: dathere-design
description: Use this skill to generate well-branded interfaces and assets for datHere — a data-infrastructure company (CKAN DMS, qsv pro, qsv CLI, AI Chatbot, AI-Ready Data) — either for production or for throwaway prototypes, mocks, slides, and exploration. Contains the essential design guidelines, colors, type, fonts, brand assets, and UI-kit components for prototyping or production work.
user-invocable: true
---

# datHere design skill

This skill is the contents of the **datHere Design System** project. It
captures everything an agent needs to make convincing datHere-branded UI:
brand context, content voice, color and type tokens, iconography rules,
and three reusable UI kits (marketing, CKAN portal, qsv pro).

## How to use this skill

1. **Read `README.md` first.** It is the canonical brand brief and points
   at every other file. The “Visual foundations” and “Content fundamentals”
   sections answer most styling questions on the spot.
2. **Load `colors_and_type.css` from any HTML you author.** Every CSS
   variable used by the kits lives there (`--dh-blue-60`, `--dh-spacing-05`,
   `--dh-type-heading-04`, etc.). Reference the variables — don’t inline
   hex codes.
3. **Look at `preview/` for spec cards** if you need to remember a token,
   ratio, or component spec at a glance.
4. **For UI mocks, copy components out of `ui_kits/`:**
   - `ui_kits/marketing/` — landing-page surfaces (hero, product grid, qsv
     terminal showcase, footer).
   - `ui_kits/ckan-portal/` — public CKAN data portal (masthead, hero,
     search/filter rail, dataset cards, dataset detail).
5. **Use assets from `assets/`** for logos, favicons, hero photography, and
   the Carbon-style icons that ship with this skill. Do not redraw them.

## What to do when invoked

If the user invokes this skill without further guidance:

1. Ask what they want to build or design (a slide, a landing page, a
   dataset page, a desktop-app screen, etc).
2. Ask which datHere product or surface it’s for (qsv, qsv pro, CKAN
   portal, marketing, AI chatbot).
3. Ask whether it’s a **throwaway HTML mock** or **production code** — the
   two paths differ:
   - **HTML mock** — write a single self-contained HTML file at the project
     root, load `colors_and_type.css`, copy UI kit components inline, and
     reference assets with relative paths.
   - **Production code** — keep `colors_and_type.css` (or port its tokens
     into the host project's design-tokens file), follow the visual and
     content rules in `README.md`, and use real Carbon React components
     (`@carbon/react`) where the host project already does.
4. Default to **IBM Plex Sans / Mono**, **Carbon white theme** semantics,
   **brand blue `#0F62FE`** for action, **navy `#001D6C`** for brand
   weight, and **square corners with subtle borders** — not shadows.

## Hard rules (don’t break)

- **Wordmark is always `datHere`.** Never `Dathere`, `DatHere`, `DATHERE`.
- **No purple-blue marketing gradients, no isometric blob art, no
  hand-drawn illustrations.** datHere is a serious-products brand.
- **Emoji are reserved for command-table legends only.** Never put them
  in hero copy, buttons, or marketing taglines.
- **Brand blue is for *action*** (buttons, links, focus rings, the
  selected-tile accent). It is *not* a header background — gray-100 or
  blue-90 navy fills inverted sections instead.
- **Carbon-style square corners.** Default border-radius is `0`. Reserve
  pills for CKAN dataset tag chips.

## Pointers to upstream sources

If you have access to the underlying repos, you can sharpen what this
skill produces:

- `github.com/dathere/qsv` — flagship CLI; the brand voice is the README.
- `github.com/dathere/nmwd-theme`, `ckanext-boernetx_theme` — CKAN themes.
- `github.com/a5dur/de-intern-guide` — canonical logo PNGs live here.
- `github.com/carbon-design-system/carbon` — the system of record for
  tokens, type, and the icon set (`@carbon/icons`).
