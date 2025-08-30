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



function playGame () 
{
    let humanScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll("button")

    /*
        1) Take the choice made from both computer and human
        2) Show in the console who made what choice, and whether you win or not
        3) Show the scores after each round
    */

    function playRound (humanChoice, computerChoice)
    {

        let results = document.querySelector("#results")
        let choiceDisplay = document.createElement("h2")

        choiceDisplay.textContent = `You chose ${humanChoice}. The computer chose ${computerChoice}.`
        
        results.appendChild(choiceDisplay)

        if (humanChoice == computerChoice)
        {
            console.log ("It's a tie!")
        }
        else if (humanChoice === "rock") 
        {
            switch (computerChoice)
            {
                
                case "paper":
                    console.log ("Computer wins!");
                    computerScore++;
                    break;
                
                case "scissors":
                    console.log ("You win!");
                    humanScore++;
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
                
                
                case "scissors":
                    console.log ("You win!");
                    humanScore++;
                    break;
            }
        }

        console.log (`Human: ${humanScore}   Computer: ${computerScore}`)
    }

    buttons.forEach ((btn) => 
        {
            btn.addEventListener("click", (e) => {
                let choice = e.target.textContent.toLowerCase()

                playRound (choice, getComputerChoice())
            })
        }
    )
    
    

}

playGame();