var playerOneScore = 0;

var playerTwoScore = 0;

function increasePlayerOne() {
  return (playerOneScore += 1);
}

function increasePlayerTwo() {
  return (playerTwoScore += 1);
}

function resetScores() {
  playerOneScore = 0;
  playerTwoScore = 0;

  return "Score was reset";
}
