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

const heartInspoPics = [...document.querySelectorAll(".heart-origins__inspo img")];

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".heart-origins__inspo",
    start: "top 25%",
    end: "+=300%",
    scrub: true,
    pin: true,
  },
});

heartInspoPics.forEach((pic, idx) => {
  pic.style.zIndex = 3 - idx;
  tl.to(
    pic,
    {
      xPercent: idx * -90,
      opacity: 0.8 / (idx * 1.1 + 1),
    },
    "<"
  );
});

gsap.fromTo(
  "main",
  {
    background: "#fff",
    color: "#000",
  },
  {
    background: "#fffbdc",
    color: "#505050",
    scrollTrigger: {
      trigger: ".heart-origins__copy",
      start: "top center",
      end: "bottom 40%",
      scrub: true,
    },
  }
);
