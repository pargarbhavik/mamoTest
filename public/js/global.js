document.addEventListener("DOMContentLoaded", function () {

  const screenWidth = window.innerWidth;

  // -------------------------
  // REGISTER GSAP ONCE
  // -------------------------
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // -------------------------
  // COMMON FUNCTION
  // -------------------------
  function doAnimations(elems) {
    if (typeof $ === 'undefined') return;
    const animEndEv = "webkitAnimationEnd animationend";
    elems.each(function () {
      const $this = $(this);
      const animationType = $this.data("animation");
      $this.addClass(animationType).one(animEndEv, function () {
        $this.removeClass(animationType);
      });
    });
  }

  // -------------------------
  // HOME PAGE SCROLL SECTION (Disabled - using custom scroll animation)
  // -------------------------
  /*
  if (screenWidth >= 768 && typeof ScrollTrigger !== 'undefined' && typeof $ !== 'undefined' && $("#common-home-sect2-wrap").length) {
    ScrollTrigger.create({
      trigger: "#common-home-sect2-wrap",
      start: "top top",
      end: "top -100%",
      toggleActions: "play pause resume reset",
      pin: true
    });

    ["1", "2", "3", "4"].forEach(num => {
      ScrollTrigger.create({
        trigger: `.box-ani-outer #box${num}`,
        start: "top top",
        toggleClass: {
          targets: "#common-home-sect2-wrap",
          className: `slide-${num}-bg`
        }
      });
    });
  }
  */

  // -------------------------
  // VIBE SECTION
  // -------------------------
  if (typeof $ !== 'undefined' && typeof ScrollTrigger !== 'undefined' && screenWidth >= 992 && $("#vibe-section").length) {
    ScrollTrigger.create({
      trigger: "#vibe-section",
      start: "top top",
      end: "top -100%",
      pin: true
    });

    ["1", "2", "3", "4"].forEach(num => {
      ScrollTrigger.create({
        trigger: `.box-ani-outer #box${num}`,
        start: "top top",
        toggleClass: {
          targets: "#vibe-section",
          className: `slick-${num}-bg`
        }
      });
    });
  }

  // -------------------------
  // MOBILE SLIDE BG SWITCH
  // -------------------------
  if (typeof $ !== 'undefined' && screenWidth <= 767) {
    $(".vibe-text span:first-child").addClass("active");
  }

  // -------------------------
  // HEADER SCROLL EFFECT (Vanilla JS)
  // -------------------------
  const header = document.querySelector(".common-header-wrapper");
  const goTop = document.querySelector(".go-to-top-wrap");

  if (header && goTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 250) {
        header.classList.add("nav-up");
        goTop.classList.add("active");
      } else {
        header.classList.remove("nav-up");
        goTop.classList.remove("active");
      }
    });

    // -------------------------
    // GO TO TOP
    // -------------------------
    goTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // -------------------------
  // COOKIE POPUP (Vanilla JS)
  // -------------------------
  const cookieCard = document.querySelector(".cookie-card");
  const hideCookieBtn = document.querySelector(".hide-cookie-card-btn");
  
  if (cookieCard && document.cookie === "") {
    cookieCard.classList.remove("d-none");
  }

  if (hideCookieBtn && cookieCard) {
    hideCookieBtn.addEventListener("click", function () {
      cookieCard.classList.add("d-none");
      document.cookie = "tempCookie=true;";
    });
  }

  // -------------------------
  // MOBILE MENU (Vanilla JS)
  // -------------------------
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu .nav-list li a.accordion-heading");
  mobileMenuLinks.forEach(link => {
    if (!link.querySelector('.ph-caret-down')) {
      const icon = document.createElement('i');
      icon.className = 'ph ph-caret-down';
      link.appendChild(icon);
    }
  });

  const toggleMenuBtns = document.querySelectorAll(".toggle-menu, #toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  
  toggleMenuBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      this.classList.toggle("on");
      if (mobileMenu) {
        if (mobileMenu.style.display === "none" || !mobileMenu.style.display) {
          mobileMenu.style.display = "block";
        } else {
          mobileMenu.style.display = "none";
        }
      }
    });
  });

  const dropdownMenus = document.querySelectorAll(".dropdown-menu");
  dropdownMenus.forEach(menu => {
    menu.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });

  // -------------------------
  // DARK MODE BODY CLASS (Vanilla JS)
  // -------------------------
  const mainElement = document.querySelector(".main");
  if (mainElement && mainElement.classList.contains("wds-details-main-tag")) {
    document.body.classList.add("dark-body");
  }

});
