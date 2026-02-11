// ------------------------- START INDEX js 
//Function to animate slider captions 
function doAnimations(elems) {
    var animEndEv = 'webkitAnimationEnd animationend';
    elems.each(function () {
       var $this = $(this),
          $animationType = $this.data('animation');
       $this.addClass($animationType).one(animEndEv, function () {
          $this.removeClass($animationType);
       });
    });
 }


 if ($(window).width() >= 768) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
       trigger: "#common-home-sect2-wrap",
       start: "top 0%",
       end: "top -100%",
       toggleActions: 'play pause resume reset',
       pin: true
    });
    ScrollTrigger.create({
       trigger: ".box-ani-outer #box1",
       start: "top 0%",
       toggleActions: 'play pause resume reset',
       toggleClass: { targets: "#common-home-sect2-wrap", className: "slide-1-bg" },
    });
    ScrollTrigger.create({
       trigger: ".box-ani-outer #box2",
       start: "top 0%",
       toggleActions: 'play pause resume reset',
       toggleClass: { targets: "#common-home-sect2-wrap", className: "slide-2-bg" },
    });
    ScrollTrigger.create({
       trigger: ".box-ani-outer #box3",
       start: "top 0%",
       toggleActions: 'play pause resume reset',
       toggleClass: { targets: "#common-home-sect2-wrap", className: "slide-3-bg" },
    });
    ScrollTrigger.create({
       trigger: ".box-ani-outer #box4",
       start: "top 0%",
       end: "top -100%",
       toggleActions: 'play pause resume reset',
       toggleClass: { targets: "#common-home-sect2-wrap", className: "slide-4-bg" },
    });
 }
 
 if ($(window).width() <= 767) {
    $('#common-home-sect2-wrap .carousel-fade').on('slide.bs.carousel', function (e1) {
       if (e1.relatedTarget.id === 'slide-1') {
          $(" #common-home-sect2-wrap").removeAttr('class');
          $(" #common-home-sect2-wrap").addClass('slide-1-bg');
       }
       else if (e1.relatedTarget.id === 'slide-2') {
          $(" #common-home-sect2-wrap").removeAttr('class');
          $(" #common-home-sect2-wrap").addClass('slide-2-bg');
       }
       else if (e1.relatedTarget.id === 'slide-3') {
          $(" #common-home-sect2-wrap").removeAttr('class');
          $(" #common-home-sect2-wrap").addClass('slide-3-bg');
       }
       else if (e1.relatedTarget.id === 'slide-4') {
          $(" #common-home-sect2-wrap").removeAttr('class');
          $(" #common-home-sect2-wrap").addClass('slide-4-bg');
       }
       else if (e1.relatedTarget.id === 'slide-5') {
          $(" #common-home-sect2-wrap").removeAttr('class');
          $(" #common-home-sect2-wrap").addClass('slide-5-bg');
       }
    });
 }
 
 setTimeout(function () {
    //text limit set
    var showChar45 = 45;
    var showChar20 = 20;
    var showChar70 = 70;
    var showChar100 = 100;
    var showChar150 = 150;
    var ellipsestext = "";
    var moretext = "Read More";
    var lesstext = "Read Less";
    $('section.common-section.common-blog-sect.common-casestudy-d-sect3 .stories-card h6 div, section.common-section.common-blog-sect .stories-card h6 div').each(function () {
       const content = $(this).html();
       if (content.length > showChar45) {
          const c = content.substr(0, showChar45);
          const h = content.substr(showChar45, content.length - showChar45);
          const html = c + '<span class="moreellipses">' + ellipsestext + '... &nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink d-none">' + moretext + '</a></span>';
          $(this).html(html);
       }
    });
    $('.common-newsroom-sect3 .newsroom-card .body-wrap h6 p, .common-up-event-sect .newsroom-card .body-wrap h6 p').each(function () {
       const content = $(this).html();
       if (content.length > showChar70) {
          const c = content.substr(0, showChar70);
          const h = content.substr(showChar70, content.length - showChar70);
          const html = c + '<span class="moreellipses">' + ellipsestext + '... &nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink d-none">' + moretext + '</a></span>';
          $(this).html(html);
       }
    });
    $('.common-home-sect6 .testi-card .testi-card-body .para').each(function () {
       const content = $(this).html();
       if (content.length > showChar150) {
          const c = content.substr(0, showChar150);
          const h = content.substr(showChar150, content.length - showChar150);
          const html = c + '<span class="moreellipses">' + ellipsestext + '... &nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink d-none">' + moretext + '</a></span>';
          $(this).html(html);
       }
    });
 }, 2000);
 
 setTimeout(function () {
    $(".page-details-loader-outer").hide();
    if ($(window).width() >= 768) {
       $(".services-info-card .right-card.card-c-overflow").prepend($(".common-services-d-sect1 .container-service .services-info-card .left-card .card-p"));
    }
    if ($('.contact-form .webform-confirmation .webform-confirmation__message:contains("Thank you for")').length > 0) {
       console.log('t');
       $(".common-contact-sect1 .contact-form h5").addClass("d-none");
       console.log('s');
    }
 }, 600);
 
 // lottiePlayer default play for desktop
 if ($(window).width() >= 768) {
    var lottiePlayer = document.getElementsByTagName("lottie-player");
    setTimeout(function () {
       $(lottiePlayer).each(function () {
          this.play();
       });
    }, 50);
    
   setTimeout(function () {
       $(lottiePlayer).each(function () {
          this.stop();
       });
    }, 400);
 }
