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

getComputerChoice()