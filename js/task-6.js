function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

const createBoxes = (amount) => {
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    size += 10;
  }

  boxesContainer.innerHTML = '';
  boxesContainer.appendChild(fragment);
};

const handleCreateButtonClick = () => {
  const amount = inputNumber.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    boxesContainer.style.backgroundColor = '#F6F6FE';
    inputNumber.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
  
};

const handleDestroyButtonClick = () => {
  boxesContainer.innerHTML = '';
  boxesContainer.style.backgroundColor = '';
};

createButton.addEventListener('click', handleCreateButtonClick);
destroyButton.addEventListener('click', handleDestroyButtonClick);


