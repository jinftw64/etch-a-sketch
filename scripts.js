const container = document.querySelector('.container');

function createSquare() {
  const square = document.createElement('div');
  square.classList.add('square');
  return square;
}

for (let i = 0; i <= 15; i ++) {
  container.appendChild(createSquare());
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener("mouseenter", function () {
  square.classList.add('color');
}));
