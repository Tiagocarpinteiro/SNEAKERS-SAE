import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

document.getElementById("slides").onscroll = () => {
    document.getElementById("frise").scroll(0, ((document.getElementById("slides").scrollTop*document.getElementById("frise").scrollHeight)/document.getElementById("slides").scrollHeight)*0.75)
    console.log(document.getElementById("frise").scrollTop, document.getElementById("frise").scrollHeight)
}

gsap.to("#title-2", {
    scrollTrigger: "#origines",
    fontSize: "32px"
})