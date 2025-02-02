
const options= ["rock ","paper", "scissors"];

function playGame(){
    let tempUserChoice= prompt("Enter your choice");

    let userChoice = tempUserChoice.trim(). toLowerCase();
    console.log(tempUserChoice);

    //num ---> true
    if(tempUserChoice === null || tempUserChoice === ""){
        alert("Enter Valid Input");
        playGame();
    }

    //computer choice 
    let randomIndex =Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];

    console.log("user choice",userChoice);
    console.log("computer choice", computerChoice);

    //check who won

    if(
        (userChoice ==="rock" && computerChoice=== "scissors") ||
        (userChoice === "paper" && computerChoice ===" rock")||
        (userChoice === "scissors" && computerChoice === "paper")
    ){
        alert("Congratulation... You Won");
    }else if(
        (computerChoice ==="rock" && userChoice ==="scissors") ||
        (computerChoice === "paper" && userChoice === "rock")||
        (computerChoice === "scissors" && userChoice=== "paper")
    ){
        alert("Ohooo Shitt!!.. Computer have won ,try again");
    }else{
        alert("Nice try , Its Draw");
    }
}