var values = [2, 3, 4, 5, 6, 7, 8, 9, 10 ,'J', 'Q', 'K', 'A']

var suits = ['♥', '♦', '♣', '♠']; 

var deck = []

var userCards = []

var computerCards = []

var cardClass = document.querySelector('.computer-container')

var playerContainer = document.querySelector('.player-container') 






function updatePlayerUI() {
       var playerCard = playerContainer.querySelector('.card-center')
    var playerCardCorner = playerContainer.querySelectorAll('.card-corner')
 

    playerCard.innerHTML = userCards.split(" of ")[1];
    playerCardCorner.forEach(corner => {
    corner.textContent = userCards.split(" of ")[0]; 
})

   if(userCards.split(" of ")[1] === '♦' || userCards.split(" of ")[1] === '♥') {
    playerContainer.style.color = 'red'

} else {
    playerContainer.style.color = 'black'
}

}


function updateUI() {
    var cardCenter = cardClass.querySelector('.card-center'); 
var cardCorner = cardClass.querySelectorAll('.card-corner')



    cardCenter.innerHTML = computerCards.split(" of ")[1];
    cardCorner.forEach(corner => {
    corner.textContent = computerCards.split(" of ")[0]; 
})



    if(computerCards.split(" of ")[1] === '♦' || computerCards.split(" of ")[1] === '♥') {
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
updatePlayerUI()



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

        if(value === 'J') {
            value = 11
        }

        if (value === 'Q') {
            value = 12
        }

        if (value === 'K') {
            value = 13
        }
         
        if(value === 'A') {
            value = 14
        }

        value = Number(value)

        return value

    }




