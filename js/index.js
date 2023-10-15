/** @format */

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpeg",
  "5.jpg",
  "6.webp",
  "7.webp",
  "8.jpeg",
  "9.jpeg",
  "10.jpg",
];

function rendomImages() {
  const randomImg = Math.floor(Math.random() * images.length);

  return images[randomImg];
}

function createImgElem(src) {
  const image = document.createElement("img");

  image.src = src;
  image.setAttribute("width", "400");
  image.setAttribute("height", "300");
  image.classList.add("img");

  return image;
}

function renderImg(images) {
  const container = document.querySelector(".container");
  const card = document.createElement("div");

  images.forEach(() => {
    const randomImg = rendomImages();
    const imageElement = createImgElem(`images/${randomImg}`);

    card.append(imageElement);
  });

  container.append(card);
}

renderImg(images);
