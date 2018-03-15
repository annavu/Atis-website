
// menu hamburger - first 

const menu = document.querySelector(".menu");
const list = document.querySelector(".list");
const showcase = document.querySelector(".showcase");

function roll() {
  list.classList.toggle("unroll");
  showcase.classList.toggle("showcase-unroll");
}

menu.addEventListener("click", roll);

//menu hamburger - second

const actionMenu = document.querySelector(".action-menu");
const actionList = document.querySelector(".action-list");
const wrapper = document.querySelector(".wrapper");

function roll2() {
  actionList.classList.toggle("unroll2");
  wrapper.classList.toggle("lower");
}

actionMenu.addEventListener("click", roll2);