const randomNumber = Math.ceil(Math.random() * 100);
let numberOfGuess = 0;

const validateNumber = (value) => {
  if (isNaN(value)) {
    return "Pls enter a valid number";
  } else if (+value < 1 || +value > 100) {
    return "Pls enter a number between 1 - 100";
  }
};

const checkGuess = (guess) => {
  numberOfGuess++;
  if (guess === randomNumber) {
    console.log("You guessed correctly");
  } else if (guess < randomNumber) {
    console.log("Too low! try Again");
    play();
  } else {
    console.log("Too High! try Again");
    play();
  }
};

const play = () => {
  const number = prompt("Enter a number between 1 - 100");

  if (number === null){
    console.log("Enter a number");
    return;
  } 

  if (numberOfGuess >= 10) {
    console.log("Game Over");
    return;
  }

  const validation = validateNumber(number);
  if (validation) {
    console.log(validation);
    return play();
  }

  checkGuess(+number);
};

play();
