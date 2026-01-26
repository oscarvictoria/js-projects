// A simple card-duel game where the player and computer draw from the same deck and 
// compete over multiple rounds. Cards are never reused.
//  Highest card wins each round.

// MVP

// A deck of numbers 1–13
// Player and computer each have a hand
// Hands are dealt from the deck (no duplicates)

// Each round:

// Player plays one card
// Computer plays one card
// Higher card wins the round
// Winner gets 1 point
// Hands are refilled from the deck when empty
// Game ends when:
// Deck is empty and
// Both hands are empty

// Log:

// Cards played
// Round winner
// Current score
// Declare final winner

var deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 

var usedCards = []

var playerCards = 0
var computerCards = 0

var playerPoints = 0; 

var computerPoints = 0;

function drawDeck(arr) {

  var randomCard = Math.floor(Math.random() * arr.length);

  var card = arr[randomCard]; 

  arr[randomCard] = arr[arr.length - 1]; 

  arr.pop(); 

  return card; 

}

function dealHands() {

    if (deck.length <= 2) {
        console.log('Gme Over'); 
    }

    playerCards = drawDeck(deck)
    console.log('Player Hand: ' + playerCards)
    computerCards = drawDeck(deck)
   console.log('Computer Hand: ' + computerCards)

    if (playerCards > computerCards) {
        console.log('Player Wins')
        playerPoints += 1; 
    } else if (computerCards > playerCards) {
        console.log('Computer Wins')
        computerPoints += 1; 
    } else if (playerCards === computerCards) {
        console.log("Its a tie")
        playerPoints += 1; 
        computerPoints += 1; 
    }


    console.log("Player Points: " + playerPoints); 
    console.log("Computer Points: " + computerPoints); 

    
 determineWinner()
}


function determineWinner() {
  if (playerPoints >= 5) {
    console.log('Game Over. Player Wins')
  } else if (computerPoints >= 5) {
    console.log('Game Over. Computer Wins')
  }
    
}



