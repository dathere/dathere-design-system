/* ⚠ REVIEW BEFORE USE — flagged 2026-05-14
 * Derived from dathere/nmwd-theme + dathere/ckanext-boernetx_theme CKAN templates.
 * Those products were built without a design system. Patterns here may NOT
 * conform to Carbon white-theme or datHere brand guidelines.
 * Do not treat this file as canonical. Audit against colors_and_type.css
 * tokens and Carbon component specs before shipping or referencing.
 * Decision pending: purge & rebuild from Carbon ground up.
 */
/* global React */
function Hero() {
  return (
    <section style={mkHero.section}>
      <div style={mkHero.inner}>
        <div style={mkHero.eyebrow}>Open data infrastructure</div>
        <h1 style={mkHero.h1}>
          Tabular data,<br />blazingly&nbsp;FAIR.
        </h1>
        <p style={mkHero.lede}>
          datHere builds the open-source plumbing behind hundreds of public
          data portals — from a 28&nbsp;million row CSV to an indexed,
          validated, AI-queryable dataset in seconds.
        </p>
        <div style={mkHero.actions}>
          <a href="#demo"  style={mkHero.primary}>Request a demo&nbsp;&nbsp;→</a>
          <a href="#qsv"   style={mkHero.tertiary}>Install qsv</a>
        </div>
        <div style={mkHero.metrics}>
          <Metric value="28M" label="rows / 15 GB processed in 11.87 s" />
          <Metric value="780k" label="rows / sec validated against JSON Schema" />
          <Metric value="360k" label="records / sec geocoded against Geonames" />
        </div>
      </div>
      <div style={mkHero.gridLines} aria-hidden="true" />
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div style={mkHero.metric}>
      <div style={mkHero.metricVal}>{value}</div>
      <div style={mkHero.metricLabel}>{label}</div>
    </div>
  );
}

const mkHero = {
  section: {
    position: 'relative', background: 'var(--dh-blue-90)',
    color: 'var(--dh-white)', overflow: 'hidden',
  },
  inner: {
    maxWidth: 1312, margin: '0 auto', padding: '96px 32px 80px',
    position: 'relative', zIndex: 1,
  },
  eyebrow: {
    font: 'var(--dh-type-label-01)', letterSpacing: '0.08em',
    textTransform: 'uppercase', color: 'var(--dh-blue-30)',
    marginBottom: 24,
  },
  h1: {
    font: 'var(--dh-type-display-02)', fontSize: 72, lineHeight: 1.05,
    fontWeight: 300, letterSpacing: '-0.015em', margin: '0 0 24px',
    maxWidth: 880,
  },
  lede: {
    font: 'var(--dh-type-expressive-03)', fontSize: 20, lineHeight: 1.5,
    color: 'rgba(255,255,255,0.85)', margin: '0 0 40px',
    maxWidth: 640,
  },
  actions: { display: 'flex', gap: 12, marginBottom: 80 },
  primary: {
    font: 'var(--dh-type-body-short-02)', fontSize: 16,
    background: 'var(--dh-blue-60)', color: 'var(--dh-white)',
    padding: '14px 20px', textDecoration: 'none',
  },
  tertiary: {
    font: 'var(--dh-type-body-short-02)', fontSize: 16,
    background: 'transparent', color: 'var(--dh-white)',
    border: '1px solid var(--dh-white)',
    padding: '13px 20px', textDecoration: 'none',
  },
  metrics: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
    paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.20)',
  },
  metric: {},
  metricVal: {
    font: 'var(--dh-font-mono)', fontFamily: 'IBM Plex Mono, monospace',
    fontWeight: 400, fontSize: 40, lineHeight: 1,
    color: 'var(--dh-blue-30)', marginBottom: 8,
  },
  metricLabel: {
    font: 'var(--dh-type-body-short-01)',
    color: 'rgba(255,255,255,0.7)', maxWidth: 280,
  },
  gridLines: {
    position: 'absolute', inset: 0, opacity: 0.06,
    backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
    backgroundSize: '80px 80px',
  },
};

window.MK_Hero = Hero;
