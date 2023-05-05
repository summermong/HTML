const first = document.querySelector("#first");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 11;

let ei = 0;
let ns = 0;
let ft = 0;
let pj = 0;

function showResult() {
  qna.style.display = "none";
  result.style.display = "block";

  let resultName = document.querySelector(".resultName");
  resultName.innerHTML = infoList[0].name;

  let showImg = document.createElement("img");
  let resultImg = document.querySelector(".resultImg");
  showImg.src = "./img/enfp.jpeg";
  showImg.style.width = "150px";
  resultImg.appendChild(showImg);

  let resultDesc = document.querySelector(".resultDesc");
  resultDesc.innerHTML = infoList[0].desc;

  let resultLike = document.querySelector(".resultLike");
  resultLike.innerHTML = infoList[0].like;

  let resultHate = document.querySelector(".resultHate");
  resultHate.innerHTML = infoList[0].hate;

  let resultGood = document.querySelector(".resultGood");
  resultGood.innerHTML = infoList[0].good;

  let resultBad = document.querySelector(".resultBad");
  resultBad.innerHTML = infoList[0].bad;
}

// 답변 개수 구현
function answerAdd(answerText, qNum, aNum) {
  let a = document.querySelector(".answerBox");
  let answer = document.createElement("button");
  a.appendChild(answer);

  answer.classList.add("answerList");
  answer.classList.add("my-3");
  answer.classList.add("py-3");
  answer.classList.add("px-3");
  answer.classList.add("mx-auto");

  answer.innerHTML = answerText;

  answer.addEventListener("click", function () {
    let children = document.querySelectorAll(".answerList");
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;
      children[i].style.display = "none";
    }
    questionAdd(++qNum);
  });
}

// 질문 & 진행 상태 바 구현
function questionAdd(qNum) {
  if (qNum > endPoint) {
    showResult();
    return;
  }

  let q = document.querySelector(".questionBox");
  q.innerHTML = qnaList[qNum].q;
  for (let i in qnaList[qNum].a) {
    answerAdd(qnaList[qNum].a[i].answer, qNum, i);
  }

  let statusBar = document.querySelector(".statusBar");
  statusBar.style.width = (100 / endPoint) * qNum + "%";
}

// 테스트 시작
function start() {
  first.style.display = "none";
  qna.style.display = "block";
  let qNum = 0;
  questionAdd(qNum);
}
