const xMas = document.querySelector("h1#xmas");
xMas.innerText = "Until Christmas 🧑🏻‍🎄 ";

const dDay = document.querySelector("h2#dday");

function dDAY() {
    const Christmas = new Date("2023-12-25");
    const now = new Date();
    const cir = Christmas - now;

    const cirday = Math.floor(cir / (1000 * 60 * 60 * 24));
    const cirhours = Math.floor(cir / (1000 * 60 * 60) % 24 );
    const cirminutes = Math.floor(cir / (1000 * 60) % 60);
    const cirseconds = Math.floor(cir / 1000 % 60);

    dDay.innerText = `크리스마스까지 ${cirday}일 ${cirhours}시 ${cirminutes}분 ${cirseconds}초 남았습니다! `

}

dDAY();
setInterval(dDAY, 1000);
