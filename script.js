"use strict";

const calculator = document.querySelector(".calculator");
const themeSwitchBtn = document.querySelector(".toggle_label");
const inputAnswer = document.querySelector(".answer");
const inputQuery = document.querySelector(".query");
const wrapper = document.querySelector(".wrapper");
const checkbox = document.querySelector(".toggle_input");

const calcResult = (prob) => eval(prob);
const clearInputs = (parentEl) => (parentEl.value = "");

wrapper.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn");
  if (!clicked) return;
  inputQuery.value += clicked.value;

  document.querySelector(".equal-sign").addEventListener("click", function () {
    try {
      inputAnswer.value = calcResult(inputQuery.value);
    } catch (err) {
      inputAnswer.value = "SyntaxError";
    }
  });
});

document.querySelector(".clear-btn").addEventListener("click", function () {
  inputAnswer.value = inputQuery.value = "";
});

document.querySelector(".del-btn").addEventListener("click", function () {
  inputQuery.value = inputQuery.value.slice(0, -1);
});

const switchTheme = () => {
  document.documentElement.style.setProperty("--color-primary", "#ddd");
  document.querySelector(".title").style.color = "#0a0a23";
};

themeSwitchBtn.addEventListener("click", function () {
  if (!checkbox.checked) {
    switchTheme();
  } else {
    document.documentElement.style.removeProperty("--color-primary", "#fff");
    document.querySelector(".title").style.color = "#ddd";
  }
});
