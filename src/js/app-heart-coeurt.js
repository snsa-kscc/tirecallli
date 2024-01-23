import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const invisibleHeading = document.querySelector(".invisibility h4");
const invisibleWords = invisibleHeading.innerText.trim().split(" ");
invisibleHeading.innerText = "";
invisibleHeading.classList.remove("opacity-hidden");

function generateSpan(word, container) {
  const span = document.createElement("span");
  span.textContent = `${word} `;
  container.appendChild(span);
}

invisibleWords.forEach((word) => generateSpan(word, invisibleHeading));

const invisibleSpans = document.querySelectorAll(".invisibility span");

gsap.from(invisibleSpans, {
  opacity: 0.01,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".invisibility",
    end: "+=200% center",
    scrub: true,
    pin: true,
  },
});

gsap.to(".offering", {
  background: "#1c1c1c",
  color: "#f1f5f9",
  duration: 1,
  scrollTrigger: {
    trigger: ".offering p",
    start: "top center",
    end: "bottom 40%",
    scrub: true,
  },
});

gsap.from(".camouflage__copy-group", {
  opacity: 0.1,
  scrollTrigger: {
    trigger: ".camouflage__copy-group",
    start: "top 70%",
    end: "top 25%",
    scrub: true,
  },
});

gsap.to(".nature-camo", {
  background: "#fff",
  color: "#000",
  duration: 1,
  scrollTrigger: {
    trigger: ".nature-camo",
    start: "top",
    end: "+=15%",
    scrub: true,
  },
});

const textContainer = document.querySelector(".martial-arts__copy");
const textContainerParagraph = document.querySelector(".martial-arts__copy p");
const textContainerParagraphText = document.querySelector(".martial-arts__copy p").innerText;
const textContainerWords = textContainerParagraphText.trim().split(" ");

textContainerWords.forEach((word) => generateSpan(word, textContainer));
textContainer.removeChild(textContainerParagraph);

const textContainerWordSpans = document.querySelectorAll(".martial-arts__copy span");
let fadedIndices = [];

function fadeInRandomly() {
  if (fadedIndices.length >= textContainerWordSpans.length) {
    return;
  }

  let randomIndex = -1;

  while (fadedIndices.includes(randomIndex) || randomIndex === -1) {
    randomIndex = Math.floor(Math.random() * textContainerWordSpans.length);
  }

  textContainerWordSpans[randomIndex].style.opacity = 1;
  fadedIndices.push(randomIndex);

  setTimeout(fadeInRandomly, 50);
}

ScrollTrigger.create({
  trigger: textContainer,
  start: "top 60%",
  once: true,
  onEnter: () => fadeInRandomly(),
});

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
    start: "top top",
    end: "450 top",
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
      opacity: 1 / (idx * 0.16 + 1),
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
