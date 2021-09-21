var player; 
var winner;
var selectedPlayer = document.getElementById('selected-player');
var selectedWinner = document.getElementById('selected-winner');
var squares = document.getElementsByClassName('square');
const color = '#01baef'; 

const chooseSquare = (id) => {
	let square = document.getElementById(id);
	if (square.innerHTML !== '-') return;

	square.innerHTML = player;
	square.style.color = '#121212';

	if (player === 'x') {
		player = 'o';
	} else {
		player = 'x';
	}

	changePlayer(player);
	checkWinner();
}

const changePlayer = value => {
	player = value;
	selectedPlayer.innerHTML = player;
}

const checkWinner = () => {
	let allPossibilities = [
		[1,2,3], [4,5,6], [7,8,9],
		[1,4,7], [2,5,8], [3,6,9],
		[1,5,9], [3,5,7]
	];

	for(let possibility of allPossibilities) {
		let [first, second, third] = possibility;
		
		let [square1, square2, square3] = [squares[first - 1], squares[second - 1], squares[third - 1]];

		if (checkSequence(square1, square2, square3)) {
			changeSquareColor(square1, square2, square3);
			changeWinner(square1);
			break;
		}
	}
}

const changeWinner = (square) => {
	winner = square.innerHTML;
	selectedWinner.innerHTML = winner;
}

const changeSquareColor = (square1, square2, square3) => {
	square1.style.backgroundColor = color;
	square2.style.backgroundColor = color;
	square3.style.backgroundColor = color;
}

const checkSequence = (square1, square2, square3) => {
	let isEqual = false;

	if (square1.innerHTML !== '-' 
			&& square1.innerHTML === square2.innerHTML
			&& square2.innerHTML === square3.innerHTML
			&& !winner) {
		isEqual = true;
	}

	return isEqual;
}

const reinit = () => {
	winner = null;
	selectedWinner = null;

	for(let square of squares) {
		square.style.backgroundColor = '#eee';
		square.style.color = '#eee';
		square.innerHTML = '-';
	}
}

changePlayer('x');
