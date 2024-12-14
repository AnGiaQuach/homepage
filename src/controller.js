import { addLeft, addRight } from "./slider.js";
import {
  removeLeft,
  removeRight,
  loadLeftImage,
  loadRightImage,
  createBoxartElm,
} from "./dom.js";

const slider = document.querySelector(".rowContent-slider");
const rightArrow = document.querySelector(".slider-nav-right-arrow-bg");
const leftArrow = document.querySelector(".slider-nav-left-arrow-bg");

let boxartList = [];
for (let i = 1; i <= 8; i++) {
  boxartList.push(`asset/img_0${i}`);
}

for (let i = 0; i < boxartList.length; i++) {
  console.log(createBoxartElm(boxartList[i]));
  slider.appendChild(createBoxartElm(boxartList[i]));
}

const num_of_block = 5;

function handleRightNavigate() {
  boxartList = addRight(boxartList, num_of_block);

  let rightImg = boxartList.slice(1, boxartList.length);
  loadRightImage(rightImg);
  removeLeft(num_of_block - 1);
}

function handleLeftNavigate() {
  boxartList = addLeft(boxartList, num_of_block);

  let leftImg = boxartList.slice(0, boxartList.length - 1);
  leftImg.reverse();
  loadLeftImage(leftImg);

  removeRight(num_of_block - 1);
}

rightArrow.addEventListener("click", handleRightNavigate);
leftArrow.addEventListener("click", handleLeftNavigate);
