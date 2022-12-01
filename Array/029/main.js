"use strict";

/*
Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

Test Data : console.log(num_string_range('a', "z", 2)); ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
*/

function numStringRange(start, end, step) {
    if (typeof step !== "number") throw "Step must be a number!";

    step = start < end ? step : -step;
    console.log(step);

    const newArray = new Array();
}

console.log("Z".charCodeAt());
console.log(String.fromCharCode(90));

numStringRange("Z", "A", 2);
