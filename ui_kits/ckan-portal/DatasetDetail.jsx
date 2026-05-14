/* ⚠ REVIEW BEFORE USE — flagged 2026-05-14
 * Derived from dathere/nmwd-theme + dathere/ckanext-boernetx_theme CKAN templates.
 * Those products were built without a design system. Patterns here may NOT
 * conform to Carbon white-theme or datHere brand guidelines.
 * Do not treat this file as canonical. Audit against colors_and_type.css
 * tokens and Carbon component specs before shipping or referencing.
 * Decision pending: purge & rebuild from Carbon ground up.
 */
/* global React */
function DatasetDetail() {
  const [tab, setTab] = React.useState('resources');
  const resources = [
    { id: 'main',    name: 'nm-water-quality-samples-2010-2024.csv', format: 'CSV',     size: '612 MB', rows: '4,182,914' },
    { id: 'parquet', name: 'nm-water-quality-samples-2010-2024.parquet', format: 'Parquet', size: '94 MB',  rows: '4,182,914' },
    { id: 'sites',   name: 'monitoring-sites.geojson',               format: 'GeoJSON', size: '1.2 MB', rows: '4,182' },
    { id: 'codebook',name: 'codebook-and-units.md',                  format: 'MD',      size: '12 KB',  rows: null },
  ];

  const schema = [
    ['site_id',         'string',   'Required · pattern ^[A-Z]{2}\d{6}$',     '4,182 unique'],
    ['sample_date',     'date',     'Required · 2010-01-01 → 2024-12-31',      '5,114 unique days'],
    ['parameter_code',  'string',   'Required · enum from epa-codes.csv',      '142 values'],
    ['value',           'number',   '0 ≤ value ≤ 99,999',                       'min 0.00 / max 8,940.2'],
    ['unit',            'string',   'enum: mg/L · µg/L · NTU · pH · µS/cm',     '5 values'],
    ['lab_qa',          'string',   'enum: PASS · FLAG · FAIL',                 '99.7% PASS'],
  ];

  return (
    <section style={dd.section}>
      <div style={dd.inner}>
        <div style={dd.crumb}>
          <a href="#" style={dd.crumbLink}>Home</a>
          <span style={dd.crumbSep}>/</span>
          <a href="#" style={dd.crumbLink}>Datasets</a>
          <span style={dd.crumbSep}>/</span>
          <span style={dd.crumbHere}>NM Water Quality Samples</span>
        </div>

        <header style={dd.header}>
          <div style={dd.headerMain}>
            <span style={dd.org}>NM Water Data Initiative</span>
            <h1 style={dd.h1}>NM Water Quality Samples (2010–2024)</h1>
            <p style={dd.lede}>
              Surface- and ground-water monitoring samples collected by NMED and partners.
              Includes pH, turbidity, conductivity, nitrate, and major-ion measurements at
              4,182 sites statewide.
            </p>
            <div style={dd.tagRow}>
              <span style={dd.tag}>water-quality</span>
              <span style={dd.tag}>monitoring</span>
              <span style={dd.tag}>nmed</span>
              <span style={dd.tag}>surface-water</span>
              <span style={dd.tag}>groundwater</span>
            </div>
          </div>
          <div style={dd.headerActions}>
            <button style={dd.btnPrimary}>Download all (612 MB) ↓</button>
            <button style={dd.btnGhost}>API endpoint</button>
            <button style={dd.btnGhost}>Cite this dataset</button>
          </div>
        </header>

        <div style={dd.metaGrid}>
          <Meta k="License"            v="CC-BY-4.0" />
          <Meta k="Updated"             v="2 hours ago" />
          <Meta k="Frequency"           v="Hourly" />
          <Meta k="Spatial coverage"    v="New Mexico, USA" />
          <Meta k="Temporal coverage"   v="2010-01-01 → present" />
          <Meta k="Rows × cols"         v="4,182,914 × 18" />
          <Meta k="Schema"              v={<span style={{ color: 'var(--dh-green-50)' }}>✓ Validated (Draft 2020-12)</span>} />
          <Meta k="DOI"                 v="10.5281/zenodo.example" />
        </div>

        <nav style={dd.tabs}>
          {[
            ['resources', `Resources (${resources.length})`],
            ['schema',    'Schema'],
            ['activity',  'Activity'],
            ['api',       'API'],
          ].map(([k, label]) => (
            <button key={k} onClick={() => setTab(k)}
              style={{ ...dd.tab, ...(tab === k ? dd.tabOn : {}) }}>
              {label}
            </button>
          ))}
        </nav>

        <div style={dd.body}>
          {tab === 'resources' && (
            <table style={dd.table}>
              <thead>
                <tr>
                  <th style={dd.th}>Name</th>
                  <th style={dd.th}>Format</th>
                  <th style={dd.th}>Size</th>
                  <th style={dd.th}>Rows</th>
                  <th style={dd.th}></th>
                </tr>
              </thead>
              <tbody>
                {resources.map(r => (
                  <tr key={r.id} style={dd.tr}>
                    <td style={dd.td}><a href="#" style={dd.link}>{r.name}</a></td>
                    <td style={dd.td}><span style={dd.fmt}>{r.format}</span></td>
                    <td style={dd.td}>{r.size}</td>
                    <td style={dd.td}>{r.rows || '—'}</td>
                    <td style={{ ...dd.td, textAlign: 'right' }}>
                      <a href="#" style={dd.linkBtn}>Preview</a>
                      <a href="#" style={dd.linkBtn}>Download ↓</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {tab === 'schema' && (
            <table style={dd.table}>
              <thead>
                <tr>
                  <th style={dd.th}>Column</th>
                  <th style={dd.th}>Type</th>
                  <th style={dd.th}>Constraint</th>
                  <th style={dd.th}>Cardinality</th>
                </tr>
              </thead>
              <tbody>
                {schema.map(row => (
                  <tr key={row[0]} style={dd.tr}>
                    <td style={{ ...dd.td, fontFamily: 'IBM Plex Mono, monospace' }}>{row[0]}</td>
                    <td style={dd.td}><span style={dd.typ}>{row[1]}</span></td>
                    <td style={dd.td}><code style={dd.code}>{row[2]}</code></td>
                    <td style={{ ...dd.td, color: 'var(--dh-text-secondary)' }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {tab === 'activity' && (
            <ul style={dd.activity}>
              <ActivityItem when="2 hours ago"  who="NMWDI bot"   what="updated resource nm-water-quality-samples-2010-2024.csv (+14,118 rows)" />
              <ActivityItem when="6 hours ago"  who="NMWDI bot"   what="re-validated against schema · 0 rejected rows" />
              <ActivityItem when="yesterday"    who="J. Romero"   what="updated description" />
              <ActivityItem when="3 days ago"   who="A. Chavez"   what="added tag 'groundwater'" />
              <ActivityItem when="2 weeks ago"  who="NMWDI bot"   what="published new resource: monitoring-sites.geojson" />
            </ul>
          )}

          {tab === 'api' && (
            <div style={dd.apiBox}>
              <div style={dd.apiLabel}>cURL</div>
              <pre style={dd.apiCode}>{`curl -H "Authorization: Bearer $TOKEN" \
  "https://catalog.newmexicowaterdata.org/api/3/action/datastore_search?\
resource_id=nm-water-quality-samples-2010-2024&\
filters={\"parameter_code\":\"NO3\"}&\
limit=100"`}</pre>
              <div style={{ ...dd.apiLabel, marginTop: 16 }}>SQL (CKAN datastore)</div>
              <pre style={dd.apiCode}>{`SELECT site_id, sample_date, value, unit
FROM "nm-water-quality-samples-2010-2024"
WHERE parameter_code = 'NO3' AND lab_qa = 'PASS'
ORDER BY sample_date DESC
LIMIT 100`}</pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Meta({ k, v }) {
  return (
    <div style={dd.metaItem}>
      <div style={dd.metaK}>{k}</div>
      <div style={dd.metaV}>{v}</div>
    </div>
  );
}

function ActivityItem({ when, who, what }) {
  return (
    <li style={dd.actItem}>
      <span style={dd.actWhen}>{when}</span>
      <span style={dd.actBody}><strong style={{ color: 'var(--dh-text-primary)' }}>{who}</strong> {what}</span>
    </li>
  );
}

const dd = {
  section: { background: 'var(--dh-white)', minHeight: 800 },
  inner:   { maxWidth: 1312, margin: '0 auto', padding: '32px 24px 64px' },
  crumb:   { font: 'var(--dh-type-helper-text-01)', display: 'flex', gap: 8, marginBottom: 16 },
  crumbLink: { color: 'var(--dh-blue-60)', textDecoration: 'none' },
  crumbSep: { color: 'var(--dh-text-helper)' },
  crumbHere: { color: 'var(--dh-text-secondary)' },

  header: { display: 'flex', alignItems: 'flex-start', gap: 32, marginBottom: 32 },
  headerMain: { flex: 1 },
  org: { font: 'var(--dh-type-label-01)', color: 'var(--dh-blue-60)', textTransform: 'uppercase', letterSpacing: '0.04em' },
  h1:  { font: 'var(--dh-type-expressive-05)', fontSize: 36, fontWeight: 300, lineHeight: 1.15, margin: '8px 0 16px', letterSpacing: '-0.01em' },
  lede:{ font: 'var(--dh-type-body-long-02)', fontSize: 16, color: 'var(--dh-text-secondary)', margin: '0 0 16px', maxWidth: 720 },
  tagRow: { display: 'flex', gap: 6, flexWrap: 'wrap' },
  tag: { font: 'var(--dh-type-label-01)', padding: '4px 10px', borderRadius: 999, background: 'var(--dh-blue-10)', color: 'var(--dh-blue-90)' },
  headerActions: { display: 'flex', flexDirection: 'column', gap: 8, minWidth: 220 },
  btnPrimary: { font: 'var(--dh-type-body-short-02)', background: 'var(--dh-blue-60)', color: 'var(--dh-white)', border: 0, padding: '12px 16px', cursor: 'pointer' },
  btnGhost: { font: 'var(--dh-type-body-short-02)', background: 'transparent', color: 'var(--dh-blue-60)', border: '1px solid var(--dh-blue-60)', padding: '11px 16px', cursor: 'pointer' },

  metaGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--dh-border-subtle-01)', border: '1px solid var(--dh-border-subtle-01)', marginBottom: 32 },
  metaItem: { background: 'var(--dh-white)', padding: '12px 16px' },
  metaK: { font: 'var(--dh-type-label-01)', color: 'var(--dh-text-helper)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 },
  metaV: { font: 'var(--dh-type-body-short-02)', color: 'var(--dh-text-primary)' },

  tabs: { display: 'flex', gap: 0, borderBottom: '1px solid var(--dh-border-subtle-01)', marginBottom: 16 },
  tab:  { font: 'var(--dh-type-body-short-02)', background: 'transparent', border: 0, padding: '12px 20px', cursor: 'pointer', color: 'var(--dh-text-secondary)', borderBottom: '2px solid transparent' },
  tabOn:{ color: 'var(--dh-text-primary)', borderBottomColor: 'var(--dh-blue-60)' },
  body: { paddingTop: 16 },

  table: { width: '100%', borderCollapse: 'collapse', font: 'var(--dh-type-body-short-01)' },
  th: { textAlign: 'left', padding: '12px 16px', font: 'var(--dh-type-heading-01)', background: 'var(--dh-gray-10)', borderBottom: '1px solid var(--dh-border-subtle-01)' },
  tr: { borderBottom: '1px solid var(--dh-border-subtle-00)' },
  td: { padding: '12px 16px', color: 'var(--dh-text-primary)', verticalAlign: 'middle' },
  link: { color: 'var(--dh-blue-60)', textDecoration: 'none' },
  linkBtn: { color: 'var(--dh-blue-60)', textDecoration: 'none', marginLeft: 16, font: 'var(--dh-type-body-short-01)' },
  fmt: { font: 'var(--dh-type-code-01)', padding: '2px 6px', background: 'var(--dh-gray-90)', color: 'var(--dh-white)', fontWeight: 600 },
  typ: { font: 'var(--dh-type-code-01)', padding: '2px 6px', background: 'var(--dh-blue-10)', color: 'var(--dh-blue-90)' },
  code:{ font: 'var(--dh-type-code-01)', background: 'var(--dh-layer-01)', padding: '2px 4px', color: 'var(--dh-text-primary)' },

  activity: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 },
  actItem: { display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16, padding: '8px 0', borderBottom: '1px solid var(--dh-border-subtle-00)' },
  actWhen: { font: 'var(--dh-type-helper-text-01)', color: 'var(--dh-text-helper)' },
  actBody: { font: 'var(--dh-type-body-short-01)', color: 'var(--dh-text-secondary)' },

  apiBox: {},
  apiLabel: { font: 'var(--dh-type-label-01)', color: 'var(--dh-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 8 },
  apiCode: { font: 'var(--dh-type-code-02)', background: 'var(--dh-gray-100)', color: 'var(--dh-white)', padding: 16, margin: 0, overflowX: 'auto' },
};

window.CK_DatasetDetail = DatasetDetail;
