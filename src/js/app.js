import Lenis from "@studio-freight/lenis";

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
  let panel1Height = document.querySelector(".accordion-panel-1__list").offsetHeight;
  let panel2Height = document.querySelector(".accordion-panel-2__list").offsetHeight;
  let panel3Height = document.querySelector(".accordion__copy").offsetHeight;
  let style = document.createElement("style");
  style.innerHTML = `input[name="panel"]:checked ~ .accordion__content--panel-1 {height: ${panel1Height + 30}px;}
    input[name="panel"]:checked ~ .accordion__content--panel-2 {height: ${panel2Height + 30}px;}
    input[name="panel"]:checked ~ .accordion__content--panel-3 {height: ${panel3Height + 30}px;}`;
  document.head.appendChild(style);
}

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = Math.round(window.scrollY / 50);
  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.add("scroll-down");
  } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
  }
  lastScroll = currentScroll;
});

burger.addEventListener("click", () => {
  const cart = document.querySelector(".flex--cart-icon");
  cart.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
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

const consentName = "tc_modal";

const shouldShowPopup = () => !localStorage.getItem(consentName);
const saveToStorage = () => localStorage.setItem(consentName, true);

acceptBtn.addEventListener("click", () => {
  saveToStorage();
  consentPopup.classList.add("disabled");
});

rejectBtn.addEventListener("click", () => {
  saveToStorage();
  consentPopup.classList.add("disabled");
});

if (shouldShowPopup()) {
  setTimeout(() => {
    consentPopup.classList.remove("disabled");
  }, 2000);
}

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = newsletterForm.querySelector('input[name="email"]').value;
  let fetchData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  };
  fetch("/.netlify/functions/subscribe", fetchData)
    .then((res) => res.json())
    .then((data) => {
      if (data.msg === "pending") {
        formResponse.classList.add("visibility-shown");
        formResponse.innerHTML = "Thanks, please check your email to confirm.";
      } else if (data.msg === "Member Exists") {
        formResponse.classList.add("visibility-shown");
        formResponse.innerHTML = "You are already subscribed. Thank you for being a subscriber!";
      } else {
        formResponse.classList.add("visibility-shown");
        formResponse.innerHTML = "We could not subscribe you. Please try again or use another email.";
      }
    })
    .catch(() => {
      formResponse.classList.add("visibility-shown");
      formResponse.innerHTML = "We could not subscribe you. Please try again or use another email.";
    })
    .finally(() => {
      newsletterForm.reset();
    });
});

logo.oncontextmenu = (e) => {
  e.preventDefault();
  window.location.href = "/brand-guidelines.html";
};

const lenis = new Lenis({
  lerp: 0.09,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

console.log("%c Hi mom! Made with ❤️ by @dvasadva for @tirecalli", "color: #ff0000; font-size: 20px;");
