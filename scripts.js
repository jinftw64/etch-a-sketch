function createSquare() {
  const square = document.createElement('div');
  square.classList.add('square');
  return square;
}

function createManySquares(num) {
  const container = document.querySelector('.container');
  for (let i = 0; i <= (num ** 2); i ++) {
    container.appendChild(createSquare());
  };
};

function getRandomNum(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getRandomRGB() {
  const r = getRandomNum(0, 255);
  const g = getRandomNum(0, 255);
  const b = getRandomNum(0, 255);
  return `rgb(${r},${g},${b})`;
}

function getRandomRGBandDarken(valuesArray) {
  const shadeFactor = 0.1;
  const r = valuesArray[0] * (1 - shadeFactor);
  const g = valuesArray[1] * (1 - shadeFactor);
  const b = valuesArray[2] * (1 - shadeFactor);
  return `rgb(${r},${g},${b})`;
}

function getRGBValues(div) { 
  const style = window.getComputedStyle(div);
  let rgbList = style.getPropertyValue('background-color').match(/\d+/g);
  return rgbList;
}

function changeRandomColor() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener("mouseenter", function () {
    if (square.style['background-color']) {
      let currentRGB = getRGBValues(square); 
      square.style['background-color'] = getRandomRGBandDarken(currentRGB);
    } else {
      square.style['background-color'] = getRandomRGB();
    }
  }));
};

function setGridColumnsRows(num) {
  const container = document.querySelector('.container');
  container.setAttribute('style', `grid-template-columns: repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr);`);
}

function askSizeofSide() {
  let numOfSides = 0;
  while (numOfSides <= 0 || numOfSides > 100) {
    numOfSides = parseInt(prompt('Enter size of square side:'));
  }
  return numOfSides;
}

function removeEveryChild() {
  const container = document.querySelector('.container');
  while (container.firstChild) {
    container.removeChild((container.lastChild));
  }
};

const container = document.querySelector('.container');
const button = document.querySelector('button');
button.addEventListener('click', function() {
  let numOfSides = askSizeofSide();
  setGridColumnsRows(numOfSides);
  removeEveryChild();
  createManySquares(numOfSides);
  changeRandomColor();
});
