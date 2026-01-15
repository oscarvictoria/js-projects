var result = 1;

function rollDice() {
  result = Math.floor(Math.random() * (7 - 1) + 1);

  return result;
}
