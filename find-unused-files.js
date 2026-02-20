const fs = require('fs');
const path = require('path');

// Files to check for references
const filesToCheck = {
  images: [],
  css: [],
  js: []
};

// Scan directories
function scanDirectory(dir, type) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory() && !file.name.includes('node_modules')) {
      scanDirectory(fullPath, type);
    } else if (file.isFile()) {
      filesToCheck[type].push(fullPath);
    }
  }
}

// Check if file is referenced
function isFileReferenced(filename, searchDirs) {
  const basename = path.basename(filename);
  
  for (const dir of searchDirs) {
    const files = getAllFiles(dir);
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes(basename)) {
          return true;
        }
      } catch (err) {
        // Skip files that can't be read
      }
    }
  }
  
  return false;
}

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory() && !file.name.includes('node_modules')) {
      getAllFiles(fullPath, fileList);
    } else if (file.isFile()) {
      fileList.push(fullPath);
    }
  }
  
  return fileList;
}

console.log('🔍 Scanning for unused files...\n');

// Scan image directory
console.log('📸 Checking images...');
scanDirectory('./public/images', 'images');

const searchDirs = ['./views', './public/js', './public/css', './app.js'];
const unusedImages = [];

for (const img of filesToCheck.images) {
  if (!isFileReferenced(img, searchDirs)) {
    unusedImages.push(img);
  }
}

console.log(`\n📊 Results:`);
console.log(`Total images: ${filesToCheck.images.length}`);
console.log(`Unused images: ${unusedImages.length}\n`);

if (unusedImages.length > 0) {
  console.log('Unused image files:');
  unusedImages.forEach(img => console.log(`  - ${img}`));
  
  console.log('\n💡 To remove these files, run:');
  console.log('   node remove-unused-files.js');
}
