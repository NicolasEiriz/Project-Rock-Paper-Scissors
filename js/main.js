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

    pcScore += 1
    return `You Lose! ${computerChoice} beats ${playerChoice}`

    
  } else if(playerChoice === computerChoice){return 'Its a tie!'} 

  else{
    pScore += 1
    return `You Win! ${playerChoice} beats ${computerChoice}`
  }
}

let divResults = document.querySelector('#results')

let playerScore = document.querySelector('#playerScore')

let pScore = 0

let computerScore = document.querySelector('#computerScore')

let pcScore = 0

let finalResults = document.querySelector('#finalResults')

//Grab the three buttons of the html file

let buttons = document.querySelectorAll('button')

//Add an event listener to the buttons that call the playRound function with the correct playerSelection every time a button is clicked

buttons.forEach(button => {
  button.addEventListener('click', playRound)
})


//Display the running score and announce a winner of the game once one player reaches 5 points

function playRound(e){

  if(pScore == 5 || pcScore == 5){
    if(pScore == 5){

      finalResults.textContent = 'player WINS!'
      pScore = 0
      pcScore = 0
      
    return
    } else if (pcScore == 5){

      finalResults.textContent = 'computer WINS!'
      pScore = 0
      pcScore = 0
      
    return
    }} else{
  
  finalResults.textContent = ''   
  divResults.textContent = playRockPaperScissors(e.target.textContent)

  divResults.style.fontSize = '20px'
  playerScore.textContent = `Player Score: ${pScore}`

  computerScore.textContent = `Computer score ${pcScore}`

}
}











