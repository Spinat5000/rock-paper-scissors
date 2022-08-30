const options = ["rock", "paper", "scissors"]; //array with options for game, global variable as it is used in different functions

function getComputerChoice(){
    let computersChoice = options[Math.floor(Math.random()*3)]; // chooses one of the three options out of array at random
    return computersChoice;
}


function getPlayerChoice(){ // change to prompt blabla and blbla.toLowerCase()
    let playersChoice = prompt("Enter your choice of rock, paper, scissors :");
    playersChoice = playersChoice.toLowerCase();
    if (options.includes(playersChoice)){
      return playersChoice;
    } else{
      console.log(`not a valid entry`); //??? is it possible to call the function again?
      return null;
    }
}


function playRound(playerSelection, computerSelection){
  if (playerSelection == computerSelection){
    return "draw";
  }else if(playerSelection =="rock" && computerSelection =="paper"||playerSelection =="scissors" && computerSelection =="rock"||playerSelection =="paper" && computerSelection =="scissors"){
    return "Computer wins";
  } else{
    return "Player wins";
  }
}



function game(){
  let numbRound = 0;
  let numbCompWin = 0;
  let numbPlayerWin = 0;
  for (let i = 0; i<5; i++){

    let actualRound = playRound(getPlayerChoice(),getComputerChoice());
    console.log(actualRound);
    if (actualRound == "Computer wins"){
      numbCompWin++;
      numbRound++;
    }else if (actualRound =="Player wins"){
      numbPlayerWin++;
      numbRound++;
    }else{
      numbRound++;
    }
  }

  if (numbCompWin < numbPlayerWin){
    console.log(`You win the game! Computer has won ${numbCompWin} rounds and you have won ${numbPlayerWin} rounds.`)
  } else if (numbCompWin > numbPlayerWin){
    console.log(`Computer has won the game! Computer has won ${numbCompWin} rounds and you have won ${numbPlayerWin} rounds.`)
  }else{
    console.log(`It's a draw. Computer has won ${numbCompWin} rounds and you have won ${numbPlayerWin} rounds.`)
  }
}

game();
