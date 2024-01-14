




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

let playerscore = 0;
let computerscore = 0;

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
        playerscore +=0;
        console.log(`You Win! ${playerSelection2} beats ${computerSelection}`);
        const content1 = document.createElement('div');
        content1.textContent = `You Win This Round! ${playerSelection2} beats ${computerSelection}`;
        container.appendChild(content1);


    }

    /* WIN for computer*/
    if ((playerSelection2 === "scissors" && computerSelection === "rock")||
        (playerSelection2 === "paper" && computerSelection === "scissors")||
        (playerSelection2 === "rock" && computerSelection === "paper")){
        computerscore+=1;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection2}`);
        const content2 = document.createElement('div');
        content2.textContent = `You Lose This Round! ${computerSelection} beats ${playerSelection2}`;
        container.appendChild(content2);

    }
    
    /* Tie */
    if ((playerSelection2 === "scissors" && computerSelection === "scissors")||
        (playerSelection2 === "paper" && computerSelection === "paper")||
        (playerSelection2 === "rock" && computerSelection === "rock")){
        console.log(`Tie. Redo`);
        const content3 = document.createElement('div');
        content3.textContent = `Tie this Round. Redo`;
        container.appendChild(content3);

    }

    if (playerscore === 5){
        console.log(`PLAYER WINS GAME`);
        const content4 = document.createElement('h2');
        content4.textContent = `PLAYER WINS GAME`;
        container.appendChild(content4);
        playerscore = 0;
        computerscore = 0;
    }

    if (computerscore === 5){
        console.log(`COMPUTER WINS GAME`);
        const content5 = document.createElement('h2');
        content5.textContent = `COMPUTER WINS GAME`;
        container.appendChild(content5);
        computerscore = 0;
        playerscore = 0;
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