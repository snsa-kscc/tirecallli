gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
  trigger: ".crypto-quote",
  start: "top",
  end: "bottom",
  pin: true,
  onUpdate: (self) => {
    cryptoQuote.style.backgroundColor = `hsl( 220, 23%, ${8 + 70 * self.progress}%)`;
  },
});
let sections = document.querySelectorAll(".crypto-intro div");
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".crypto-intro",
    start: "top top",
    end: () => `+=${cryptoIntro.offsetWidth}`,
    scrub: 0.5,
    pin: true,
    snap: 1 / (sections.length - 1),
  },
});
const rule = CSSRulePlugin.getRule(".crypto-offering::after");
gsap.to(rule, {
  scrollTrigger: {
    trigger: ".crypto-offering",
    start: "top 50%",
  },
  cssRule: {
    scaleY: 0,
  },
  duration: 1,
});
ScrollTrigger.matchMedia({
  "(min-width: 800px)": () => {
    gsap.to(".crypto-description img", {
      scrollTrigger: { trigger: ".crypto-description", end: "+=200%", pin: ".crypto-description img", scrub: 0.5 },
    });
  },
});
ScrollTrigger.create({
  trigger: ".crypto-item-jacket__cta",
  start: "top 15%",
  onEnter: () => {
    const randomnbr = document.querySelectorAll(".crypto-item-jacket .crypto-item__copy--first .nbr");
    const letters = ["H", "Y", "B", "R", "I", "D", "J", "A", "C", "K", "E", "T"];
    const selector = ".crypto-item-jacket .crypto-item__copy--first";

    handleDecoder(randomnbr, letters, selector);
  },
});
gsap.to(".crypto-item-jacket__pics", {
  scale: 1,
  scrollTrigger: {
    trigger: ".crypto-item-jacket__pics",
    start: "top 10%",
    end: "+=400%",
    pin: true,
    scrub: 0.5,
  },
});
ScrollTrigger.create({
  trigger: ".crypto-item-pants__cta",
  start: "top 10%",
  onEnter: () => {
    const randomnbr = document.querySelectorAll(".crypto-item-pants .crypto-item__copy--first .nbr");
    const letters = ["B", "A", "S", "I", "C", "D", "E", "N", "I", "M"];
    const selector = ".crypto-item-pants .crypto-item__copy--first";

    handleDecoder(randomnbr, letters, selector);
  },
});
ScrollTrigger.create({
  trigger: ".crypto-item-pants__cta",
  start: "top 20%",
  onEnter: () => {
    const randomnbr = document.querySelectorAll(".crypto-item-pants .crypto-item__copy--second .nbr");
    const letters = ["O", "V", "E", "R", "A", "L", "L", "P", "A", "N", "T"];
    const selector = ".crypto-item-pants .crypto-item__copy--second";

    handleDecoder(randomnbr, letters, selector);
  },
});

function handleDecoder(randomnbr, letters, selector) {
  let data = 0;

  randomnbr.forEach((item) => {
    const change = Math.round(Math.random() * 100);
    item.setAttribute("data-change", change);
  });

  function select() {
    return Math.round(Math.random() * randomnbr.length + 1);
  }

  timer = setInterval(() => {
    document.querySelectorAll(`${selector} .nbr:nth-child(${select()})`).forEach((item) => {
      item.innerHTML = Math.round(Math.random() * 9);
      item.setAttribute("data-number", data);
    });
    data++;

    randomnbr.forEach((item, idx) => {
      if (parseInt(item.getAttribute("data-number")) > parseInt(item.getAttribute("data-change"))) {
        item.innerHTML = letters[idx];
        item.classList.remove("nbr");
      }
    });
  }, 20);
  setTimeout(() => {
    clearInterval(timer);
  }, 5000);
}
let revealContainers = document.querySelectorAll(".crypto-item-pants__pic");
revealContainers.forEach((container, idx) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".crypto-item-pants__items",
      toggleActions: "play pause resume reset",
    },
  });
  tl.set(container, { autoAlpha: 1 });
  tl.from(container, idx + 1, {
    xPercent: -100,
    ease: Power2.out,
  });
  tl.from(image, 0.7, {
    xPercent: 100,
    scale: 1.5,
    delay: -0.7,
    stagger: true,
    ease: Power2.out,
  });
});
// CURTAINSJS
const vs = `
			precision mediump float;

			attribute vec3 aVertexPosition;
			attribute vec2 aTextureCoord;

			uniform mat4 uMVMatrix;
			uniform mat4 uPMatrix;

			uniform mat4 uTextureMatrix0;

			varying vec3 vVertexPosition;
			varying vec2 vTextureCoord;

			void main() {
				vec3 vertexPosition = aVertexPosition;

				gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

				vTextureCoord = (uTextureMatrix0 * vec4(aTextureCoord, 0.0, 1.0)).xy;
				vVertexPosition = vertexPosition;
			}
			`;
const fs = `
			precision mediump float;

			varying vec3 vVertexPosition;
			varying vec2 vTextureCoord;

			uniform float uTime;

			uniform sampler2D uSampler0;

			void main() {
				vec2 textureCoord = vTextureCoord;

				textureCoord.x += sin(textureCoord.x * 50.0) * cos(textureCoord.x * 250.0) * (cos(uTime / 100.0)) / 75.0;

				gl_FragColor = texture2D(uSampler0, textureCoord);
			}
			`;
const planeElements = document.getElementsByClassName("crypto-outro__webgl");
const params = {
  vertexShader: vs,
  fragmentShader: fs,
  uniforms: {
    time: {
      name: "uTime",
      type: "1f",
      value: 0,
    },
  },
};
addEventListener("load", () => {
  const curtains = new Curtains({
    container: "canvas",
    pixelRatio: Math.min(1.5, window.devicePixelRatio),
  });

  const plane = new Plane(curtains, planeElements[0], params);

  plane.onRender(() => {
    plane.uniforms.time.value++;
  });
});
