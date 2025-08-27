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
    return choice;
}

let humanScore = 0;
let computerScore = 0;


