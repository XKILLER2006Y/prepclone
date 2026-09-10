const fs = require('fs');
const path = require('path');
const htmlMinifier = require('html-minifier-terser');
const CleanCSS = require('clean-css');
const terser = require('terser');

async function build() {
  console.log('Building and minifying...');
  
  const htmlPath = path.join(__dirname, 'index.html');
  const cssPath = path.join(__dirname, 'styles.css');
  const swPath = path.join(__dirname, 'sw.js');
  
  let html = fs.readFileSync(htmlPath, 'utf8');
  const css = fs.readFileSync(cssPath, 'utf8');
  let sw = fs.readFileSync(swPath, 'utf8');
  
  // Fix Accessibility & SEO
  html = html.replace(/aria-label="Daily MCQ Target"/g, 'title="Daily MCQ Target"');
  html = html.replace(/href="javascript:void\(0\)"/g, 'href="#"');
  
  // Minify CSS
  const minifiedCss = new CleanCSS({ level: 2 }).minify(css).styles;
  html = html.replace('<link rel="stylesheet" href="styles.css">', `<style>${minifiedCss}</style>`);
  
  // Minify JS
  const scriptRegex = /<script>([\s\S]*?)<\/script>/gi;
  let finalHtml = html;
  let match;
  while ((match = scriptRegex.exec(html)) !== null) {
    const jsCode = match[1];
    if (jsCode.length < 50) continue;
    const minifiedJs = await terser.minify(jsCode, {
      compress: { dead_code: true, drop_console: true, passes: 2 },
      mangle: true
    });
    if (minifiedJs.code) {
      finalHtml = finalHtml.replace(match[0], `<script>${minifiedJs.code}</script>`);
    }
  }
  
  // Minify HTML
  finalHtml = await htmlMinifier.minify(finalHtml, {
    collapseWhitespace: true,
    removeComments: true,
    removeAttributeQuotes: true,
    minifyCSS: true,
    minifyJS: true
  });
  
  const minifiedSw = await terser.minify(sw, { compress: true, mangle: true });
  fs.writeFileSync(path.join(__dirname, 'sw.min.js'), minifiedSw.code);
  fs.writeFileSync(path.join(__dirname, 'index.min.html'), finalHtml);
  
  console.log('Build complete! Created index.min.html and sw.min.js');
}

build().catch(console.error);
