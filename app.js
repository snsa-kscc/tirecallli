let vid = document.querySelector(".vid");
let sound = document.querySelector(".sound");

if (sound) {
  sound.addEventListener("click", () => {
    if (vid.muted) {
      vid.muted = false;
      sound.classList.remove("sound-mute");
    } else {
      vid.muted = true;
      sound.classList.add("sound-mute");
    }
  });
}

let accordion = document.querySelector(".accordion");

if (accordion) {
  let detailsHeight = document.querySelector(".accordion-details__list").offsetHeight;
  let sizeHeight = document.querySelector(".accordion-size__list").offsetHeight;
  let shippingHeight = document.querySelector(".accordion__copy").offsetHeight;
  let style = document.createElement("style");
  style.innerHTML = `input[name="panel"]:checked ~ .accordion__content--details {height: ${detailsHeight + 30}px;}
    input[name="panel"]:checked ~ .accordion__content--size {height: ${sizeHeight + 30}px;}
    input[name="panel"]:checked ~ .accordion__content--shipping {height: ${shippingHeight + 30}px;}`;
  document.head.appendChild(style);
}

const body = document.body;
let lastScroll = 0;

setTimeout(() => {
  if (typeof LocomotiveScroll != "undefined") {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    locoScroll.on("scroll", () => {
      const currentScroll = Math.round(locoScroll.scroll.instance.scroll.y / 100);

      if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.add("scroll-down");
      } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
      }
      lastScroll = currentScroll;
    });
  } else {
    window.addEventListener("scroll", () => {
      const currentScroll = Math.round(window.pageYOffset / 50);

      if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.add("scroll-down");
      } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
      }
      lastScroll = currentScroll;
    });
  }
}, 500);

let toggleButton = document.querySelector(".dropdown > li");
let toggleItem = document.querySelector(".dropdown-menu");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    toggleItem.classList.toggle("active");
  });
}

burger.addEventListener("click", () => {
  header.classList.toggle("active");
  line1.classList.toggle("white");
  line2.classList.toggle("white");
  menu.classList.toggle("block");
});

const spanContainers = document.querySelectorAll(".archive-hero__title div");

if (spanContainers) {
  spanContainers.forEach((item) => {
    const letters = item.children[0].textContent.split("");
    item.innerHTML = "";
    letters.forEach((el, idx) => {
      item.innerHTML += `<span style="transition-delay: ${0.07 * idx}s">${el}</span>`;
    });
  });
}

console.log("%c Hi mom! Made with ❤️ by @dvasadva for @tirecalli", "color: #ff0000; font-size: 20px;");
