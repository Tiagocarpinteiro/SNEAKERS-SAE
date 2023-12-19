import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
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
