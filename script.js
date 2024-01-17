let currentRoundNumber = 1;
let humanScore = 0; 
let computerScore = 0;

function generateTarget () {  
    return Math.floor(Math.random() * 15)
}

function compareGuesses (input1, input2, target) {
    const input1diff = Math.abs(target - input1) 
    const input2diff = Math.abs(target - input2)
    if (input1diff < input2diff){ 
        return true 
    }
    return false
}

function updateScore(winner) {
    if(winner === 'human') {
        humanScore+=1
    }
    else if(winner === 'computer') {
        computerScore+=1
    }
}

function advanceRound () {
    currentRoundNumber++
}