const img = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const selectImg = img[Math.floor(Math.random() * img.length)];

const wbg_img = document.createElement("img");
wbg_img.src = `img/${selectImg}`;

document.body.appendChild(wbg_img);