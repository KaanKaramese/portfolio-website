const navBtn = document.querySelector('#navBtn');
const section2 = document.querySelector('.section2');
const buttonsWrapper = document.querySelector(".map");
const mapButtons = document.querySelectorAll(".map button");
const slides = document.querySelector(".inner");
const prevSlide = document.querySelector('#prevBtn');
const nextSlideBtn = document.querySelector('#nextBtn');
let currentSlide = 0;
let timeoutId;
const slideCount = 2;

function nextSlide() {
  if (currentSlide < slideCount) {
    currentSlide++;
  }
  else{
    currentSlide = 0;
  }
  if (mapButtons[0].classList.contains("active")) {
    slides.style.transform = "translateX(-33.33333333333333%)";
  }
  else if (mapButtons[1].classList.contains("active")) {
    slides.style.transform = 'translatex(-66.6666666667%)';
  }
  else if (mapButtons[2].classList.contains("active")) {
    slides.style.transform = "translateX(-0%)";
  }
  // update active button
  Array.from(mapButtons).forEach((item, index) => {
    if (currentSlide === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  setTimeout(nextSlide, 5000);
}

timeoutId = setTimeout(nextSlide, 5000);

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      currentSlide = 0;
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      currentSlide = 1;
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      currentSlide = 2;
      slides.style.transform = 'translatex(-66.6666666667%)';
      e.target.classList.add('active');
    }
  }
});

prevSlide.addEventListener("click", e => {
  if (e.target.nodeName === "IMG") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    currentSlide --;
  }
})

nextSlideBtn.addEventListener("click", e => {
  nextSlide();
  clearTimeout(timeoutId);
  console.log(currentSlide);
})

navBtn.addEventListener('click', function() {
  section2.scrollIntoView({ behavior: 'smooth' });
});