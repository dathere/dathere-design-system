/* global React */
function SearchScreen({ onSelectDataset }) {
  const [sort, setSort] = React.useState('relevance');

  const datasets = [
    {
      id: 'nmwd-quality', org: 'NM Water Data Initiative',
      title: 'NM Water Quality Samples (2010–2024)',
      description: 'Surface- and ground-water monitoring samples collected by NMED and partners. Includes pH, turbidity, conductivity, nitrate, and major-ion measurements at 4,182 sites statewide.',
      tags: ['water-quality', 'monitoring', 'nmed'],
      formats: ['CSV', 'GeoJSON', 'Parquet'], rows: '4.2M', updated: '2 hours ago', validated: true,
    },
    {
      id: 'usgs-streamflow', org: 'U.S. Geological Survey',
      title: 'USGS Streamflow — Rio Grande Basin',
      description: '15-minute streamflow gauge data for 247 stations along the Rio Grande, San Juan, and Pecos basins. Continuously updated from the USGS NWIS API.',
      tags: ['streamflow', 'rio-grande', 'usgs'],
      formats: ['CSV', 'API'], rows: '38.1M', updated: 'today', validated: true,
    },
    {
      id: 'epa-pm25', org: 'EPA Open Data',
      title: 'EPA Air Quality — PM2.5 (Hourly)',
      description: 'Hourly PM2.5 readings at all NM monitoring stations. Aligned with the EPA AirNow feed; includes derived AQI categories.',
      tags: ['air-quality', 'pm2-5', 'epa'], formats: ['CSV', 'API'], rows: '11.8M', updated: 'yesterday', validated: false,
    },
    {
      id: 'osse-wells', org: 'NM Office of the State Engineer',
      title: 'OSSE Permitted Wells',
      description: 'All wells permitted by the NM OSSE since 1907. Includes well depth, completion date, declared use, and parcel-level location.',
      tags: ['wells', 'osse', 'permits'], formats: ['CSV', 'GeoJSON', 'Excel'], rows: '194k', updated: '3 days ago', validated: true,
    },
    {
      id: 'drought-monitor', org: 'U.S. Drought Monitor',
      title: 'US Drought Monitor — Weekly Snapshots',
      description: 'County-level drought-severity classifications, published weekly. New Mexico subset; 26-year history.',
      tags: ['drought', 'usdm', 'climate'], formats: ['CSV', 'GeoJSON'], rows: '162k', updated: '5 days ago', validated: true,
    },
  ];

  return (
    <section style={ss.section}>
      <div style={ss.inner}>
        <div style={ss.crumb}>
          <a href="#" style={ss.crumbLink}>Home</a>
          <span style={ss.crumbSep}>/</span>
          <span style={ss.crumbHere}>Search datasets</span>
        </div>
        <h1 style={ss.h1}>1,184 datasets matching <em style={ss.qHi}>"water quality"</em></h1>

        <div style={ss.layout}>
          {/* Filters rail */}
          <aside style={ss.rail}>
            <FilterGroup title="Organization" items={[
              ['NM Water Data Initiative', 412],
              ['U.S. Geological Survey',   318],
              ['NM Office of the State Engineer', 197],
              ['EPA Open Data', 143],
              ['NM Environment Dept', 87],
            ]} active={['NM Water Data Initiative']} />
            <FilterGroup title="Tags" items={[
              ['water-quality', 1184], ['monitoring', 612], ['groundwater', 442],
              ['surface-water', 318], ['drought', 84],
            ]} />
            <FilterGroup title="Format" items={[
              ['CSV', 1102], ['GeoJSON', 488], ['Parquet', 220], ['Excel', 117], ['API', 64],
            ]} />
            <FilterGroup title="License" items={[
              ['CC-BY-4.0', 612], ['Public domain', 488], ['CC0', 84],
            ]} />
          </aside>

          {/* Results */}
          <div style={ss.results}>
            <div style={ss.resultsHead}>
              <span style={ss.activeChip}>
                NM Water Data Initiative
                <button style={ss.activeChipX} aria-label="remove filter">×</button>
              </span>
              <span style={{ flex: 1 }} />
              <span style={ss.sortLbl}>Sort by</span>
              <select value={sort} onChange={e => setSort(e.target.value)} style={ss.sortSel}>
                <option value="relevance">Relevance</option>
                <option value="updated">Most recently updated</option>
                <option value="popular">Most popular</option>
                <option value="rows">Largest</option>
              </select>
            </div>

            <div style={ss.list}>
              {datasets.map(d => (
                <CK_DatasetCard key={d.id} ds={d}
                  onClick={() => onSelectDataset && onSelectDataset(d.id)} />
              ))}
            </div>

            <div style={ss.pager}>
              <button style={{ ...ss.pageBtn, color: 'var(--dh-text-helper)' }} disabled>← Prev</button>
              <button style={{ ...ss.pageBtn, ...ss.pageBtnOn }}>1</button>
              <button style={ss.pageBtn}>2</button>
              <button style={ss.pageBtn}>3</button>
              <span style={ss.pageBtn}>…</span>
              <button style={ss.pageBtn}>119</button>
              <button style={ss.pageBtn}>Next →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterGroup({ title, items, active = [] }) {
  return (
    <div style={ss.group}>
      <h4 style={ss.groupTitle}>{title}</h4>
      <ul style={ss.groupList}>
        {items.map(([label, count]) => (
          <li key={label}>
            <label style={ss.filterRow}>
              <input type="checkbox" defaultChecked={active.includes(label)} style={ss.cb} />
              <span style={ss.filterLabel}>{label}</span>
              <span style={ss.filterCount}>{count}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

const ss = {
  section: { background: 'var(--dh-gray-10)', minHeight: 800 },
  inner:   { maxWidth: 1312, margin: '0 auto', padding: '32px 24px 64px' },
  crumb:   { font: 'var(--dh-type-helper-text-01)', display: 'flex', gap: 8, marginBottom: 16 },
  crumbLink: { color: 'var(--dh-blue-60)', textDecoration: 'none' },
  crumbSep: { color: 'var(--dh-text-helper)' },
  crumbHere: { color: 'var(--dh-text-secondary)' },
  h1: { font: 'var(--dh-type-expressive-04)', fontSize: 28, fontWeight: 400, margin: '0 0 24px' },
  qHi: { fontStyle: 'normal', color: 'var(--dh-blue-70)' },
  layout: { display: 'grid', gridTemplateColumns: '260px 1fr', gap: 24 },

  rail: { background: 'var(--dh-white)', border: '1px solid var(--dh-border-subtle-01)', padding: 4, alignSelf: 'start' },
  group: { padding: 16, borderBottom: '1px solid var(--dh-border-subtle-00)' },
  groupTitle: { font: 'var(--dh-type-heading-01)', margin: '0 0 8px', color: 'var(--dh-text-primary)' },
  groupList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 },
  filterRow: { display: 'flex', alignItems: 'center', gap: 8, font: 'var(--dh-type-body-short-01)', cursor: 'pointer' },
  cb: { accentColor: 'var(--dh-blue-60)', margin: 0 },
  filterLabel: { flex: 1, color: 'var(--dh-text-primary)' },
  filterCount: { font: 'var(--dh-type-code-01)', color: 'var(--dh-text-helper)' },

  results: {},
  resultsHead: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 },
  activeChip: {
    font: 'var(--dh-type-label-01)', padding: '4px 10px',
    background: 'var(--dh-blue-90)', color: 'var(--dh-white)',
    display: 'inline-flex', alignItems: 'center', gap: 8,
  },
  activeChipX: { background: 'transparent', border: 0, color: 'inherit', cursor: 'pointer', font: '600 14px var(--dh-font-sans)', padding: 0 },
  sortLbl: { font: 'var(--dh-type-body-short-01)', color: 'var(--dh-text-secondary)' },
  sortSel: { font: 'var(--dh-type-body-short-01)', padding: '6px 10px', border: '1px solid var(--dh-border-subtle-01)', background: 'var(--dh-white)' },

  list: { display: 'flex', flexDirection: 'column', gap: 12 },
  pager: { display: 'flex', gap: 4, alignItems: 'center', marginTop: 24 },
  pageBtn: {
    font: 'var(--dh-type-body-short-01)', background: 'var(--dh-white)',
    border: '1px solid var(--dh-border-subtle-01)', padding: '8px 12px',
    cursor: 'pointer', color: 'var(--dh-text-primary)',
  },
  pageBtnOn: { background: 'var(--dh-blue-60)', color: 'var(--dh-white)', borderColor: 'var(--dh-blue-60)' },
};

window.CK_SearchScreen = SearchScreen;
