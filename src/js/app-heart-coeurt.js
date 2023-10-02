import { gsap, ScrollTrigger, Flip } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Flip);

gsap.fromTo(
  ".displacement",
  {
    r: 0,
  },
  {
    r: 880,
    repeat: -1,
    duration: 10,
    ease: "power3.inOut",
    yoyo: true,
  }
);
