let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Function to generate a random integer between 0 and 9
const generateTarget = () => Math.floor(Math.random() * 10);

//Function to determine which player (human or computer) wins based on which user guess closest
const compareGuesses = (humanGuess, computerGuess, secretAns) => {
    const humanFarAway = Math.abs(humanGuess - secretAns);
    const compFarAway = Math.abs(computerGuess - secretAns);
    
    if (humanGuess === computerGuess || humanFarAway === compFarAway) {
        return true;
    } else if (humanFarAway < compFarAway) {
        return true;
    } else {
        return false;
    }
}

//Function to update scoring of guessing game
const updateScore = winnerOfRound => {
    if(winnerOfRound === 'human') {
        humanScore++;
    } else if (winnerOfRound === 'computer') {
        computerScore++;
    }
}

//Function to keep count of current round
const advanceRound = () => currentRoundNumber++;