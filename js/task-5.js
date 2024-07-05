'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const bodyElement = document.body;
const buttonChangeColor = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

buttonChangeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();

  bodyElement.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;

});



