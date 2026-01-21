var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 


function generateUserValue() {
    var userCard = Math.floor(Math.random() * cards.length);
    return cards[userCard]; 

}


function generateComputerValue() {
    var computerCard = Math.floor(Math.random() * cards.length); 
    return cards[computerCard]; 

}

function playRound() {
    var userValue = generateUserValue(); 
    var computerValue = generateComputerValue()


    if(userValue > computerValue) {
        console.log(`User Wins: ${userValue}, ${computerValue}`)
    } else if (computerValue > userValue) {
         console.log(`Computer Wins: ${computerValue}, ${userValue}`)
    } else {
         console.log(`Its a tie: ${computerValue}, ${userValue}`)
    }
}
