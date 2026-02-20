(function() {
	"use strict";

    window.onload = function(){
        
        // Check if elements with the class "search-toggler" exist
        const searchTogglers = document.querySelectorAll(".search-toggler");
            if (searchTogglers.length > 0) {
            // Attach a click event listener to each "search-toggler" element
            searchTogglers.forEach((searchToggler) => {
                searchToggler.addEventListener("click", function (e) {
                e.preventDefault();
                
                    // Toggle the class "active" on elements with the class "search-popup"
                    const searchPopup = document.querySelector(".search-popup");
                    if (searchPopup) {
                        searchPopup.classList.toggle("active");
                    }

                    // Remove the class "expanded" from elements with the class "mobile-nav__wrapper"
                    const mobileNavWrapper = document.querySelector(".mobile-nav-wrapper");
                    if (mobileNavWrapper) {
                        mobileNavWrapper.classList.remove("expanded");
                    }
                });
            });
        }
        
        // Back to Top
        const getId = document.getElementById("back-to-top");
        if (getId) {
            const topbutton = document.getElementById("back-to-top");
            topbutton.onclick = function (e) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            };
            window.onscroll = function () {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    topbutton.style.opacity = "1";
                } else {
                    topbutton.style.opacity = "0";
                }
            };
        }
        
        // Preloader
        const getPreloaderId = document.getElementById('preloader');
        if (getPreloaderId) {
            getPreloaderId.style.display = 'none';
        }

        // Counter Js
        try {
            if ("IntersectionObserver" in window) {
                let counterObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            let counter = entry.target;
                            let target = parseInt(counter.innerText, 10);
                            let step = target / 200;
                            let current = 0;
                            let timer = setInterval(function () {
                                current += step;
                                counter.innerText = Math.floor(current);
                                if (parseInt(counter.innerText, 10) >= target) {
                                    clearInterval(timer);
                                }
                            }, 10);
                            counterObserver.unobserve(counter);
                        }
                    });
                });
                let counters = document.querySelectorAll(".counter");
                counters.forEach(function (counter) {
                    counterObserver.observe(counter);
                });
            }
        } catch {}

        // Background Image simpleParallax
        const simpleParallax = (elem, modifier) => {
            let paras = document.getElementsByClassName(elem);
            for (let i = 0; i < paras.length; i++) {
                paras[i].setAttribute(
                    "style",
                    "background-repeat: no-repeat; background-attachment: fixed; background-size: cover;background-position: center center;"
                );
            }
            const sp = () => {
                for (let i = 0; i < paras.length; i++) {
                    let x = paras[i].getBoundingClientRect().top / modifier;
                    let y = Math.round(x * 100) / 100;
                    paras[i].style.backgroundPosition = "center " + y + "px";
                }
                requestAnimationFrame(sp);
            };
            requestAnimationFrame(sp);
        };
        simpleParallax("bgImageParallax", 9);

        // Start Calendar JS
        try {
            const monthYear = document.getElementById('month-year');
            const daysContainer = document.getElementById('days');
            const prevBtn = document.getElementById('prev-wrap');
            const nextBtn = document.getElementById('next-wrap');
            const timeTitle = document.getElementById('time-title');
            const slotsContainer = document.getElementById('slots');
            let currentDate = new Date();
            let selectedDate = null;
            // Generate random slots for each day
            function generateSlots() {
                const baseSlots = ["8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM"];
                const shuffled = baseSlots.sort(() => 0.5 - Math.random());
                const count = Math.floor(Math.random() * 5) + 3;
                return shuffled.slice(0, count);
            }
            const slotsByDate = {};
            function renderCalendar() {
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();
                const firstDay = new Date(year, month, 1).getDay();
                const lastDate = new Date(year, month + 1, 0).getDate();
                const prevLastDate = new Date(year, month, 0).getDate();
                monthYear.innerText = currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' });
                let days = "";
                for (let i = firstDay; i > 0; i--) {
                    days += `<div class="prev-date">${prevLastDate - i + 1}</div>`;
                }
                for (let i = 1; i <= lastDate; i++) {
                    if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
                        days += `<div class="active">${i}</div>`;
                    } 
                    else {
                        days += `<div>${i}</div>`;
                    }
                }
                const totalDays = firstDay + lastDate;
                const nextDays = 7 - (totalDays % 7 === 0 ? 7 : totalDays % 7);
                for (let i = 1; i <= nextDays; i++) {
                    days += `<div class="next-date">${i}</div>`;
                }
                daysContainer.innerHTML = days;
                document.querySelectorAll('.days div').forEach(day => {
                    day.addEventListener('click', () => {
                    document.querySelectorAll('.days div').forEach(d => d.classList.remove('active'));
                    day.classList.add('active');
                    selectedDate = new Date(year, month, parseInt(day.innerText));
                    const key = selectedDate.toISOString().split('T')[0];
                    if (!slotsByDate[key]) {
                        slotsByDate[key] = generateSlots();
                    }
                    const availableSlots = slotsByDate[key];
                    timeTitle.innerText = `Available Times - ${day.innerText} ${monthYear.innerText}`;
                    renderSlots(availableSlots);
                    });
                });
                // Auto-show today's slots when calendar renders
                const today = document.querySelector('.days .active');
                if (today) {
                    selectedDate = new Date(year, month, parseInt(today.innerText));
                    const key = selectedDate.toISOString().split('T')[0];
                    if (!slotsByDate[key]) {
                    slotsByDate[key] = generateSlots();
                    }
                    const availableSlots = slotsByDate[key];
                    timeTitle.innerText = `Available Times Slots - ${today.innerText} ${monthYear.innerText}`;
                    renderSlots(availableSlots);
                }
            }
            function renderSlots(slots) {
                slotsContainer.innerHTML = slots.map(time => `<div class="slot">${time}</div>`).join('');
                document.querySelectorAll('.slot').forEach(slot => {
                    slot.addEventListener('click', () => {
                    document.querySelectorAll('.slot').forEach(s => s.classList.remove('active'));
                    slot.classList.add('active');
                    });
                });
            }
            prevBtn.addEventListener('click', () => {
                currentDate.setMonth(currentDate.getMonth() - 1);
                renderCalendar();
            });
            nextBtn.addEventListener('click', () => {
                currentDate.setMonth(currentDate.getMonth() + 1);
                renderCalendar();
            });
            renderCalendar();
        } catch {}
        // End Calendar JS 
    };
    
    // Approach Slider JS
	var SwiperTraveler = new Swiper(".approach-slider", {
        loop: true,
        spaceBetween: 25,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
        }
    });

    // Expertise Slider JS
	var SwiperTraveler = new Swiper(".expertise-slider", {
        loop: true,
        spaceBetween: 25,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            },
        }
    });

    // Testimonial Slider JS
	var SwiperTraveler = new Swiper(".testimonial-slider", {
        loop: true,
        spaceBetween: 25,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
        }
    });

    // Partner Slider JS
	var SwiperTraveler = new Swiper(".partner-slider", {
        loop: true,
        spaceBetween: 25,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            },
        }
    });

    // Recruiting Serve Slider JS
	var SwiperTraveler = new Swiper(".recruiting-serve-slider", {
        loop: true,
        spaceBetween: 25,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 4
            },
        }
    });

    // Recruiting Testimonial Slider JS
	var SwiperTraveler = new Swiper(".recruiting-testimonials-slider", {
        loop: true,
        spaceBetween: 25,
        slidesPerView: 1,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".recruiting-testimonials-pagination",
            clickable: true,
        },
    });

    // Recruiting Blog Slider JS
	var SwiperTraveler = new Swiper(".recruiting-blog-slider", {
        loop: true,
        spaceBetween: 25,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            },
        }
    });

    // Consulting Testimonial Slider JS
	var SwiperTraveler = new Swiper(".consulting-testimonials-slider", {
        loop: true,
        spaceBetween: 25,
        slidesPerView: 1,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".consulting-testimonials-pagination",
            clickable: true,
        },
    });

    // Consulting Partner Slider JS
	var SwiperTraveler = new Swiper(".consulting-partner-slider", {
        loop: true,
        spaceBetween: 25,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            },
        }
    });

    // Outsourcing Partner Slider JS
	var SwiperTraveler = new Swiper(".outsourcing-partner-slider", {
        loop: true,
        spaceBetween: 25,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            },
        }
    });

    // scrollCue
    scrollCue.init();
    
})();

