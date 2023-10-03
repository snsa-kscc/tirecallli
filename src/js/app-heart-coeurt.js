import { gsap, ScrollTrigger, Flip } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Flip);

gsap.to(".displacement", {
  r: 720,
  scrollTrigger: {
    trigger: ".heart-evo svg",
    scrub: true,
    start: "top 60%",
    end: "top 5%",
  },
});

gsap.to(".heart-evo__group h4:first-child", {
  xPercent: -70,
  scrollTrigger: {
    trigger: ".heart-evo svg",
    scrub: true,
    start: "top 60%",
    end: "top 5%",
  },
});

gsap.to(".heart-evo__group h4:nth-of-type(2)", {
  xPercent: 60,
  yPercent: -60,
  scrollTrigger: {
    trigger: ".heart-evo svg",
    scrub: true,
    start: "top 60%",
    end: "top 5%",
  },
});
