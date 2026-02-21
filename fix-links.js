const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
if (fs.existsSync(pagesDir)) {
    const files = fs.readdirSync(pagesDir);
    for (const file of files) {
        if (!file.endsWith('.jsx')) continue;
        const filePath = path.join(pagesDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Replace href="index.html" with href="/"
        content = content.replace(/href="index\.html"/g, 'href="/"');

        // Replace href="some-page.html" with href="/some-page"
        content = content.replace(/href="([a-zA-Z0-9_-]+)\.html"/g, 'href="/$1"');

        fs.writeFileSync(filePath, content);
    }
}
console.log("Links fixed!");
