/*
    1) Randomly generate a number 1-3(inclusive)
    2) Return 'rock', 'paper', 'scissors' depending on number
*/

function getComputerChoice ()
{
    let num = Math.floor((Math.random() * 3)) + 1 

    switch (num) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}


/**
    1) prompt user for input (assume for now every entered choice is valid)
*/

function getHumanChoice ()
{
    let choice = window.prompt();
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

/*
    1) Take the choice made from both computer and human
    2) Show in the console who made what choice, and whether you win or not
    3) Show the scores after each round
*/

function playRound (humanChoice, computerChoice)
{
    console.log (`You chose ${humanChoice}. The computer chose ${computerChoice}.`);

    if (humanChoice === "rock") 
    {
        switch (computerChoice)
        {
            case "rock":
                console.log ("It's a tie!");
                break;
            
            case "paper":
                console.log ("You win!");
                humanScore++;
                break;
            
            case "scissors":
                console.log ("Computer wins!");
                computerScore++;
                break;
        }
    }

    else if (humanChoice === "paper") 
    {
        switch (computerChoice)
        {
            case "rock":
                console.log ("You win!");
                humanScore++;
                break;
            
            case "paper":
                console.log ("It's a tie!");
                break;
            
            case "scissors":
                console.log ("Computer wins!");
                computerScore++;
                break;
        }
    }

    else /*Scissors*/
    {
        switch (computerChoice)
        {
            case "rock":
                console.log ("Computer wins!");
                computerScore++;
                break;
            
            case "paper":
                console.log ("It's a tie!");
                break;
            
            case "scissors":
                console.log ("You win!");
                humanScore++;
                break;
        }
    }

    console.log (`Human: ${humanScore}   Computer: ${computerScore}`)
}


playRound(getHumanChoice(), getComputerChoice());