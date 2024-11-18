const inputEl = document.querySelector(".user-input");
const attemptsEl = document.querySelector(".remaining-attempts");
const checkResultBtn = document.querySelector(".check-result");
const resultEl = document.querySelector(".result");
const restartBtn = document.querySelector(".restart");

let computerGuess = Math.round(Math.random() * 100);
let attempts = 0;
let savedAttempts = [];

function guess() {
  let userGuess = Number(inputEl.value);
  if (userGuess < 1 || userGuess > 100) {
    resultEl.innerHTML = "Please enter a number between 1 and 100.";
    return;
  }
  if (attempts === 10) {
    resultEl.innerHTML = "you are out of attempts try again !!";
    return;
  }

  if (computerGuess > userGuess) {
    resultEl.innerHTML = "Your guess is low";
  } else if (computerGuess === userGuess) {
    resultEl.innerHTML = " CONGRATS !! YOUR GUESS IS RIGHT ";
    return;
  } else if (computerGuess < userGuess) {
    resultEl.innerHTML = "your guess is high";
  } else {
    resultEl.innerHTML = "Not a valid input";
  }
  if (savedAttempts.includes(userGuess)) {
    resultEl.innerHTML = "Try a different guess";
    return;
  }

  savedAttempts.push(userGuess);

  attempts++;
  attemptsEl.innerHTML = 10 - attempts;
}

function resetGame() {
  attempts = 0;
  attemptsEl.innerHTML = 10;
  inputEl.value = "";
  resultEl.innerHTML = "";
  computerGuess = Math.round(Math.random() * 100);
}
restartBtn.addEventListener("click", resetGame);
checkResultBtn.addEventListener("click", guess);
