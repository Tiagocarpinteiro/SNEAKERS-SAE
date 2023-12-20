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

gsap.to("#img-jordan", {
    x: -500,
    y: 100,
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

gsap.to("#shoes-down", {
    x: -200,
    ease: "none",
    scrollTrigger: {
        trigger: "#today",
        containerAnimation: scrollTween,
        scrub: true,
        toggleActions: "play none none reset"
    }
});

gsap.to("#shoes-up", {
    x: 200,
    ease: "none",
    scrollTrigger: {
        trigger: "#today",
        containerAnimation: scrollTween,
        scrub: true,
        toggleActions: "play none none reset"
    }
});


const video = document.querySelector(".video-background");
let src = video.currentSrc || video.src;
console.log(video, src);

/* Make sure the video is 'activated' on iOS */
function once(el, event, fn, opts) {
    var onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
    };
    el.addEventListener(event, onceFn, opts);
    return onceFn;
}

once(document.documentElement, "touchstart", function (e) {
    video.play();
    video.pause();
});

/* ---------------------------------- */
/* Scroll Control! */

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
});

once(video, "loadedmetadata", () => {
    tl.fromTo(
        video,
        {
            currentTime: 1
        },
        {
            currentTime: video.duration || 38
        }
    );
});

/* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
setTimeout(function () {
    if (window["fetch"]) {
        fetch(src)
            .then((response) => response.blob())
            .then((response) => {
                var blobURL = URL.createObjectURL(response);

                var t = video.currentTime;
                once(document.documentElement, "touchstart", function (e) {
                    video.play();
                    video.pause();
                });

                video.setAttribute("src", blobURL);
                video.currentTime = t + 0.01;
            });
    }
}, 1000);

/* ---------------------------------- */