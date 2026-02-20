const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// List of files that are safe to remove
const safeToRemove = [
  './test-mobile-menu.html',
  './test-server.js',
  './views/index.pug.backup',
  './cleanup.cmd',
  './auto-cleanup.cmd',
  './kill-port.cmd'
];

console.log('🗑️  Files marked for removal:\n');
safeToRemove.forEach((file, i) => {
  const exists = fs.existsSync(file);
  console.log(`${i + 1}. ${file} ${exists ? '✓' : '(not found)'}`);
});

console.log('\n⚠️  WARNING: This will permanently delete these files!');

rl.question('\nDo you want to proceed? (yes/no): ', (answer) => {
  if (answer.toLowerCase() === 'yes') {
    let removed = 0;
    
    safeToRemove.forEach(file => {
      try {
        if (fs.existsSync(file)) {
          fs.unlinkSync(file);
          console.log(`✅ Removed: ${file}`);
          removed++;
        }
      } catch (err) {
        console.error(`❌ Error removing ${file}:`, err.message);
      }
    });
    
    console.log(`\n✨ Cleanup complete! Removed ${removed} files.`);
  } else {
    console.log('\n❌ Cleanup cancelled.');
  }
  
  rl.close();
});
