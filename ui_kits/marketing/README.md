# ⚠ Marketing UI kit — FLAGGED FOR REVIEW (2026-05-14)

> **Status: do not use as canonical reference.**
> This kit was partially inferred from datHere product repos that were built
> without a design system. Even where it claims to follow Carbon + brand blue,
> individual component decisions have not been audited against Carbon specs.
> **Decision pending:** purge and rebuild from Carbon component specs ground up.

~~Marketing UI kit — datHere.com style~~

~~A high-fidelity recreation of what the `dathere.com` corporate marketing
site looks and feels like, built from the brand foundation (Carbon white
theme + brand blue + IBM Plex). This kit is **not** a copy of any specific
page on dathere.com — that site's source was not provided.~~

## Files
- `index.html` — composed marketing landing page (hero → product grid →
  qsv showcase → testimonial → footer).
- `Header.jsx` — top nav with logo, product menu, and CTA.
- `Hero.jsx` — full-width navy hero with headline + dual CTA.
- `ProductGrid.jsx` — 4-up grid of product tiles (CKAN DMS, qsv pro, AI
  Chatbot, AI-Ready Data).
- `QsvShowcase.jsx` — dark code block + benchmarks ribbon.
- `Footer.jsx` — multi-column navy footer.

## Caveats
- No real product photography — placeholders use the brand navy.
- Customer logos are stylised text glyphs, not actual marks.
- Heading scale leans on the Carbon expressive scale, but the actual
  marketing site may use larger / more editorial typography. Please
  attach screenshots or a Figma URL to refine.
