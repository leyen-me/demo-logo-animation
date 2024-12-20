const container = document.querySelector(".container");
const fullSvg = document.querySelector(".full-svg");
const strokeSvg = document.querySelector(".stroke-svg");

let animation = null;
container.addEventListener("mouseenter", () => {
  fullSvg.style.opacity = "0";
  strokeSvg.style.opacity = "1";

  animation = anime({
    targets: ".stroke-svg path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1200,
    delay: function (el, i) {
      return i * 200;
    },
    direction: "alternate",
    loop: false,
  });
});
container.addEventListener("mouseleave", () => {
  fullSvg.style.opacity = "1";
  strokeSvg.style.opacity = "0";
  if (animation) {
    animation.pause();
    animation = null;
  }
});
