var deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 


function drawCard(deck) {
   var randomCard = Math.floor(Math.random() * deck.length);
  // console.log('index:' + randomCard)
  
  var card = deck[randomCard]
 
  deck[randomCard] = deck[deck.length - 1] 

  deck.pop()
  
  return card

}


var playerHand = []

var computerHand = []

function dealHands() {

    if (deck.length < 4) {
        console.log('No more cards in deck')
        return
    }


    playerHand.push(drawCard(deck))
    playerHand.push(drawCard(deck))
  
   computerHand.push(drawCard(deck))
   computerHand.push(drawCard(deck))
  
  
   console.log(playerHand)
   console.log(computerHand)
  
  console.log('Remaining cards: ' + deck.length)

}

dealHands()
dealHands()
dealHands()
dealHands()

