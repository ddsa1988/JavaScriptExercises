"use strict";

const input = document.getElementById("input");
const buttonAdd = document.querySelector(".button-add");
const buttonDisplay = document.querySelector(".button-display");
const buttonClass = document.getElementsByClassName("button");
const text = document.getElementById("text");
const items = [];

// console.log(buttonClass);

buttonAdd.addEventListener("click", function () {
    if (input.value) items.push(Number(input.value));
});

buttonDisplay.addEventListener("click", function () {
    text.textContent = "";
    let html = "";

    items.forEach((value, index, arr) => {
        html += `Element ${index} = ${value} \n`;
    });
    text.textContent = html;
});
