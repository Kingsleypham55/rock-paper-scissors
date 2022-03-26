const option = ['rock', 'paper','scissor']

   
function computerPlay(){
let computer = option[Math.floor(Math.random()*option.length)];
return computer    
}
function playRound(playerSelection, computerSelection){ 
var playerSelection = prompt('Rock, Paper, or Scissor?').toLowerCase();
var computerSelection = computerPlay()
 
    if(playerSelection === 'rock'){
        switch (computerSelection){
            case 'rock':
                return "Tie"
            case 'paper':
                return "Lose"
            case 'scissor':
                return "Win"
        }
    }else if(playerSelection === 'paper'){
        switch (computerSelection){
            case 'rock':
                return "Win"
            case 'paper':
                return "Tie"
            case 'scissor':
                return "Lose"
        }
    }else if(playerSelection === 'scissor'){
        switch (computerSelection){
            case 'rock':
                return "Lose"
            case 'paper':
                return "Win"
            case 'scissor':
                return "Tie"
        }
    }
}
function game(){
    const lose = "You Lose!";
    const win = "You Win!";
    const tie = "It's a tie";
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const result = playRound()
        switch (result){
            case 'Win':
                console.log(win);
                playerScore++
                break;
            case 'Lose':
                console.log(lose);
                computerScore++
                break;
            case 'Tie':
                console.log(tie);
                playerScore++
                computerScore++
                break;
        }
}
console.log("Final Result: Player: "+ playerScore + " Computer: " + computerScore);
if (playerScore > computerScore){
    console.log("You Win The Game .")
} else if ( playerScore < computerScore){
    console.log("Computer win The Game.")
}else {
    console.log("The Game Was A tie.")
}
}
game()