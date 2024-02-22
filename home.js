/**let slider = document.querySelector('.slider');
let images = document.querySelectorAll('.slider img');

let currentIndex = 0;
let totalImages = images.length;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider();
}

function updateSlider() {
  let offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

// Automatically advance slides every 3 seconds
setInterval(nextSlide, 3000);
**/