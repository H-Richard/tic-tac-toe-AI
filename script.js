var board;
const player = '◯';
const ai = 'X';

const winCondition = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [0, 4, 8],
 [6, 4, 2]]

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
  document.querySelector(".endgame").style.display = "none"
  board = Array.from(Array(9).keys())
  console.log(board);
  for (var i = 0;i < cells.length; i++){
    cells[i].innerText = '';
    cells[i].style.removeProperty('background-color');
    cells[i].addEventListener('click', turnClick, false);
  }
}

function turnClick(square) {
  turn(square.target.id, player)
  //console.log(square.target.id)
}

function turn(squareId, player) {
  board[squareId] = player;
  document.getElementById(squareId).innerText = player;
  let win = checkWin(board, player)
  if (win) gameOver(win)
}

function checkWin(board, player) {
  let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of winCondition.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {index: index, player: player};
			break;
		}
	}
  console.log(gameWon);
	return gameWon;
}

function gameOver(gameWon) {
  for (let index of winCondition[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
      gameWon.player == player ? "teal" : "red";
  }
  for (var i = 0; i < cells.length;i++){
    cells[i].removeEventListener('click', turnClick, false);
  }
}
