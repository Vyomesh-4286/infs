// Select common elements
    const exproleSectionDesktop = document.querySelector('.banner-sub-img-wrap.desktop-show .banner-sub-img');
    const bannerWrapDesktop = document.querySelector('.banner-sub-img-wrap.desktop-show');
    const bannerHeadingDesktop = document.querySelector('.banner-heading.desktop-heading');

    const exproleSectionMobile = document.querySelector('.banner-sub-img-wrap.mobile-show .banner-sub-img');
    const bannerWrapMobile = document.querySelector('.banner-sub-img-wrap.mobile-show');
    const bannerHeadingMobile = document.querySelector('.banner-heading.mobile-heading');

    const navbar = document.querySelector('.navbar');
    const heroBanner = document.querySelector('.hero_banner');

    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Define desktop animation
    let desktopTimeline = null; // Keep track of desktop animation timeline

    function setupDesktopAnimation() {
        if (window.innerWidth > 768) {
            // Initialize desktop animation
            desktopTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: exproleSectionDesktop,
                    start: "top 90%",
                    scrub: 1,
                },
            })
                .to(bannerHeadingDesktop, {
                    opacity: 0,
                    duration: 0.05,
                    ease: "power3.inOut",
                }, "<")
                .to(bannerWrapDesktop, {
                    margin: "0px",
                    duration: 0.1,
                    ease: "power3.inOut",
                }, "<")
                .to(exproleSectionDesktop, {
                    height: "661px",
                    width: "100%",
                    duration: 0.1,
                    ease: "power3.inOut",
                }, "<");
        }
    }

    // Define mobile animation with mouse scrub
    function setupMobileAnimations() {
        if (window.innerWidth <= 768) {
            // Kill desktop animations to ensure no interference
            if (desktopTimeline) {
                desktopTimeline.scrollTrigger.kill();
                desktopTimeline.kill();
                desktopTimeline = null;
            }

            // Reset desktop styles for mobile view
            gsap.set(bannerHeadingDesktop, { opacity: 1 });
            gsap.set(exproleSectionDesktop, { height: "auto", width: "auto" });
            gsap.set(bannerWrapDesktop, { margin: "0px" });

            // Set initial styles for mobile
            gsap.set(bannerHeadingMobile, { opacity: 1 });
            gsap.set(exproleSectionMobile, { height: "270px" });
            gsap.set(navbar, { opacity: 1, zIndex: 1 });
            gsap.set(heroBanner, { overflowX: "visible" });

            // Mobile-specific animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: exproleSectionMobile,
                    start: "top 90%",
                    end: "top 10%",
                    scrub: 1, // Enable scrubbing
                },
            })
                .to(bannerHeadingMobile, {
                    opacity: 0,
                    duration: 0.1,
                    ease: "power3.inOut",
                })
                .to(exproleSectionMobile, {
                    height: "480px",
                    duration: 0.1,
                    ease: "power3.inOut",
                }, "<")
                .to(bannerWrapMobile, {
                    margin: "-20.5rem -7.5rem 0",
                    ease: "power3.inOut",
                })
                .to(exproleSectionMobile, {
                    height: "100vh",
                    duration: 0.8,
                    ease: "power3.inOut",
                }, "<")
                .to(navbar, {
                    opacity: 0,
                    zIndex: -1,
                    duration: 0.1,
                    ease: "power3.inOut",
                }, "<")
                .to(heroBanner, {
                    overflowX: "hidden",
                    duration: 0.1,
                    ease: "power3.inOut",
                }, "<");
        }
    }

    // Setup animations on load and resize
    function initializeAnimations() {
        // Clear all ScrollTriggers before reinitializing
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Reset desktop and mobile styles
        gsap.set(bannerHeadingDesktop, { opacity: 1 });
        gsap.set(exproleSectionDesktop, { height: "auto", width: "auto" });
        gsap.set(bannerWrapDesktop, { margin: "0px" });

        // Reinitialize animations based on screen size
        if (window.innerWidth > 768) {
            setupDesktopAnimation();
        } else {
            setupMobileAnimations();
        }
    }

    // Run setup on load
    initializeAnimations();

    // Reinitialize animations on window resize
    window.addEventListener('resize', initializeAnimations);