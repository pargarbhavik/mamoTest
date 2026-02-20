const { PurgeCSS } = require('purgecss');
const fs = require('fs');
const path = require('path');

const cssFiles = [
  { input: './public/css/style.css', output: './public/css/style.css' }
];

async function purgeCSSFiles() {
  console.log('🧹 Starting CSS cleanup...\n');
  
  for (const file of cssFiles) {
    try {
      if (!fs.existsSync(file.input)) {
        console.log(`⚠️  Skipping ${file.input} - file not found`);
        continue;
      }

      const backupPath = `${file.input}.backup`;
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(file.input, backupPath);
        console.log(`📦 Created backup: ${backupPath}`);
      }

      const originalSize = fs.statSync(file.input).size;

      const purgeCSSResult = await new PurgeCSS().purge({
        content: [
          './views/**/*.pug',
          './public/js/**/*.js',
          './*.html'
        ],
        css: [file.input],
        safelist: {
          standard: [
            'active', 'show', 'fade', 'open', 'collapse', 'collapsing',
            'aos-animate', 'dragging', 'modal-open', 'modal-backdrop',
            'dropdown-menu', 'dropdown-toggle', 'nav-link', 'btn-primary',
            'container', 'row', 'col', 'img-fluid', 'text-center'
          ],
          deep: [
            /^slick-/, /^swiper-/, /^modal/, /^data-aos/, /^dropdown/,
            /^btn/, /^form/, /^col-/, /^row/, /^nav/, /^menu/,
            /^common/, /^hero/, /^page/, /^section/
          ],
          greedy: [/data-/, /aria-/, /bs-/]
        }
      });

      fs.writeFileSync(file.output, purgeCSSResult[0].css);
      const newSize = fs.statSync(file.output).size;
      const reduction = ((1 - newSize / originalSize) * 100).toFixed(2);

      console.log(`✅ ${path.basename(file.input)}`);
      console.log(`   Original: ${(originalSize / 1024).toFixed(2)} KB`);
      console.log(`   New: ${(newSize / 1024).toFixed(2)} KB`);
      console.log(`   Reduced: ${reduction}%\n`);
    } catch (err) {
      console.error(`❌ Error processing ${file.input}:`, err.message);
    }
  }

  console.log('✨ CSS cleanup complete!');
}

purgeCSSFiles().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
