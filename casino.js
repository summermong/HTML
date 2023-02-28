const rangeNumber = document.querySelector(".rangeNum input");
const myNumber = document.querySelector(".myNumber input");
const playButton = document.querySelector(".playbtn");

const resultScore = document.querySelector(".result_score");
const resultText = document.querySelector(".result_text");

function gameSTART(event) {
  event.preventDefault();
  const rangeNumber_val = rangeNumber.value;
  const myNumber_val = myNumber.value;

  const computerNumber = Math.ceil(Math.random() * rangeNumber_val);

  if (rangeNumber_val < 0 || myNumber_val < 0) {
    alert("Please enter positive number");
    resultScore.innerText = "No count";
    resultText.innerText = "Retry";
  } else if (rangeNumber_val < 0 && myNumber_val < 0) {
    alert("Please enter positive number");
    resultScore.innerText = "No count";
    resultText.innerText = "Retry";
  } else if (computerNumber < myNumber_val) {
    resultScore.innerText = `You chose: ${myNumber_val}, computer chose: ${computerNumber}`;
    resultText.innerText = "You won! 💰";
  } else if (computerNumber > myNumber_val) {
    resultScore.innerText = `You chose: ${myNumber_val}, computer chose: ${computerNumber}`;
    resultText.innerText = "You lost! 💸";
  } else if (computerNumber == myNumber_val) {
    resultScore.innerText = `You chose: ${myNumber_val}, computer chose: ${computerNumber}`;
    resultText.innerText = "Draw! 🎲";
  }
}

playButton.addEventListener("click", gameSTART);