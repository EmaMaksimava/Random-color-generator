const containerElement = document.querySelector('.container');

for(let i =0; i < 13; i++) {
  const colorContainerElement = document.createElement('div');
  colorContainerElement.classList.add('color-container');

  const colorValueElement = document.createElement('span');
  colorValueElement.classList.add('color-value');
  colorContainerElement.appendChild(colorValueElement);
  containerElement.appendChild(colorContainerElement);
}

const colorContainerEls = document.querySelectorAll('.color-container');
const colorValueEls = document.querySelectorAll('.color-value');

generateColors();
setColorValue();

function generateColors() {
  colorContainerEls.forEach((colorContainer) => {
    const newColorCode = randomColor();
    colorContainer.style.backgroundColor = '#' + newColorCode;
  })
}

function setColorValue() {
  colorValueEls.forEach((colorValue) => {
    const value = colorValue.parentElement.style.backgroundColor;
    const valueHEX = rgb2hex(value);
    colorValue.innerText = valueHEX;
  })
}

function rgb2hex(rgb) {
  var rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}


function randomColor() {
  const chars = '0123456789abcdef';
  const colorCodeLength = 6;
  let color = '';
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomNumber, randomNumber + 1);

  }

  return color;
}