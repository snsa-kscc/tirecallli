import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".second", {
  background: "#1c1c1c",
  color: "#ccff00",
  duration: 1,
  scrollTrigger: {
    trigger: ".second h1",
    start: "top center",
    end: "bottom 40%",
    scrub: true,
  },
});
