const contactUsBtn = document.getElementById("contactUsBtn");
const popupContainer = document.getElementById("popupContainer");
const image = document.getElementById("image");
const firstImage = document.getElementById("firstImage");
const secondImage = document.getElementById("secondImage");
const thirdImage = document.getElementById("thirdImage");

function setImage(img) {
  switch (img) {
    case "image1":
      image.src = "./images/image.png";
      firstImage.classList = "image-button-container active";
      secondImage.classList = "image-button-container inactive";
      thirdImage.classList = "image-button-container inactive";

      break;
    case "image2":
      image.src = "./images/1.png";
      firstImage.classList = "image-button-container inactive";
      secondImage.classList = "image-button-container active";
      thirdImage.classList = "image-button-container inactive";
      break;
    case "image3":
      image.src = "./images/2.png";
      firstImage.classList = "image-button-container inactive";
      secondImage.classList = "image-button-container inactive";
      thirdImage.classList = "image-button-container active";
      break;
    default:
      break;
  }
}

contactUsBtn.addEventListener("click", () => {
  popupContainer.style.display = "block";
});

function scrollCards(direction) {
  const sliderImages = document.getElementById("sliderImages");
  const image = document.querySelectorAll(".image-container");
  const imageSize = image[0].offsetWidth;
  if (direction === "left") {
    sliderImages.scrollLeft -= imageSize;
  } else if (direction === "right") {
    sliderImages.scrollLeft += imageSize;
  }
}