// -------------------------**** END ****INDEX js 

// ------------------------- START ABOUT US js 
if ($(window).width() >= 992) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
       trigger: "#vibe-section",
       start: "top 0%",
       end: "top -100%",
       toggleActions: 'play pause resume reset',
       pin: true
    });
 
    ScrollTrigger.create({
       trigger: ".box-ani-outer #box1",
       start: "top 0%",
       toggleActions: 'play pause resume reset',
       toggleClass: { targets: "#vibe-section", className: "slick-1-bg" },
    });
    
    ScrollTrigger.create({
       trigger: ".box-ani-outer #box2",
       start: "top 0%",
       toggleActions: 'play pause resume reset',
       toggleClass: { targets: "#vibe-section", className: "slick-2-bg" },
    });
 
    ScrollTrigger.create({
       trigger: ".box-ani-outer #box3",
       start: "top 0%",
       toggleActions: 'play pause resume reset',
       toggleClass: { targets: "#vibe-section", className: "slick-3-bg" },
    });
 
    ScrollTrigger.create({
       trigger: ".box-ani-outer #box4",
       start: "top 0%",
       end: "top -100%",
       toggleActions: 'play pause resume reset',
       toggleClass: { targets: "#vibe-section", className: "slick-4-bg" },
    });
 }
 
 if ($(window).width() <= 767) {
    $(".vibe-text span:nth-child(1)").addClass("active")
 }
 
 $(".common-about-us-sect4 .slick-slider-progress .progress.custom-progress").attr("aria-valuenow", "0");
// -------------------------**** END ****ABOUT US js 

// ------------------------- START FINTECH BANKING js 
//Function to animate slider captions 

function doAnimations(elems) {
    var animEndEv = 'webkitAnimationEnd animationend';
    elems.each(function () {
       var $this = $(this),
          $animationType = $this.data('animation');
       $this.addClass($animationType).one(animEndEv, function () {
          $this.removeClass($animationType);
       });
    });
 }
 
 if ($(window).width() >= 992) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
       trigger: ".box-ani-outer #box1",
       start: "top 0%",
       toggleActions: 'play pause resume reset',
       toggleClass: { targets: "#fintech_experties", className: "slide-1-bg" },
    });
    ScrollTrigger.create({
       trigger: ".box-ani-outer #box2",
       start: "top 0%",
       toggleActions: 'play pause resume reset',
       toggleClass: { targets: "#fintech_experties", className: "slide-2-bg" },
    });
    ScrollTrigger.create({
       trigger: ".box-ani-outer #box3",
       start: "top 0%",
       end: "top -100%",
       toggleActions: 'play pause resume reset',
       toggleClass: { targets: "#fintech_experties", className: "slide-3-bg" },
    });
 }
 
 $("#fintech_experties #slide-1-tab").click(function(){
    $("#fintech_experties").removeClass("slide-1-bg slide-2-bg slide-3-bg") ;
   $("#fintech_experties").addClass("slide-1-bg");
 })
 
 $("#fintech_experties #slide-2-tab").click(function(){
    $("#fintech_experties").removeClass("slide-1-bg slide-2-bg slide-3-bg") ;
   $("#fintech_experties").addClass("slide-2-bg");
 })
 
 $("#fintech_experties #slide-3-tab").click(function(){
    $("#fintech_experties").removeClass("slide-1-bg slide-2-bg slide-3-bg") ;
   $("#fintech_experties").addClass("slide-3-bg");
 })
