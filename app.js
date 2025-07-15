console.log("Welcome to Tic Tac Toe!");

let startMusic = new Audio("music/startgame.mp3");
let endMusic = new Audio("music/endgame.mp3");

document.querySelector("#twoPlayer").addEventListener("click", () => {
  let todo = document.querySelector("#Set1");
  todo.innerHTML = `
  <!-- Turn Info -->
  <div class="flex flex-col items-center justify-center mt-4">
    <p class="text-2xl font-bold" id="turn-text"> <span id="hide-on-click">Turn for (X)</span></p>
  </div>

  <!-- Game Grid -->
  <div class="container grid grid-cols-3 mx-auto max-w-xs mt-6">
    <!-- 9 Boxes -->
    <div class="box flex justify-center items-center h-24 border-r-4 border-b-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>
    <div class="box flex justify-center items-center h-24 border-r-4 border-b-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>
    <div class="box flex justify-center items-center h-24 border-b-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>

    <div class="box flex justify-center items-center h-24 border-r-4 border-b-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>
    <div class="box flex justify-center items-center h-24 border-r-4 border-b-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>
    <div class="box flex justify-center items-center h-24 border-b-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>

    <div class="box flex justify-center items-center h-24 border-r-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>
    <div class="box flex justify-center items-center h-24 border-r-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>
    <div class="box flex justify-center items-center h-24 hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>
  </div>  

  <!-- Reset Button -->
  <div class="flex justify-center mt-6">
    <button class="reset bg-black text-white px-6 py-2 rounded hover:bg-purple-700 transition">Reset Game</button>
  </div>`

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
})
document.querySelector("#vsComputer").addEventListener("click", () => {
  let todo = document.querySelector("#Set1");
  todo.innerHTML = `
  <!-- Turn Info -->
  <div class="flex flex-col items-center justify-center mt-4">
    <p class="text-2xl font-bold" id="turn-text"> <span id="hide-on-click">Your Turn</span></p>
  </div>

  <!-- Game Grid -->
  <div class="container grid grid-cols-3 mx-auto max-w-xs mt-6">
    <!-- 9 Boxes -->
    <div class="box flex justify-center items-center h-24 border-r-4 border-b-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>
    <div class="box flex justify-center items-center h-24 border-r-4 border-b-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>
    <div class="box flex justify-center items-center h-24 border-b-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>

    <div class="box flex justify-center items-center h-24 border-r-4 border-b-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>
    <div class="box flex justify-center items-center h-24 border-r-4 border-b-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>
    <div class="box flex justify-center items-center h-24 border-b-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>

    <div class="box flex justify-center items-center h-24 border-r-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>
    <div class="box flex justify-center items-center h-24 border-r-4 border-black hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>
    <div class="box flex justify-center items-center h-24 hover:cursor-pointer hover:bg-purple-600"><span class="boxText text-3xl font-bold"></span></div>
  </div>  

  <!-- Reset Button -->
  <div class="flex justify-center mt-6">
    <button class="reset bg-black text-white px-6 py-2 rounded hover:bg-purple-700 transition">Reset Game</button>
  </div>`

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
      let name = "";
      if(boxTexts[a].innerText === "X") {
        name = "you" ;
        document.getElementById("turn-text").innerText = `Hurray ${name} Win! 🎉`;
      }
      else{
        name = "computer";
        document.getElementById("turn-text").innerText = `Ohh ${name} Win!`;
      }
      
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
    if (boxText.innerText === "" && !isGameOver && turn === "X") {
      boxText.innerText = turn;
     
      checkWin();
   
      if (!isGameOver) {
        startMusic.play();
        turn = changeTurn();
        document.getElementById("turn-text").innerText = `Turn for (${turn})`;
      }
    }
    // Computer's turn
    if (!isGameOver && turn === "O") {
      let availableBoxes = [];
      Array.from(boxes).forEach((box, index) => {
        if (box.querySelector(".boxText").innerText === "") {
          availableBoxes.push(index);
        }
      });

      if (availableBoxes.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableBoxes.length);
        const computerBox = boxes[availableBoxes[randomIndex]];
        computerBox.querySelector(".boxText").innerText = "O";
        
        checkWin();
      
        if (!isGameOver) {
          turn = changeTurn();
          startMusic.play();
          document.getElementById("turn-text").innerText = `Your Turn`;
        }
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
  document.getElementById("turn-text").innerText = `Your Turn`;
});
})


