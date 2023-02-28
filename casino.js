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

    resultScore.innerText = `You chose: ${myNumber_val}, computer chose: ${computerNumber}`;

    if (computerNumber < myNumber_val) {
        resultText.innerText = "You won! 💰"
    } else if (computerNumber >  myNumber_val) {
        resultText.innerText = "You lost! 💸"
    } else if (computerNumber ==  myNumber_val) {
        resultText.innerText = "Draw! 🎲"
    }
} 

playButton.addEventListener("click", gameSTART);

