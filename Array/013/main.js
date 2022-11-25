"use strict";

const input = document.getElementById("input");
const buttonAdd = document.querySelector(".button-add");
const buttonDisplay = document.querySelector(".button-display");
const buttonClass = document.getElementsByClassName("button");
const text = document.getElementById("text");
const items = [];

// console.log(buttonClass);

buttonAdd.addEventListener("click", function () {
    if (input.value)
        window.alert(
            `You added the number ${input.value} at position ${
                items.push(Number(input.value)) - 1
            }.`
        );
});

buttonDisplay.addEventListener("click", function () {
    let html = "";

    items.forEach((value, index, arr) => {
        html += `Element ${index} = ${value} <br />`;
    });

    text.innerHTML = html; // Inner html replace the contents of an element
});
