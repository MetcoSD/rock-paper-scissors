
function computerPlay(){
    let chooice;
    let num = Math.floor(Math.random() * 3) + 1;
    console.log(num);
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
console.log(computerPlay())




