const grid = document.querySelector(".grid");
const row = document.createElement("div");
row.classList.add('row');
const square = document.createElement('div');
square.classList.add('square');

for (i=0; i<16; i++) {
  row.appendChild(square.cloneNode());
}

for (i=0; i<16; i++) {
  grid.appendChild(row.cloneNode(true));
}

const squares = document.querySelectorAll('.square');


squares.forEach((square) => {square.addEventListener('mouseover',function(e) { this.classList.add('colored')})
})
