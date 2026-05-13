# CKAN portal UI kit

A high-fidelity recreation of a **datHere CKAN data portal** in the style
of `catalog.newmexicowaterdata.org` and similar deployments built on
`dathere/nmwd-theme` and `dathere/ckanext-boernetx_theme`. Recreated by
reading the upstream CKAN theme templates and CSS, not by guessing from
screenshots.

## Screens (toggle from the top tab strip on `index.html`)

1. **Home** — branded hero with masthead, search, topic icon grid, popular
   datasets row.
2. **Search / browse** — left-rail filters (organization, tags, format,
   license, frequency) and right column of dataset result cards with
   pagination.
3. **Dataset detail** — overview header, tabbed body (Resources / Schema /
   Activity / API), inline metadata grid, related items.

## Files
- `index.html` — interactive shell that switches between the three screens.
- `Masthead.jsx` — top utility bar + masthead with search.
- `HomeHero.jsx` — branded hero, topic icon grid, popular datasets.
- `SearchScreen.jsx` — filter rail + dataset result list.
- `DatasetCard.jsx` — reusable dataset preview card.
- `DatasetDetail.jsx` — full dataset page with tabbed content.

## Caveats
- Topic icons come from `dathere/nmwd-theme` — they are *water-sector*
  specific (water-quality, energy, climate). For non-water portals, swap
  in `@carbon/icons` mono glyphs.
- Map preview is a static placeholder (no Leaflet).
- The "Sign in" / "Register" flows are stubs.
