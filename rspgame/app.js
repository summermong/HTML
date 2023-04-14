const playbtn = document.querySelector(".playbtn");
const start = document.querySelector(".start");
const ing = document.querySelector(".ing");

const redbtn = document.querySelector(".redbtn");
const bluebtn = document.querySelector(".bluebtn");
const greenbtn = document.querySelector(".greenbtn");

const computerList = ["scissors", "rock", "paper"];

const userChoose = document.querySelector(".user-choose");
const computerChoose = document.querySelector(".computer-choose");
const result = document.querySelector(".result");

const userScore = document.querySelector(".user-score p");
const computerScore = document.querySelector(".computer-score p");

const endgame = document.querySelector(".endgame");
const closebtn = document.querySelector(".closebtn");
const sharebtn = document.querySelector(".sharebtn");
const endment = document.querySelector(".end h3");

/* 이미지 경로 */
const imageList = {
  scissors: "<img src='./img/scissors.png'>",
  rock: "<img src='./img/rock.png'>",
  paper: "<img src='./img/paper.png'>",
};

/* 게임 시작*/
function gameStart() {
  start.style.display = "none";
  ing.style.display = "flex";
}

playbtn.addEventListener("click", gameStart);

/* 가위바위보 */
function play(userChoice) {
  const computerChoice =
    computerList[Math.floor(Math.random() * computerList.length)];

  userChoose.innerHTML = imageList[userChoice];
  computerChoose.innerHTML = imageList[computerChoice];

  if (computerChoice === userChoice) {
    result.innerText = "비겼어요!";
  } else if (
    (computerChoice === "scissors" && userChoice === "rock") ||
    (computerChoice === "rock" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "scissors")
  ) {
    result.innerText = "이겼어요!";
    userScore.innerText = parseInt(userScore.innerText) + 1;
  } else {
    result.innerText = "졌어요!";
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
  }

  if (
    parseInt(userScore.innerText) >= 5 ||
    parseInt(computerScore.innerText) >= 5
  ) {
    endgame.style.display = "flex";
    saygoodbye();
  }
}

function saygoodbye() {
  if (parseInt(userScore.innerText) >= 5) {
    endment.innerText = "축하합니다! 당신이 승리했어요 🥳";
  } else {
    endment.innerText = "아쉽지만 컴퓨터가 승리했어요 🥺";
  }
}

function end() {
  endgame.style.display = "none";
  setTimeout("location.reload(true)", 1000);
}

function share() {
  let url = window.location.href;

  navigator.clipboard.writeText(url).then(() => {
    alert("URL이 복사되었습니다.");
  });

  endgame.style.display = "none";
  setTimeout("location.reload(true)", 1500);
}

redbtn.addEventListener("click", () => play("scissors"));
bluebtn.addEventListener("click", () => play("rock"));
greenbtn.addEventListener("click", () => play("paper"));

closebtn.addEventListener("click", end);
sharebtn.addEventListener("click", share);
