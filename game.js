// Code for the rock, paper, scissors game with GUI

// Variables to keep track of the scores
let playerScore = 0;
let computerScore = 0;

// Variables to access html elements and change them with javascript

// Scores
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");

// Options to choose for players
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Player selection, computer selection and round outcome
const playerSel = document.getElementById("playerSelection");
const computerSel = document.getElementById("computerSelection"); 
const roundOutcome = document.getElementById("outcome");

// Events when a player chooses 1 out of the 3 options, note that computer's play
// is chosen when computerPlay() is called inside playRound function
rock.addEventListener("click", () => {
    playerSel.src = "images/rock.jpeg";
    playRound("rock", computerPlay());
});

paper.addEventListener("click", () => {
    playerSel.src = "images/paper.jpeg";
    playRound("paper", computerPlay());
});

scissors.addEventListener("click", () => {
    playerSel.src = "images/scissors.jpeg";
    playRound("scissors", computerPlay());
});

updateScore();

// Restarts score and webpage messages
function restart(){
    playerScore = 0;
    computerScore = 0;
    updateScore();
    playerSel.src = "";
    computerSel.src = "";
    roundOutcome.textContent = "";    
}

// Updates both scores
function updateScore(){
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;
}

// Chooses computer play randomly
function computerPlay(){
    let play = Math.floor(Math.random() *3);

    if(play === 0){
        return "rock";
    } else if(play === 1){
        return "paper";
    } else if(play === 2){
        return "scissors";
    } else{
        return "Something went terribly wrong."
    }
}// end computerPlay function

// Evaluates the result between the player and computer selection
function playRound(playerSelection = "rock", computerSelection = "scissors"){
    // both player and computer selection are transform to lower case letters
    playerSelection = playerSelection.toLocaleLowerCase();
    computerSelection = computerSelection.toLocaleLowerCase();
    // Computer selection image according to the chosen play
    computerSel.src = `images/${computerSelection}.jpeg`;
    // Each scenario when the player chooses rock
    if(playerSelection === "rock"){
        if(computerSelection === "scissors"){
            playerScore++;
            roundOutcome.textContent = "You win! Rock beats Scissors.";
        }else if(computerSelection === "paper"){
            computerScore++;
            roundOutcome.textContent = "You lose! Paper beats Rock.";
        }else if(computerSelection === "rock"){
        roundOutcome.textContent = "It's a tie! Both chose Rock. No winner!";
        }else{
            roundOutcome.textContent = "Something went terribly wrong.";
        }
        // Each scenario when the player chooses paper
    }else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            computerScore++;
            roundOutcome.textContent = "You lose! Scissors beat Paper.";
        }else if(computerSelection === "paper"){
            roundOutcome.textContent = "It's a tie! Both chose Paper. No winner!";
        }else if(computerSelection === "rock"){
            playerScore++;
            roundOutcome.textContent = "You win! Paper beats Rock.";
        }else{
            roundOutcome.textContent = "Something went terribly wrong.";
        }
        // Each scenario when the player chooses scissors
    }else if(playerSelection === "scissors"){
        if(computerSelection === "scissors"){
            roundOutcome.textContent = "It's a tie! Both chose Scissors. No winner!";
        }else if(computerSelection === "paper"){
            playerScore++;
            roundOutcome.textContent = "You win! Scissors beat Paper.";
        }else if(computerSelection === "rock"){
            computerScore++;
            roundOutcome.textContent = "You lose! Rock beats Scissors.";
        }else{
            roundOutcome.textContent = "Something went terribly wrong.";
        }
    }else{
        roundOutcome.textContent = "Something went terribly wrong.";
    }

    updateScore();

    // The game finishes when either the player or computer reaches 5 wins
    if(playerScore >= 5){
        alert(`Final Score
Player: ${playerScore}
Computer: ${computerScore}

Congratulations! You won the match!`);

        restart();
    }else if(computerScore >= 5){
        alert(`Final Score
Player: ${playerScore}
Computer: ${computerScore}
        
Too bad! you lost the match!`);

        restart();
    }
}// end playRound function
