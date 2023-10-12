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

const container = document.querySelector(".container");
const card = document.createElement("div");

images.forEach(() => {
  const randomImg = images[Math.floor(Math.random() * images.length)];
  const image = document.createElement("img");
  image.src = `images/${randomImg}`;
  image.setAttribute("width", "400");
  image.setAttribute("height", "300");
  image.classList.add("img");
  card.append(image);
});

container.append(card);
