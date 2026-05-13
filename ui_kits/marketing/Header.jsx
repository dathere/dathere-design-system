/* global React */
const { useState } = React;

function Header() {
  const [open, setOpen] = useState(null);
  const items = [
    { id: 'products', label: 'Products' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'docs',     label: 'Docs' },
    { id: 'blog',     label: 'Blog' },
    { id: 'about',    label: 'About' },
  ];

  return (
    <header style={mkHeader.bar}>
      <div style={mkHeader.inner}>
        <a href="#" style={mkHeader.brand} aria-label="datHere home">
          <img src="../../assets/logo-datHere-dark.png" alt="datHere"
               style={{ height: 28, display: 'block' }} />
        </a>
        <nav style={mkHeader.nav}>
          {items.map(it => (
            <a key={it.id} href={'#' + it.id}
               onMouseEnter={() => setOpen(it.id)}
               onMouseLeave={() => setOpen(null)}
               style={{
                 ...mkHeader.link,
                 color: open === it.id ? 'var(--dh-text-primary)' : 'var(--dh-text-secondary)',
                 borderBottomColor: open === it.id ? 'var(--dh-blue-60)' : 'transparent',
               }}>
              {it.label}
            </a>
          ))}
        </nav>
        <div style={mkHeader.actions}>
          <a href="#signin" style={mkHeader.signIn}>Sign in</a>
          <a href="#demo"   style={mkHeader.cta}>Request demo</a>
        </div>
      </div>
    </header>
  );
}

const mkHeader = {
  bar: {
    position: 'sticky', top: 0, zIndex: 50,
    background: 'rgba(255,255,255,0.96)',
    borderBottom: '1px solid var(--dh-border-subtle-01)',
    backdropFilter: 'saturate(180%) blur(6px)',
  },
  inner: {
    maxWidth: 1312, margin: '0 auto',
    display: 'flex', alignItems: 'center', gap: 32,
    padding: '0 32px', height: 56,
  },
  brand:  { display: 'flex', alignItems: 'center', textDecoration: 'none' },
  nav:    { display: 'flex', gap: 24, flex: 1, marginLeft: 32 },
  link:   {
    font: 'var(--dh-type-body-short-01)', textDecoration: 'none',
    padding: '18px 2px', borderBottom: '2px solid transparent',
    transition: 'color 110ms, border-color 110ms',
  },
  actions: { display: 'flex', gap: 8, alignItems: 'center' },
  signIn: {
    font: 'var(--dh-type-body-short-01)', color: 'var(--dh-text-primary)',
    textDecoration: 'none', padding: '10px 16px',
  },
  cta: {
    font: 'var(--dh-type-body-short-01)',
    background: 'var(--dh-blue-60)', color: 'var(--dh-white)',
    textDecoration: 'none', padding: '10px 16px',
    transition: 'background 110ms',
  },
};

window.MK_Header = Header;
