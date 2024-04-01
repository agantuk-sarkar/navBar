// storing images into an array
const image_array = [
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/4469/674469-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/6362/936362-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/244/1530244-h-c05c58fd405f",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/9198/1710254439198-h",
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

const movieContainer = document.querySelector(".movie-container");

// using the same movie array by getting from localStorage
const movie_shows = JSON.parse(localStorage.getItem("movieShows"));
console.log(movie_shows);

function display(movieArray) {
  movieContainer.innerHTML = "";

  movieArray.forEach(function (ele, ind) {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "border border-blue-500");
    mainDiv.classList.add("h-60");
    mainDiv.classList.add("w-60");

    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "border border-orange-700");
    imageDiv.classList.add("h-40");

    let imgTag = document.createElement("img");
    imgTag.src = ele.image;
    imgTag.setAttribute("class", "w-full h-full");

    imageDiv.append(imgTag);

    mainDiv.append(imageDiv);
    movieContainer.append(mainDiv);
  });
}
display(movie_shows);
