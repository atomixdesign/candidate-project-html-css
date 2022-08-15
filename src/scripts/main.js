// Toggle Mobile Menu
const open_menu = document.querySelector(".open-menu");
const navbar = document.querySelector(".navbar");

open_menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  navbar.classList.toggle("is-active");
}
