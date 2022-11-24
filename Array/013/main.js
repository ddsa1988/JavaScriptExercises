"use strict";

const input = document.getElementById("input");
const buttonAdd = document.querySelector(".button-add");
const buttonDisplay = document.querySelector(".button-display");
const buttonClass = document.getElementsByClassName("button");
const items = [];

// console.log(buttonClass);

buttonAdd.addEventListener("click", function () {
    if (input.value) items.push(Number(input.value));
    // console.log(items);
});

buttonDisplay.addEventListener("click", function () {
    items.forEach((value, index, arr) => {
        console.log(`Element ${index} =  ${value}`);
    });
});
