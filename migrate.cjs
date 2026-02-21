const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const HTMLtoJSX = require('htmltojsx');

const staticDir = path.join(__dirname, 'static');
const pagesDir = path.join(__dirname, 'src', 'pages');

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

let routes = [];
let imports = [];

const files = fs.readdirSync(staticDir);

const converter = new HTMLtoJSX({
  createClass: false,
  outputClassName: 'div'
});

for (const file of files) {
  if (file.endsWith('.html')) {
    console.log(`Processing ${file}...`);
    const filePath = path.join(staticDir, file);
    const html = fs.readFileSync(filePath, 'utf8');

    const $ = cheerio.load(html);

    // We remove script tags as they are problematic inside React JSX return statements
    $('script').remove();
    // Some SVGs and other nested messy things: htmltojsx usually handles them 
    // but occasionally breaks. Let's try raw html to JSX.

    let bodyContent = $('body').html() || '';

    // Convert generic HTML into valid JSX using htmltojsx
    let jsx = '';
    try {
      jsx = converter.convert(bodyContent);
    } catch (e) {
      console.error(`Error converting ${file}: ${e.message}`);
      // Fallback: simple text replacement, wrapped in generic div
      jsx = `<div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(bodyContent)} }} />`;
    }

    // Wrap the top level component properly if not a React block (htmltojsx might return an array if multiple roots)
    // Actually, converter.convert returns a string. It might lack an enclosing tag if there are multiple roots.
    // So let's wrap it.
    let componentBody = `
import React from 'react';

export default function ${path.basename(file, '.html').replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <>
      ${jsx.replace(/\{(\s*)\} /g, '{/* empty */} ')} 
    </>
  );
}
`;
    // We remove `class=` from raw HTML if dangerouslySetInnerHTML, else JSX has `className=`.
    const componentName = path.basename(file, '.html')
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('') + 'Page';

    // Write out component
    const compFileName = `${componentName}.jsx`;
    fs.writeFileSync(path.join(pagesDir, compFileName), componentBody);

    const routePath = file === 'index.html' ? '/' : `/${path.basename(file, '.html')}`;
    imports.push(`import ${componentName} from './pages/${componentName}';`);
    routes.push(`          <Route path="${routePath}" element={<${componentName} />} />`);
  }
}

// Write the App component
const appBody = `
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
${imports.join('\n')}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
${routes.join('\n')}
      </Routes>
    </BrowserRouter>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'src', 'App.tsx'), appBody);

console.log('Migration complete!');
