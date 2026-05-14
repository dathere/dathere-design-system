/* ⚠ REVIEW BEFORE USE — flagged 2026-05-14
 * Derived from dathere/nmwd-theme + dathere/ckanext-boernetx_theme CKAN templates.
 * Those products were built without a design system. Patterns here may NOT
 * conform to Carbon white-theme or datHere brand guidelines.
 * Do not treat this file as canonical. Audit against colors_and_type.css
 * tokens and Carbon component specs before shipping or referencing.
 * Decision pending: purge & rebuild from Carbon ground up.
 */
/* global React */
function HomeHero({ onSelectDataset }) {
  const topics = [
    { icon: '../../assets/icons/carbon/32/rain-drop.svg',           label: 'Water quality',  count: '1,184 datasets' },
    { icon: '../../assets/icons/carbon/32/accumulation--rain.svg',  label: 'Water quantity', count: '742 datasets' },
    { icon: '../../assets/icons/carbon/32/rain.svg',                label: 'Water use',      count: '514 datasets' },
    { icon: '../../assets/icons/carbon/32/weather-station.svg',     label: 'Climate',        count: '2,031 datasets' },
    { icon: '../../assets/icons/carbon/32/energy--renewable.svg',   label: 'Energy',         count: '897 datasets' },
    { icon: '../../assets/icons/carbon/32/infrastructure--classic.svg', label: 'Infrastructure', count: '643 datasets' },
  ];

  const popular = [
    { id: 'nmwd-quality',   title: 'NM Water Quality Samples',         org: 'NM Water Data Initiative', updated: '2 hours ago', rows: '4.2M' },
    { id: 'usgs-streamflow', title: 'USGS Streamflow — Rio Grande',      org: 'U.S. Geological Survey',   updated: 'today',       rows: '38.1M' },
    { id: 'epa-pm25',       title: 'EPA Air Quality — PM2.5 (Hourly)', org: 'EPA Open Data',            updated: 'yesterday',   rows: '11.8M' },
  ];

  return (
    <React.Fragment>
      <section style={hero.hero}>
        <div style={hero.scrim} />
        <div style={hero.heroInner}>
          <div style={hero.eyebrow}>NM Water Data Initiative</div>
          <h1 style={hero.h1}>Find data on water<br/>in New Mexico.</h1>
          <p style={hero.lede}>
            14,217 datasets from 86 publishing organizations — fully indexed,
            validated, and downloadable as CSV, Parquet, or GeoJSON.
          </p>
          <form style={hero.bigSearch} onSubmit={e => e.preventDefault()}>
            <input
              placeholder="Search datasets, organizations, tags…"
              style={hero.bigInput}
            />
            <button type="submit" style={hero.bigBtn}>Search →</button>
          </form>
          <div style={hero.popularTags}>
            {['water quality', 'drought', 'wells', 'streamflow', 'groundwater'].map(t => (
              <a key={t} href="#" style={hero.popTag}>{t}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section style={hero.section}>
        <div style={hero.sectionInner}>
          <h2 style={hero.h2}>Browse by topic</h2>
          <div style={hero.topicGrid}>
            {topics.map(t => (
              <a key={t.label} href="#" style={hero.topicTile}>
                <img src={t.icon} alt="" style={hero.topicIcon} />
                <div>
                  <div style={hero.topicLabel}>{t.label}</div>
                  <div style={hero.topicCount}>{t.count}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular datasets */}
      <section style={{ ...hero.section, background: 'var(--dh-gray-10)' }}>
        <div style={hero.sectionInner}>
          <div style={hero.sectionHead}>
            <h2 style={{ ...hero.h2, margin: 0 }}>Popular datasets</h2>
            <a href="#" style={hero.viewAll}>View all datasets →</a>
          </div>
          <div style={hero.popularGrid}>
            {popular.map(d => (
              <button key={d.id} onClick={() => onSelectDataset && onSelectDataset(d.id)} style={hero.popCard}>
                <span style={hero.popOrg}>{d.org}</span>
                <span style={hero.popTitle}>{d.title}</span>
                <span style={hero.popMeta}>{d.rows} rows · updated {d.updated}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

const hero = {
  hero: {
    position: 'relative', minHeight: 480,
    background: 'var(--dh-blue-90)',
    color: 'var(--dh-white)',
  },
  scrim: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(180deg, rgba(0,29,108,0.55) 0%, rgba(0,17,65,0.78) 100%)',
  },
  heroInner: {
    position: 'relative', zIndex: 1,
    maxWidth: 1312, margin: '0 auto', padding: '80px 24px',
  },
  eyebrow: {
    font: 'var(--dh-type-label-01)', letterSpacing: '0.08em',
    textTransform: 'uppercase', color: 'var(--dh-blue-30)', marginBottom: 16,
  },
  h1: {
    font: 'var(--dh-type-expressive-06)', fontWeight: 300, fontSize: 56,
    lineHeight: 1.05, margin: '0 0 24px', letterSpacing: '-0.01em',
  },
  lede: {
    font: 'var(--dh-type-body-long-02)', fontSize: 18,
    color: 'rgba(255,255,255,0.85)', margin: '0 0 32px', maxWidth: 640,
  },
  bigSearch: { display: 'flex', maxWidth: 720, marginBottom: 24, boxShadow: '0 8px 24px rgba(0,0,0,0.20)' },
  bigInput:  { flex: 1, font: 'var(--dh-type-body-long-02)', fontSize: 16, padding: '16px 20px', border: 0, background: 'var(--dh-white)', color: 'var(--dh-text-primary)', outline: 'none' },
  bigBtn:    { font: 'var(--dh-type-body-short-02)', fontSize: 16, background: 'var(--dh-blue-60)', color: 'var(--dh-white)', border: 0, padding: '0 24px', cursor: 'pointer' },
  popularTags: { display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' },
  popTag: {
    font: 'var(--dh-type-label-01)', padding: '6px 12px',
    color: 'var(--dh-white)', textDecoration: 'none',
    border: '1px solid rgba(255,255,255,0.4)', borderRadius: 999,
  },

  section: { background: 'var(--dh-white)', padding: '64px 0' },
  sectionInner: { maxWidth: 1312, margin: '0 auto', padding: '0 24px' },
  sectionHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 },
  h2: { font: 'var(--dh-type-expressive-04)', fontSize: 28, fontWeight: 400, margin: '0 0 32px' },
  viewAll: { font: 'var(--dh-type-body-short-02)', color: 'var(--dh-blue-60)', textDecoration: 'none' },
  topicGrid: { display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 },
  topicTile: {
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12,
    padding: 20, background: 'var(--dh-layer-01)', border: '1px solid transparent',
    textDecoration: 'none', color: 'var(--dh-text-primary)',
    transition: 'border-color 110ms',
  },
  topicIcon: { width: 40, height: 40 },
  topicLabel: { font: 'var(--dh-type-heading-02)', color: 'var(--dh-text-primary)' },
  topicCount: { font: 'var(--dh-type-helper-text-01)', color: 'var(--dh-text-helper)' },
  popularGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 },
  popCard: {
    background: 'var(--dh-white)', textAlign: 'left',
    border: '1px solid var(--dh-border-subtle-01)', borderLeft: '2px solid var(--dh-blue-60)',
    padding: 20, display: 'flex', flexDirection: 'column', gap: 8, cursor: 'pointer',
    font: 'var(--dh-type-body-short-01)',
  },
  popOrg:   { font: 'var(--dh-type-label-01)', color: 'var(--dh-text-helper)', textTransform: 'uppercase', letterSpacing: '0.04em' },
  popTitle: { font: 'var(--dh-type-heading-03)', color: 'var(--dh-text-primary)' },
  popMeta:  { font: 'var(--dh-type-helper-text-01)', color: 'var(--dh-text-helper)' },
};

window.CK_HomeHero = HomeHero;
