const choices = ["ROCK", "PAPER", "SCISSORS"]
const playerAnswer = document.getElementById("playerAnswer");
const computerAnswer = document.getElementById("computerAnswer");


function playGame(playerChoice) {
          
      const computerChoice = Math.floor(Math.random() * choices.length);
      let result = "";
      
      

      if (playerChoice === "random") {
            result = "It's a tie!";
      } else {
            switch(playerChoice){
                  case "rock":
                        result = (computerChoice === "scissors") ? "You win :)" : "You lose :(";
                        break;
                  case "paper":
                        result = (computerChoice=== "rock") ? "You win :)" : "You lose :(";
                        break;
                  case "scissors":
                        result = (computerChoice === "paper") ? "You win :)" : "You lose :(";
                        break;      
            }
      }

  
    

      playerAnswer.textContent = `Player: ${playerChoice}`;
      computerAnswer.textContent = `Computer: ${computerChoice}`;
      resultDisplay.textContent = result;
}

function displayPlayerChoice(rock, paper, scissors) {

       document.getElementsByclassname('rock').textContent = rock;
       document.getElementsByclassname('paper').textContent = paper;
       document.getElementsByclassname('scissors').textContent = scissors;

}
 
function displayComputerChoice() {
      
}



function winner() {

}

function displayScore() {

}

function gameOver () {

}