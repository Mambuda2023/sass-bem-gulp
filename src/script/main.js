const rightsidMenu = document.querySelector(".rightside-menu");
const headerBtn = document.querySelector(".header__btn");
const menuClose = document.querySelector(".rightside-menu__close");
// Открытие боковой колонки
headerBtn.addEventListener("click", function () {
  rightsidMenu.classList.add("rightside-menu_hidden");
});
// Закрытие боковой колонки
menuClose.addEventListener("click", function () {
  rightsidMenu.classList.remove("rightside-menu_hidden");
});
