"use strict";

const question = document.getElementById("question");
const button = document.getElementById("submit-button");
const inputName = document.querySelector("#name");
const msg = document.getElementById("msg");
const textMsg = "Welcome to the site";

function isString(str) {
    return !/[0-9]/.test(str) && str.length > 1;
}

function toCapitalize(str) {
    if (!(typeof str === "string")) return;

    const words = str.trim().split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] =
            words[i].charAt(0).toUpperCase() +
            words[i].slice(1).toLocaleLowerCase();
    }

    return words.join(" ");
}

question.textContent = "What is your full name?";

button.addEventListener("click", function () {
    if (!isString(inputName.value)) return;

    msg.textContent = `${textMsg} ${toCapitalize(inputName.value)}!`;

    msg.style.background = "gray";
    msg.style.opacity = 1;
});
