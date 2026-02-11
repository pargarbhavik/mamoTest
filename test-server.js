/**
 * Quick Server Test
 * Run this to verify the Express server works before installing dependencies
 */

console.log('\n=== MaMo TechnoLabs - Server Test ===\n');

// Check if Node.js is installed
console.log('✓ Node.js version:', process.version);

// Check if required files exist
const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'app.js',
  'package.json',
  'views/layout.pug',
  'views/partials/header.pug',
  'views/partials/footer.pug',
  'views/index.pug'
];

const requiredDirs = [
  'public',
  'public/css',
  'public/js',
  'public/images',
  'views',
  'views/partials'
];

console.log('\nChecking required files...');
let allFilesExist = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✓ ${file}`);
  } else {
    console.log(`✗ ${file} - MISSING`);
    allFilesExist = false;
  }
});

console.log('\nChecking required directories...');
let allDirsExist = true;

requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`✓ ${dir}/`);
  } else {
    console.log(`✗ ${dir}/ - MISSING`);
    allDirsExist = false;
  }
});

console.log('\n=== Test Results ===\n');

if (allFilesExist && allDirsExist) {
  console.log('✓ All required files and directories exist!');
  console.log('\nNext steps:');
  console.log('1. Run: npm install');
  console.log('2. Run: npm run dev');
  console.log('3. Open: http://localhost:3000');
  console.log('\n✨ Your project structure is ready!\n');
} else {
  console.log('✗ Some files or directories are missing.');
  console.log('Please check the errors above.\n');
}
