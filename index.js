// storing images into an array
const image_array = [
  "https://images.pexels.com/photos/13881720/pexels-photo-13881720.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/20044483/pexels-photo-20044483/free-photo-of-a-woman-laying-on-a-bed-in-a-pink-pajama.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/18262756/pexels-photo-18262756/free-photo-of-smiling-woman-carrying-basket-on-back-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/20025771/pexels-photo-20025771/free-photo-of-people-and-pattern-story.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];

// getting all html elements into js
const carousel_container = document.querySelector(".carousel-container");
const carousel_imageContainer = document.querySelector(
  ".carousel-imageContainer"
);
const right_arrow = document.querySelector(".right-arrow");
const left_arrow = document.querySelector(".left-arrow");

// IntervalID
let intervalId = null;

// current index of images
let currentIndex = 0;

// click event for right arrow button
right_arrow.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex === image_array.length) {
    currentIndex = 0;
  }
  carouselImages(currentIndex);
});

// click event for left arrow button
left_arrow.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = image_array.length - 1;
  }
  carouselImages(currentIndex);
});

// function for carousel images
function carouselImages(index) {
  clearInterval(intervalId);
  carousel_imageContainer.innerHTML = null;

  const imgTag = document.createElement("img");
  imgTag.src = image_array[index];
  imgTag.setAttribute("class", "w-full h-full");
  carousel_imageContainer.append(imgTag);
  carousel_container.append(carousel_imageContainer);

  // applying set interval
  intervalId = setInterval(function () {
    carousel_imageContainer.innerHTML = null;
    const imageTag = document.createElement("img");

    if (currentIndex === image_array.length) {
      currentIndex = 0;
    }
    imageTag.src = image_array[currentIndex];
    imageTag.setAttribute("class", "w-full h-full");
    carousel_imageContainer.append(imageTag);
    carousel_container.append(carousel_imageContainer);
    currentIndex++;
  }, 2000);
}
carouselImages(currentIndex);
