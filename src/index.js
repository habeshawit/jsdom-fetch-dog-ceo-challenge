console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", function () {
  loadImages();
});

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then((res) => res.json())
    .then((results) => {
      results.message.forEach((image) => addImage(image));
    });
}

function addImage(dogPicUrl) {
  let container = document.querySelector("#dog-image-container");
  let newImageDog = document.createElement("img");
  newImageDog.src = dogPicUrl;
  container.appendChild(newImageDog);
}
