
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg"
];
let currentIndex = 0;
let slideshowInterval = null;
const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev-btn");        
const nextBtn = document.getElementById("next-btn");        
const startSlideshowBtn = document.getElementById("start-slideshow");
function updateImage() {
  sliderImage.classList.remove("show"); 
  setTimeout(() => {
    sliderImage.src = images[currentIndex];    
    sliderImage.classList.add("show");    
  }, 100);
}
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage(); 
});
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage(); 
});

startSlideshowBtn.addEventListener("click", () => {
  if (slideshowInterval === null) {
  
    startSlideshowBtn.textContent = "Stop Slideshow";
    slideshowInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage(); // Display the new image.
    }, 3000); 
  } else {
    clearInterval(slideshowInterval); 
    slideshowInterval = null;
    startSlideshowBtn.textContent = "Start Slideshow"; 
  }
});
updateImage();