// -------------------------**** END ****FINTECH BANKING js 

// ------------------------- START WDS js 
if ($(window).width() >= 1599) {  
    //for large desktop
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".common-wds-sect1 .common-sect-para h1", {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".common-wds-sect1 .common-sect-para",
        scrub: 1,
        start: "top 200px",
        end: "bottom center",     
      }
    });
  }
  
  if (($(window).width() >= 1200) && $(window).width() <= 1598) {
    //for small desktop
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".common-wds-sect1 .common-sect-para h1", {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".common-wds-sect1 .common-sect-para",
        scrub: 1,
        start: "top 200px",
        end: "bottom center",
      }
    });
  }
  
  if (($(window).width() >= 992) && $(window).width() <= 1199) {
    //for large tab
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".common-wds-sect1 .common-sect-para h1", {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".common-wds-sect1 .common-sect-para",
  
        scrub: 1,
        start: "top 180px",
        end: "bottom center",
        
      }
    });
  }
  
  if (($(window).width() >= 768) && $(window).width() <= 991) {
    //for small tab
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".common-wds-sect1 .common-sect-para h1", {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".common-wds-sect1 .common-sect-para",
        scrub: 1,
        start: "top 200px",
        end: "bottom center",
      }
    });
  }
  
  if ($(window).width() <= 767) {
    //for mobile
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".common-wds-sect1 .common-sect-para h1", {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".common-wds-sect1 .common-sect-para",
        scrub: 1,
        start: "top 150px",
       end: "bottom center",        
      }
    });
  }
  
  if($("section.common-section.common-form-sect.common-wds-sect6").length > 0){
    let wdsFooter = $("section.common-section.common-form-sect.common-wds-sect6").offset().top - 200;
     $(window).scroll(function() {
       if ($(this).scrollTop()>wdsFooter)
       {
        $('.common-footer1').addClass('active-mode');
        }
      else
       {
        $('.common-footer1').removeClass('active-mode');
        }
    });
  }
// -------------------------**** END ****WDS js 

// ------------------------- START FOOTER js 
var toTop = $('.go-to-top-wrap');
var targetOffset = $(".common-footer-wrapper").offset().top;
toTop.on('click', function () {
   $('html, body').animate({
      scrollTop: $('html, body').offset().top,
   });
});

$(window).scroll(function () {
   var sticky = $('.common-header-wrapper'),
      scroll = $(window).scrollTop();

   if (scroll >= 250) {
      sticky.addClass('nav-up');
      $('.go-to-top-wrap').addClass("active");
   } else {
      sticky.removeClass('nav-up');
      $('.go-to-top-wrap').removeClass("active");
   };
});
// -------------------------**** END ****FOOTER js 

