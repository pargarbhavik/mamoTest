# Pug Quick Reference Guide

Quick reference for converting HTML to Pug syntax.

## Basic Elements

### HTML
```html
<div>Content</div>
<p>Paragraph</p>
<span>Text</span>
```

### Pug
```pug
div Content
p Paragraph
span Text
```

---

## Classes and IDs

### HTML
```html
<div class="container"></div>
<div class="container main"></div>
<div id="content"></div>
<div id="content" class="container"></div>
```

### Pug
```pug
.container
.container.main
#content
#content.container
```

---

## Attributes

### HTML
```html
<a href="/about" target="_blank">Link</a>
<img src="/images/logo.png" alt="Logo" width="100">
<input type="text" name="email" required>
```

### Pug
```pug
a(href="/about" target="_blank") Link
img(src="/images/logo.png" alt="Logo" width="100")
input(type="text" name="email" required)
```

---

## Multiple Attributes

### HTML
```html
<button class="btn btn-primary" type="submit" data-toggle="modal">Click</button>
```

### Pug
```pug
button.btn.btn-primary(type="submit" data-toggle="modal") Click
```

---

## Nested Elements

### HTML
```html
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h1>Title</h1>
      <p>Content</p>
    </div>
  </div>
</div>
```

### Pug
```pug
.container
  .row
    .col-md-6
      h1 Title
      p Content
```

---

## Text Content

### HTML
```html
<p>Simple text</p>
<p>Text with <strong>bold</strong> and <em>italic</em></p>
```

### Pug
```pug
p Simple text
p Text with 
  strong bold
  |  and 
  em italic
```

Or use pipe for plain text:
```pug
p
  | Text with 
  strong bold
  |  and 
  em italic
```

---

## Long Text / Multiline

### HTML
```html
<p>
  This is a very long paragraph
  that spans multiple lines
  in the HTML file.
</p>
```

### Pug
```pug
p.
  This is a very long paragraph
  that spans multiple lines
  in the Pug file.
```

---

## Links

### HTML
```html
<a href="/">Home</a>
<a href="/about-us">About Us</a>
<a href="/contact">Contact</a>
<a href="https://google.com" target="_blank">Google</a>
```

### Pug
```pug
a(href="/") Home
a(href="/about-us") About Us
a(href="/contact") Contact
a(href="https://google.com" target="_blank") Google
```

---

## Images

### HTML
```html
<img src="/images/logo.png" alt="Logo">
<img src="/images/hero.jpg" alt="Hero" width="800" height="600">
```

### Pug
```pug
img(src="/images/logo.png" alt="Logo")
img(src="/images/hero.jpg" alt="Hero" width="800" height="600")
```

---

## Lists

### HTML
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```

### Pug
```pug
ul
  li Item 1
  li Item 2
  li Item 3

ol
  li First
  li Second
```

---

## Forms

### HTML
```html
<form action="/submit" method="POST">
  <input type="text" name="name" placeholder="Name">
  <input type="email" name="email" placeholder="Email">
  <textarea name="message" rows="5"></textarea>
  <button type="submit">Submit</button>
</form>
```

### Pug
```pug
form(action="/submit" method="POST")
  input(type="text" name="name" placeholder="Name")
  input(type="email" name="email" placeholder="Email")
  textarea(name="message" rows="5")
  button(type="submit") Submit
```

---

## Bootstrap Components

### HTML
```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Column 1</div>
    <div class="col-md-6">Column 2</div>
  </div>
</div>

<button class="btn btn-primary">Click Me</button>
```

### Pug
```pug
.container
  .row
    .col-md-6 Column 1
    .col-md-6 Column 2

button.btn.btn-primary Click Me
```

---

## Comments

### HTML
```html
<!-- This is a comment -->
<div>Content</div>
```

### Pug
```pug
// This is a comment (will appear in HTML)
div Content

