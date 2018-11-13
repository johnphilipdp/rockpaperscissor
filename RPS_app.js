const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }else{
    return console.log('Please type a valid choice');
  }
}

function getComputerChoice(){
  randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissor';
     	break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return console.log('its a tie');
  }
  if(userChoice === 'rock' && computerChoice === 'paper'){
    return console.log('You Won!');
  }else{
    return console.log('The computer Won!');
  }
  if(userChoice === 'paper' && computerChoice === 'scissor'){
    return console.log('The computer Won!');
  }else{
    return console.log('You Won!');
  }
  if(userChoice === 'scissor' && computerChoice === 'rock'){
    return console.log('The computer Won!');
  }else{
    return console.log('You Won!');
  }
}
const playGame = () => {
  var computerChoice = getComputerChoice();
  var userChoice = getUserChoice('paper');
  console.log(`Computer choice is ${computerChoice}`);
  console.log(`User choice is ${userChoice}`);
  determineWinner(computerChoice,userChoice);
}
playGame();