import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

let teaser = document.querySelector(".teaser");

ScrollTrigger.create({
  trigger: ".teaser",
  start: "top",
  end: "+=200%",
  pin: true,
  onUpdate: (self) => {
    teaser.style.color = `hsl( 0, 0%, ${95 * (1 - self.progress)}%)`;
  },
});

const firstHeroItems = document.querySelectorAll(".first-hero > *");
const secondHeroItems = document.querySelectorAll(".second-hero > *");

gsap.from(firstHeroItems, {
  scrollTrigger: {
    trigger: ".first-hero",
    start: "top center",
  },
  opacity: 0,
  yPercent: 30,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
});

gsap.from(secondHeroItems, {
  scrollTrigger: {
    trigger: ".second-hero",
    start: "top center",
  },
  opacity: 0,
  yPercent: 30,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
});
