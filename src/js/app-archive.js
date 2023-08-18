import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const nodeList = document.querySelectorAll(".archive-heading h1");
const headings = [...nodeList];

const runningRightHeadings = headings.slice(0, 2).concat(headings.slice(4, 6));
const runningLeftHeadings = headings.slice(2, 4);

runningRightHeadings.forEach((heading) => {
  gsap.to(heading, {
    xPercent: 60,
    scrollTrigger: {
      trigger: heading,
      scrub: true,
      start: "top 80%",
      end: "bottom 10%",
    },
  });
});

runningLeftHeadings.forEach((heading) => {
  gsap.from(heading, {
    xPercent: 60,
    scrollTrigger: {
      trigger: heading,
      scrub: true,
      start: "top 90%",
      end: "bottom 10%",
    },
  });
});
