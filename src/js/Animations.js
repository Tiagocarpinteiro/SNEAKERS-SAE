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
        end: 360*9,
        scrub: true,
        toggleActions: "play none none reset"
    }
});

gsap.from(".scroll", {
    y: -120,
    ease: "power1",
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#origines",
        containerAnimation: scrollTween,
        start: "left center",
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

    let typeSplit = new SplitType('#title, #text-origine', {
    types: 'lines, words, chars',
    tagName: 'span'
})

    gsap.from('#title .char', {
    y: '100%',
    opacity: 0,
    duration: 0.1,
    ease: 'power1.out',
    stagger: 0.1,
})

/* 1916 */

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