const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about-us', (req, res) => {
  res.render('about-us', { title: 'About Us' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

app.get('/blog', (req, res) => {
  res.render('Blog', { title: 'Blog' });
});

app.get('/blog2', (req, res) => {
  res.render('blog2', { title: 'Blog' });
});

app.get('/blog3', (req, res) => {
  res.render('blog3', { title: 'Blog' });
});



app.get('/blogdetails', (req, res) => {
  res.render('blogdetails', { title: 'Blog Details' });
});

app.get('/custom-app', (req, res) => {
  res.render('customapp', { title: 'Custom App' });
});

app.get('/digital-transformation', (req, res) => {
  res.render('digitaltransformation', { title: 'Digital Transformation' });
});

app.get('/frontend-development', (req, res) => {
  res.render('frontend', { title: 'Frontend' });
});

app.get('/itstaff-augmentation', (req, res) => {
  res.render('itstaff', { title: 'IT Staff' });
});

app.get('/packaging-design', (req, res) => {
  res.render('pds', { title: 'PDS' });
});

app.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy', { title: 'Privacy Policy' });
});

app.get('/qa-testing', (req, res) => {
  res.render('qa', { title: 'QA' });
});

app.get('/software-development', (req, res) => {
  res.render('software', { title: 'Software' });
});

app.get('/term-conditions', (req, res) => {
  res.render('term-conditions', { title: 'Terms & Conditions' });
});

app.get('/uiuxdesign', (req, res) => {
  res.render('uiuxdesign', { title: 'UI/UX Design' });
});

app.get('/virtual-assistant-services', (req, res) => {
  res.render('vas', { title: 'VAS' });
});

app.get('/web-portal', (req, res) => {
  res.render('webporttal', { title: 'Web Portal' });
});

app.get('/website-development', (req, res) => {
  res.render('websitedevelopment', { title: 'Website Development' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
