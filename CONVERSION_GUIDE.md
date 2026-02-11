# HTML to Pug Conversion Guide

## Project Structure

```
mamo-main/
├── app.js                 # Express server
├── package.json           # Dependencies
├── public/                # Static assets
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── fonts/
│   └── cdn-cgi/
└── views/                 # Pug templates
    ├── layout.pug         # Main layout
    ├── partials/
    │   ├── header.pug     # Header component
    │   └── footer.pug     # Footer component
    └── *.pug              # Page templates
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Or for production:
   ```bash
   npm start
   ```

3. **Access the Website**
   Open your browser and navigate to: `http://localhost:3000`

## Converting HTML Pages to Pug

### Basic Conversion Rules

1. **Remove closing tags** - Pug uses indentation
   ```html
   <!-- HTML -->
   <div class="container">
     <h1>Title</h1>
   </div>
   ```
   ```pug
   // Pug
   .container
     h1 Title
   ```

2. **Classes and IDs**
   ```html
   <div class="container main" id="content"></div>
   ```
   ```pug
   #content.container.main
   ```

3. **Attributes**
   ```html
   <a href="/about" target="_blank">Link</a>
   ```
   ```pug
   a(href="/about" target="_blank") Link
   ```

4. **Update Links** - Remove .html extensions
   ```pug
   // Old: href="about-us"
   // New: href="/about-us"
   a(href="/about-us") About Us
   ```

5. **Static Assets** - Add leading slash
   ```pug
   // Old: src="images/logo.png"
   // New: src="/images/logo.png"
   img(src="/images/logo.png" alt="Logo")
   ```

### Page Template Structure

Each page should extend the layout:

```pug
extends layout

block content
  // Your page content here
  section.my-section
    .container
      h1 Page Title
      p Content goes here
```

## Routes Reference

All routes are defined in `app.js`:

- `/` → index.pug
- `/about-us` → about-us.pug
- `/contact` → contact.pug
- `/blog` → Blog.pug
- `/software` → software.pug
- `/websitedevelopment` → websitedevelopment.pug
- `/customapp` → customapp.pug
- `/frontend` → frontend.pug
- `/webporttal` → webporttal.pug
- `/qa` → qa.pug
- `/itstaff` → itstaff.pug
- `/digitaltransformation` → digitaltransformation.pug
- `/vas` → vas.pug
- `/pds` → pds.pug
- `/uiuxdesign` → uiuxdesign.pug
- `/privacy-policy` → privacy-policy.pug
- `/term-conditions` → term-conditions.pug

## Converting Remaining Pages

For each HTML file, follow these steps:

1. **Extract Main Content**
   - Open the HTML file
   - Find the content between `<main>` tags (or after header, before footer)
   - Copy this section

2. **Create Pug File**
   - Create a new file in `views/` with the same name but `.pug` extension
   - Start with: `extends layout`
   - Add: `block content`
   - Convert the HTML content to Pug syntax

3. **Update Links**
   - Change all `href="page.html"` to `href="/page"`
   - Change all asset paths to start with `/` (e.g., `/images/`, `/css/`)

4. **Test the Page**
   - Start the server: `npm run dev`
   - Navigate to the route in your browser
   - Check for broken links or missing assets

## Common Pug Patterns

### Loops
```pug
ul
  each item in items
    li= item
```

### Conditionals
```pug
if user
  p Welcome, #{user.name}
else
  p Please log in
```

### Variables
```pug
- var title = "My Page"
h1= title
```

### Interpolation
```pug
p Welcome to #{siteName}
```

## Troubleshooting

### CSS/JS Not Loading
- Ensure paths start with `/` (e.g., `/css/style.css`)
- Check that files exist in `public/` folder
- Verify `express.static` is configured in `app.js`

### Page Not Found
- Check route is defined in `app.js`
- Ensure Pug file exists in `views/` folder
- Verify file name matches route

### Broken Links
- Update all internal links to remove `.html`
- Use Express routes (e.g., `/about-us` not `about-us`)

## Next Steps

1. Convert remaining HTML files to Pug
2. Test all pages and links
3. Remove original HTML files once conversion is complete
4. Add dynamic features using Express (forms, API endpoints, etc.)
