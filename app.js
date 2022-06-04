if (typeof ScrollSmoother != "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.000001,
  });
}

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

const firstHeroItems = document.querySelectorAll(".first-hero > *");
const secondHeroItems = document.querySelectorAll(".second-hero > *");

if (firstHeroItems.length != 0) {
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
}

if (secondHeroItems.length != 0) {
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
      touchMultiplier: 5,
      tablet: {
        breakpoint: 0,
        smooth: true,
      },
    });
    window.scrollTo(0, 0);
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
}, 1000);

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

const consentName = "tc_consent";

const shouldShowPopup = () => !localStorage.getItem(consentName);
const saveToStorage = () => localStorage.setItem(consentName, true);

acceptBtn.addEventListener("click", () => {
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
    .catch((err) => {
      formResponse.classList.add("visibility-shown");
      formResponse.innerHTML = "We could not subscribe you. Please try again or use another email.";
    })
    .finally(() => {
      newsletterForm.reset();
    });
});

console.log("%c Hi mom! Made with ❤️ by @dvasadva for @tirecalli", "color: #ff0000; font-size: 20px;");
