const getUserChoice = (userInput) => {
userInput = userInput.toLowerCase();
if(userInput=="rock" || userInput=="paper" || userInput=="scissors"||userInput=="bomb")
return userInput;
else
console.log("Invalid Input");
};
function getComputerChoice(){
switch(Math.floor(Math.random() * 2)){
case 0: return "rock";
        break;
case 1: return "paper";
        break;
case 2: return "scissor";
        break;
}
}
function  determineWinner(userChoice,computerChoice){
if(userChoice==computerChoice)
{
return "Game Tie!";
}
if(userChoice=="bomb")
{
return "User Wins!";
}
if(userChoice=="rock")
{
if(computerChoice=="paper")
return "Computer Won!";
else
return "User Won!"
}
if(userChoice=="paper")
{
if(computerChoice=="scissors")
return "Computer Won!";
else
return "User Won!"
}
if(userChoice=="scissors")
{
if(computerChoice=="rock")
return "Computer Won!";
else
return "User Won!"
}
}

function playGame(){
var userChoice = getUserChoice("bomb");
var computerChoice = getComputerChoice();
console.log("User choice="+userChoice);
console.log("Computers choice="+computerChoice);
console.log(determineWinner(userChoice,computerChoice));
}

playGame();
