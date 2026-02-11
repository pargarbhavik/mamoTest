/**
 * HTML to Pug Conversion Helper
 * 
 * This script helps convert HTML files to Pug templates
 * Run: node convert-helper.js <filename.html>
 */

const fs = require('fs');
const path = require('path');

// Get filename from command line
const htmlFile = process.argv[2];

if (!htmlFile) {
  console.log('Usage: node convert-helper.js <filename.html>');
  console.log('Example: node convert-helper.js about-us');
  process.exit(1);
}

// Check if file exists
if (!fs.existsSync(htmlFile)) {
  console.error(`Error: File ${htmlFile} not found`);
  process.exit(1);
}

// Read HTML file
const html = fs.readFileSync(htmlFile, 'utf8');

// Extract main content (between header and footer)
// This is a simple extraction - you may need to adjust based on your HTML structure
let content = html;

// Remove everything before main content
const mainStart = content.indexOf('<main');
const mainEnd = content.lastIndexOf('</main>');

if (mainStart !== -1 && mainEnd !== -1) {
  content = content.substring(mainStart, mainEnd + 7);
}

// Basic conversions (this is simplified - manual review needed)
console.log('\n=== CONVERSION TIPS ===\n');
console.log('1. Copy the content between <main> and </main> tags');
console.log('2. Use an online HTML to Pug converter: https://html-to-pug.com/');
console.log('3. Create views/' + htmlFile.replace('.html', '.pug'));
console.log('4. Start with:');
console.log('   extends layout');
console.log('   ');
console.log('   block content');
console.log('     // Paste converted Pug here');
console.log('\n5. Update all links:');
console.log('   - Remove .html extensions');
console.log('   - Add leading / to asset paths');
console.log('\n6. Test the page at: http://localhost:3000/' + htmlFile.replace('.html', ''));
console.log('\n===================\n');

// Find and list all links in the file
const linkRegex = /href=["']([^"']+)["']/g;
const links = [];
let match;

while ((match = linkRegex.exec(html)) !== null) {
  if (match[1].endsWith('.html')) {
    links.push(match[1]);
  }
}

if (links.length > 0) {
  console.log('Links to update:');
  links.forEach(link => {
    const newLink = '/' + link.replace('.html', '');
    console.log(`  ${link} → ${newLink}`);
  });
  console.log('');
}

// Find and list all asset paths
const assetRegex = /(src|href)=["']((?:css|js|images|fonts|cdn-cgi)\/[^"']+)["']/g;
const assets = [];

while ((match = assetRegex.exec(html)) !== null) {
  if (!match[2].startsWith('/')) {
    assets.push(match[2]);
  }
}

if (assets.length > 0) {
  console.log('Asset paths to update (add leading /):');
  assets.forEach(asset => {
    console.log(`  ${asset} → /${asset}`);
  });
  console.log('');
}

console.log('Main content extracted. Use an online converter for best results.');
console.log('Recommended: https://html-to-pug.com/\n');
