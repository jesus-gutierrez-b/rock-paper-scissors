// This was the first script used to replicate the rock, paper, scissors game with javascript only,
// now, this code is not in use anymore

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

            if(playerSelection === "rock"){
                if(computerSelection === "scissors"){
                    // return "rs";
                    return "You win! Rock beats Scissors.";
                }else if(computerSelection === "paper"){
                    // return "rp";
                    return "You lose! Paper beats Rock.";
                }else if(computerSelection === "rock"){
                    // return "rr";
                    return "It's a tie! Both chose 'Rock'. No winner!";
                }else{
                    return "Something went terribly wrong.";
                }
            }else if(playerSelection === "paper"){
                if(computerSelection === "scissors"){
                    // return "ps";
                    return "You lose! Scissors beat Paper.";
                }else if(computerSelection === "paper"){
                    // return "pp";
                    return "It's a tie! Both chose 'Paper'. No winner!";
                }else if(computerSelection === "rock"){
                    // return "pr";
                    return "You win! Paper beats Rock.";
                }else{
                    return "Something went terribly wrong.";
                }
            }else if(playerSelection === "scissors"){
                if(computerSelection === "scissors"){
                    // return "ss";
                    return "It's a tie! Both chose 'Scissors'. No winner!";
                }else if(computerSelection === "paper"){
                    // return "sp";
                    return "You win! Scissors beat Paper.";
                }else if(computerSelection === "rock"){
                    // return "sr";
                    return "You lose! Rock beats Scissors.";
                }else{
                    return "Something went terribly wrong.";
                }
            } else{
                return "Something went terribly wrong.";
            }
        }// end playRound function

        function game(){
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
        }// end game
