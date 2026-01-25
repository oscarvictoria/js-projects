

var player1 = "Oscar";

var player2 = "Alex";

var currentPlayer = player1;

var playerTwo = document.querySelector("#name-2");

var playerOne = document.querySelector('#name-1')

playerTwo.textContent = player2;

playerOne.textContent = player1; 

var nameDisplay = document.querySelector("#name");

nameDisplay.textContent = " Current Player:" + " " + currentPlayer;

var roundText = document.querySelector("#round-text");

var playerOneText = document.querySelector("#player1-text");

var playerTwoText = document.querySelector("#player2-text");

var lastRoll = document.querySelector("#last-roll");

var eventText = document.querySelector("#event");



var round = 0;







var playerOneScore = 0;

var playerTwoScore = 0;

var lastDiceRoll = 1;

var currentEvent = ["Dice roll", "Double", "Normal"];

var randomEvent = "";



function newRound() {
  return (round += 1);
}

function generateDiceRoll() {
  lastDiceRoll = Math.floor(Math.random() * (7 - 1) + 1);
  return lastDiceRoll;
}

function trackCurrentEvent() {
  var randomNumber = Math.floor(Math.random() * currentEvent.length);
  randomEvent = currentEvent[randomNumber];
  return randomEvent;
  //   return currentEvent[randomNumber];
}

function checkWin() {
  if (playerOneScore >= 20) {
    window.alert(
      "Game Over. Player One Wins with a score of " + playerOneScore
    );
    window.alert("Play Again");
    resetButtonClicked();
  } else if (playerTwoScore >= 20) {
    window.alert(
      "Game Over. Player Two Wins with a score of " + playerTwoScore
    );
    window.alert("Play Again");
    resetButtonClicked();
  }
}

function renderUI() {
  roundText.innerHTML = `Round: ${round}`;

  lastRoll.textContent = "Dice Roll:" + " " + lastDiceRoll;

  // Select random even

  eventText.textContent = "Event: " + randomEvent;

   playerOneText.textContent = "Score:" + " " + playerOneScore;

   playerTwoText.textContent = "Score:" + " " + playerTwoScore;


   nameDisplay.textContent = "Current Player: " + currentPlayer;




}

function playButtonClicked() {

  var points = 0


   newRound();
   generateDiceRoll();
  trackCurrentEvent();


  if(randomEvent === 'Normal') {
    points = lastDiceRoll; 
  } else if (randomEvent === 'Double') {
    points = lastDiceRoll * 2
  } else {
    points = 0
  }

  if (currentPlayer === player1) {
    playerOneScore += points; 
  } else if (currentPlayer === player2) {
    playerTwoScore += points; 
  }




  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }

  checkWin();
  renderUI();


}

function resetButtonClicked() {
  round = 0;

  roundText.textContent = `Round: ${round}`;

  lastDiceRoll = 0;
  lastRoll.textContent = "Dice Roll:" + " " + lastDiceRoll;

  playerOneScore = 0;
  playerOneText.textContent = "Score:" + " " + playerOneScore;

  currentPlayer = player1;

  playerTwoScore = 0;
  playerTwoText.textContent = "Score:" + " " + playerTwoScore;

  nameDisplay.textContent = "";
}

var playButton = document.querySelector(".play");

playButton.addEventListener("click", playButtonClicked);

var resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", resetButtonClicked);
