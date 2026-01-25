

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

var currentEvent = ["Dice roll", "Double", "Nothing"];

var randomEvent = "";



function newRound() {
  return (round += 1);
}

// function trackCurrentPlayer() {
//   return player1;
// }

// function trackPlayerTwo() {
//   return player2;
// }

// function trackPlayerOneScore() {
//   return playerOneScore;
// }

// function trackPlayerTwoScore() {
//   return playerTwoScore;
// }

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

}

function playButtonClicked() {
  newRound();
  generateDiceRoll();
  // checkWin();

  roundText.innerHTML = `Round: ${round}`;

  // console.log("Dice Roll:" + " " + lastDiceRoll);
  lastRoll.textContent = "Dice Roll:" + " " + lastDiceRoll;

  // Select random event
  trackCurrentEvent();

  eventText.textContent = "Event: " + randomEvent;

  //  Apply event rule to player 1 score

  if (currentPlayer === player1) {
    if (randomEvent === "Dice roll") {
      playerOneScore += lastDiceRoll;
      // console.log("score:" + " " + playerOneScore);
      playerOneText.textContent = "Score:" + " " + playerOneScore;
    } else if (randomEvent === "Double") {
      playerOneScore += lastDiceRoll * 2;
      playerOneText.textContent = "Score:" + " " + playerOneScore;
      // console.log("score:" + " " + playerOneScore);
    } else if (randomEvent === "Nothing") {
      playerOneText.textContent = "Score:" + " " + playerOneScore;
      // console.log("score:" + " " + playerOneScore);
    }
  }

  //  Apply event rule to player 2 score

  if (currentPlayer === player2) {
    if (randomEvent === "Dice roll") {
      playerTwoScore += lastDiceRoll;
      playerTwoText.textContent = "Score:" + " " + playerTwoScore;
    } else if (randomEvent === "Double") {
      playerTwoScore += lastDiceRoll * 2;
      playerTwoText.textContent = "Score:" + " " + playerTwoScore;
    } else if (randomEvent === "Nothing") {
      playerTwoText.textContent = "Score:" + " " + playerTwoScore;
    }
  }

  if (currentPlayer === player1) {
    nameDisplay.textContent = "Current Player: " + "Oscar";
    currentPlayer = player2;
  } else {
    nameDisplay.textContent = "Current Player: " + "Alex";
    currentPlayer = player1;
  }

  checkWin();

  // console.log("New Player: " + currentPlayer);
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
