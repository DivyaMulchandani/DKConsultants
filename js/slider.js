const slider = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider-item");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % sliderItems.length;
  updateSlider();
});

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
  updateSlider();
});
