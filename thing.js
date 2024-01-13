function getComputerChoice(){
    let rand = Math.random()
    rand = Math.floor(rand* 3)

    if (rand === 0){
        return "rock";
    }
    else if(rand ===1){
        return "paper";
    }
    else if(rand ===2){
        return "scissors";
    }

}

playerwin = 0;
computerwin = 0;
tie = 0;

function singleround(playerSelection, computerSelection){
    /* */
    let playerSelection2 = playerSelection.toLowerCase();




    /* WIN for player*/
    if ((playerSelection2 === "scissors" && computerSelection === "paper")||(playerSelection2 === "paper" && computerSelection === "rock")||(playerSelection2 === "rock" && computerSelection === "scissors")){
        playerwin +=1
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    /* WIN for computer*/
    if ((playerSelection2 === "scissors" && computerSelection === "rock")||(playerSelection2 === "paper" && computerSelection === "scissors")||(playerSelection2 === "rock" && computerSelection === "paper")){
        computerwin+=1
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    
    /* Tie */
    if ((playerSelection2 === "scissors" && computerSelection === "scissors")||(playerSelection2 === "paper" && computerSelection === "paper")||(playerSelection2 === "rock" && computerSelection === "rock")){
        tie +=1;
        return `Tie. Redo`;
    }


}


function game(){
    for(let i = 0; i <5; i++){
        let userinput = prompt();
        console.log(singleround(userinput, getComputerChoice()));
        console.log(`playerscore = ${playerwin}, computerscore = ${computerwin}`)

        if (tie!=0){
            i-=1;
            tie-=1;
        }

    }
    
    if (playerwin>computerwin) {
        console.log(`player wins`);
    }
    else {
        console.log(`computer wins`);
    }


    playerwin = 0;
    computerwin = 0;
    tie = 0;
}