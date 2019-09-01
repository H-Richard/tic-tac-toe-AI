var board;
const player = '0';
const ai = 'X';

const winCondition = [[ 0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6]
[1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
  document.querySelector(".endgame").style.display = "none"
  board = Array.from(Array(9).keys())
  console.log(board);
  for (var i = 0;i < cells.length; i++){
    cells[i].innerText = '';
    cells[i].style.removeProperty('background-color');
  }
}
