const fs = require("fs");
const path = require("path");

const pagesDir = path.join(process.cwd(), "src", "pages");
const pages = fs.readdirSync(pagesDir).filter((file) => file.endsWith(".jsx"));

// Slightly more robust regex to handle potential formatting variations
const loaderRegex =
  /\s*<div className="page-loader" id="page-loader">.*?<\/div>{\/\* page loader \*\/}/gs;

let cleanedCount = 0;

pages.forEach((file) => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, "utf8");

  if (loaderRegex.test(content)) {
    console.log(`Cleaning ${file}...`);
    content = content.replace(loaderRegex, "");
    fs.writeFileSync(filePath, content);
    cleanedCount++;
  } else {
    // console.log(`No loader found in ${file}`);
  }
});

console.log(`Cleanup complete. ${cleanedCount} files cleaned.`);
