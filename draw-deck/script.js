var deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 




function drawCard(deck) {
   var randomCard = Math.floor(Math.random() * deck.length);
  console.log('index:' + randomCard)
  
  var card = deck[randomCard]
 
  deck[randomCard] = deck[deck.length - 1] 

  deck.pop()
  
  return card

}



drawCard(deck)
console.log(deck)
drawCard(deck)
console.log(deck)
drawCard(deck)
drawCard(deck)
drawCard(deck)
drawCard(deck)
drawCard(deck)
drawCard(deck)
drawCard(deck)
drawCard(deck)
drawCard(deck)
console.log(deck)
