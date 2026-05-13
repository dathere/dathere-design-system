/* global React */
const { useState } = React;

function Masthead({ portalName = 'datHere Open Data Catalog' }) {
  const [q, setQ] = useState('');
  return (
    <div>
      {/* Account utility bar */}
      <div style={ck.util}>
        <div style={ck.utilInner}>
          <a href="#"  style={ck.utilLink}>Datasets</a>
          <a href="#"  style={ck.utilLink}>Organizations</a>
          <a href="#"  style={ck.utilLink}>About</a>
          <span style={{ flex: 1 }} />
          <a href="#"  style={ck.utilLink}>Sign in</a>
          <a href="#"  style={ck.utilLinkCta}>Register</a>
        </div>
      </div>

      {/* Masthead */}
      <div style={ck.mast}>
        <div style={ck.mastInner}>
          <a href="#" style={ck.brand}>
            <img src="../../assets/logo-datHere-dark.png" alt="datHere"
                 style={{ height: 28 }} />
            <span style={ck.brandSep} />
            <span style={ck.brandPortal}>{portalName}</span>
          </a>

          <form style={ck.search} onSubmit={e => e.preventDefault()}>
            <SearchIcon />
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search 14,217 datasets — try “water quality”"
              style={ck.searchInput}
            />
            <button type="submit" style={ck.searchBtn}>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 32 32" width="18" height="18"
         style={{ position: 'absolute', left: 14, top: 14, color: 'var(--dh-text-helper)' }}
         fill="currentColor" aria-hidden="true">
      <path d="M29 27.586l-7.122-7.122a12.062 12.062 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9z" />
    </svg>
  );
}

const ck = {
  util:       { background: 'var(--dh-gray-100)', color: 'var(--dh-white)' },
  utilInner:  { maxWidth: 1312, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 24, height: 40 },
  utilLink:   { font: 'var(--dh-type-body-short-01)', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' },
  utilLinkCta:{ font: 'var(--dh-type-body-short-01)', color: 'var(--dh-blue-40)', textDecoration: 'none', fontWeight: 600 },

  mast:       { background: 'var(--dh-white)', borderBottom: '1px solid var(--dh-border-subtle-01)' },
  mastInner:  { maxWidth: 1312, margin: '0 auto', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 32 },
  brand:      { display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none', flex: 'none' },
  brandSep:   { width: 1, height: 24, background: 'var(--dh-border-subtle-01)' },
  brandPortal:{ font: 'var(--dh-type-heading-02)', color: 'var(--dh-text-primary)' },

  search:     { flex: 1, position: 'relative', display: 'flex', maxWidth: 720 },
  searchInput:{
    flex: 1, font: 'var(--dh-type-body-short-02)', padding: '12px 16px 12px 40px',
    background: 'var(--dh-field-01)', border: '1px solid var(--dh-border-subtle-01)',
    color: 'var(--dh-text-primary)', outline: 'none',
  },
  searchBtn:  {
    font: 'var(--dh-type-body-short-02)',
    background: 'var(--dh-blue-60)', color: 'var(--dh-white)',
    border: 0, padding: '0 24px', cursor: 'pointer',
  },
};

window.CK_Masthead = Masthead;
