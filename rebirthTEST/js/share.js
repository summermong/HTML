const url = "https://whatismypreviouslife.netlify.app/";

function setShare() {
  var resultImg = document.querySelector(".resultImg img");
  var resultAlt = resultImg.alt;
  const shareTitle = "전생 테스트";
  const shareDesc = document.querySelector(".resultName").textContent;
  const shareImage = url + "./img/" + resultAlt + ".jpeg";
  const shareURL = url + "page/result-" + resultAlt + ".html";

  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: shareTitle,
      description: shareDesc,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
      },
    },

    buttons: [
      {
        title: "결과 확인하기",
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ],
  });
}
