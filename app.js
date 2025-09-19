
let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");
const  msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genCompChoice = () =>{
     // rock ,Paper ,Scissors
    let options = ["rock","paper","scissors"];
    //Random Methods generat random number from 0 to 1
    const randomIdx = Math.floor(Math.random() * 3);  // (*3)to generate numbers from 0 to 2
    return options[randomIdx];
}

const drawGame = () =>{
    //console.log(" game was Draw ");
    msg.innerText = "Game was Draw Play Again"
    msg.style.backgroundColor = "#081b31";
}

const shoeWinner = (userWin , userChoice , compChoice) =>{
    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore ;
        //console.log(`You win`);
        msg.innerText = `You Win !! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++ ;
        compScorePara.innerText = compScore ;
        //console.log(`you lose`);
        msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    //console.log(`User Choice is  ${userChoice}`);
    // Computer Choice
    const compChoice = genCompChoice();
    //console.log(`Computer Choice is  ${compChoice}`);

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }else{
        let userWin = true ;
        if(userChoice === "rock"){
            // paper ,scissors
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            // scissors , rock
            userWin = compChoice === "scissors" ? false : true ;
        }else if(userChoice === "scissors"){
            // rock , paper 
            userWin = compChoice === "rock" ? false : true ;
        }
        shoeWinner(userWin , userChoice , compChoice);
    }

};


choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        //console.log("choise was Clicked",userChoice);
        playGame(userChoice);
    })
})