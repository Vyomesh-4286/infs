$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);
    var swiper = new Swiper(".bannerSwiper", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        navigation: {
            nextEl: ".instgram-next",
            prevEl: ".instgram-prev",
        },
    });

    function animateElements() {
        let animimgs = gsap.utils.toArray(".full_img img");
        animimgs.forEach((animimg) => {
            gsap.to(animimg, {
                scale: 1.25,
                duration: 8,
                stagger: 0.25, // Stagger time between animations
                ease: "power3.inOut"
            });
        });

        let elements = gsap.utils.toArray(".banner_content");
        elements.forEach((element) => {
            gsap.from(element.children, {
                x: -30, // Start position
                opacity: 0, // Start opacity
                duration: 0.75,
                stagger: 0.25, // Stagger time between animations
                ease: "power3.inOut"
            });
        });
    }

    // Initial animation on page load
    animateElements();

    // Listen for Swiper slide change event
    swiper.on('slideChange', function () {

        gsap.set(".full_img img", { scale: 1 });
        gsap.set(".banner_content", { x: 0 });
        animateElements();
    });

    $("#typed").typed({
        strings: ["respect", "pride", "love"],
        typeSpeed: 100,
        startDelay: 0,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
        cursorChar: "|",
        contentType: 'html'
    });

    var swiper = new Swiper(".testimonial_img", {
        spaceBetween: 20,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".testimonial_content", {
        loop: true,
        spaceBetween: 20,
        navigation: {
            nextEl: ".instgram-thumb-next",
            prevEl: ".instgram-thumb-prev",
        },
        thumbs: {
            swiper: swiper,
        },
        breakpoints: {
            0: {
                spaceBetween: 10,
            },
            768: {
                spaceBetween: 20,
            },
        },
    });

    var swiper = new Swiper(".partnerLogo", {
        // loop: true,
        slidesPerView: 4,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                centerSlide: true,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                centerSlide: true,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                centerSlide: true,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });

    // let anim_ups = gsap.utils.toArray(".anim_up");
    // anim_ups.forEach((anim_up) => {
    //     gsap.from(anim_up.children, {
    //         y: 30, // Start position
    //         opacity: 0, // Start opacity
    //         duration: 0.75,
    //         stagger: 0.25, // Stagger time between animations
    //         ease: "power3.inOut"
    //     });
    // });

    // let anim_lefts = gsap.utils.toArray(".anim_left");
    // anim_lefts.forEach((anim_left) => {
    //     gsap.from(anim_left.children, {
    //         x: -30, // Start position
    //         opacity: 0, // Start opacity
    //         duration: 0.75,
    //         stagger: 0.25, // Stagger time between animations
    //         ease: "power3.inOut"
    //     });
    // });

    gsap.utils.toArray(".anim_left").forEach((element1) => {
        // Create a GSAP animation for each element1
        const animation = gsap.fromTo(
            element1.children,
            { autoAlpha: 0, x: 50 },
            { delay: 1, duration: 1, autoAlpha: 1, x: 0, stagger: 0.5 }
        );
    
        // Create a ScrollTrigger for each element1
        ScrollTrigger.create({
            trigger: element1,
            ease: "power3.inOut",
            animation: animation,
            toggleActions: "play none none none",
            once: false
        });
    });

    gsap.utils.toArray(".anim_up").forEach((element) => {
        // Create a GSAP animation for each element
        const animation = gsap.fromTo(
            element.children,
            { autoAlpha: 0, y: 50 },
            { delay: 0.25, duration: 1, autoAlpha: 1, y: 0, stagger: 0.5 }
        );
    
        // Create a ScrollTrigger for each element
        ScrollTrigger.create({
            trigger: element,
            ease: "power3.inOut",
            animation: animation,
            toggleActions: "play none none none",
            once: false
        });
    });
})