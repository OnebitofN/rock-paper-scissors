


// function to get random computer choice rock, paper, or scissors
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return 'rock'
    } else if (computerChoice === 1) {
        return 'paper'
    } else if (computerChoice === 2) {
        return 'scissors'
    } else {
        return 'Computer could not choose'
    }
}



let computerChoice = getComputerChoice()
let userChoice = prompt("Plese chose your weapon. Rock, paper or scissors?").toLowerCase() 
// let userChoice = 'Rock'.toLowerCase() - hardcoded value of userChoice
let computerScore = 0
let userScore = 0

// function to play one round of game, also adds points to winner's score
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection ) {
        return "It's a tie"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return "Computer won! Paper beats Rock!"
        
    }else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        userScore++
        return "Player won! Rock beats Scissors!"
        
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        userScore++
        return "Player won! Paper beats Rock!"
        
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        return "Computer won! Scissors beat Paper!"
        
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        return "Computer won! Rock beats Scissors!"
        
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        userScore++
        return "Player won! Scissors beat paper!"
        
    } else {
        return "Invalid input"
    }
}
playRound(userChoice, computerChoice)
// it's here to test the function -   console.log(playRound(userChoice, computerChoice) + " Player Score: " + userScore + " Computer Score: " +  computerScore)


// function to play 5 rounds of game and update total score
function game () {
    for (let i = 0; i < 5; i++) {
       computerChoice = getComputerChoice()
       playerChoice = prompt("Plese chose your weapon. Rock, paper or scissors?")
       playRound(userChoice, computerChoice)
        // console.log(playRound(userChoice, computerChoice))
    } if (computerScore > userScore) {
        return "Computer Won at final game!"
    } else if (userScore > computerScore) {
        return "Player Won at final game"
    } else if (userScore === computerScore) {
        return "It's a tie at final game"
    }
}

console.log(game())


