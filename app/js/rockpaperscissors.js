////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
	var winner;
    var player = 'player';
    var comp = 'computer';
    var tie = 'Its a tie';
    switch (playerMove) {
        case 'rock':
            if (computerMove === 'scissors') {
                console.log ('player wins');
                winner = player;
            } else if (computerMove === 'paper'){
                console.log ('computer wins');
                winner = comp;
            } else if (computerMove === 'rock'){
                console.log ('Tie');
                winner = tie;
            } else {
                return 'error';
            }
            break;
		case 'scissors':
			if (computerMove === 'rock') {
					console.log ('computer wins');
			} 	else if (computerMove === 'paper') {
					console.log ('player wins');
					winner = player;
			}  	else if (computerMove === 'scissors') {
					console.log ('Tie');
					winner = tie;
			} 	else {
				return 'error';
			}
				break;
		case 'paper':
			if (computerMove==='rock'){
				console.log('player wins');
					winner = p;
			} else if (computerMove==='scissors'){
					console.log('computer wins');
					winner = computer;
			} else if (computerMove==='paper'){
					console.log('Tie') ;
					winner = tie;
			} else {
				 return 'error';
			}
	  }
}
getWinner('rock','paper');

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
	
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
	
	for (playerWins = 0, computerWins = 0;
	playerWins !==5 && computerWins !==5;) {
		
		if (getWinner() === "computer") {
			console.log("computer wins");
			computerWins = computerWins + 1;
			console.log("SCORE:" + [playerWins, computerWins]);
		}
		else if (getWinner() === "player") {
			console.log("player wins");
			playerWins = playerWins + 1;
			console.log("SCORE:" + [playerWins, computerWins]);
		}
		else {
			console.log("It was a tire. \n Score is still " + [playerWins, computerWins]);
		}
	}
	
	console.log("FINAL SCORE: ");
    return [playerWins, computerWins];
}

