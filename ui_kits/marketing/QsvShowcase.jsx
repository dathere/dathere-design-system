/* ⚠ REVIEW BEFORE USE — flagged 2026-05-14
 * Derived from dathere/nmwd-theme + dathere/ckanext-boernetx_theme CKAN templates.
 * Those products were built without a design system. Patterns here may NOT
 * conform to Carbon white-theme or datHere brand guidelines.
 * Do not treat this file as canonical. Audit against colors_and_type.css
 * tokens and Carbon component specs before shipping or referencing.
 * Decision pending: purge & rebuild from Carbon ground up.
 */
/* global React */
function QsvShowcase() {
  const [tab, setTab] = React.useState('stats');
  const commands = {
    stats: [
      { c: '# Compute 47 summary stats over a 28M-row CSV', cls: 'c' },
      { c: '$ ', cls: 'p' }, { c: 'qsv stats nyc311.csv --everything
', cls: 'k' },
      { c: '
[' , cls: 'd' }, { c: '████████████████████', cls: 'b' }, { c: '] 28,127,442 rows · 11.87s
', cls: 'd' },
    ],
    validate: [
      { c: '# Validate every row against an inferred JSON Schema', cls: 'c' },
      { c: '$ ', cls: 'p' }, { c: 'qsv validate nyc311.csv schema.json
', cls: 'k' },
      { c: '
', cls: 'd' },
      { c: '✓ ', cls: 'g' }, { c: '28,127,027 rows valid
', cls: 'd' },
      { c: '⚠ ', cls: 'y' }, { c: '   415 rows rejected → invalid_rows.csv
', cls: 'd' },
      { c: '  → 780,031 rows/sec
', cls: 'd' },
    ],
    join: [
      { c: '# Join 1M rows × 9 cols in under 600ms (joinp, polars)', cls: 'c' },
      { c: '$ ', cls: 'p' }, { c: 'qsv joinp left=lhs.csv right=rhs.csv key=id
', cls: 'k' },
      { c: '
→ 1,000,000 rows joined in 581ms
', cls: 'd' },
    ],
  };

  return (
    <section style={mkShow.section} id="qsv">
      <div style={mkShow.inner}>
        <div style={mkShow.left}>
          <div style={mkShow.eyebrow}>qsv · open source</div>
          <h2 style={mkShow.h2}>The CLI we built because pandas was the bottleneck.</h2>
          <p style={mkShow.body}>
            qsv is a Rust-based data-wrangling toolkit — 80+ commands for
            slicing, joining, validating, indexing, and FAIRifying CSV,
            TSV, JSONL, Excel, and Parquet files.
          </p>
          <p style={mkShow.body}>
            It runs in constant memory with indexes, scales linearly with
            cores, and ships with bindings for CKAN, DataPusher+, and the
            qsv pro desktop app.
          </p>
          <div style={mkShow.metaRow}>
            <a href="#install" style={mkShow.cta}>Install qsv&nbsp;&nbsp;→</a>
            <span style={mkShow.metaTxt}>v0.146 · Apache-2.0 · 3,400 ★ on GitHub</span>
          </div>
        </div>
        <div style={mkShow.right}>
          <div style={mkShow.terminal}>
            <div style={mkShow.termHeader}>
              {Object.entries({ stats: 'stats', validate: 'validate', join: 'joinp' }).map(([k, label]) => (
                <button key={k}
                        onClick={() => setTab(k)}
                        style={{
                          ...mkShow.termTab,
                          color: tab === k ? '#fff' : 'rgba(255,255,255,0.5)',
                          borderBottomColor: tab === k ? 'var(--dh-blue-50)' : 'transparent',
                        }}>
                  qsv {label}
                </button>
              ))}
            </div>
            <pre style={mkShow.termBody}>
              {commands[tab].map((seg, i) => (
                <span key={i} style={mkShow.cls[seg.cls]}>{seg.c}</span>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

const mkShow = {
  section: { background: 'var(--dh-gray-10)', padding: '96px 0' },
  inner:   {
    maxWidth: 1312, margin: '0 auto', padding: '0 32px',
    display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64,
    alignItems: 'center',
  },
  left:    {},
  eyebrow: {
    font: 'var(--dh-type-label-01)', letterSpacing: '0.08em',
    textTransform: 'uppercase', color: 'var(--dh-blue-60)', marginBottom: 16,
  },
  h2:      {
    font: 'var(--dh-type-expressive-05)', fontWeight: 300, fontSize: 36,
    lineHeight: 1.15, letterSpacing: '-0.01em', margin: '0 0 24px',
  },
  body:    {
    font: 'var(--dh-type-body-long-02)', fontSize: 16,
    color: 'var(--dh-text-secondary)', margin: '0 0 16px',
  },
  metaRow: {
    marginTop: 24, display: 'flex', alignItems: 'center', gap: 16,
    flexWrap: 'wrap',
  },
  cta:     {
    font: 'var(--dh-type-body-short-02)', fontSize: 16,
    background: 'var(--dh-blue-60)', color: 'var(--dh-white)',
    padding: '12px 20px', textDecoration: 'none',
  },
  metaTxt: {
    font: 'var(--dh-type-code-01)', color: 'var(--dh-text-helper)',
  },
  right:   {},
  terminal:{
    background: 'var(--dh-gray-100)', color: 'var(--dh-white)',
    boxShadow: '0 20px 60px rgba(0, 29, 108, 0.18)',
  },
  termHeader: {
    display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.10)',
    padding: '0 8px',
  },
  termTab: {
    background: 'transparent', border: 0, color: 'rgba(255,255,255,0.5)',
    font: 'var(--dh-type-code-01)', padding: '14px 16px',
    cursor: 'pointer', borderBottom: '2px solid transparent',
  },
  termBody: {
    margin: 0, padding: '20px 24px',
    font: 'var(--dh-type-code-02)', fontSize: 14, lineHeight: 1.7,
    color: '#d0d0d0', whiteSpace: 'pre-wrap', minHeight: 200,
  },
  cls: {
    c: { color: '#6a9955' },              // comment
    p: { color: '#787878' },              // prompt
    k: { color: '#4589ff', fontWeight: 500 }, // keyword
    d: { color: '#d0d0d0' },              // default
    b: { color: 'var(--dh-blue-50)' },    // progress bar
    g: { color: 'var(--dh-green-50)' },   // green
    y: { color: 'var(--dh-yellow-30)' },  // yellow warning
  },
};

window.MK_QsvShowcase = QsvShowcase;
