let vid = document.querySelector(".vid");
let sound = document.querySelector(".sound");

sound.addEventListener("click", () => {
  if (vid.muted) {
    vid.muted = false;
    sound.classList.remove("sound-mute");
  } else {
    vid.muted = true;
    sound.classList.add("sound-mute");
  }
});
