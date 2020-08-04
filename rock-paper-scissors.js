//Gather user input
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ){
    return userInput;
  } else {
    console.log('Error, please type: rock, paper or scissors.');
  }
}
//Have the computer choose a random number
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  //Assign number to an answer
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game was a tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer wins';
    } else {
      return 'You win!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You win!';
    } else {
      return 'The computer wins';
    } 
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'The computer wins';
    } else {
      return 'You win!';
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: '+ userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();