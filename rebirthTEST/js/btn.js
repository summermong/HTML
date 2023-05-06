// 다시 하기 버튼
const rebtn = document.querySelector(".rebtn button");
rebtn.addEventListener("click", function () {
  setTimeout("location.reload(true)", 800);
});

// 카카오 버튼
let kakaoShare = document.createElement("img");
let kakao = document.querySelector(".kakao");
kakao.appendChild(kakaoShare);
kakaoShare.src = `./img/kakaotalk.png`;
kakaoShare.style.width = "50px";
kakaoShare.alt = "kakaoShare";

// 링크 복사 버튼
let linkShare = document.createElement("img");
let link = document.querySelector(".linkcopy");
link.appendChild(linkShare);
linkShare.src = `./img/linkcopy.png`;
linkShare.style.width = "50px";
linkShare.alt = "linkShare";

linkShare.addEventListener("click", function () {
  let nowUrl = window.location.href;

  navigator.clipboard.writeText(nowUrl).then(() => {
    alert("링크 복사 완료!");
  });
});
