#!/usr/bin/env node
/**
 * Extracts Carbon animated icon source (JSX + SCSS) →
 * assets/icons/carbon-motion/motion-icons.js  (window.carbonMotionIcons)
 * assets/icons/carbon-motion/motion-icons.css  (all keyframes + base styles)
 * assets/icons/carbon-motion/index.json         (manifest)
 */

const fs   = require('fs');
const path = require('path');

const SRC_DIR  = '/tmp/icons-motion/src/components';
const OUT_DIR  = path.join(__dirname, '../assets/icons/carbon-motion');

fs.mkdirSync(OUT_DIR, { recursive: true });

// ── SVG JSX → HTML helpers ──────────────────────────────────────────────────

const JSX_TO_SVG_ATTRS = {
  className:        'class',
  strokeWidth:      'stroke-width',
  strokeMiterlimit: 'stroke-miterlimit',
  strokeDasharray:  'stroke-dasharray',
  strokeLinecap:    'stroke-linecap',
  strokeLinejoin:   'stroke-linejoin',
  strokeDashoffset: 'stroke-dashoffset',
  fillRule:         'fill-rule',
  clipPath:         'clip-path',
  clipRule:         'clip-rule',
  xlinkHref:        'xlink:href',
  vectorEffect:     'vector-effect',
};

function extractSvgFromJsx(source) {
  // Grab everything from opening <svg to closing </svg>
  const m = source.match(/<svg[\s\S]*?<\/svg>/);
  if (!m) return null;
  let svg = m[0];

  // Remove style={iconStyles} attribute
  svg = svg.replace(/\s+style=\{iconStyles\}/g, '');

  // className={styles.Foo} → class="Foo"
  svg = svg.replace(/className=\{styles\.(\w+)\}/g, 'class="$1"');

  // remaining className={...} expressions → drop
  svg = svg.replace(/\s+className=\{[^}]+\}/g, '');

  // Convert JSX camelCase attrs to SVG kebab
  for (const [jsx, svg_attr] of Object.entries(JSX_TO_SVG_ATTRS)) {
    if (jsx === 'className') continue; // handled above
    const re = new RegExp(`\\b${jsx}=`, 'g');
    svg = svg.replace(re, `${svg_attr}=`);
  }

  // Normalise quotes: single → double for attr values
  svg = svg.replace(/=\'([^\']*)\'/g, '="$1"');

  // Collapse excess whitespace / tabs in attribute lists (keep newlines inside path d="")
  // Replace sequences of whitespace (not inside quotes) between attrs
  svg = svg.replace(/\s{2,}(?=[a-zA-Z\-]+=)/g, ' ');

  // Self-closing fix: ensure /> is present (React adds space before)
  svg = svg.replace(/\s\/>/g, '/>');

  return svg.trim();
}

// ── SCSS → CSS helpers ───────────────────────────────────────────────────────

function scssToAnimatedCss(scss, componentName) {
  // 1. Keep @keyframes blocks as-is
  // 2. Keep base class styles (.ClassName { transform-origin: ...; }) as-is
  // 3. .isAnimating { .ClassName { animation: ... } } →
  //    [data-animating] .ClassName { animation: ... }

  // Expand nested .isAnimating { .Foo { ... } } to flat rule
  scss = scss.replace(
    /\.isAnimating\s*\{([\s\S]*?)\n\}/gm,
    (_, inner) => {
      // inner contains nested .ClassName { ... } blocks
      return inner.replace(
        /\s*\.([\w-]+)\s*\{([^}]+)\}/g,
        (__, cls, body) => `[data-animating] .${cls} {${body}}`
      );
    }
  );

  return scss.trim();
}

// ── Main ─────────────────────────────────────────────────────────────────────

const categories = fs.readdirSync(SRC_DIR).filter(f =>
  fs.statSync(path.join(SRC_DIR, f)).isDirectory()
);

const manifest = [];
const allCss   = [];
const allIcons = []; // for the JS bundle

for (const category of categories) {
  const catDir = path.join(SRC_DIR, category);
  const icons  = fs.readdirSync(catDir).filter(f =>
    f !== 'index.js' && fs.statSync(path.join(catDir, f)).isDirectory()
  );

  for (const iconDir of icons) {
    const dir = path.join(catDir, iconDir);
    const files = fs.readdirSync(dir);

    const jsFile   = files.find(f => f.endsWith('.js') && !f.includes('index'));
    const scssFile = files.find(f => f.endsWith('.scss'));

    if (!jsFile || !scssFile) continue;

    const jsSource   = fs.readFileSync(path.join(dir, jsFile),   'utf8');
    const scssSource = fs.readFileSync(path.join(dir, scssFile), 'utf8');

    const svgHtml = extractSvgFromJsx(jsSource);
    if (!svgHtml) {
      console.warn(`⚠ No SVG found in ${iconDir}`);
      continue;
    }

    const cssSource = scssToAnimatedCss(scssSource, iconDir);

    // Icon name: strip "Motion" suffix, convert to kebab for display
    const name = iconDir.replace(/Motion$/, '');
    const kebab = name
      .replace(/([A-Z])/g, m => `-${m.toLowerCase()}`)
      .replace(/^-/, '');

    allCss.push(`/* ${iconDir} */\n${cssSource}`);
    allIcons.push({ name: kebab, displayName: name, category, svgHtml });
    manifest.push({ name: kebab, displayName: name, category });

    process.stdout.write('.');
  }
}

console.log(`\n✓ Processed ${allIcons.length} icons`);

// Write CSS
fs.writeFileSync(
  path.join(OUT_DIR, 'motion-icons.css'),
  allCss.join('\n\n') + '\n'
);

// Write JS bundle (window global, no module system needed)
fs.writeFileSync(
  path.join(OUT_DIR, 'motion-icons.js'),
  `window.carbonMotionIcons = ${JSON.stringify(allIcons, null, 2)};\n`
);

// Write manifest
fs.writeFileSync(
  path.join(OUT_DIR, 'index.json'),
  JSON.stringify(manifest, null, 2) + '\n'
);

console.log('✓ Wrote assets/icons/carbon-motion/motion-icons.css');
console.log('✓ Wrote assets/icons/carbon-motion/motion-icons.js');
console.log('✓ Wrote assets/icons/carbon-motion/index.json');
