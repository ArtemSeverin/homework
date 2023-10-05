/** @format */
const inputs = document.querySelectorAll(".input");
const textarea = document.querySelector(".textarea");

function textTextarea() {
  const values = [...inputs].map((input) => input.value);
  const text = values.join(", ");

  textarea.value = text;
}

setInterval(textTextarea, 5000);
// console.log(input);
// console.log(textarea);
