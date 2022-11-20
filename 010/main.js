"use strict";

const question = document.getElementById("question");
const button = document.getElementById("submit-button");
const inputName = document.querySelector("#name");
const msg = document.getElementById("msg");
const textMsg = "Welcome to the site";

function isString(str) {
    return !/[0-9]/.test(str) && str.length > 1;
}

question.textContent = "What is your first name?";

button.addEventListener("click", function () {
    if (!isString(inputName.value)) return;

    msg.textContent = `${textMsg} ${
        inputName.value.charAt(0).toUpperCase() + inputName.value.slice(1)
    }!`;

    msg.style.opacity = 1;
});
