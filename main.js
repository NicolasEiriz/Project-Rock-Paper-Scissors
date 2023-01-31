//Create a function that will randomly return either 'Rock', 'Paper' or Scissors

//if the number is > 66 it will be return 'Rock', if it is > 33 it will be return 'Paper' and if it is > 0 it will be return Scissors

function getComputerChoice(){
  let number = Math.floor(Math.random()*100)

  if(number > 66){
    return 'Rock'
  } else if(number > 33){
    return 'Paper'
  } else{
    return 'Scissors'
  }

}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

function playRockPaperScissors(playerSelection){
  let playerChoice = playerSelection.toLowerCase()

  let computerChoice = getComputerChoice().toLowerCase()
  
  if(computerChoice === 'rock' &&  playerChoice === 'scissors' || computerChoice === 'paper' && playerChoice === 'rock' || computerChoice === 'scissors' && playerChoice === 'paper'){
    return `You Lose! ${computerChoice} beats ${playerChoice}`
  } else if(playerChoice === computerChoice){return 'Its a tie!'} 

  else{
    return `You Win! ${playerChoice} beats ${computerChoice}`
  }
}



let buttonRock = document.querySelector('#rock')
let buttonPaper = document.querySelector('#paper')
let buttonScissors = document.querySelector('#scissor')


buttonRock.addEventListener('click', playRound)
buttonPaper.addEventListener('click', playRound)
buttonScissors.addEventListener('click', playRound)

let divResults = document.querySelector('#results')
let playerScore = document.querySelector('#playerScore')
let computerScore = document.querySelector('#computerScore')
let finalResults = document.querySelector('#finalResults')


function playRound(e){
  if(playerScore == 5 && computerScore < 5){
    finalResults.textContent = 'player WINS!'
    return
  }
  else if(computerScore == 5 && playerScore < 5){
    
  }
  console.log(playRockPaperScissors(e.target.textContent))
  
  divResults.textContent = playRockPaperScissors(e.target.textContent)

  divResults.style.fontSize = '20px'
}
