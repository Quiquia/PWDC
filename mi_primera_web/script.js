const $toggle = document.querySelector(".header-toggle");
const $close = document.querySelector(".header-menu-close");
const $headerMenu = document.querySelector(".nav");

function showMenu() {
  $headerMenu.classList.toggle("menu-show");
}

$toggle.addEventListener("click", showMenu);
$close.addEventListener("click", showMenu);
