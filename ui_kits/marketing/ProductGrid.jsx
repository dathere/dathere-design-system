/* ⚠ REVIEW BEFORE USE — flagged 2026-05-14
 * Derived from dathere/nmwd-theme + dathere/ckanext-boernetx_theme CKAN templates.
 * Those products were built without a design system. Patterns here may NOT
 * conform to Carbon white-theme or datHere brand guidelines.
 * Do not treat this file as canonical. Audit against colors_and_type.css
 * tokens and Carbon component specs before shipping or referencing.
 * Decision pending: purge & rebuild from Carbon ground up.
 */
/* global React */
function ProductGrid() {
  const products = [
    {
      id: 'ckan',
      eyebrow: 'Data management',
      title: 'datHere CKAN DMS',
      body: 'A hardened, supported distribution of CKAN — the open-source DMS powering data.gov, data.humdata.org, and hundreds of municipal portals.',
      ctaLabel: 'Explore CKAN →',
    },
    {
      id: 'qsv-pro',
      eyebrow: 'Desktop app',
      title: 'qsv pro',
      body: 'A GUI on top of the qsv engine. Drop a spreadsheet, get type-inferred stats, schema validation, and AI-described columns instantly.',
      ctaLabel: 'Download qsv pro →',
    },
    {
      id: 'chatbot',
      eyebrow: 'AI for data',
      title: 'datHere AI Chatbot',
      body: 'Natural-language search across your CKAN portal. Grounded answers backed by deterministic SQL — no hallucinated rows.',
      ctaLabel: 'See it in action →',
    },
    {
      id: 'ready',
      eyebrow: 'Consulting',
      title: 'AI-Ready Data',
      body: 'Schema inference, validation rules, and FAIRification workflows that turn messy public datasets into something an LLM can actually use.',
      ctaLabel: 'Talk to us →',
    },
  ];

  return (
    <section style={mkGrid.section} id="products">
      <div style={mkGrid.inner}>
        <div style={mkGrid.heading}>
          <div style={mkGrid.eyebrow}>The datHere stack</div>
          <h2 style={mkGrid.h2}>From CSV to citation, in one toolchain.</h2>
        </div>
        <div style={mkGrid.grid}>
          {products.map(p => <Tile key={p.id} {...p} />)}
        </div>
      </div>
    </section>
  );
}

function Tile({ eyebrow, title, body, ctaLabel }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#"
       onMouseEnter={() => setHover(true)}
       onMouseLeave={() => setHover(false)}
       style={{
         ...mkGrid.tile,
         borderLeftColor: hover ? 'var(--dh-blue-60)' : 'var(--dh-border-subtle-01)',
         paddingLeft: hover ? 23 : 24,
       }}>
      <div style={mkGrid.tileEyebrow}>{eyebrow}</div>
      <h3 style={mkGrid.tileTitle}>{title}</h3>
      <p style={mkGrid.tileBody}>{body}</p>
      <span style={{
        ...mkGrid.tileCta,
        color: hover ? 'var(--dh-blue-70)' : 'var(--dh-blue-60)',
      }}>{ctaLabel}</span>
    </a>
  );
}

const mkGrid = {
  section: { background: 'var(--dh-white)', padding: '96px 0' },
  inner:   { maxWidth: 1312, margin: '0 auto', padding: '0 32px' },
  heading: { marginBottom: 64, maxWidth: 720 },
  eyebrow: {
    font: 'var(--dh-type-label-01)', letterSpacing: '0.08em',
    textTransform: 'uppercase', color: 'var(--dh-blue-60)',
    marginBottom: 16,
  },
  h2:      {
    font: 'var(--dh-type-expressive-05)', fontWeight: 300,
    fontSize: 42, lineHeight: 1.1, letterSpacing: '-0.01em',
    margin: 0, color: 'var(--dh-text-primary)',
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px',
    background: 'var(--dh-border-subtle-01)',
  },
  tile: {
    background: 'var(--dh-white)', padding: '32px 24px',
    borderLeft: '1px solid var(--dh-border-subtle-01)',
    textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 12,
    transition: 'border-color 110ms, padding-left 110ms',
    minHeight: 200,
  },
  tileEyebrow: {
    font: 'var(--dh-type-label-01)', letterSpacing: '0.08em',
    textTransform: 'uppercase', color: 'var(--dh-text-helper)',
  },
  tileTitle: {
    font: 'var(--dh-type-expressive-04)', fontWeight: 400, fontSize: 28,
    lineHeight: 1.2, margin: 0, color: 'var(--dh-text-primary)',
  },
  tileBody: {
    font: 'var(--dh-type-body-long-02)', fontSize: 16,
    color: 'var(--dh-text-secondary)', margin: 0, flex: 1,
  },
  tileCta: {
    font: 'var(--dh-type-body-short-02)', fontSize: 16,
    color: 'var(--dh-blue-60)', marginTop: 8, fontWeight: 400,
  },
};

window.MK_ProductGrid = ProductGrid;
