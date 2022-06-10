
function computerPlay(){
    let chooice;
    let num = Math.floor(Math.random() * 3) + 1;
    if (num == 1){
        chooice = "Rock";
    }
        
    else if (num == 2){
        chooice = "Paper";
    }
    else {
        chooice = "Scissors";
    }
    return chooice;

 }

 function playRound (playerSelection, computerSelction){
     if (playerSelection.toLowerCase() == "rock" && computerSelction == "Scissors"){
         let x = 1;
         return "you Win Rock beats scissors";
     }
     else if  (playerSelection.toLowerCase() == "paper" && computerSelction == "Rock"){
         let x = 1;
         return "you win Paper beats rock ";
     }
     else if (playerSelection.toLowerCase() == "scissors" && computerSelction == "Paper"){
         let x = 1;
         return "you win Scissors beats Paper";
     }
     else if (playerSelection.toLowerCase() == "rock" && computerSelction == "Paper"){
         let y = 1;
         return "you Lose Paper beats Rock";
     }
     else if  (playerSelection.toLowerCase() == "paper" && computerSelction == "Scissors"){
         let y = 1;
         return "you loose Scissors beats Paper ";
     }
     else if (playerSelection.toLowerCase() == "scissors" && computerSelction == "Rock"){
         let y = 1;
         return "you Loose Rock beats Scissors";
     }
     else if (playerSelection.toLowerCase() == computerSelction.toLowerCase()){
         let x = 0;
         let y = 0;
        return "That was a tie."
     }
     else {
        let x = 0;
        let y = 0;
         return "that isn't an option"
     }
 }

 function game() {
    let player = 0;
    let computer = 0;
    for (let i = 0; i < 5; i++) {
        let playerSecection = prompt("Choose Rock, Paper, or Scissors");
        playRound(playerSecection, computerSelection);
        if (x = 1){
            player+= 1;
        }
        else if (y =1) {
            computer += 1
        }  

     }
     console.log( "Player scored " + player + " and computer scored " + computer)
     

 }


 const computerSelection = computerPlay();
 game ();