// ------------------------- START CUSTOM js 

  // Start - cookies popup
  if (document.cookie == "") {
    $("div.cookie-card").removeClass("d-none");
  }
  $("div.cookie-card .hide-cookie-card-btn").click(function () {
    $("div.cookie-card").addClass("d-none");
    document.cookie = "tempCookie=true;";
  });
  // Ebd - cookies popup

  //back button for service and industries pages
  $("a.back-btn.back-btn-adj").click(function (event) {
    history.back(); return false;  
  });

  $(".careers-life-btn-a").click(function (event) {
    $(".common-header-col-outer .mega-dropdown-menu").removeClass("show");
  });

  $(".custom-faq .accordion .accordion-item .accordion-header .accordion-button").click(function (event) {
    $(".custom-faq .accordion .accordion-item .collapse").not(this).parents(".accordion-item").find(".collapse").removeClass("show");
    $(".custom-faq .accordion .accordion-header .accordion-button").not(this).attr("aria-expanded", "false");
  });

  $(".mobile-menu .nav-list li a.accordion-heading").append('<i class="ph ph-caret-down"></i>');
  $(".toggle-menu").click(function (event) {
    $(this).toggleClass("on");
    event.preventDefault();
    $(".mobile-menu").slideToggle();
  });

  $(document).on('click', '.dropdown-menu', function (e) {
    e.stopPropagation();
  });

  AOS.init({duration: 800,easing: 'ease-in-out',once: false,offset: 220,delay: 200,mirror: false,disable: 'mobile'});

  setTimeout(function () {
    var vibeCardWidth1 = $(".vibe-card.vibe-card1").width() * 1;
    var vibeCardWidth2 = $(".vibe-card.vibe-card1").width() * 2;
    var vibeCardWidth3 = $(".vibe-card.vibe-card1").width() * 3;
    var fintechExpertiesHeight = $(".box-ani-outer").height() * 3;
    document.documentElement.style.setProperty('--vibeCardWidth1', '-' + vibeCardWidth1 + 'px');
    document.documentElement.style.setProperty('--vibeCardWidth2', '-' + vibeCardWidth2 + 'px');
    document.documentElement.style.setProperty('--vibeCardWidth3', '-' + vibeCardWidth3 + 'px');
    document.documentElement.style.setProperty('--fintechExpertiesHeight', fintechExpertiesHeight + 'px');

    if ($(window).width() >= 992) {
      const pointerScroll = (elem) => {
        const dragStart = (ev) => elem.setPointerCapture(ev.pointerId);
        const dragEnd = (ev) => elem.releasePointerCapture(ev.pointerId);
        const drag = (ev) => elem.hasPointerCapture(ev.pointerId) && (elem.scrollLeft -= ev.movementX);
        elem.addEventListener("pointerdown", dragStart);
        elem.addEventListener("pointerup", dragEnd);
        elem.addEventListener("pointermove", drag);
      };

      document.querySelectorAll(".common-services-d-sect1 .services-info-card .right-card.card-c-overflow").forEach(pointerScroll);

      if ($(window).width() >= 768) {
        var serviceHeightFirstCard = $(".page-node-type-services-details-page .services-info-card .right-card.card-c-overflow .card-p").height();
        var serviceHeightFirstCardHead = $(".page-node-type-services-details-page .services-info-card h1").height();
        console.log(serviceHeightFirstCardHead);
        $(".page-node-type-services-details-page .services-info-card .right-card.card-c-overflow .card-p").css("min-height", serviceHeightFirstCard+'px');
        var serviceHeightFirstCard1 = $(".page-node-type-services-details-page .services-info-card .card-c:not(:first-child)").height();
        $(".page-node-type-services-details-page .services-info-card .card-c").css("min-height", serviceHeightFirstCard1+'px');
        $(".page-node-type-services-details-page .services-info-card .card-c").css("padding-top", serviceHeightFirstCardHead + 40 +'px');
      }
    }   
  }, 300);

  if ($('.main').hasClass('wds-details-main-tag')) {
    $('body').addClass("dark-body");
  }
  
  $(".common-header-col-outer .mega-dropdown-menu .nav-pills .nav-link-a").click(function(){
    $(".common-header-col-outer .mega-dropdown-menu .nav-pills .nav-link-a").removeClass("active");
    $(this).addClass("active");    
  })


//contact for hide msg 
/*
document.addEventListener('DOMContentLoaded', function() {
  // Get all the <li> elements inside the <div> with the error message
  var errorItems = document.querySelectorAll('div[data-drupal-messages] li');

  // Loop through each <li> element
  errorItems.forEach(function(item) {
    // Check if the text content contains "CAPTCHA is required"
    if (item.textContent.includes("CAPTCHA is required")) {
      // Add a class to the <li> element
      item.classList.add('captcha-required');
    }
  });
});


$('.webform-submission-form li').each(function () {
    if ($(this).text().trim().toLowerCase().includes('captcha is required')) {  
        $(this).addClass('captcha-li-text');
    }
});
*/
// $('.page-node-type-contact-us .layout-container > div, .page-node-type-article .layout-container > div, .page-node-type-wds-listing .layout-container > div').hide();



// -------------------------**** END ****CUSTOM js 