const containerElement = document.querySelector('.container');
const submitBtn = document.querySelector('#btn-submit');
const inputElement = document.querySelector('#input');

function isValidInput(value) {
  return typeof(value) !== 'number' || value < 1 || value % 1 !== 0;
}

function clearContainer() {
  containerElement.innerHTML = '';
}

function setColor(containerElement, colorValueElement) {
  const newColorCode = `#${getRandomColor()}`;
  containerElement.style.backgroundColor = newColorCode;
  colorValueElement.innerText = newColorCode;
}

function createColorElement() {
  const colorContainerElement = document.createElement('div');
  const colorValueElement = document.createElement('span');

  colorContainerElement.classList.add('color-container');
  colorValueElement.classList.add('color-value');

  colorContainerElement.appendChild(colorValueElement);
  containerElement.appendChild(colorContainerElement);

  setColor(colorContainerElement, colorValueElement);
}

function getRandomColor() {
  const chars = '0123456789abcdef';
  const colorCodeLength = 6;
  let color = '';
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomNumber, randomNumber + 1);

  }
  return color;
}

function onSubmitClick() {
  const numberOfColors = +(inputElement.value);

  if (isValidInput(numberOfColors)) {
    inputElement.value = 'Invalid value. Try again!';
    return;
  }

  clearContainer();

  for (let i = 0; i < numberOfColors; i++) {
    createColorElement();
  }
}

submitBtn.addEventListener('click', onSubmitClick);
