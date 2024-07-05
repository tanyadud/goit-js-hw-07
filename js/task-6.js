function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');
let boxSixe = 30;

createButton.addEventListener('click', () => {
  
  if(inputNumber.value > 100 || inputNumber.value < 1) {
    console.log('Quantity should be between 1 and 100')
    return;
  } 

  boxesContainer.innerHTML = '';

  for(let i = 0; i < inputNumber.value; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = boxSixe + i * 10 + 'px';
    box.style.height = boxSixe + i * 10 +'px';
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    boxesContainer.style.backgroundColor = '#F6F6FE';
  }

  inputNumber.value = '';
  console.log("inputNumber", inputNumber.value);
});

destroyButton.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
  boxesContainer.style.backgroundColor = '';
  
});