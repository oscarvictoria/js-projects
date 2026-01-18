var playerName = "Oscar";

var nameDisplay = document.querySelector("#name");

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
  if (playerOneScore === 20 || playerTwoScore === 20) {
    //  Stop game when someone wins
    //  Display winner

    console.log("Game over");
  }
}

function playButtonClicked() {
  checkWin();

  console.log("Current Player: " + currentPlayer);
  newRound();
  generateDiceRoll();

  console.log("round:" + " " + round);
  console.log("Dice Roll:" + " " + lastDiceRoll);

  // Select random event
  trackCurrentEvent();

  console.log("event: " + randomEvent);

  //  Apply event rule to score

  if (currentPlayer === player1) {
    if (randomEvent === "Dice roll") {
      playerOneScore += lastDiceRoll;
      console.log("score:" + " " + playerOneScore);
    } else if (randomEvent === "Double") {
      playerOneScore += lastDiceRoll * 2;
      console.log("score:" + " " + playerOneScore);
    }
  } else if (currentPlayer === player2) {
    if (randomEvent === "Dice roll") {
      playerTwoScore += lastDiceRoll;
      console.log("score:" + " " + playerTwoScore);
    } else if (randomEvent === "Double") {
      playerTwoScore += lastDiceRoll * 2;
      console.log("score:" + " " + playerTwoScore);
    }
  }

  //  Switch current player
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }

  console.log("New Player: " + currentPlayer);
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
