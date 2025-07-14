console.log("Welcome to Tic Tac Toe!");

let startMusic = new Audio("music/startgame.mp3");
let endMusic = new Audio("music/endgame.mp3");

let turn = "X";
let isGameOver = false;

const changeTurn = () => (turn === "X" ? "O" : "X");

const checkWin = () => {
  const boxTexts = document.getElementsByClassName("boxText");
  const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  // Check for a win
  for (let win of wins) {
    const [a, b, c] = win;
    if (
      boxTexts[a].innerText &&
      boxTexts[a].innerText === boxTexts[b].innerText &&
      boxTexts[a].innerText === boxTexts[c].innerText
    ) {
      document.getElementById("turn-text").innerText = `Player ${boxTexts[a].innerText} Wins! 🎉`;
      endMusic.play();
      isGameOver = true;
      return;
    }
  }

  // ✅ Check for draw: no winner + all cells filled
  let isDraw = true;
  for (let box of boxTexts) {
    if (box.innerText === "") {
      isDraw = false;
      break;
    }
  }

  if (isDraw) {
    document.getElementById("turn-text").innerText = `It's a Draw! 🤝`;
    isGameOver = true;
  }
};


const boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  const boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "" && !isGameOver) {
      boxText.innerText = turn;
     
      checkWin();
      if(!isGameOver){
      startMusic.play();
      }
      if (!isGameOver) {
        turn = changeTurn();
        document.getElementById("turn-text").innerText = `Turn for (${turn})`;
      }
    }
  });
});
document.getElementById("hide-on-click").addEventListener("click", function () {
  this.classList.add("hidden");
});

// Reset Functionality
document.querySelector(".reset").addEventListener("click", () => {
  const boxTexts = document.getElementsByClassName("boxText");
  Array.from(boxTexts).forEach((e) => (e.innerText = ""));
  turn = "X";
  isGameOver = false;
  document.getElementById("turn-text").innerText = `Turn for Player1 - (${turn})`;
});

