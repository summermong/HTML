const rangeNumber = document.querySelector(".rangeNum input");
const myNumber = document.querySelector(".myNumber input");
const playButton = document.querySelector(".playbtn");

const resultScore = document.querySelector(".result_score");
const resultText = document.querySelector(".result_text");

function gameSTART(event) {
  event.preventDefault();
  const rangeNumber_val = rangeNumber.value;
  const myNumber_val = myNumber.value;

  const RANGENUMBER = parseInt(rangeNumber_val);
  const MYNUMBER = parseInt(myNumber_val);

  const computerNumber = Math.ceil(Math.random() * rangeNumber_val);
  const COMPUTERNUMBER = parseInt(computerNumber);

  if (RANGENUMBER < 0) {
    alert("Please enter correct number!");
  } else if (MYNUMBER > RANGENUMBER) {
    alert("Please enter correct number!");
  } else if (MYNUMBER == COMPUTERNUMBER) {
    resultScore.innerText = `You chose: ${MYNUMBER}, computer chose: ${COMPUTERNUMBER}`;
    resultText.innerText = "You won! 💰";
  } else if (MYNUMBER !== COMPUTERNUMBER) {
    resultScore.innerText = `You chose: ${MYNUMBER}, computer chose: ${COMPUTERNUMBER}`;
    resultText.innerText = "You lost! 💸";
  }
}

playButton.addEventListener("click", gameSTART);