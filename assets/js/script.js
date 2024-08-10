const choices = ["rock", "paper", "scissors"]
const playerAnswer = document.getElementById("playerAnswer");
const computerAnswer = document.getElementById("computerAnswer");
const result = document.getElementById("result");
const totalScore = document.getElementById("totalScore");
const player_choices  = Array.from(document.querySelectorAll(".player_choice"));







// Update our function with the computerChoice argument so we can use it here
function playGame(playerChoice, computerChoice) {
      // Console log our choices just to check
      console.log("Player choice: ", playerChoice)
      console.log("Computer choice: ", computerChoice)

      let tempResult;

      if (playerChoice === computerChoice) {
            tempResult = "It's a tie!";
      } else {
            switch(playerChoice){
                  case "rock":
                        tempResult = (computerChoice === "scissors") ? "You win :)" : "You lose :(";
                        break;
                  case "paper":
                        tempResult = (computerChoice=== "rock") ? "You win :)" : "You lose :(";
                        break;
                  case "scissors":
                        tempResult = (computerChoice === "paper") ? "You win :)" : "You lose :(";
                        break;      
            }
            
      }

      result.textContent = "Result: " + tempResult;
    

    
}

function displayPlayerChoice() {

      

}

function winner() {

}

function displayScore() {

}

function gameOver () {

}


/**
 * This code displayed the computers choice when a button is
 * pressed and displays it on the screen
 */
 

window.addEventListener("DOMContentLoaded", (event) => {

    player_choices.forEach(player_choice => {
      player_choice.addEventListener('click', function () {  // just a regulary function

            const playerChoice = player_choice.dataset.type  // retrieve the player's choice from the data-type attribute
            playerAnswer.innerHTML = "Player: " + playerChoice  // update player display
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            document.getElementById("computerAnswer").textContent = ("Computer: ") + computerChoice;
      
            // Call our playGame function here and pass it the playerChoice and computerChoice we've set here:
            playGame(playerChoice, computerChoice)
      });
      
    });


});





