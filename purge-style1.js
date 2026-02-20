const { PurgeCSS } = require('purgecss');
const fs = require('fs');
const path = require('path');

async function purgeCSSFiles() {
  const purgeCSSResult = await new PurgeCSS().purge({
    content: [
      './views/**/*.pug',
      './public/js/**/*.js',
      './*.html'
    ],
    css: ['./public/css/style.css'],
    safelist: {
      standard: [
        'active',
        'show',
        'fade',
        'open',
        'collapse',
        'collapsing',
        'aos-animate',
        'dragging'
      ],
      deep: [
        /^slick-/,
        /^swiper-/,
        /^modal/,
        /^data-aos/,
        /^dropdown/,
        /^btn/,
        /^form/,
        /^col/,
        /^row/
      ]
    }
  });

  // Write the purged CSS back to the file
  const backupSize = fs.statSync('./public/css/style.css.backup').size;
  
  fs.writeFileSync(
    path.join(__dirname, 'public/css/style.css'),
    purgeCSSResult[0].css
  );

  const newSize = fs.statSync('./public/css/style.css').size;
  const reduction = ((1 - newSize / backupSize) * 100).toFixed(2);

  console.log('✓ Successfully purged unused CSS from style.css');
  console.log(`Original size: ${(backupSize / 1024).toFixed(2)} KB`);
  console.log(`New size: ${(newSize / 1024).toFixed(2)} KB`);
  console.log(`Reduction: ${reduction}%`);
}

purgeCSSFiles().catch(err => {
  console.error('Error purging CSS:', err);
  process.exit(1);
});
