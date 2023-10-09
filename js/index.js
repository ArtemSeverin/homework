/** @format */
const range = document.querySelector(".input-range");
const num = document.querySelector(".input-num");
const green = document.querySelector(".green");
const red = document.querySelector(".red");

function calculateCommission(value) {
  switch (value) {
    case value < 20:
      return value * 0.02;
    case value < 50:
      return value * 0.04;
    case value < 75:
      return value * 0.06;
    default:
      return value * 0.08;
  }
}

function calculateInput() {
  const value = range.value;
  const commissionline = calculateCommission(value);

  range.value = num.value;
  num.value = value;

  red.style.height = commissionline + "px";
  green.style.height = value + "px";
}

range.oninput = calculateInput;
num.oninput = calculateInput;
