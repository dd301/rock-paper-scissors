let computerWinCount = 0;
let playerWinCount = 0;

// returns Rock, Paper or Scissors randomly
    
function computerPlay(){
    let random = Math.random();
    if (random >= 0 && random < 0.33){
        return "Rock";
    }
    else if(random >= 0.33 && random <0.66){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}                       
        
    function playRound(playerSelection, computerSelection){
        
        function capitalize(string){
            if (string !== null || undefined){
                newString = string.charAt(0).toUpperCase() + 
                string.slice(-(string.length-1)).toLowerCase();
                return newString;
            }
            else{
                return "Oops, something went wrong."
            }
        }

        playerSelection = capitalize(playerSelection);
        computerSelection = capitalize(computerSelection);
            
            
        
        if (playerSelection==="Rock" && computerSelection === "Paper"){
            computerWinCount += 1;
            return ("You lose! Paper beats Rock");
        }
        else if (playerSelection==="Paper" && computerSelection==="Rock"){
            playerWinCount += 1;
            return ("You win! Paper beats Rock");
        }
        else if (playerSelection==="Paper" && computerSelection==="Scissors"){
            computerWinCount += 1;
            return ("You lose! Scissors beats Paper");
        }
        else if (playerSelection==="Paper" && computerSelection==="Paper"){
            return ("Tie.");
        }
        else if (playerSelection==="Rock" && computerSelection==="Rock"){
            return ("Tie.");
        }
        else if (playerSelection==="Scissors" && computerSelection==="Scissors"){
            return ("Tie.");
        }
        else if (playerSelection==="Rock" && computerSelection==="Scissors"){
            playerWinCount += 1;
            return ("You win! Rock beats Scissors");
        }
        else if (playerSelection==="Scissors" && computerSelection==="Paper"){
            playerWinCount += 1;
            return ("You win! Scissors beats Paper");
        }
        else if (playerSelection==="Scissors" && computerSelection==="Rock"){
            computerWinCount += 1;
            return "You lose! Rock beats Scissors";
        }
        else{
            return "Oops. Something went wrong.";
        }
    }
    
    const results = document.querySelector('#results');
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', ()=>{
        playerSelection = "Rock";
        const resultText = playRound(playerSelection, computerPlay());
        results.innerHTML += "<p>"+resultText+"</p>";
        winCount();
    });

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', ()=>{
        playerSelection = "Paper";
        const resultText = playRound(playerSelection, computerPlay());
        results.innerHTML += "<p>"+resultText+"</p>";
        winCount();
    });

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', ()=>{
        playerSelection = "Scissors";
        const resultText = playRound(playerSelection, computerPlay());
        results.innerHTML += "<p>"+resultText+"</p>";
        winCount();
    });

    function winCount(){ 
        if (playerWinCount==5){
            results.innerHTML += "You won the game!";
        }    
        else if (computerWinCount==5){
            results.innerHTML += "You lost the game.";
        }
    }

