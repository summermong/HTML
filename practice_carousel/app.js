const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const carousel = document.querySelector(".carousel");
const imgWidth = document.querySelector(".carousel img").width;

let currentSlide = 1;
const maxSlice = document.querySelectorAll(".carousel div").length;

nextBtn.addEventListener("click", next);

function next() {
  carousel.appendChild(carousel.firstElementChild);
  carousel.style.transitionDuration = "500ms";
}

prevBtn.addEventListener("click", prev);

function prev() {
  carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
  carousel.style.transitionDuration = "500ms";
}
