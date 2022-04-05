const option = ['Rock', 'Paper','Scissor']
const text = document.querySelector("#text")
let playerScore = parseInt(document.querySelector('#playerScore').innerText);
let computerScore = parseInt(document.querySelector('#computerScore').innerText);   
function computerPlay(){
let computer = option[Math.floor(Math.random()*option.length)];
return computer    
}
const rockButton = document.querySelector('#rockButton')
rockButton.addEventListener("click", function(){
    playerInput=('Rock')
    game()
})
const paperButton = document.querySelector('#paperButton')
paperButton.addEventListener("click", function(){
    playerInput=('Paper')
    game()
})
const scissorButton = document.querySelector('#scissorButton')
scissorButton.addEventListener("click", function(){
    playerInput=('Scissor')
    game()
})

const resetGame = document.querySelector('#resetButton')
resetGame.addEventListener("click", function(){
    playerScore = 0
    computerScore = 0
    document.querySelector('#playerScore').innerText = playerScore;
    document.querySelector('#computerScore').innerText = computerScore;
    text.textContent = 'First to 5 Point Win'
})
function playRound(playerSelection, computerSelection){ 
var playerSelection = playerInput;
var computerSelection = computerPlay()
 
    if(playerSelection === 'Rock'){
        switch (computerSelection){
            case 'Rock':
                return "Tie"
            case 'Paper':
                return "Lose"
            case 'Scissor':
                return "Win"
        }
    }else if(playerSelection === 'Paper'){
        switch (computerSelection){
            case 'Rock':
                return "Win"
            case 'Paper':
                return "Tie"
            case 'Scissor':
                return "Lose"
        }
    }else if(playerSelection === 'Scissor'){
        switch (computerSelection){
            case 'Rock':
                return "Lose"
            case 'Paper':
                return "Win"
            case 'Scissor':
                return "Tie"
        }
    }
}
function game(){
    var playerSelection = playerInput;
    var computerSelection = computerPlay()
    const lose = "You Lose!";
    const win = "You Win!";
    const tie = "It's a tie";
    for (let i = 0; i < 1; i++) {
        const result = playRound()
        switch (result){
            case 'Win':
                console.log(win,playerSelection,computerSelection);
                text.textContent = `Player Win.`
                playerScore++
                document.querySelector('#playerScore').innerText = playerScore;
                break;
            case 'Lose':
                console.log(lose,playerSelection,computerSelection);
                text.textContent = `Computer Win. `
                computerScore++
                document.querySelector('#computerScore').innerText = computerScore;
                break;
            case 'Tie':
                text.textContent = `It A Tie. Both Picked ${playerSelection}`
                console.log(tie,playerSelection,computerSelection);
                break;
        }
}
if (playerScore == 5 || computerScore == 5){
    alert("Player Win, Computer Lose. Click Reset To Play Again.")
    text.textContent = 'Game Over'
}
} 

