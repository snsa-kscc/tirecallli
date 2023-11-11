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

const popupName = "tc_popup";

const shouldShowPopup = () => !localStorage.getItem(popupName);
const saveToStorage = () => localStorage.setItem(popupName, true);

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

const getVisits = localStorage.getItem("tc_visits");
if (!getVisits) {
  localStorage.setItem("tc_visits", 0);
} else {
  localStorage.setItem("tc_visits", parseInt(getVisits) + 1);
}

if (localStorage.getItem("tc_visits") % 1 == 0 || localStorage.getItem("tc_visits") == 0) {
  setTimeout(() => {
    newsletterModal.showModal();
  }, 1000);
}

modalClose.addEventListener("click", () => {
  newsletterModal.close();
});

function handleSubmit(form, loading, response) {
  function removeLoadingIndicator() {
    loading.innerHTML = "";
    loading.classList.remove("visibility-shown");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    loading.classList.add("visibility-shown");
    loading.innerHTML = "Loading...";
    const email = form.querySelector('input[name="email"]').value;
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
          removeLoadingIndicator();
          response.classList.add("visibility-shown");
          response.innerHTML = "Thanks, please check your email to confirm.";
        } else if (data.msg === "Member Exists") {
          removeLoadingIndicator();
          response.classList.add("visibility-shown");
          response.innerHTML = "You are already subscribed. Thank you!";
        } else {
          removeLoadingIndicator();
          response.classList.add("visibility-shown");
          response.innerHTML = "We could not subscribe you. Try again or use another email.";
        }
      })
      .catch(() => {
        removeLoadingIndicator();
        response.classList.add("visibility-shown");
        response.innerHTML = "We could not subscribe you. Try again or use another email.";
      })
      .finally(() => {
        form.reset();
      });
  });
}

handleSubmit(newsletterForm, loadingIndicator, formResponse);
handleSubmit(modalNewsletterForm, modalLoadingIndicator, modalFormResponse);

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
