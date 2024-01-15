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

// create a div for the place where we tell who won the round 

        let computerscore1 = document.querySelector('#computerscore1');
        let playerscore1 = document.querySelector('#playerscore1');

        playerscore1.textContent = `${playerscore}`;
        computerscore1.textContent = `${computerscore}`;


        /* WIN for player*/
        if ((playerSelection2 === "scissors" && computerSelection === "paper")||
            (playerSelection2 === "paper" && computerSelection === "rock")||
            (playerSelection2 === "rock" && computerSelection === "scissors")){
            playerscore +=1;
            playerscore1.textContent = `${playerscore}`;
            console.log(`You Win! ${playerSelection2} beats ${computerSelection}`);
            container.textContent = `You Win This Round! ${playerSelection2} beats ${computerSelection}`;


        }

        /* WIN for computer*/
        if ((playerSelection2 === "scissors" && computerSelection === "rock")||
            (playerSelection2 === "paper" && computerSelection === "scissors")||
            (playerSelection2 === "rock" && computerSelection === "paper")){
            computerscore+=1;
            computerscore1.textContent = `${computerscore}`;

            console.log(`You Lose! ${computerSelection} beats ${playerSelection2}`);
            container.textContent = `You Lose This Round! ${computerSelection} beats ${playerSelection2}`;

        }
        
        /* Tie */
        if ((playerSelection2 === "scissors" && computerSelection === "scissors")||
            (playerSelection2 === "paper" && computerSelection === "paper")||
            (playerSelection2 === "rock" && computerSelection === "rock")){
            console.log(`Tie. Redo`);
            container.textContent = `Tie this Round. Redo`;

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