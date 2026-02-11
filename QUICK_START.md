# Quick Start Guide - Express + Pug Website

## ✅ What's Been Done

Your static HTML website has been converted to an Express + Pug application:

1. **Project Structure Created**
   - ✅ `app.js` - Express server with all routes configured
   - ✅ `package.json` - Dependencies defined
   - ✅ `public/` - All static assets moved (css, js, images, fonts, cdn-cgi)
   - ✅ `views/` - Pug template structure created
   - ✅ `views/layout.pug` - Main layout with header/footer
   - ✅ `views/partials/` - Reusable header and footer components
   - ✅ All page templates created (21 pages)

2. **Routes Configured**
   - All 21 pages have Express routes defined
   - Links updated to use Express routing (no .html extensions)
   - Static assets configured with express.static

3. **Templates Created**
   - Layout system with reusable header/footer
   - All pages extend the main layout
   - Placeholder content added to each page

## 🚀 Getting Started

### Step 1: Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web framework
- `pug` - Template engine
- `nodemon` - Auto-restart during development

### Step 2: Start the Server

**Development mode (auto-restart on changes):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

### Step 3: Open in Browser

Navigate to: **http://localhost:3000**

## 📝 Next Steps - Converting Page Content

The structure is ready, but you need to convert the actual HTML content to Pug for each page.

### Option 1: Manual Conversion (Recommended for Learning)

1. Open an HTML file (e.g., `about-us`)
2. Copy the main content (between header and footer)
3. Use online converter: https://html-to-pug.com/
4. Paste converted Pug into corresponding file in `views/`
5. Update links and asset paths (see CONVERSION_GUIDE.md)

### Option 2: Use the Helper Script

```bash
node convert-helper.js about-us
```

This will:
- Show you which links need updating
- List asset paths that need fixing
- Provide conversion tips

### Example Conversion

**HTML (about-us):**
```html
<section class="about-section">
  <div class="container">
    <h1>About Us</h1>
    <p>We are a leading company...</p>
    <a href="contact">Contact Us</a>
    <img src="images/about.jpg" alt="About">
  </div>
</section>
```

**Pug (views/about-us.pug):**
```pug
extends layout

block content
  section.about-section
    .container
      h1 About Us
      p We are a leading company...
      a(href="/contact") Contact Us
      img(src="/images/about.jpg" alt="About")
```

## 🔧 Important Path Updates

### Internal Links
- ❌ Old: `href="about-us"`
- ✅ New: `href="/about-us"`

### Static Assets
- ❌ Old: `src="images/logo.png"`
- ✅ New: `src="/images/logo.png"` (add leading /)

### CSS Files
- ❌ Old: `href="css/style.css"`
- ✅ New: `href="/css/style.css"` (add leading /)

### JavaScript Files
- ❌ Old: `src="js/custom.js"`
- ✅ New: `src="/js/custom.js"` (add leading /)

## 📂 File Structure

```
mamo-main/
├── app.js                      # Express server (✅ Ready)
├── package.json                # Dependencies (✅ Ready)
├── QUICK_START.md             # This file
├── CONVERSION_GUIDE.md        # Detailed conversion guide
├── convert-helper.js          # Conversion helper script
│
├── public/                     # Static assets (✅ Ready)
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── fonts/
│   └── cdn-cgi/
│
└── views/                      # Pug templates
    ├── layout.pug             # Main layout (✅ Ready)
    ├── partials/
    │   ├── header.pug         # Header (✅ Ready)
    │   └── footer.pug         # Footer (✅ Ready)
    │
    └── [All page templates]   # ⚠️ Need content conversion
        ├── index.pug
        ├── about-us.pug
        ├── contact.pug
        ├── Blog.pug
        └── ... (18 more pages)
```

## 🎯 Priority Pages to Convert

Start with these high-traffic pages:

1. **index.pug** - Homepage
2. **about-us.pug** - About page
3. **contact.pug** - Contact page
4. **Blog.pug** - Blog listing
5. Service pages (software.pug, websitedevelopment.pug, etc.)

## 🐛 Troubleshooting

### Server won't start
```bash
# Make sure you installed dependencies
npm install

# Check if port 3000 is available
# Change PORT in app.js if needed
```

### CSS not loading
- Check that paths start with `/` in layout.pug
- Verify files exist in `public/css/`
- Clear browser cache

### Page shows "Cannot GET /page-name"
- Check route is defined in app.js
- Verify Pug file exists in views/
- Restart the server

### Images not showing
- Ensure paths start with `/` (e.g., `/images/logo.png`)
- Check files exist in `public/images/`

## 📚 Resources

- **Pug Documentation**: https://pugjs.org/
- **Express Documentation**: https://expressjs.com/
- **HTML to Pug Converter**: https://html-to-pug.com/
- **Conversion Guide**: See CONVERSION_GUIDE.md in this folder

## ✨ Benefits of This Setup

1. **No Code Duplication** - Header/footer in one place
2. **Clean URLs** - No .html extensions
3. **Easy Maintenance** - Update layout once, affects all pages
4. **Dynamic Capabilities** - Ready for forms, APIs, databases
5. **Production Ready** - Can deploy to any Node.js hosting

## 🎉 You're Ready!

Run `npm run dev` and start converting your pages. The structure is solid, and you just need to move the content over.

Good luck! 🚀
