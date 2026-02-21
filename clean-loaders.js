const fs = require("fs");
const path = require("path");

const pagesDir = path.join(__dirname, "src", "pages");
const pages = fs.readdirSync(pagesDir).filter((file) => file.endsWith(".jsx"));

const loaderRegex =
  /\s*<div className="page-loader" id="page-loader">.*?<\/div>{\/\* page loader \*\/}/gs;

pages.forEach((file) => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, "utf8");

  if (loaderRegex.test(content)) {
    console.log(`Cleaning ${file}...`);
    content = content.replace(loaderRegex, "");
    fs.writeFileSync(filePath, content);
  } else {
    console.log(`No loader found in ${file}`);
  }
});

console.log("Cleanup complete.");
