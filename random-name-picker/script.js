var array = ["Oscar", "Danny", "Victoria"];

function getRandomName() {
  var randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}