// Header Sticky
const navbar = document.querySelector('#navbar');
if (navbar) {
    const height = 150;
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                navbar.classList.toggle('sticky', window.scrollY >= height);
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Animation GSAP
function all_title_animation() {
    const wrappers = document.querySelectorAll(".section-title-animation");
    if (!wrappers.length) return;
    const quotes = document.querySelectorAll(".section-title-animation .title-animation");
    quotes.forEach((quote) => {
        // Kill previous animation safely
        if (quote.animation) {
            quote.animation.progress(1).kill();
            if (quote.split) quote.split.revert();
        }
        const wrapperClass = quote.closest(".section-title-animation").className;
        const [, animationStyle] = wrapperClass.split("animation-");
        if (animationStyle === "style4") return;
        quote.split = new SplitText(quote, {
            type: "lines,words,chars",
            linesClass: "split-line",
        });
        gsap.set(quote, { perspective: 400 });
        const chars = quote.split.chars;
        const styleConfig = {
            style: { opacity: 0, x: 50 },
            style: { opacity: 0, y: "90%", rotateX: "-40deg" },
            style3: { opacity: 0 }
        };
        if (styleConfig[animationStyle]) {
            gsap.set(chars, styleConfig[animationStyle]);
        }
        quote.animation = gsap.to(chars, {
            scrollTrigger: {
                trigger: quote,
                start: "top 90%",
            },
            x: 0,
            y: 0,
            rotateX: 0,
            opacity: 1,
            duration: 1,
            ease: "back.out",
            stagger: 0.02,
        });
    });
}
if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.addEventListener("refresh", all_title_animation);
}