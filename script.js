// Array containing paths to all image files for the slider.
// These paths are relative to the location of index.html.
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg"
];

// Variable to keep track of the currently displayed image's index in the 'images' array.
let currentIndex = 0;

// Variable to store the interval ID for the slideshow.
// This allows us to start and stop the automatic slideshow.
let slideshowInterval = null;

// Get references to HTML elements using their IDs.
// This is necessary to manipulate these elements with JavaScript.
const sliderImage = document.getElementById("slider-image"); // The <img> element that displays the slides.
const prevBtn = document.getElementById("prev-btn");         // The 'Previous' navigation button.
const nextBtn = document.getElementById("next-btn");         // The 'Next' navigation button.
const startSlideshowBtn = document.getElementById("start-slideshow"); // The 'Start/Stop Slideshow' button.

/**
 * Updates the displayed image in the slider.
 * It creates a fading effect by briefly hiding the current image,
 * changing its source, and then showing the new image.
 */
function updateImage() {
  // Remove the 'show' class. This triggers the CSS transition for opacity, making the image fade out.
  sliderImage.classList.remove("show"); 
  
  // Set a timeout to delay the image source change and fade-in.
  // This delay (100ms) is crucial for the fade-out effect to be visible before the image changes.
  setTimeout(() => {
    // Change the 'src' attribute of the image element to the path of the new image.
    sliderImage.src = images[currentIndex]; 
    // Add the 'show' class back. This triggers the CSS transition again, making the new image fade in.
    sliderImage.classList.add("show");    
  }, 100);
}

// Add an event listener to the 'Next' button.
// When clicked, it moves to the next image in the array.
nextBtn.addEventListener("click", () => {
  // Calculate the index for the next image.
  // The modulo operator (%) ensures that when the end of the array is reached,
  // it loops back to the first image (index 0).
  currentIndex = (currentIndex + 1) % images.length;
  updateImage(); // Call the function to display the new image.
});

// Add an event listener to the 'Previous' button.
// When clicked, it moves to the previous image in the array.
prevBtn.addEventListener("click", () => {
  // Calculate the index for the previous image.
  // The '+ images.length' part handles wrapping around from the first image to the last image
  // correctly when currentIndex becomes negative (e.g., 0 - 1 = -1).
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage(); // Call the function to display the new image.
});

// Add an event listener to the 'Start/Stop Slideshow' button.
// This toggles the automatic slideshow on and off.
startSlideshowBtn.addEventListener("click", () => {
  // Check if there is an active slideshow interval (i.e., slideshowInterval is not null).
  if (slideshowInterval === null) {
    // If no slideshow is active, start one.
    startSlideshowBtn.textContent = "Stop Slideshow"; // Change button text to 'Stop Slideshow'.
    // Set up an interval that will call a function repeatedly every 3000 milliseconds (3 seconds).
    slideshowInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length; // Move to the next image.
      updateImage(); // Display the new image.
    }, 3000); // 3000ms = 3 seconds delay between slides.
  } else {
    // If a slideshow is currently active, stop it.
    clearInterval(slideshowInterval); // Clear the interval to halt the automatic image changes.
    slideshowInterval = null; // Reset the slideshowInterval variable.
    startSlideshowBtn.textContent = "Start Slideshow"; // Change button text back to 'Start Slideshow'.
  }
});

// Initial call to updateImage() when the page first loads.
// This ensures that the first image is displayed correctly from the start.
updateImage();