//- This is a silent comment (won't appear in HTML)
div Content
```

---

## Inline Styles

### HTML
```html
<div style="color: red; font-size: 20px;">Text</div>
```

### Pug
```pug
div(style="color: red; font-size: 20px;") Text
```

---

## Data Attributes

### HTML
```html
<div data-toggle="modal" data-target="#myModal">Open</div>
```

### Pug
```pug
div(data-toggle="modal" data-target="#myModal") Open
```

---

## Conditional Attributes

### HTML
```html
<button class="btn" disabled>Button</button>
<input type="checkbox" checked>
```

### Pug
```pug
button.btn(disabled) Button
input(type="checkbox" checked)
```

---

## Script Tags

### HTML
```html
<script src="/js/custom.js"></script>
<script>
  console.log('Hello');
</script>
```

### Pug
```pug
script(src="/js/custom.js")
script.
  console.log('Hello');
```

---

## Style Tags

### HTML
```html
<style>
  .custom { color: red; }
</style>
```

### Pug
```pug
style.
  .custom { color: red; }
```

---

## Variables

### Pug
```pug
- var title = "My Page"
- var items = ['Item 1', 'Item 2', 'Item 3']

h1= title

ul
  each item in items
    li= item
```

---

## Interpolation

### Pug
```pug
- var name = "John"
- var age = 30

p Welcome, #{name}!
p You are #{age} years old.
```

---

## Conditionals

### Pug
```pug
- var isLoggedIn = true

if isLoggedIn
  p Welcome back!
else
  p Please log in
```

---

## Loops

### Pug
```pug
- var items = ['Apple', 'Banana', 'Orange']

ul
  each item in items
    li= item

// With index
ul
  each item, index in items
    li #{index + 1}. #{item}
```

---

## Mixins (Reusable Components)

### Pug
```pug
// Define mixin
mixin button(text, type)
  button(class=`btn btn-${type}`)= text

// Use mixin
+button('Click Me', 'primary')
+button('Cancel', 'secondary')
```

---

## Template Inheritance

### layout.pug
```pug
doctype html
html
  head
    title= title
  body
    block content
```

### page.pug
```pug
extends layout

block content
  h1 Page Content
  p This is my page
```

---

## Include Files

### Pug
```pug
// Include header
include partials/header

// Main content
main
  h1 Content

// Include footer
include partials/footer
```

---

## Common Patterns in Your Project

### Navigation Link
```html
<!-- HTML -->
<a href="about-us">About Us</a>
```
```pug
// Pug
a(href="/about-us") About Us
```

### Image with Path
```html
<!-- HTML -->
<img src="images/logo.png" alt="Logo">
```
```pug
// Pug
img(src="/images/logo.png" alt="Logo")
```

### CSS Link
```html
<!-- HTML -->
<link rel="stylesheet" href="css/style.css">
```
```pug
// Pug
link(rel="stylesheet" href="/css/style.css")
```

### Script Tag
```html
<!-- HTML -->
<script src="js/custom.js"></script>
```
```pug
// Pug
script(src="/js/custom.js")
```

### Bootstrap Column
```html
<!-- HTML -->
<div class="col-md-6 col-lg-4">Content</div>
```
```pug
// Pug
.col-md-6.col-lg-4 Content
```

### Button with Multiple Classes
```html
<!-- HTML -->
<button class="btn btn-primary btn-lg">Click</button>
```
```pug
// Pug
button.btn.btn-primary.btn-lg Click
```

---

## Tips for Your Conversion

1. **Remove .html from all links**
   - `href="about.html"` → `href="/about"`

2. **Add leading slash to assets**
   - `src="images/logo.png"` → `src="/images/logo.png"`

3. **Use shorthand for common elements**
   - `div.container` instead of `div(class="container")`

4. **Watch your indentation**
   - Pug uses indentation (2 spaces) to determine nesting

5. **Use online converter for complex sections**
   - https://html-to-pug.com/

6. **Test frequently**
   - Convert one section, test, then continue

---

## Quick Conversion Workflow

1. Copy HTML section
2. Paste into https://html-to-pug.com/
3. Copy converted Pug
4. Paste into your .pug file
5. Update links (remove .html, add /)
6. Update asset paths (add /)
7. Test in browser
8. Repeat for next section

---

## Need Help?

- **Pug Documentation**: https://pugjs.org/
- **HTML to Pug Converter**: https://html-to-pug.com/
- **Your Guides**: CONVERSION_GUIDE.md, QUICK_START.md

Happy converting! 🚀
