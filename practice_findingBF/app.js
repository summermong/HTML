const lovers = [
  { src: "1.jpeg", name: "이준혁" },
  { src: "2.jpeg", name: "차은우" },
  { src: "3.jpeg", name: "최수빈" },
  { src: "4.jpeg", name: "정재현" },
  { src: "5.jpeg", name: "도경수" },
  { src: "6.jpeg", name: "김영훈" },
  { src: "7.jpeg", name: "이민혁" },
];

const btns = document.querySelector(".btns");
const board = document.querySelector(".board");
const h2 = document.querySelector("h2");

const result = document.createElement("p");
result.className = "result";
const image = document.createElement("img");
image.className = "lover";

var selectLoverId;
function selectLover() {
  let i = 0;
  selectLoverId = setInterval(() => {
    image.src = `./lovers/${lovers[i].src}`;
    result.innerHTML = `당신은 ${lovers[i].name}과(와) 사귀게 되었습니다!`;
    h2.innerHTML = `아 ${lovers[i].name}?`;

    if (i >= lovers.length - 1) {
      i = 0;
    } else {
      i += 1;
    }
  }, 40);
}

function start() {
  board.appendChild(image);
  board.appendChild(result);

  selectLover();
}

function stop() {
  clearInterval(selectLoverId);
}
