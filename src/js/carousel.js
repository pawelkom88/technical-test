
export default function moveToNextSlide() {
  const slides = Array.from(document.querySelectorAll(".carousel-item"));
  let currentSlide = 0;
  const numOfSlides = slides.length;
  
  if (currentSlide == numOfSlides) {
    currentSlide = 0;
  }

  updateSlidePosition();
  currentSlide++;
}

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item__visible");
  }
  slides[currentSlide].classList.add("carousel-item__visible");
}
