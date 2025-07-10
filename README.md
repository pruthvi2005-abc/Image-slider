# Image Slider Project

This is an image slider project featuring a prominent heading, navigation buttons, a slideshow toggle, and a customizable background image.

## Project Structure

Image_Slider_Project_Updated/
├── images/
│   ├── img1.jpg
│   ├── img2.jpg
│   ├── img3.jpg
│   ├── img4.jpg
│   ├── img5.jpg
│   └── background.jpg  <-- Your custom background image goes here!
├── index.html
├── style.css
├── script.js
└── README.md


* `index.html`: The main HTML file that structures the web page, including the "Image Slider" heading and the slider container.
* `style.css`: Contains all the CSS rules for styling the page, the heading, and the image slider. This is where the background image for the `body` is set.
* `script.js`: Implements the JavaScript logic for the image slider's functionality, such as changing images, handling navigation buttons, and controlling the slideshow.
* `images/`: This directory *must* contain all the image files used in the slider (`img1.jpg`, `img2.jpg`, `img3.jpg`, `img4.jpg`, `img5.jpg`) and your custom background image (`background.jpg`).

## How to Run and Use the Image Slider

Follow these steps to get the image slider up and running on your local machine:

1.  **Download and Extract:**
    * Download the `.zip` file containing this project.
    * Extract the contents to a folder on your computer (e.g., `Image_Slider_Project_Updated`).

2.  **Add Your Background Image:**
    * Navigate into the extracted `Image_Slider_Project_Updated` folder.
    * Go into the `images/` subfolder.
    * **Place your desired background image file inside this `images/` folder.**
    * **Important:** Rename your background image file to `background.jpg` if it has a different name, or update the `url('images/background.jpg')` path in `style.css` to match your image's filename.

3.  **Open `index.html`:**
    * Go back to the main `Image_Slider_Project_Updated` directory.
    * Locate the `index.html` file.
    * Double-click `index.html` to open it in your preferred web browser (e.g., Chrome, Firefox, Edge).

## Usage

Once the `index.html` file is open in your browser, you will see:

* A prominent "Image Slider" heading centered at the top of the page, displayed over your chosen background image.
* Below the heading, the image slider will display the first image.
* **Navigation Buttons:**
    * Click the `&#10094;` (left arrow) button to go to the previous image.
    * Click the `&#10095;` (right arrow) button to go to the next image.
* **Slideshow Toggle Button:**
    * Click the "Start Slideshow" button to automatically cycle through the images every 3 seconds.
    * Click the button again (which will now say "Stop Slideshow") to pause the auto