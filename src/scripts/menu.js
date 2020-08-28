let menu = document.getElementsByClassName("menu__wrapper");
let header = document.getElementById("header");
let content = document.getElementById("content");

function openMenu(e) {
  menu[0].classList.toggle("menu__open");
  header.classList.toggle("heder__menuOpen");
  content.classList.toggle("content__mOpen");
}

let a = document.getElementsByClassName("menu__subitems");

function subitemOpen(b) {
  a[b].classList.toggle("menu__subitems__select");
}


