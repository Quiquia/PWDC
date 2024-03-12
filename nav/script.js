// let menu_responsive = document.querySelector(".checkbtn");
// menu_responsive.onclick = function () {
//   navBar = document.querySelector(".navbar");
//   navBar.classList.toggle("active");
// };

let menu_mobile = document.querySelector(".btn-checking");
menu_mobile.addEventListener("click", () => {
  let navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
});
