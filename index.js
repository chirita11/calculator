"use strict";

const activeScreen = document.querySelector(".activescreen");
const inActiveScreen = document.querySelector(".inactivescreen");
const buttons = document.querySelectorAll(".button");
const digits = [];

function update() {
  activeScreen.innerText = digits.join("") || 0;
  inActiveScreen.innerText = eval(digits.join("")) || 0;
}

function toNormal() {
  activeScreen.classList.add("activescreen");
  activeScreen.classList.remove("inactivescreen");
  inActiveScreen.classList.remove("activescreen");
  inActiveScreen.classList.add("inactivescreen");
}

function showResult() {
  activeScreen.classList.remove("activescreen");
  activeScreen.classList.add("inactivescreen");
  inActiveScreen.classList.add("activescreen");
  inActiveScreen.classList.remove("inactivescreen");
  digits[0] = eval(digits.join("")) || "";
  digits.length = 1;
}

function clearResult() {
  digits.length = 0;
  activeScreen.innerText = 0;
  inActiveScreen.innerText = 0;
}

function removeDigits() {
  digits.pop();
  update();
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (activeScreen.classList.contains("inactivescreen")) toNormal();
    if (e.target.innerText == "=") return showResult();
    if (e.target.innerText == "del") return removeDigits();
    if (e.target.innerText == "C") return clearResult();
    digits.push(e.target.innerText);
    update();
  });
});
