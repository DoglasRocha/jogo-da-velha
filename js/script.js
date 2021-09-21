var player;
var selectedPlayer = document.getElementById('selected-player');

const chooseSquare = (id) => {
	let square = document.getElementById(id);

	square.innerHTML = player;
	square.style.color = '#121212';
}

const changePlayer = value => {
	player = value;
	selectedPlayer.innerHTML = player;
}

changePlayer('x');
