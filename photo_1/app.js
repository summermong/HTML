function showText(number) {
    if (number === 1) {
        document.querySelector("#des1").classList.remove("hideText");
        document.querySelector("#des1").classList.add("showText");
    } else if (number === 2) {
        document.querySelector("#des2").classList.remove("hideText");
        document.querySelector("#des2").classList.add("showText");
    } else if (number === 3) {
        document.querySelector("#des3").classList.remove("hideText");
        document.querySelector("#des3").classList.add("showText");
    } else if (number === 4) {
        document.querySelector("#des4").classList.remove("hideText");
        document.querySelector("#des4").classList.add("showText");
    }
}

function hideText(number) {
    if (number === 1) {
        document.querySelector("#des1").classList.remove("showText");
        document.querySelector("#des1").classList.add("hideText");
    } else if (number === 2) {
        document.querySelector("#des2").classList.remove("showText");
        document.querySelector("#des2").classList.add("hideText");
    } else if (number === 3) {
        document.querySelector("#des3").classList.remove("showText");
        document.querySelector("#des3").classList.add("hideText");
    } else if (number === 4) {
        document.querySelector("#des4").classList.remove("showText");
        document.querySelector("#des4").classList.add("hideText");
    }
}

function alertText(number) {
    if (number === 1) {
        alert("1번째 추억! 어디서 찍었게? 😋")
    } else if (number === 2) {
        alert("2번째 추억! 얼어 죽는 줄 알았음 🥶")
    } else if (number === 3) {
        alert("3번째 추억! 두부 푸딩 맛있었어! 🍮")
    } else if (number === 4) {
        alert("4번째 추억! 바닷가는 못 참지 🌊")
    }
}