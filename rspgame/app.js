/*누를 버튼*/
const btnRED = document.querySelector(".red");
const btnBLUE = document.querySelector(".blue");
const btnGREEN = document.querySelector(".green");

/*결과 반영*/
const userChoice = document.querySelector(".user-choice");
const computerChoice = document.querySelector(".computer-choice");
const result = document.querySelector(".result");

const computerList = ["가위✌🏻", "바위✊🏻", "보🖐🏻"];

/* 컴퓨터가 선택한 값을 반환하는 함수 */
function getComputerChoice() {
  return computerList[Math.floor(Math.random() * computerList.length)];
}

/* 결과를 결정하는 함수 */
function decideWinner(user, computer) {
  if (user === computer) {
    return "비겼어요!";
  } else if (
    (user === computerList[0] && computer === computerList[1]) ||
    (user === computerList[1] && computer === computerList[2]) ||
    (user === computerList[2] && computer === computerList[0])
  ) {
    return "졌어요!";
  } else {
    return "이겼어요!";
  }
}

/* 빨간버튼(가위)를 눌렀을 때*/
function userRED() {
  const user = "가위✌🏻";
  const computer = getComputerChoice();
  const winner = decideWinner(user, computer);

  userChoice.innerText = user;
  computerChoice.innerText = computer;
  result.innerText = winner;
}

/*파란버튼(바위)를 눌렀을 때*/
function userBLUE() {
  const user = "바위✊🏻";
  const computer = getComputerChoice();
  const winner = decideWinner(user, computer);

  userChoice.innerText = user;
  computerChoice.innerText = computer;
  result.innerText = winner;
}

/*초록버튼(보)를 눌렀을 때*/
function userGREEN() {
  const user = "보🖐🏻";
  const computer = getComputerChoice();
  const winner = decideWinner(user, computer);

  userChoice.innerText = user;
  computerChoice.innerText = computer;
  result.innerText = winner;
}

btnRED.addEventListener("click", userRED);
btnBLUE.addEventListener("click", userBLUE);
btnGREEN.addEventListener("click", userGREEN);
