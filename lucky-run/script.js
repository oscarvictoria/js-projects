var playerName = "Oscar";

var nameDisplay = document.querySelector("#name");

nameDisplay.textContent = " Current Player:" + " " + playerName;

var round = 0;

var player1 = "Oscar";

var player2 = "Alex";

var playerOneScore = 0;

var playerTwoScore = 0;

var lastDiceRoll = 1;

var currentEvent = ["Dice roll", "Double", "Nothing"];

function trackRound() {
  return round;
}

function newRound() {
  return (round += 1);
}

function trackCurrentPlayer() {
  return player1;
}

function trackPlayerTwo() {
  return player2;
}

function trackPlayerOneScore() {
  return playerOneScore;
}

function trackPlayerTwoScore() {
  return playerTwoScore;
}

function generateDiceRoll() {
  lastDiceRoll = Math.floor(Math.random() * (7 - 1) + 1);
  return lastDiceRoll;
}

function trackCurrentEvent() {
  return currentEvent[lastDiceRoll];
}

function playButtonClicked() {
  newRound();
  generateDiceRoll();

  console.log("round:" + " " + round);
  console.log("Dice Roll:" + " " + lastDiceRoll);

  // Select random event

  //  Apply event rule to score

  //  Switch current player
}

function resetButtonClicked() {
  //  Reset round

  round = 0;

  //  Reset scores
  score = 0;

  //  Reset current player

  //  Clear last roll / event

  console.log("round:" + " " + round);
}

var playButton = document.querySelector(".play");

playButton.addEventListener("click", playButtonClicked);

var resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", resetButtonClicked);
