const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  grabCursor: true,
  spaceBetween: 100,
  autoplay: {
    delay: 5000,
  },
});

// var slideRight = {
//   distance: "200px",
//   origin: "bottom",
//   opacity: null,
// };

ScrollReveal().reveal("#slider", { delay: 500 });
ScrollReveal().reveal("#contents", { delay: 900 });
// ScrollReveal().reveal("#depoimentos", { delay: 500 });
ScrollReveal().reveal("#infos", { delay: 500 });

ScrollReveal().reveal(".description__title", {
  delay: 700,
  distance: "10px",
  origin: "bottom",
  duration: 1000,
});
ScrollReveal().reveal(".description__content", {
  delay: 1200,
  distance: "10px",
  origin: "bottom",
  duration: 1000,
});

ScrollReveal().reveal(".estudio__items-item-1", {
  delay: 1100,
  distance: "50px",
  origin: "bottom",
  duration: 1000,
});
ScrollReveal().reveal(".estudio__items-item-2", {
  delay: 1400,
  distance: "50px",
  origin: "bottom",
  duration: 1000,
});
ScrollReveal().reveal(".estudio__items-item-3", {
  delay: 1700,
  distance: "50px",
  origin: "bottom",
  duration: 1000,
});
ScrollReveal().reveal(".estudio__items-item-4", {
  delay: 2000,
  distance: "50px",
  origin: "bottom",
  duration: 1000,
});

ScrollReveal().reveal("#depoimentos h3", {
  delay: 700,
  distance: "10px",
  origin: "bottom",
  duration: 1000,
});

ScrollReveal().reveal("#depoimentos h1", {
  delay: 1200,
  distance: "10px",
  origin: "bottom",
  duration: 1000,
});

ScrollReveal().reveal(".depoimento", {
  delay: 1700,
  distance: "10px",
  origin: "bottom",
  duration: 1000,
});

ScrollReveal().reveal(".talk", {
  delay: 700,
  distance: "50px",
  origin: "bottom",
  duration: 1000,
});
ScrollReveal().reveal(".map", {
  delay: 1000,
  distance: "50px",
  origin: "bottom",
  duration: 1000,
});
ScrollReveal().reveal(".insta", {
  delay: 1300,
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  // mobile: false,
});

const menuHamburger = document.getElementById("nav-icon3");
const menuOverlay = document.querySelector(".menu-mobile__overlay");

menuHamburger.addEventListener("click", function () {
  if (menuHamburger.classList.contains("open")) {
    menuHamburger.classList.remove("open");
    menuOverlay.style.right = "100%";
  } else {
    menuHamburger.classList.add("open");
    menuOverlay.style.right = "0";
  }
});
