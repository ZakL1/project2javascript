const choices = ["rock", "paper", "scissors"]
const playerAnswer = document.getElementById("playerAnswer");
const computerAnswer = document.getElementById("computerAnswer");
const result = document.getElementById("result");
const totalScore = document.getElementById("totalScore");
const player_choices  = Array.from(document.querySelectorAll(".player_choice"));

// player_choice.addEventListener("click", function(){
     // console.log("I've been clicked")
//});









function playGame(playerChoice) {
          
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      console.log(computerChoice);
     // let result = "";
      
      

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
     // resultDisplay.textContent = result;
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


window.addEventListener("DOMContentLoaded", (event) => {

    player_choices.forEach(player_choice => {
      player_choice.addEventListener('click', function(){
            console.log("I've been clicked");
      })
    });
});