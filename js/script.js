var player;
var selectedPlayer = document.getElementById('selected-player');
var squares = document.getElementsByClassName('square');

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
}

const changePlayer = value => {
	player = value;
	selectedPlayer.innerHTML = player;
}

const checkWinner = () => {
	
}

const checkSequence = () => {

}

changePlayer('x');
