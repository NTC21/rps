




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

const container = document.querySelector('#container');

let btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let playerSelection2 = btn.textContent;
        console.log("player selected", playerSelection2);

        let computerSelection = getComputerChoice();
        console.log("computer selected", computerSelection);

    /* WIN for player*/
    if ((playerSelection2 === "scissors" && computerSelection === "paper")||
        (playerSelection2 === "paper" && computerSelection === "rock")||
        (playerSelection2 === "rock" && computerSelection === "scissors")){
        playerwin +=1
        console.log(`You Win! ${playerSelection2} beats ${computerSelection}`);
        const content1 = document.createElement('div');
        content1.textContent = `You Win! ${playerSelection2} beats ${computerSelection}`;
        container.appendChild(content1);


    }

    /* WIN for computer*/
    if ((playerSelection2 === "scissors" && computerSelection === "rock")||
        (playerSelection2 === "paper" && computerSelection === "scissors")||
        (playerSelection2 === "rock" && computerSelection === "paper")){
        computerwin+=1
        console.log(`You Lose! ${computerSelection} beats ${playerSelection2}`);
        const content2 = document.createElement('div');
        content2.textContent = `You Lose! ${computerSelection} beats ${playerSelection2}`;
        container.appendChild(content2);

    }
    
    /* Tie */
    if ((playerSelection2 === "scissors" && computerSelection === "scissors")||
        (playerSelection2 === "paper" && computerSelection === "paper")||
        (playerSelection2 === "rock" && computerSelection === "rock")){
        tie +=1;
        console.log(`Tie. Redo`);
        const content3 = document.createElement('div');
        content3.textContent = `Tie. Redo`;
        container.appendChild(content3);

    }

    });
});







// function singleround(playerSelection2, computerSelection){
//     // let playerSelection2 = playerSelection.toLowerCase();



//     /* WIN for player*/
//     if ((playerSelection2 === "scissors" && computerSelection === "paper")||(playerSelection2 === "paper" && computerSelection === "rock")||(playerSelection2 === "rock" && computerSelection === "scissors")){
//         playerwin +=1
//         return `You Win! ${playerSelection} beats ${computerSelection}`;
//     }

//     /* WIN for computer*/
//     if ((playerSelection2 === "scissors" && computerSelection === "rock")||(playerSelection2 === "paper" && computerSelection === "scissors")||(playerSelection2 === "rock" && computerSelection === "paper")){
//         computerwin+=1
//         return `You Lose! ${computerSelection} beats ${playerSelection}`;
//     }
    
//     /* Tie */
//     if ((playerSelection2 === "scissors" && computerSelection === "scissors")||(playerSelection2 === "paper" && computerSelection === "paper")||(playerSelection2 === "rock" && computerSelection === "rock")){
//         tie +=1;
//         return `Tie. Redo`;
//     }


// }


// function game(){
//     for(let i = 0; i <5; i++){
//         let userinput = prompt();
//         console.log(singleround(userinput, getComputerChoice()));
//         console.log(`playerscore = ${playerwin}, computerscore = ${computerwin}`)

//         if (tie!=0){
//             i-=1;
//             tie-=1;
//         }

//     }
    
//     if (playerwin>computerwin) {
//         console.log(`player wins`);
//     }
//     else {
//         console.log(`computer wins`);
//     }


//     playerwin = 0;
//     computerwin = 0;
//     tie = 0;
// }