"use strict";

/*
Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

Test Data : console.log(num_string_range('a', "z", 2)); ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
*/

function numStringRange(start, end, step) {
    if (typeof step !== "number") throw TypeError("Step must be a number!");

    const newArray = new Array();
    step = start <= end ? step : -step;

    if (typeof start === "number" && typeof end === "number") {
        while (step > 0 ? start <= end : start >= end) {
            newArray.push(start);
            start += step;
        }
    } else if (typeof start === "string" && typeof end === "string") {
        if (start.length !== 1 || end.length !== 1)
            throw TypeError("String must be with one caracter!");

        start = start.charCodeAt();
        end = end.charCodeAt();

        while (step > 0 ? start <= end : start >= end) {
            newArray.push(String.fromCharCode(start));
            start += step;
        }
    } else throw TypeError("Only two strings or two numbers are supported!");

    return newArray;
}

// console.log("Z".charCodeAt());
// console.log(String.fromCharCode(90));

console.log(numStringRange("a", "z", 2));
console.log(numStringRange("Z", "A", 2));
console.log(numStringRange(0, -5, 1));
console.log(numStringRange(0, 25, 5));
console.log(numStringRange(20, 5, 5));
