/* global React */
function Footer() {
  const cols = [
    {
      title: 'Products',
      links: ['datHere CKAN DMS', 'qsv pro', 'qsv CLI', 'AI Chatbot', 'AI-Ready Data'],
    },
    {
      title: 'Solutions',
      links: ['Water Data Practice', 'Civic open data', 'AI grounding', 'Migrations'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Benchmarks', 'Cookbook', 'GitHub', 'Blog'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Sponsor', 'Contact'],
    },
  ];

  return (
    <footer style={mkFoot.bar}>
      <div style={mkFoot.inner}>
        <div style={mkFoot.brandCol}>
          <img src="../../assets/logo-datHere-white.png" alt="datHere"
               style={{ height: 28, marginBottom: 16 }} />
          <p style={mkFoot.tagline}>
            Open data infrastructure for the FAIR web.
          </p>
          <p style={mkFoot.address}>
            datHere, Inc. · New York · Manila
          </p>
        </div>
        {cols.map(c => (
          <div key={c.title}>
            <h4 style={mkFoot.colHead}>{c.title}</h4>
            <ul style={mkFoot.list}>
              {c.links.map(l => (
                <li key={l}><a href="#" style={mkFoot.link}>{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={mkFoot.subFoot}>
        <div style={mkFoot.subInner}>
          <span>© {new Date().getFullYear()} datHere, Inc. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={mkFoot.subLink}>Privacy</a>
            <a href="#" style={mkFoot.subLink}>Terms</a>
            <a href="#" style={mkFoot.subLink}>Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const mkFoot = {
  bar: { background: 'var(--dh-blue-90)', color: 'var(--dh-white)' },
  inner: {
    maxWidth: 1312, margin: '0 auto', padding: '64px 32px',
    display: 'grid', gridTemplateColumns: '2fr repeat(4, 1fr)', gap: 48,
  },
  brandCol: {},
  tagline:  { font: 'var(--dh-type-body-short-02)', color: 'rgba(255,255,255,0.85)', margin: '0 0 8px' },
  address:  { font: 'var(--dh-type-helper-text-01)', color: 'rgba(255,255,255,0.55)', margin: 0 },
  colHead:  { font: 'var(--dh-type-heading-02)', color: 'var(--dh-white)', margin: '0 0 12px' },
  list:     { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 },
  link:     { font: 'var(--dh-type-body-short-01)', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' },
  subFoot:  { borderTop: '1px solid rgba(255,255,255,0.12)' },
  subInner: {
    maxWidth: 1312, margin: '0 auto', padding: '20px 32px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    font: 'var(--dh-type-helper-text-01)', color: 'rgba(255,255,255,0.55)',
  },
  subLink:  { color: 'rgba(255,255,255,0.55)', textDecoration: 'none' },
};

window.MK_Footer = Footer;
