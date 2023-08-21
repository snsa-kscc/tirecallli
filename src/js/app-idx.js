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

const textContainer = document.querySelector(".text-container");
const words = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci ac auctor augue. Pharetra magna ac placerat vestibulum. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Aliquet enim tortor at auctor urna nunc. Porttitor eget dolor morbi non arcu risus quis varius quam. Tellus cras adipiscing enim eu.
`
  .trim()
  .split(" ");

words.forEach((word) => {
  const span = document.createElement("span");
  span.textContent = word;
  span.classList.add("mx-1", "transition", "duration-1000", "inline-block", "opacity-0");
  textContainer.appendChild(span);
});

const spans = document.querySelectorAll(".text-container span");
let fadedIndices = [];

function fadeInRandomly() {
  if (fadedIndices.length >= spans.length) {
    return;
  }

  let randomIndex = -1;

  while (fadedIndices.includes(randomIndex) || randomIndex === -1) {
    randomIndex = Math.floor(Math.random() * spans.length);
  }

  spans[randomIndex].style.opacity = 1;
  fadedIndices.push(randomIndex);

  setTimeout(fadeInRandomly, 50);
}

ScrollTrigger.create({
  trigger: textContainer,
  start: "top center",
  once: true,
  onEnter: () => fadeInRandomly(),
});
