var playerName = "Oscar";

var nameDisplay = document.querySelector("#name");

var roundText = document.querySelector("#round-text");

var playerOneText = document.querySelector("#player1-text");

var playerTwoText = document.querySelector("#player2-text");

var lastRoll = document.querySelector("#last-roll");

var eventText = document.querySelector("#event");

nameDisplay.textContent = " Current Player:" + " " + playerName;

var round = 0;

var player1 = "Oscar";

var player2 = "Alex";

var currentPlayer = player1;

var currentPlayerScore = 0;

var playerOneScore = 0;

var playerTwoScore = 0;

var lastDiceRoll = 1;

var currentEvent = ["Dice roll", "Double", "Nothing"];

var randomEvent = "";

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
  var randomNumber = Math.floor(Math.random() * currentEvent.length);
  randomEvent = currentEvent[randomNumber];
  return randomEvent;
  //   return currentEvent[randomNumber];
}

function checkWin() {
  if (playerOneScore >= 20 || playerTwoScore >= 20) {
    console.log("Game over");
    resetButtonClicked();
  }
}

function playButtonClicked() {
  checkWin();
  nameDisplay.textContent = "Current Player: " + currentPlayer;
  newRound();
  generateDiceRoll();

  // console.log("round:" + " " + round);
  roundText.innerHTML = `Round: ${round}`;

  // console.log("Dice Roll:" + " " + lastDiceRoll);
  lastRoll.textContent = "Dice Roll:" + " " + lastDiceRoll;

  // Select random event
  trackCurrentEvent();

  eventText.textContent = "event: " + randomEvent;

  //  Apply event rule to player 1 score

  if (currentPlayer === player1) {
    if (randomEvent === "Dice roll") {
      playerOneScore += lastDiceRoll;
      // console.log("score:" + " " + playerOneScore);
      playerOneText.textContent = "score:" + " " + playerOneScore;
    } else if (randomEvent === "Double") {
      playerOneScore += lastDiceRoll * 2;
      playerOneText.textContent = "score:" + " " + playerOneScore;
      // console.log("score:" + " " + playerOneScore);
    } else if (randomEvent === "Nothing") {
      playerOneText.textContent = "score:" + " " + playerOneScore;
      // console.log("score:" + " " + playerOneScore);
    }
  }

  //  Apply event rule to player 2 score

  if (currentPlayer === player2) {
    if (randomEvent === "Dice roll") {
      playerTwoScore += lastDiceRoll;
      playerTwoText.textContent = "score:" + " " + playerTwoScore;
    } else if (randomEvent === "Double") {
      playerTwoScore += lastDiceRoll * 2;
      playerTwoText.textContent = "score:" + " " + playerTwoScore;
    } else if (randomEvent === "Nothing") {
      playerTwoText.textContent = "score:" + " " + playerTwoScore;
    }
  }

  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }

  checkWin();

  console.log("New Player: " + currentPlayer);
}

function resetButtonClicked() {
  round = 0;

  score = 0;
  roundText.textContent = `Round: ${round}`;

  lastDiceRoll = `0`;
  lastRoll.textContent = "Dice Roll:" + " " + lastDiceRoll;

  playerOneScore = 0;
  playerOneText.textContent = "score:" + " " + playerOneScore;

  currentPlayer = player1;
  nameDisplay.textContent = currentPlayer;

  playerTwoScore = 0;
  playerTwoText.textContent = "score:" + " " + playerTwoScore;
}

var playButton = document.querySelector(".play");

playButton.addEventListener("click", playButtonClicked);

var resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", resetButtonClicked);
