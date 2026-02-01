var values = [2, 3, 4, 5, 6, 7, 8, 9, 10 ,'Jack', 'Queen', 'King', 'Ace']

var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']

var deck = []

var userCards = []

var computerCards = []

var cardClass = document.querySelector('.card')

var cardCenter = document.querySelector('.card-center'); 
var cardCorner = document.querySelectorAll('.card-corner')


function updateUI() {

    cardCenter.innerHTML = computerCards.split(" of ")[1];
    cardCorner.forEach(corner => {
    corner.textContent = computerCards.split(" of ")[0]; 
})

    if(computerCards.split(" of ")[1] === 'Diamonds' || computerCards.split(" of ")[1] === 'Hearts') {
cardClass.style.color = 'red'
} else {
    cardClass.style.color = 'black'
}




}

for(let i = 0; i < suits.length; i++) {
  for (let j = 0; j < values.length; j++) {
    var card = values[j] + " of " + suits[i]
    // console.log(card)
    deck.push(card)
  }
}

function drawCard() {
  var randomNumber = Math.floor(Math.random() * deck.length); 
  var randomCard = deck[randomNumber]; 

  deck[randomNumber] = deck[deck.length - 1]; 
  deck.pop()
  return randomCard; 

}

function playRound() {
 userCards = drawCard()
computerCards = drawCard()

updateUI()



if(getNumber(userCards) > getNumber(computerCards)) {
    console.log(`User:${userCards} vs Computer: ${computerCards} `)
    return 'User Wins'
} else if (getNumber(userCards) === getNumber(computerCards)) {
    console.log(`User:${userCards} vs Computer: ${computerCards} `)
    return 'Its a tie'
} else  {
      console.log(`User:${userCards} vs Computer: ${computerCards}`)
    return 'Computer Wins'
}
}

  function getValue(card) {
    
    return card.split(" of ")[0]; 

    }

    function getNumber(card) {

        var value = getValue(card)

        if(value === 'Jack') {
            value = 11
        }

        if (value === 'Queen') {
            value = 12
        }

        if (value === 'King') {
            value = 13
        }
         
        if(value === 'Ace') {
            value = 14
        }

        value = Number(value)

        return value

    }




