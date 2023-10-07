import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

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

gsap.from(".heart-evo__imgs", {
  width: "300vw",
  filter: "grayscale(1)",
  duration: 2,
  scrollTrigger: {
    trigger: ".heart-evo__imgs",
    scrub: true,
    start: "top 20%",
    end: "+1000 top",
    onLeave: () => {
      ScrollTrigger.refresh();
    },
  },
});

const heartInspoPics = [...document.querySelectorAll(".heart-origins__inspo img")];

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".heart-origins__inspo",
    start: "top 25%",
    end: "+=200%",
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
      opacity: 1 / (idx * 1.1 + 1),
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

function handleTransition(elements, trigger) {
  const elementsGroup = [...document.querySelectorAll(elements)];

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top 25%",
      end: "+=200%",
      scrub: true,
      pin: true,
    },
  });

  tl.to(
    elementsGroup[1],
    {
      xPercent: -90,
      opacity: 0.2,
    },
    "<"
  );

  tl.to(
    elementsGroup[2],
    {
      xPercent: -50,
      opacity: 1,
    },
    "<"
  );
}

handleTransition(".heart-origins__group > *", ".heart-origins__group");

gsap.fromTo(
  "main",
  {
    background: "#fffbdc",
    color: "#505050",
  },
  {
    background: "#7c6f6a",
    color: "#d8d8d8",
    scrollTrigger: {
      trigger: ".heart-coeurt__copy",
      start: "top center",
      end: "+=25% 45%",
      scrub: true,
    },
  }
);

handleTransition(".heart-coeurt__group > *", ".heart-coeurt__group");

gsap.set("main", {
  background: "#fff",
  color: "#000",
});
