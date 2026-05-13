/* global React */
function DatasetCard({ ds, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...dsc.card,
        borderLeftColor: hover ? 'var(--dh-blue-60)' : 'var(--dh-border-subtle-01)',
        borderLeftWidth: hover ? 2 : 1,
        paddingLeft: hover ? 19 : 20,
      }}>
      <div style={dsc.head}>
        <span style={dsc.org}>{ds.org}</span>
        {ds.validated && <span style={dsc.validated}>✓ Schema validated</span>}
      </div>
      <div style={dsc.title}>{ds.title}</div>
      <div style={dsc.desc}>{ds.description}</div>
      <div style={dsc.tags}>
        {ds.tags.map(t => <span key={t} style={dsc.tag}>{t}</span>)}
      </div>
      <div style={dsc.foot}>
        {ds.formats.map(f => <span key={f} style={dsc.format}>{f}</span>)}
        <span style={{ flex: 1 }} />
        <span style={dsc.meta}>{ds.rows} rows · updated {ds.updated}</span>
      </div>
    </button>
  );
}

const dsc = {
  card: {
    width: '100%', textAlign: 'left', cursor: 'pointer',
    background: 'var(--dh-white)', border: '1px solid var(--dh-border-subtle-01)',
    borderLeft: '1px solid var(--dh-border-subtle-01)',
    padding: '20px', display: 'flex', flexDirection: 'column', gap: 8,
    transition: 'border-color 110ms, padding-left 110ms, border-left-width 110ms',
    fontFamily: 'inherit',
  },
  head: { display: 'flex', alignItems: 'center', gap: 12 },
  org:  { font: 'var(--dh-type-label-01)', color: 'var(--dh-text-helper)', textTransform: 'uppercase', letterSpacing: '0.04em', flex: 1 },
  validated: { font: 'var(--dh-type-label-01)', color: 'var(--dh-green-50)' },
  title: { font: 'var(--dh-type-heading-03)', color: 'var(--dh-text-primary)' },
  desc:  { font: 'var(--dh-type-body-short-01)', color: 'var(--dh-text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' },
  tags:  { display: 'flex', gap: 6, flexWrap: 'wrap' },
  tag:   { font: 'var(--dh-type-label-01)', padding: '3px 10px', borderRadius: 999, background: 'var(--dh-blue-10)', color: 'var(--dh-blue-90)' },
  foot:  { display: 'flex', gap: 6, alignItems: 'center', marginTop: 4 },
  format:{ font: 'var(--dh-type-code-01)', padding: '2px 6px', background: 'var(--dh-gray-90)', color: 'var(--dh-white)', fontWeight: 600, letterSpacing: '0.04em' },
  meta:  { font: 'var(--dh-type-helper-text-01)', color: 'var(--dh-text-helper)' },
};

window.CK_DatasetCard = DatasetCard;
