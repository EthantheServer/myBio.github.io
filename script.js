// Image selectors

const img = document.querySelectorAll("img");

for (let i = 0; i < img.length; i++) {
  img[i].title = img[i].alt;
  img[i].width = "20";
}

// Vanta.js
window.addEventListener("DOMContentLoaded", () => {
  VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundAlpha: 0.0,
    color2: 0xff00f0,
    wingSpan: 40.0,
    separation: 100.0,
    alignment: 77.0,
    cohesion: 5.0,
    quantity: 1.0,
  });

  setTimeout(() => {
    const main = document.querySelector("main");
    main.style.opacity = 1;
    main.style.filter = "blur(0px)";
  }, 1000);
});
