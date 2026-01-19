var choices = ['rock', 'paper', 'scissors']

console.log('Pick a choice')

function playRound(value) {

    var computer = computerChoice(); 

    if(computer === value) {
        console.log('its a tie!'); 
        return;
    }

    if (value === 'rock' && computer === 'scissors') {
        console.log('user wins')
    } else if(value === 'paper' && computer === 'rock') {
        console.log('user wins')
    } else if(value === 'scissors' && computer === 'paper') {
        console.log('User Wins') 
    } else  {  
    console.log(computer)
    console.log(value)
    console.log('Computer Wins')
   }
   
}


function computerChoice() {
    var randomNum = Math.floor(Math.random() * choices.length); 
    var target = choices[randomNum]; 

    return target; 
}





