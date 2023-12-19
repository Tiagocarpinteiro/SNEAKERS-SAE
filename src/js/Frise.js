import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import ScrollReveal from "scrollreveal";
gsap.registerPlugin(ScrollTrigger)
import LocomotiveScroll from "locomotive-scroll";


document.getElementById("slides").onscroll = () => {
    document.getElementById("frise").scroll(0, ((document.getElementById("slides").scrollTop*document.getElementById("frise").scrollHeight)/document.getElementById("slides").scrollHeight)*0.75)
    if(document.getElementById("slides").scrollTop >= document.getElementById("slides").scrollHeight/9) {
        gsap.to("#title-2", {
            scrollTrigger: "#origines",
            fontSize: "32px"
        })

        gsap.to("#line-2", {
            scrollTrigger: "#origines",
            width: "20px"
        })

    }
}

gsap.registerPlugin(ScrollTrigger);

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