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
//Slider
$(function () {
  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });
});
//Slider

//Tab Slider
const tabSlider = {
  galleryButtons: document.querySelector(".gallery__buttons"),
  galleryBtn: document.querySelectorAll(".gallery__btn"),
  galleryItems: document.querySelectorAll(".gallery__items"),
};

tabSlider.galleryButtons.addEventListener("click", (event) => {
  event.preventDefault();
  const clicked = event.target.closest(".gallery__btn");
  tabSlider.galleryBtn.forEach((element) => {
    element.classList.remove("gallery__btn_active");
  });
  if (!clicked) return;
  clicked.classList.add("gallery__btn_active");
  tabSlider.galleryItems.forEach((element) => {
    element.classList.remove("gallery__items_active");
  });
  document
    .querySelector(`.gallery__items_${clicked.dataset.filter}`)
    .classList.add("gallery__items_active");
});
//Tab Slider
