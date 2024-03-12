/*
alert("Hola este es mi Javascript");

let name = "Carlos";
console.log("🚀 ~ name:", name);
const edad = 25;
console.log("🚀 ~ edad:", edad);

*/

/* condicional*/
let about = "About my";
let $title = document.querySelector(".seccion-1__title");

if ($title == "Acerca de") {
  $title.innerHTML = about;
} else {
  $title.innerHTML = "Acerca de vos";
}

let name = "Bequi";
let city = "Lima";
let province = "Junin";

let $parrafo = document.querySelector(".seccion-1__parrafo2");

function changeName(name, city, province) {
  let parrafo = ` Me llamo ${name}, nací en ${province} y vivo en ${city}. Me gusta el bailar
              y cocinar postres. Me encantaría aprender a programar para poder
              crear aplicaciones.`;

  return parrafo;
}

$parrafo.innerHTML = changeName(name, city, province);

// const $menuMobile = document.querySelector(".menu-mobile");

// const $close = document.querySelector(".header-menu-close");
// const $headerMenu = document.querySelector(".nav");

// function showMenu() {
//   $headerMenu.classList.toggle("menu-show");
// }

// $toggle.addEventListener("click", showMenu);
// $close.addEventListener("click", showMenu);
