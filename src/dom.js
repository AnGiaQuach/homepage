function createBoxartElm(img_id) {
  const elm = document.createElement("img");
  elm.setAttribute("src", `${img_id}.jpg`);
  elm.classList.add("boxart-img");

  return elm;
}

function removeLeft(leftCount) {
  let count = 0;
  const slider = document.querySelector(".rowContent-slider");
  while (count <= leftCount) {
    if (slider.firstElementChild.classList.contains("boxart-img")) {
      slider.removeChild(slider.firstElementChild);
      count++;
    } else {
      continue;
    }
  }
}

function removeRight(rightCount) {
  let count = 0;
  const slider = document.querySelector(".rowContent-slider");
  while (count <= rightCount) {
    if (slider.lastChild) {
      slider.removeChild(slider.lastChild);
      count++;
    } else {
      continue;
    }
  }
}

function loadLeftImage(listOfBoxart) {
  const slider = document.querySelector(".rowContent-slider");
  for (let i = 1; i <= listOfBoxart.length; i++) {
    const elm = createBoxartElm(listOfBoxart[i - 1]);
    slider.prepend(elm);
  }
}

function loadRightImage(listOfBoxart) {
  const slider = document.querySelector(".rowContent-slider");
  for (let i = 1; i <= listOfBoxart.length; i++) {
    const elm = createBoxartElm(listOfBoxart[i - 1]);
    slider.appendChild(elm);
  }
}

export {
  loadLeftImage,
  loadRightImage,
  removeRight,
  removeLeft,
  createBoxartElm,
};
