import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const heartImg = document.querySelector(".heart-evo__group--second > div");

gsap.to(heartImg, {
  yPercent: -100 * heartImg.dataset.speed,
  scrollTrigger: {
    scrub: heartImg.dataset.speed,
    trigger: ".heart-evo__group--second > h1",
    start: "top 80%",
  },
});

const originsImgs = [...document.querySelectorAll(".heart-origins img")];

originsImgs.forEach((img) => {
  gsap.from(img, {
    xPercent: -80 * img.dataset.speed,
    scrollTrigger: {
      scrub: true,
      trigger: ".heart-origins > div",
      start: "top bottom",
      end: "top 10%",
    },
  });
});

gsap.from(".heart-origins__title h4", {
  xPercent: 115,
  opacity: 0.1,
  scrollTrigger: {
    trigger: ".heart-origins__title h4",
    start: "top 90%",
    end: "top 30%",
    scrub: true,
  },
});
