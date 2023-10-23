"use strict";
const display = document.querySelector("input");
const numBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtns = document.querySelectorAll(".clear");
const equal = document.querySelector(".equal");

let n1;
let n2;
let op;
let result;
let displayNum;

numBtns.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.textContent;
    displayNum = parseInt(display.value);
    if (n1) n2 = displayNum;
    if (n2) result = operate(op, n1, n2);
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    op = button.textContent;
    if (!n2) n1 = displayNum;
    display.value = "";
    if (result) {
      n1 = result;
      n2 = undefined;
    }
  });
});

clearBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "AC") {
      n1 = undefined;
      n2 = undefined;
      op = undefined;
      result = undefined;
      displayNum = undefined;
      display.value = "";
    }

    if (button.textContent === "C") {
      display.value = display.value.slice(0, -1);
      displayNum = parseInt(display.value);
      if (n2) n2 = displayNum;
      if (result) result = displayNum;
    }
  });
});

equal.addEventListener("click", () => {
  if (n1 && n2 && op) {
    result = operate(op, n1, n2);
    display.value = result;
  }
});

function operate(op, n1, n2) {
  switch (op) {
    case "+":
      return n1 + n2;
      break;
    case "-":
      return n1 - n2;
      break;
    case "x":
      return n1 * n2;
      break;
    case "÷":
      return n1 / n2;
      break;

    default:
      return;
  }
}
