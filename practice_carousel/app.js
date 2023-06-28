const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const carousel = document.querySelector(".carousel");
const imgWidth = document.querySelector(".carousel img").width;

let currentSlide = 1;
const maxSlice = document.querySelectorAll(".carousel div").length;

nextBtn.addEventListener("click", next);

function next() {
  if (currentSlide >= maxSlice) {
    currentSlide = 0;
  }
  carousel.style.transform = `translateX(-${imgWidth * currentSlide}px)`;
  currentSlide++;
}

prevBtn.addEventListener("click", prev);

function prev() {
  if (currentSlide === 1) {
    currentSlide = maxSlice;
  } else {
    currentSlide--;
  }
  carousel.style.transform = `translateX(-${imgWidth * (currentSlide - 1)}px)`;
}
