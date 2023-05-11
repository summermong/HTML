const first = document.querySelector("#first");
const qna = document.querySelector("#qna");
const Showresult = document.querySelector("#Showresult");

// 다시 하기 버튼
function replay() {
  setTimeout("location.reload(true)", 800);
}

// 복사하기 버튼
function copy() {
  let nowUrl = window.location.href;

  navigator.clipboard.writeText(nowUrl).then(() => {
    alert("링크 복사 완료!");
  });
}

// 테스트 시작
function start() {
  first.style.display = "none";
  qna.style.display = "block";

  q.innerText = qnaList[0].q;
  answer[0].innerText = qnaList[0].a[0].answer;
  answer[1].innerText = qnaList[0].a[1].answer;
}

// 질문 및 답변 구현
const q = document.querySelector(".questionBox");
const answer = document.querySelectorAll(".answer");
let num = 1;

for (let i = 0; i < answer.length; i++) {
  document
    .querySelectorAll(".answer")
    [i].addEventListener("click", function () {
      if (num !== qnaList.length) {
        q.innerText = qnaList[num].q;
        answer[0].innerText = qnaList[num].a[0].answer;
        answer[1].innerText = qnaList[num].a[1].answer;
        num++;
      }
      plusStatusBar();
      calScore(i);
    });
}

// 진행바 구현
function plusStatusBar() {
  let statusBar = document.querySelector(".statusBar");
  statusBar.style.width = (100 / qnaList.length) * num + "%";
}

// 점수 계산
let question = 1;
let EI = 0;
let NS = 0;
let FT = 0;
let PJ = 0;

function calScore(ans) {
  if (question <= 3) {
    EI = ans == 0 ? ++EI : --EI;
  } else if (question <= 6) {
    NS = ans == 0 ? ++NS : --NS;
  } else if (question <= 9) {
    FT = ans == 0 ? ++FT : --FT;
  } else {
    PJ = ans == 0 ? ++PJ : --PJ;
  }
  question++;

  // 문제 수가 qnaList보다 커질 경우 결과 계산
  if (question > qnaList.length) {
    calResult(EI, NS, FT, PJ);
  }
}

function calResult(EI, NS, FT, PJ) {
  let result = "";

  if (EI > 0) {
    result += "E";
  } else {
    result += "I";
  }

  if (NS > 0) {
    result += "N";
  } else {
    result += "S";
  }

  if (FT > 0) {
    result += "F";
  } else {
    result += "T";
  }

  if (PJ > 0) {
    result += "P";
  } else {
    result += "J";
  }
  showResult(result);
}

// 결과 화면
function showResult(result) {
  qna.style.display = "none";
  Showresult.style.display = "block";

  let resultName = document.querySelector(".resultName");

  let showImg = document.createElement("img");
  let resultImg = document.querySelector(".resultImg");
  resultImg.appendChild(showImg);

  let resultDesc = document.querySelector(".resultDesc");
  let resultLike = document.querySelector(".resultLike");
  let resultHate = document.querySelector(".resultHate");
  let resultGood = document.querySelector(".resultGood");
  let resultBad = document.querySelector(".resultBad");

  for (let i = 0; i < infoList.length; i++) {
    if (result === infoList[i].mbti) {
      showImg.src = `./img/${infoList[i].img_src}`;
      showImg.style.width = "130px";
      showImg.alt = `${infoList[i].mbti}`;
      resultName.innerHTML = infoList[i].name;
      resultDesc.innerHTML = infoList[i].desc;

      resultLike.innerHTML = infoList[i].like;
      resultHate.innerHTML = infoList[i].hate;
      resultGood.innerHTML = infoList[i].good;
      resultBad.innerHTML = infoList[i].bad;
    }
  }
}
