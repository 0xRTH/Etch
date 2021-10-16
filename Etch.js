const grid = document.querySelector(".grid");
const row = document.createElement("div");
row.classList.add('row');
const square = document.createElement('div');
square.classList.add('square');

const slider = document.querySelector('#myRange');
const output = document.querySelector('.sliderOutput');
output.innerHTML = slider.value;
generateGrid(slider.value);
slider.oninput = function() {
	output.innerHTML = this.value;	
	generateGrid(this.value);
}

var squares

function clearColor(e) {
	squares.forEach((square) => {
		square.classList.remove('colored')})
}


function generateGrid (x) {
	grid.innerHTML = "";
	row.innerHTML= "";
    for (i=0; i<x; i++) {
 		row.appendChild(square.cloneNode());
    }

    for (i=0; i<x; i++) {
		grid.appendChild(row.cloneNode(true));
    }
	squares = document.querySelectorAll('.square');
	squares.forEach((square) => {square.addEventListener('mouseover',function(e) {
		this.classList.add('colored')
		})
	})


}


