let mobileBtn = document.querySelector(".mobile-btn");
let menuOpen = document.querySelector(".menu");
let menuClose = document.querySelector(".close");
let overlay = document.querySelector(".overlay");

mobileBtn.addEventListener("click", () => {
  menuOpen.className += " open";
  overlay.className += " open";
});

menuClose.addEventListener("click", () => {
  menuOpen.className = "menu";
  overlay.className = "overlay";
});

// to make overlay clickable
window.addEventListener("click", (e) => {
  if (e.target === overlay) {
    menuOpen.className = "menu";
    overlay.className = "overlay";
  }
});
