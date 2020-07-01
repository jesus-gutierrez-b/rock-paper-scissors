// Code for the rock, paper, scissors game with GUI

let playerScore = 0;
let computerScore = 0;

const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerSel = document.getElementById("playerSelection");
const computerSel = document.getElementById("computerSelection"); 
const roundOutcome = document.getElementById("outcome");

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

function restart(){
    playerScore = 0;
    computerScore = 0;
    updateScore();
    playerSel.src = "";
    computerSel.src = "";
    roundOutcome.textContent = "";    
}

function updateScore(){
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;
}

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

function playRound(playerSelection = "rock", computerSelection = "rock"){
    playerSelection = playerSelection.toLocaleLowerCase();
    computerSelection = computerSelection.toLocaleLowerCase();

    computerSel.src = `images/${computerSelection}.jpeg`;
    
    if(playerSelection === "rock"){
        if(computerSelection === "scissors"){
            playerScore++;
            roundOutcome.textContent = "You win! Rock beats Scissors.";
        }else if(computerSelection === "paper"){
            computerScore++;
            roundOutcome.textContent = "You lose! Paper beats Rock.";
        }else if(computerSelection === "rock"){
            roundOutcome.textContent = "It's a tie! Both chose 'Rock'. No winner!";
        }else{
            roundOutcome.textContent = "Something went terribly wrong.";
        }
    }else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            computerScore++;
            roundOutcome.textContent = "You lose! Scissors beat Paper.";
        }else if(computerSelection === "paper"){
            roundOutcome.textContent = "It's a tie! Both chose 'Paper'. No winner!";
        }else if(computerSelection === "rock"){
            playerScore++;
            roundOutcome.textContent = "You win! Paper beats Rock.";
        }else{
            roundOutcome.textContent = "Something went terribly wrong.";
        }
    }else if(playerSelection === "scissors"){
        if(computerSelection === "scissors"){
            roundOutcome.textContent = "It's a tie! Both chose 'Scissors'. No winner!";
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

/*function game(){
    let playerScore = 0;
    let computerScore = 0;
    
    let playerSelection;
    let computerSelection;
    let roundOutcome;

    for(let count = 0; count < 5; count++){
        playerSelection = prompt("Choose ur play: rock, paper or scissors.", "rock");
        computerSelection = computerPlay();

        roundOutcome = playRound(playerSelection, computerSelection);

        if(roundOutcome.indexOf("tie") >= 0){
            console.log(`${roundOutcome} 
Player: ${playerScore}
Computer: ${computerScore}`);
        } else if(roundOutcome.indexOf("win") >= 0){
            playerScore++;
            console.log(`${roundOutcome} 
Player: ${playerScore}
Computer: ${computerScore}`);
        } else if(roundOutcome.indexOf("lose") >= 0){
            computerScore++;
            console.log(`${roundOutcome} 
Player: ${playerScore}
Computer: ${computerScore}`);
        } else{
            console.log(roundOutcome);    
        }
    } //end for

    if(playerScore > computerScore){
        console.log(`Congratulations! You won!

Final score:
Player: ${playerScore}
Computer: ${computerScore}`);
    } else if(playerScore < computerScore){
        console.log(`Too bad! You lost!

Final score:
Player: ${playerScore}
Computer: ${computerScore}`);
    } else{
        console.log(`It's a draw!

Final score:
Player: ${playerScore}
Computer: ${computerScore}`);
    } 
}// end game */
