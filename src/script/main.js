//Боковое меню
const rightsidMenu = document.querySelector(".rightside-menu");
const headerBtn = document.querySelector(".header__btn");
const menuClose = document.querySelector(".rightside-menu__close");
headerBtn.addEventListener("click", function () {
  rightsidMenu.classList.add("rightside-menu_hidden");
});
menuClose.addEventListener("click", function () {
  rightsidMenu.classList.remove("rightside-menu_hidden");
});
//Боковое меню
