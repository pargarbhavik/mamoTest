module.exports = {
  content: [
    "./views/**/*.pug",
    "./public/js/**/*.js",
    "./*.html"
  ],
  css: ["./public/css/style.css"],
  output: "./public/css",
  safelist: [
    "active",
    "show",
    "fade",
    "open",
    "collapse",
    "collapsing",
    "aos-animate",
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
