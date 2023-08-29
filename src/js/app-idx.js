import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const invisibleHeading = document.querySelector(".invisibility h4");
const chars = [...invisibleHeading.innerText];
invisibleHeading.innerText = "";
invisibleHeading.classList.remove("opacity-hidden");

chars.forEach((char) => {
  const span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0" : char;
  span.classList.add("inline-block");
  invisibleHeading.appendChild(span);
});

const charSpans = document.querySelectorAll(".invisibility span");

gsap.from(charSpans, {
  opacity: 0.2,
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
const words = textContainerParagraphText.trim().split(" ");

words.forEach((word) => {
  const span = document.createElement("span");
  span.textContent = `${word} `;
  textContainer.appendChild(span);
});
textContainer.removeChild(textContainerParagraph);

const wordSpans = document.querySelectorAll(".martial-arts__copy span");
let fadedIndices = [];

function fadeInRandomly() {
  if (fadedIndices.length >= wordSpans.length) {
    return;
  }

  let randomIndex = -1;

  while (fadedIndices.includes(randomIndex) || randomIndex === -1) {
    randomIndex = Math.floor(Math.random() * wordSpans.length);
  }

  wordSpans[randomIndex].style.opacity = 1;
  fadedIndices.push(randomIndex);

  setTimeout(fadeInRandomly, 50);
}

ScrollTrigger.create({
  trigger: textContainer,
  start: "top 60%",
  once: true,
  onEnter: () => fadeInRandomly(),
});
