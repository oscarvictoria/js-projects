var count = 0;

function increment() {
  // Once user clicks the button
  var newCount = (count += 1);
  return newCount;
}

function reset() {
  var originalValue = 0;
  count = originalValue;
  return count;
}

console.log(count);
