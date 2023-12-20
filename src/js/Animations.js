import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger)

let sections = gsap.utils.toArray(".slide");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
        trigger: ".diapo",
        pin: true,
        scrub: 0.1,
        //snap: directionalSnap(1 / (sections.length - 1)),
        end: "+=3000"
    }
});

gsap.to("#frise", {
    y: "-100%",
    ease: "none",
    duration: 10,
    scrollTrigger: {
        containerAnimation: scrollTween,
        start: 0,
        end: 360*13,
        scrub: true,
        toggleActions: "play none none reset"
    }
});

gsap.from("#macaron", {
    rotate: "360deg",
    ease: "none",
    duration: 10,
    scrollTrigger: {
        containerAnimation: scrollTween,
        start: 0,
        end: 360,
        scrub: true,
        toggleActions: "play none none reset"
    }
});

gsap.from("#sneakers", {
    ease: "power1",
    opacity: 0,
    y: 300,
    delay: 2,
    duration: 1
});

gsap.to("#sneakers", {
    x: -300,
    ease: "none",
    duration: 10,
    scrollTrigger: {
        containerAnimation: scrollTween,
        start: 0,
        end: 360,
        scrub: true,
        toggleActions: "play none none reset"
    }
});

    let typeSplit = new SplitType('#title, #text-origine, #subtitle-puma', {
    types: 'lines, words, chars',
    tagName: 'span'
})

    gsap.from('#title .char', {
    y: '100%',
    opacity: 0,
    duration: 0.1,
    ease: 'power1.out',
    stagger: 0.05,
})

/* 1916 */

gsap.from("#subtitle-origine", {
    y: -120,
    ease: "power1",
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#origines",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none none reset"
    }
});

gsap.to("#title-origine", {
    x: -1000,
    ease: "none",
    scrollTrigger: {
        trigger: "#origines",
        containerAnimation: scrollTween,
        start: 0,
        scrub: true,
        toggleActions: "play none none reset"
    }
});

gsap.from("#text-origine", {
    x: 200,
    ease: "power1",
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#origines",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none none reset"
    }
});

gsap.from("#img-origine", {
    rotate: "360deg",
    ease: "none",
    scrollTrigger: {
        trigger: "#origines",
        containerAnimation: scrollTween,
        start: 0,
        end: 360,
        scrub: true,
        toggleActions: "play none none reset"
    }
});

/* 1917 */

gsap.from("#subtitle-converse", {
    x: -500,
    ease: "none",
    scrollTrigger: {
        trigger: "#converse",
        containerAnimation: scrollTween,
        start: 0,
        scrub: true,
        toggleActions: "play none none reset"
    }
});

gsap.to("#title-converse", {
    x: 500,
    ease: "none",
    scrollTrigger: {
        trigger: "#converse",
        containerAnimation: scrollTween,
        start: 0,
        scrub: true,
        toggleActions: "play none none reset"
    }
});

gsap.from("#text-converse", {
    x: 200,
    ease: "power1",
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#converse",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none none reset"
    }
});

/* 1947 */

gsap.to("#title-puma", {
    x: -500,
    ease: "none",
    scrollTrigger: {
        trigger: "#converse",
        containerAnimation: scrollTween,
        scrub: true,
        toggleActions: "play none none reset"
    }
});

gsap.from("#text-puma", {
    y: -200,
    ease: "power1",
    opacity: 0,
    duration: 0.5,
    delay: 1,
    scrollTrigger: {
        trigger: "#puma",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none none reset"
    }
});

gsap.from("#text-adidas", {
    y: 200,
    ease: "power1",
    opacity: 0,
    duration: 0.5,
    delay: 1,
    scrollTrigger: {
        trigger: "#puma",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none none reset"
    }
});

gsap.from('#subtitle-puma .char', {
    y: '100%',
    opacity: 0,
    duration: 0.1,
    ease: 'power1.out',
    stagger: 0.05,
    scrollTrigger: {
        trigger: "#puma",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none none reset"
    }
})

gsap.from('#img-adidas', {
    x: -500,
    opacity: 0,
    delay: 2,
    scrollTrigger: {
        trigger: "#puma",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none none reset"
    }
})

gsap.from('#img-puma', {
    x: 500,
    opacity: 0,
    delay: 2,
    scrollTrigger: {
        trigger: "#puma",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none none reset"
    }
})

/* 1982 */

gsap.from("#bandeau-airforce", {
    x: 1000,
    ease: "none",
    scrollTrigger: {
        trigger: "#airforce",
        containerAnimation: scrollTween,
        start: 0,
        scrub: true,
        toggleActions: "play none none reset"
    }
});

gsap.from("#img-afone", {
    rotate: -45,
    y: 200,
    x: 500,
    ease: "none",
    scrollTrigger: {
        trigger: "#airforce",
        containerAnimation: scrollTween,
        start: "-25%",
        end: "0%",
        scrub: true,
        toggleActions: "play none none reset"
    }
});

gsap.from("#title-afone", {
    x: 1000,
    ease: "none",
    scrollTrigger: {
        trigger: "#airforce",
        containerAnimation: scrollTween,
        start: 0,
        scrub: true,
        toggleActions: "play none none reset"
    }
});

/* 1985 */

gsap.to("#title-jordan", {
    y: -500,
    ease: "none",
    scrollTrigger: {
        trigger: "#jordan",
        containerAnimation: scrollTween,
        start: "-50%",
        end: "75%",
        scrub: true,
        toggleActions: "play none none reset"
    }
});